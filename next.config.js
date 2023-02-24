const oldPostRedirects = [
  {
    source: "/2021/01/debian-smb-file-shares-with-active-directory-permissions",
    destination: "/posts/debian-smb-file-shares",
  },
  {
    source: "/2020/08/project-downscale-migration",
    destination: "/posts/project-downscale-migration",
  },
  {
    source: "/2020/07/threadripper-build-part-2",
    destination: "/posts/threadripper-build-storage",
  },
  {
    source: "/2020/03/goodbye-pfsense-hello-vyos",
    destination: "/posts/goodbye-pfsense-hello-vyos",
  },
  {
    source: "/2020/03/sending-specific-traffic-over-vpn-in-vyos",
    destination: "/posts/vyos-vpn-traffic",
  },
  {
    source: "/2020/03/homelab-in-your-pocket",
    destination: "/posts/homelab-in-your-pocket",
  },
  {
    source: "/2020/04/multiple-wlan-interfaces-in-vyos",
    destination: "/posts/multiple-wlan-interfaces-vyos",
  },
  {
    source: "/2020/05/state-of-the-lab-2020",
    destination: "/posts/state-of-the-lab-2020",
  },
  {
    source: "/2020/05/project-downscale-the-plan",
    destination: "/posts/project-downscale-plan",
  },
  {
    source: "/2020/06/threadripper-build",
    destination: "/posts/threadripper-build",
  },
].map(({ source, destination }) => ({ source, destination, permanent: true }));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [...oldPostRedirects];
  },
};

module.exports = nextConfig;
