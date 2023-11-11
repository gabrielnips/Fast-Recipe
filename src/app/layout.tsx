import type { Metadata } from "next";
import { Grandstander } from "next/font/google";
import "./css/globals.css";

const grandStander = Grandstander({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fast Recipe",
  keywords: ["Food", "Recipes", "Random Recipes"],
  authors: [{ name: "Gabriel Niprus", url: "https://github.com/gabrielnips" }],
  creator: "Gabriel Niprus",
  description: "FrontEnd Website using Spoonacular API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${grandStander.className}`}>{children}</body>
    </html>
  );
}
