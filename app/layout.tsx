import "./globals.css";
import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/languageSelction";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "أبجد التقنية",
  description: "نحن نصنع أدوات رائعة ومبتكرة لتمكين ودعم المجتمع، ودفع التغيير الإيجابي من خلال التكنولوجيا.",
  openGraph: {
    title: "أبجد التقنية",
    description: "نحن نصنع أدوات رائعة ومبتكرة لتمكين ودعم المجتمع، ودفع التغيير الإيجابي من خلال التكنولوجيا.",
    images: ["/abjd_logo_blue.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body>
        <LanguageProvider>
          {children}
          <SpeedInsights />
        </LanguageProvider>
      </body>
    </html>
  );
}
