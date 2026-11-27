export type Project = {
  id: string;
  number: string;
  name: string;
  publishedAt: string;
  summary: string;
  description: string;
  role: string;
  stack: string;
  cover: { src: string; alt: string; backgroundColor: string; backgroundImage?: string };
  protopediaUrl: string;
};

// ProtoPediaの公開日が古い順。制作時期が分かったら並び順を調整する。
export const projects: Project[] = [
  {
    id: "kijobato",
    number: "01",
    name: "きじょバト",
    publishedAt: "2025-09-08",
    summary: "基本情報の用語を、CPUとの対戦で楽しく学ぶ。",
    description:
      "CPUと交互に基本情報技術者試験に関する用語を入力し、言葉が思いつかなくなったら負けになる学習サイト。用語を思い出す体験を対戦形式にすることで、楽しみながら試験勉強に取り組めます。",
    role: "バックエンド・プレゼン",
    stack: "JavaScript / Node.js / Vercel",
    cover: {
      src: "/images/projects/kijobato-logo.png",
      alt: "きじょバトのロゴ",
      backgroundColor: "#eaf7e8",
    },
    protopediaUrl: "https://protopedia.net/prototype/7474",
  },
  {
    id: "gourmaker",
    number: "02",
    name: "グルメイカー",
    publishedAt: "2025-10-06",
    summary: "食材とスロットで、今日の献立に出会う。",
    description:
      "使いたい食材を入力すると、調理法をスロットがランダムに決めてくれる献立アプリ。毎日の「何を作ろう」という悩みに、遊び心のある選び方を提案します。",
    role: "フロントエンド・プレゼン",
    stack: "JavaScript / Node.js / SQLite / Docker",
    cover: {
      src: "/images/projects/gourmaker-icon.png",
      alt: "グルメイカーのロゴ",
      backgroundColor: "#060b1f",
    },
    protopediaUrl: "https://protopedia.net/prototype/7587",
  },
  {
    id: "github-planet",
    number: "03",
    name: "GitHub Planet",
    publishedAt: "2025-11-09",
    summary: "日々の開発活動を、自分だけの惑星に。",
    description:
      "GitHubと連携し、コントリビューションなどの開発活動を自分だけの惑星として可視化するサイト。積み重ねた活動を視覚的に楽しめる形にすることで、開発を続けるモチベーションにつなげます。",
    role: "フロントエンド・プレゼン",
    stack: "Three.js / anime.js / Node.js / PostgreSQL / GitHub API",
    cover: {
      src: "/images/projects/github-planet-logo.png",
      alt: "GitHub Planetのロゴ",
      backgroundColor: "#0a0e1a",
      backgroundImage: "/images/projects/github-planet-background.jpg",
    },
    protopediaUrl: "https://protopedia.net/prototype/7785",
  },
  {
    id: "okimochi-board",
    number: "04",
    name: "おきもちぼ～ど",
    publishedAt: "2026-09-10",
    summary: "「話しかけてOK」を、ジェスチャーで伝える。",
    description:
      "PC作業中の手のジェスチャーや表情から、話しかけてよいかどうかを読み取るプレゼンスボード。スマートフォンやM5StickC Plus2へ状態をリアルタイムに共有し、周囲とのコミュニケーションを助けます。",
    role: "フロントエンド・プレゼン",
    stack: "React / TypeScript / Vite / Go / MediaPipe / Supabase",
    cover: {
      src: "/images/projects/okimochi-board-logo.png",
      alt: "おきもちぼーどのロゴ",
      backgroundColor: "#f0f8e8",
    },
    protopediaUrl: "https://protopedia.net/prototype/9652",
  },
  {
    id: "matsunya",
    number: "05",
    name: "待つん屋",
    publishedAt: "2026-09-15",
    summary: "待ち合わせの「待つ側」に、安心と楽しさを。",
    description:
      "相手の現在地や到着予定時間をリアルタイムに共有する待ち合わせアプリ。周辺の暇つぶしスポットも提案し、待つ側が感じる不安やストレスを減らします。",
    role: "フロントエンド・プレゼン",
    stack: "React Native / Expo / Go / PostgreSQL / Google Maps API",
    cover: {
      src: "/images/projects/matsunya-logo.png",
      alt: "待つん屋のロゴ",
      backgroundColor: "#eff7e3",
    },
    protopediaUrl: "https://protopedia.net/prototype/9678",
  },
];
