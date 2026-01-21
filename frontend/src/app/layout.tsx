import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSRA Custom Websites and Web Applications",
  description: "Building Custom Web Applications for Small Businesses",
  authors: [{ name: "Andre Thomas", url: "https://csra-web-services.vercel.app" }],
  generator: "Next.js",
  keywords: ["custom website", "website", "hosting"],
  openGraph: {
    type: "website",
    url: "https://csra-web-services.vercel.app",
    title: "CSRA Web Services",
    description: "Building custom websites for small businesses.",
    siteName: "CSRA Web Services",
    images: [
      {
        url: "https://csra-web-services.vercel.app/csra-web-dev-screensht.png", // Corrected image URL
        width: 1920,
        height: 1080,
        alt: "Screenshot of CSRA Web Services",
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
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
