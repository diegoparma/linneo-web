import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Linneo - Control de Cultivos y Telemetría para el Agro",
  description: "Software de telemetría y automatización para el agro. Monitorea temperatura, humedad, VPD y controla tu invernadero desde cualquier lugar.",
  keywords: "cultivos, telemetría, agro, automatización, invernadero, sensores, IoT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
