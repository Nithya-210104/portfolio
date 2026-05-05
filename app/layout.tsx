import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nithya Gopalsamy | Software Engineer",
    template: "%s | Nithya Gopalsamy",
  },
  description:
    "Portfolio of Nithya Gopalsamy, a Full-Stack Web and Mobile Developer building performant products with Next.js, React Native, Node.js, and MongoDB.",
  keywords: [
    "Nithya Gopalsamy",
    "Software Engineer",
    "Full-Stack Developer",
    "React Native",
    "Next.js",
    "Node.js",
    "Tamil Nadu",
  ],
  authors: [{ name: "Nithya Gopalsamy" }],
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Nithya Gopalsamy | Software Engineer",
    description:
      "Full-Stack Web and Mobile Developer specializing in Next.js, React Native, Node.js, and cloud deployment.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
