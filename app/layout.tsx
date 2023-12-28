import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./ui/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Aspira Dashboard",
    default: "Aspira Dashboard",
  },
  description: "The official Aspira Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#f2f2f2] antialiased`}>
        {children}
      </body>
    </html>
  );
}
