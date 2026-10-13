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
    default: "Nithya Gopalsamy | Full Stack Developer & DevOps Engineer",
    template: "%s | Nithya Gopalsamy",
  },
  description:
    "Full Stack Developer with 1.5+ years of experience building cloud-deployed, production-grade web and mobile applications using React Native, Next.js, Node.js, MongoDB, and automated CI/CD pipelines.",
  keywords: [
    "Nithya Gopalsamy",
    "Full Stack Developer",
    "React Native Developer",
    "Next.js Developer",
    "Node.js",
    "DevOps",
    "GitHub Actions",
    "CI/CD Pipelines",
    "Multitenant SaaS",
    "MongoDB",
    "RAG",
    "LangChain",
    "FastAPI",
    "Software Engineer Chennai",
    "Tamil Nadu",
  ],
  authors: [{ name: "Nithya Gopalsamy" }],
  metadataBase: new URL("https://solidpro-es.com"),
  openGraph: {
    title: "Nithya Gopalsamy | Full Stack Developer & DevOps Engineer",
    description:
      "Full Stack Developer building production-grade web & mobile apps with React Native, Next.js, Node.js, multitenant SaaS, and CI/CD automation.",
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
      <body className="font-sans antialiased text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
