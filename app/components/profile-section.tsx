import Image from "next/image";
import { profileFacts } from "../data/portfolio-content";

function ProfileFactCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="profile-fact">
      <dt className="profile-fact__label">{label}</dt>
      <dd className="profile-fact__value">{value}</dd>
    </div>
  );
}

export function ProfileSection() {
  return (
    <section className="profile-section" id="about" aria-labelledby="profile-name">
      <div className="profile-section__inner">
        <div className="profile-copy">
          <p className="profile-copy__eyebrow">ABOUT ME</p>
          <span className="role-badge">フロントエンドエンジニア</span>
          <h1 className="profile-copy__name" id="profile-name">
            ギーガー レナ
          </h1>
          <p className="profile-copy__role">ECCコンピュータ専門学校 29卒</p>
          <div className="profile-copy__intro">
            <p>日本とスイスのハーフ。日本語とドイツ語が母国語で、英語も多少は可能。</p>
            <p>使う人にとって自然で心地よい体験を生むUIを考え、形にすることが好きです。</p>
            <p>特に、迷わず操作できるわかりやすさと細部まで統一したデザインを大切にしています。</p>
          </div>
          <dl className="profile-facts">
            {profileFacts.map((fact) => (
              <ProfileFactCard key={fact.label} {...fact} />
            ))}
          </dl>
        </div>
        <div className="profile-avatar-frame">
          <Image
            className="profile-avatar"
            src="/images/lena-avatar.png"
            alt="猫耳のキャラクターを描いたプロフィールアイコン"
            width={352}
            height={352}
            priority
          />
        </div>
      </div>
    </section>
  );
}
