import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ギーガー レナ | Portfolio",
  description: "ギーガー レナのプロフィール、来歴、実績と作品を紹介するポートフォリオです。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
