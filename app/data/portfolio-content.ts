export const navigationItems = [
  { label: "ABOUT ME", href: "#about" },
  { label: "HISTORY", href: "#history" },
  { label: "AWARDS & ACTIVITIES", href: "#achievements" },
  { label: "WORKS", href: "#works" },
];

export const profileFacts = [
  { label: "趣味", value: "音楽を聴くこと、歌うこと、ゲーム" },
  { label: "主な役割", value: "フロント、UI/UX、デザイン" },
];

export const timelineEvents = [
  { date: "2005/12/19", dateTime: "2005-12-19", title: "スイスで誕生" },
  { date: "2024/06", dateTime: "2024-06", title: "グラウビュンデン州立高校（スイスの高校）を卒業" },
  { date: "2025/03", dateTime: "2025-03", title: "日本へ引っ越し" },
  { date: "2025/04", dateTime: "2025-04", title: "ECCコンピュータ専門学校に入学" },
  { date: "現在", title: "就職に向けて勉強中" },
];

export const achievementGroups = [
  {
    year: "2025",
    entries: [
      "技育CAMP Vol.12　努力賞",
      "第四回うめきたTechBase　最優秀賞",
      "技育CAMP Vol.14　優秀賞",
      "技育博 Vol.5　展示",
      "ヒーローズ・リーグ2025　決勝進出",
    ],
  },
  {
    year: "2026",
    entries: [
      "技育博 Vol.6　スポンサー賞（ウイングアーク１ｓｔ様）",
      "基本情報技術者試験　合格",
      "CSS Winner　STAR",
      "DemoStage Summer　最優秀賞",
      "前期+E展　企業賞",
    ],
  },
];

export const socialLinks = [
  { label: "X", icon: "x", href: "https://x.com/lena_gig" },
  { label: "GitHub", icon: "github", href: "https://github.com/lenagig" },
  { label: "ProtoPedia", icon: "protopedia", href: "https://protopedia.net/prototyper/lena_gig" },
] as const;
