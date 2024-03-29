---
title: 'Sending specific traffic over VPN using VyOS'
description: 'Want to use your router to send network traffic over a VPN connection, but you don’t want all of your traffic using the VPN? With VyOS, this is easy to setup using Policy Based Routing.'
pubDate: '2020-03-19'
heroImage: './vyos-vpn-traffic/cover.png'
---

Want to use your router to send network traffic over a VPN connection, but you don’t want all of your traffic using the VPN? With VyOS, this is easy to setup using Policy Based Routing.

First, some context. Recently I switched my homelab routing from pfSense to VyOS. In the migration, I got almost everything working just like before, with the exception of my rule based PIA setup. So this guide is going to be an explanation of my approach to this problem in VyOS.

# The objective

The goal of this is quite simple. I want to be able to choose which devices (or VMs) on my network have their traffic sent over VPN. Due to a connection limit in PIA, these all need to go over a single VPN connection. The primary method for choosing which traffic goes over VPN would be by the IP address of the local device/VM.

# The previous setup

In pfSense, I had this solution set up using firewall rules and an IP list that i had named PIA-ONLY. The rules went something along the lines of this.

1. If in the PIA-ONLY list, send this traffic to the PIA VPN gateway.
2. Block any traffic in the PIA-ONLY list. This ensures that this traffic does not go over the regular internet connection if the VPN gateway is down.
3. Send all remaining traffic over the regular internet connection

This solution worked rather effectively, and I had been using this setup happily for quite a while. The original guide I used for this can be found on [MonsterMuffin’s blog](https://blog.monstermuffin.org/tunneling-specific-traffic-over-a-vpn-with-pfsense/). The post is quite old now, but it is still a working solution, so I would recommend looking at that if you are using pfSense.

# The VyOS approach

VyOS has a feature called Policy Based Routing. To summarise, this lets you have a collection of different routing tables, and send certain traffic to different routing tables based on policies.

In this guide, I will be using PIA as my VPN provider of choice, but this solution should work for any VPN provider that can be connected to using OpenVPN. 

Other VPN protocols such as WireGuard will also work, I just won’t be covering the setup process here.

# Setting up the OpenVPN interface

With PIA OpenVPN, you need to download the CA Cert File, and save this as a file in VyOS. You can do this either by editing the file and pasting in the data, or by copying it in using something like scp.

The certificates can be found through [this page on their site](https://www.privateinternetaccess.com/pages/client-support/).

You will also need your PIA username and password.

The openvpn config should look something like this:

```
openvpn vtun0 {
     authentication {
         password <your username here>
         username <your password here>
     }
     device-type tun
     encryption {
         cipher aes128
     }
     hash sha1
     mode client
     openvpn-option "--cipher aes-128-cbc"
     openvpn-option --fast-io
     openvpn-option --route-noexec
     persistent-tunnel
     protocol udp
     remote-host france.privateinternetaccess.com
     remote-port 1198
     tls {
         ca-cert-file /config/auth/ca.crt
     }
     use-lzo-compression
 }
```

Substitute in the appropriate remote host, and cert file locations to match your config.
The main thing to note here that caught me out for quite a while is the openvpn option `--route-noexec`. This ensures that this OpenVPN config doesn’t generate any routes for you, letting you have full control. When I set this up without it, I found it trying to redirect all my traffic over the interface by default.

You should then add NAT and firewall rules to let your traffic use this interface. You can test this setup using ping and the `-I <interface>` flag, specifying your new interface as the interface for ping. The NAT and firewall rules for this should look the same as your WAN rules, if not identical. For my setup I am using zone based firewall rules, so I simply added it to my WAN zone.

# Routing the traffic over your vpn interface
For this section, it doesn’t matter what sort of interface you are sending traffic over, so will be the same for other VPN connections such as WireGuard.

The first step is to make a new routing table that will be specifically for routing traffic over your new interface. The config should look something like the following. In this example `vtun0` is my OpenVPN interface name.

```
table 11 {
     interface-route 0.0.0.0/0 {
         next-hop-interface vtun0 {
         }
     }
 }
```

The next step is to add an address group which you want to send over VPN, the docs for this can be found here, and an example below.

```
address-group PIA-ONLY {
   address 10.27.2.11
}
```

The next step is to combine these 2 items with a routing policy. To summarise, the policy will set the routing table of any addresses in the address group to the table defined earlier. This can be seen below.

```
route PIA {
     description "Send PIA only traffic to PIA routing table"
     rule 11 {
         set {
             table 11
         }
         source {
             group {
                 address-group PIA-ONLY
             }
         }
     }
 }
```

The final step is to assign this policy to an interface. In my case it is the LAN interface, but it could be another interface, such as a guest network. You can see an example below.

```
vif 1000 {
     address 10.27.0.1/22
     description LAN
     policy {
         route PIA
     }
 }
```

# Final Notes
If you followed the above, you should now have the result I was aiming for, and any traffic coming from the IPs in the address group will now go over your VPN connection.

While this setup shows how to direct traffic based on IP, you can use other methods of filtering by adding the appropriate rules to the routing policy created in this guide.

As usual, my timing was questionable with this, as the day after I set this up as an OpenVPN connection, PIA announced [beta testing](https://www.privateinternetaccess.com/blog/private-internet-access-announces-wireguard-vpn-beta/) for WireGuard connection. I’ll probably switch the setup to that when it is out of beta.

