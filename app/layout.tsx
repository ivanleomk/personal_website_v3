import Image from "next/image";
import "./globals.css";
import Script from "next/script";
import { envSchema } from "@/types/env";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Ivan Leo",
  description:
    "Hey there! I'm a full stack engineer based in Singapore 🇸🇬. Welcome to my blog.",
  author: "Ivan Leo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // We set a default parser here

  let env = envSchema.safeParse(process.env);

  if (!env.success) {
    throw new Error("Invalid Environment Variable config");
  }
  return (
    <html lang="en">
      <Analytics />
      <body className="prose prose-sm md:prose dark:prose-dark mx-auto flex min-h-screen max-w-2xl flex-col ">
        <header className="container mx-4">
          <div className="flex items-center justify-between border-b py-4">
            <a
              href="https://twitter.com/ivanleomk"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2"
            >
              <div className="block h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="/ProfilePic.jpeg"
                  alt="Logo"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col space-y-1 text-sm leading-none">
                <p className="font-bold">@ivanleomk</p>
                <span>I write code sometimes</span>
              </div>
            </a>
            <div className="flex items-center space-x-4 cursor-pointer ">
              <div className="text-sm hover:font-semibold">Posts</div>
              <div className="text-sm hover:font-semibold">Work Log</div>
            </div>
          </div>
        </header>
        <div className="mx-4">{children}</div>
      </body>
    </html>
  );
}
