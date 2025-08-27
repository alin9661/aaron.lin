import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaron Lin | Digital Craftsman & Full-Stack Developer",
  description: "Aaron Lin - Full-Stack Developer specializing in modern web technologies, creative coding, and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="crt-effect">
        {children}
      </body>
    </html>
  );
}
