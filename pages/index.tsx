import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Kalinin</title>
      </Head>
      <div className="my-[30vh] flex w-full flex-col items-center justify-center gap-y-12">
        <Image src="/stylized-name.svg" width={300} height={100} />
        <p className="w-3/4 text-center text-[#f4bc4c]">
          Software engineer, travelling the world. Blog mostly about homelab,
          guides, and projects.
        </p>
        <div className="flex flex-row items-center justify-center gap-x-4">
          <Link href="https://www.github.com/kalininator" target="_blank">
            <Image
              src="/icons8-github.svg"
              alt="GitHub"
              width={60}
              height={60}
            ></Image>
          </Link>
          <Link href="https://www.linkedin.com/in/kalininator/" target="_blank">
            <Image
              src="/icons8-linkedin.svg"
              alt="LinkedIn"
              width={60}
              height={60}
            ></Image>
          </Link>
          <Link href="https://www.instagram.com/kalininator/" target="_blank">
            <Image
              src="/icons8-instagram.svg"
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
