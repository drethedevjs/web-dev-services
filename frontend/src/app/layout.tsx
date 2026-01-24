import MiniHeader from "@/components/MiniHeader";
import PrelineScriptWrapper from "@/components/PrelineWrapper";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSRA Custom Websites and Web Applications",
  description: "Building Custom Web Applications for Small Businesses",
  authors: [{ name: "Andre Thomas", url: "https://honeystack.solutions" }],
  generator: "Next.js",
  keywords: ["custom website", "website", "hosting"],
  openGraph: {
    type: "website",
    url: "https://honeystack.solutions",
    title: "CSRA Web Services",
    description: "Building custom websites for small businesses.",
    siteName: "CSRA Web Services",
    images: [
      {
        url: "https://honeystack.solutions/honeystack.png",
        width: 1920,
        height: 1080,
        alt: "Screenshot of Honeystack homepage.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          {/* <Header /> */}
          <MiniHeader />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
      <PrelineScriptWrapper />
    </html>
  );
}
