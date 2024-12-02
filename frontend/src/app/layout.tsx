import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CSRA Custom Websites",
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
    images: [{
      url: "/frontend/public/csra-web-dev-screensht.png",
    }],
   }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
