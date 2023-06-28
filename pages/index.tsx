import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import bg from "../public/background-dim-small.jpg";
import githubIcon from "../public/icons8-github.svg";
import linkedinIcon from "../public/icons8-linkedin.svg";
import instagramIcon from "../public/icons8-instagram.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Kalinin</title>
      </Head>
      <div className="absolute inset-0 h-screen w-screen">
        <Image
          src={bg}
          alt="background image"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="relative z-10 my-[30vh] flex w-full flex-col items-center justify-center gap-y-12">
        <Image
          src="/stylized-name.svg"
          width={300}
          height={100}
          alt="Alex Kalinin"
        />
        <p className="w-3/4 text-center text-[#f4bc4c]">
          Software engineer, travelling the world. Blog mostly about homelab,
          guides, and projects.
        </p>
        <div className="flex h-14 flex-row items-center justify-center gap-x-4">
          <Link href="https://www.github.com/kalininator" target="_blank">
            <Image src={githubIcon} alt="GitHub" width={60} height={60}></Image>
          </Link>
          <Link href="https://www.linkedin.com/in/kalininator/" target="_blank">
            <Image
              src={linkedinIcon}
              alt="LinkedIn"
              width={60}
              height={60}
            ></Image>
          </Link>
          <Link href="https://www.instagram.com/kalininator/" target="_blank">
            <Image
              src={instagramIcon}
              alt="Instagram"
              width={60}
              height={60}
            ></Image>
          </Link>
        </div>
      </div>
    </>
  );
}
