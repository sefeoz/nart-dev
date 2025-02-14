import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "./components/ScrollReveal";

export const metadata: Metadata = {
  title: "Nart Developer",
  description: "Nart Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
