import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "./components/ScrollReveal";
import AuthProvider from './components/AuthProvider'

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
        <AuthProvider>
          <ScrollReveal />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
