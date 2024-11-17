import { Metadata } from "next";
import "semantic-ui-css/semantic.min.css";

const siteName = "ぴーちフォリオ | PeachTechポートフォリオ";
const description =
  "PeachTechのメンバーが作成したポートフォリオサイトです。個人の趣味で作ったものから大会に出したようなプロダクトまで一人一人の個性、想いがつまったプロダクトをお楽しみください！";

export const metadata: Metadata = {
  metadataBase: new URL("https://peachtech-product-list.vercel.app/product/"),
  title: {
    default: siteName,
    template: "%s | Product list",
  },
  description: description,
  openGraph: {
    type: "website",
    url: "https://peachtech-product-list.vercel.app/product/",
    title: siteName,
    description: description,
    siteName: siteName,
  },
  twitter: {
    title: siteName,
    description: description,
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="u-journal" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body style={{ margin: 0, backgroundColor: "white" }}>{children}</body>
    </html>
  );
}
