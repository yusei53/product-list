import { Metadata } from "next";
import ProductDetailPage from "./page.client";

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

const page = () => {
  return <ProductDetailPage />;
};

export default page;
