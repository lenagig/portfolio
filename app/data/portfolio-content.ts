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
      "CSS Winner　STAR",
      "DemoStage Summer　最優秀賞",
      "前期+E展　企業賞",
    ],
  },
];

export type Project = {
  number: string;
  name: string;
  summary: string;
  description: string;
  role: string;
  stack: string;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Bloom Radio",
    summary: "気分を選ぶと色と音が変わる、ミニ音楽プレイヤー。",
    description:
      "気分を選ぶと、その日の感情に合わせた色と音に出会えるミニ音楽プレイヤーのアイデアです。",
    role: "UI / UX・フロントエンド",
    stack: "HTML / CSS / JavaScript",
  },
  {
    number: "02",
    name: "Cat Explorer",
    summary: "猫の足あとが案内する、作品ギャラリーのアイデア。",
    description:
      "猫の足あとをたどりながら、作品を見つけていくギャラリーのアイデアです。",
    role: "UI / UX・フロントエンド",
    stack: "React / CSS",
  },
  {
    number: "03",
    name: "Petal Archive",
    summary: "スクロールで桜がひらく、季節の記録サイト。",
    description:
      "ページをスクロールすると桜がひらく、季節の記憶を残すサイトのアイデアです。",
    role: "UI / UX・フロントエンド",
    stack: "React / CSS",
  },
];

export const socialLinks = [
  { label: "X", icon: "x" },
  { label: "GitHub", icon: "github" },
  { label: "ProtoPedia", icon: "protopedia" },
] as const;
