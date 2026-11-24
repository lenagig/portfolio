import { AchievementsSection } from "./components/achievements-section";
import { HistorySection } from "./components/history-section";
import { ProfileSection } from "./components/profile-section";
import { SiteHeader } from "./components/site-header";
import { SocialFooter } from "./components/social-footer";
import { WorksSection } from "./components/works-section";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        コンテンツへスキップ
      </a>
      <SiteHeader />
      <main id="main-content">
        <ProfileSection />
        <HistorySection />
        <AchievementsSection />
        <WorksSection />
      </main>
      <SocialFooter />
    </>
  );
}
