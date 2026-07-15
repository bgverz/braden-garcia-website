import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/providers/motion-provider";
import { CustomCursor } from "@/components/cursor/custom-cursor";
import { personal } from "@/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${personal.name} — ${personal.role}`;
const description = `${personal.name} is an IT technician in New York moving into software and systems engineering. Projects, experience, and how to reach him.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://bradengarcia.com"),
  title: {
    default: title,
    // Subpages (e.g. /photos) set just their own name and get the suffix.
    template: `%s — ${personal.name}`,
  },
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: personal.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* Set the reduced-motion class before hydration so the very first
            paint (cursor visibility, boot sequence) is already correct. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reduced-motion')}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-fg antialiased">
        <MotionProvider>
          <CustomCursor />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
