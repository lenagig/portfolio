import type { Metadata } from "next";
import "./styles/base.css";
import "./styles/site-header.css";
import "./styles/profile-section.css";
import "./styles/section-heading.css";
import "./styles/history-section.css";
import "./styles/achievements-section.css";
import "./styles/works-section.css";
import "./styles/social-footer.css";
import "./styles/project-preview-dialog.css";

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
