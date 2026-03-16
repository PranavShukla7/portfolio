import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Pranav Shukla",
  description: "Personal portfolio of Pranav Shukla.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">
          <div className="page-content">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
