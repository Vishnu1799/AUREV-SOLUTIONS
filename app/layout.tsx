import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AUREV SOLUTIONS — Engineering Ideas Into Intelligent Solutions",
  description:
    "Technology and innovation initiative developing practical software engineering, artificial intelligence, intelligent automation, and engineering solutions.",
  metadataBase: new URL("https://aurevsolutions.com"),
  icons: {
    icon: "/aurev-logo.jpg",
  },
  openGraph: {
    title: "AUREV SOLUTIONS — Engineering Ideas Into Intelligent Solutions",
    description:
      "Technology and innovation initiative exploring practical solutions through software, AI, and engineering.",
    type: "website",
    locale: "en_US",
    siteName: "AUREV SOLUTIONS",
    images: [
      {
        url: "/aurev-logo.jpg",
        width: 800,
        height: 600,
        alt: "AUREV SOLUTIONS",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10243A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Manrope:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-[#20252D] antialiased selection:bg-[#2457D6] selection:text-white">
        {children}
      </body>
    </html>
  );
}
