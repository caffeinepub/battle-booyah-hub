export interface Player {
  rank: number;
  username: string;
  tier: string;
  wins: number;
  kdr: number;
  rating: number;
  avatar: string;
}

export interface Squad {
  id: number;
  name: string;
  tag: string;
  members: number;
  maxMembers: number;
  wins: number;
  region: string;
  tier: string;
  description: string;
  color: "orange" | "blue" | "purple" | "green";
}

export interface CommunityPost {
  id: number;
  username: string;
  avatar: string;
  tier: string;
  timestamp: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  tag: string;
}

export interface FeaturedCard {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  views: string;
  color: "orange" | "blue" | "purple" | "green";
  icon: string;
}

export interface GameEvent {
  id: number;
  name: string;
  date: string;
  time: string;
  prizePool: string;
  participants: number;
  maxParticipants: number;
  region: string;
  mode: string;
  status: "upcoming" | "live" | "ended";
  color: "orange" | "blue" | "purple" | "green";
}

export const leaderboardData: Player[] = [
  {
    rank: 1,
    username: "Phoenix_Gamer",
    tier: "Apex",
    wins: 450,
    kdr: 8.7,
    rating: 9850,
    avatar: "PG",
  },
  {
    rank: 2,
    username: "ShadowBlade",
    tier: "Apex",
    wins: 412,
    kdr: 7.9,
    rating: 9420,
    avatar: "SB",
  },
  {
    rank: 3,
    username: "ThunderStrike",
    tier: "Diamond",
    wins: 387,
    kdr: 6.5,
    rating: 8890,
    avatar: "TS",
  },
  {
    rank: 4,
    username: "NightRaven",
    tier: "Diamond",
    wins: 355,
    kdr: 6.1,
    rating: 8540,
    avatar: "NR",
  },
  {
    rank: 5,
    username: "IronWolf",
    tier: "Diamond",
    wins: 320,
    kdr: 5.8,
    rating: 8100,
    avatar: "IW",
  },
  {
    rank: 6,
    username: "BlazeFury",
    tier: "Platinum",
    wins: 298,
    kdr: 5.2,
    rating: 7750,
    avatar: "BF",
  },
  {
    rank: 7,
    username: "CryptoKnight",
    tier: "Platinum",
    wins: 271,
    kdr: 4.9,
    rating: 7320,
    avatar: "CK",
  },
  {
    rank: 8,
    username: "VoidReaper",
    tier: "Platinum",
    wins: 244,
    kdr: 4.3,
    rating: 6980,
    avatar: "VR",
  },
  {
    rank: 9,
    username: "StormBreaker",
    tier: "Gold",
    wins: 210,
    kdr: 3.7,
    rating: 6420,
    avatar: "SB",
  },
  {
    rank: 10,
    username: "GhostSniper",
    tier: "Gold",
    wins: 187,
    kdr: 2.9,
    rating: 5890,
    avatar: "GS",
  },
];

export const squadsData: Squad[] = [
  {
    id: 1,
    name: "Alpha Squad",
    tag: "[ALPHA]",
    members: 18,
    maxMembers: 20,
    wins: 1240,
    region: "NA East",
    tier: "Apex",
    description:
      "Elite squad of top-ranked players. Competitive tournaments only. Tryouts required.",
    color: "orange",
  },
  {
    id: 2,
    name: "Shadow Wolves",
    tag: "[WOLF]",
    members: 14,
    maxMembers: 20,
    wins: 987,
    region: "EU West",
    tier: "Diamond",
    description:
      "Tactical stealth team specializing in ambush strategies and coordinated attacks.",
    color: "purple",
  },
  {
    id: 3,
    name: "Thunder Legion",
    tag: "[TL]",
    members: 20,
    maxMembers: 25,
    wins: 1456,
    region: "Asia Pacific",
    tier: "Apex",
    description:
      "Asia's most dominant squad. Fastest rotation times and aggressive playstyle.",
    color: "blue",
  },
  {
    id: 4,
    name: "Iron Fist",
    tag: "[IRON]",
    members: 11,
    maxMembers: 15,
    wins: 654,
    region: "NA West",
    tier: "Platinum",
    description:
      "Close-range combat specialists. If you like aggressive, in-your-face gameplay, join us.",
    color: "green",
  },
  {
    id: 5,
    name: "Neon Hunters",
    tag: "[NEON]",
    members: 8,
    maxMembers: 20,
    wins: 421,
    region: "SA",
    tier: "Gold",
    description:
      "Casual-to-competitive squad. New members welcome. We focus on growth and having fun.",
    color: "purple",
  },
];

export const communityPosts: CommunityPost[] = [
  {
    id: 1,
    username: "Phoenix_Gamer",
    avatar: "PG",
    tier: "Apex",
    timestamp: "2 hours ago",
    content:
      "Just hit 450 wins and cracked the top of the leaderboard 🔥 The grind never stops. Special thanks to Alpha Squad for the clutch team plays this season. Who's ready for the Season 12 tournament?",
    likes: 847,
    comments: 143,
    shares: 62,
    tag: "Achievement",
  },
  {
    id: 2,
    username: "ShadowBlade",
    avatar: "SB",
    tier: "Apex",
    timestamp: "4 hours ago",
    content:
      "Shadow Wolves are recruiting 2 more Diamond+ players for our EU roster. Looking for IGL and entry fragger roles. DM me or join our Discord. Tryouts this weekend.",
    likes: 312,
    comments: 89,
    shares: 45,
    tag: "Recruiting",
  },
  {
    id: 3,
    username: "ThunderStrike",
    avatar: "TS",
    tier: "Diamond",
    timestamp: "6 hours ago",
    content:
      "New movement tech discovered — you can actually chain the slide-jump with the boost pad for an extra 15% speed. Watch my clip breakdown in the video linked below. This changes rotations completely!",
    likes: 1024,
    comments: 231,
    shares: 188,
    tag: "Tips & Tricks",
  },
  {
    id: 4,
    username: "NightRaven",
    avatar: "NR",
    tier: "Diamond",
    timestamp: "8 hours ago",
    content:
      "Season 11 wrap-up: 355 wins, 6.1 KDR, Diamond I. Honestly didn't expect to peak this high. Training daily with my squad made all the difference. Season 12 goals: crack top 3 global 💎",
    likes: 576,
    comments: 97,
    shares: 34,
    tag: "Season Recap",
  },
  {
    id: 5,
    username: "BlazeFury",
    avatar: "BF",
    tier: "Platinum",
    timestamp: "12 hours ago",
    content:
      "PSA for new players: landing in the hot zones early game is NOT always bad. The loot density there is insane and if you can survive the chaos, you'll be fully geared before the first ring closes.",
    likes: 421,
    comments: 78,
    shares: 56,
    tag: "Strategy",
  },
  {
    id: 6,
    username: "VoidReaper",
    avatar: "VR",
    tier: "Platinum",
    timestamp: "1 day ago",
    content:
      "Anyone else noticing the SMG meta shift? After the latest patch the Tempest AR is straight broken. 38 damage headshots with zero recoil at mid-range. Nerfing incoming, use it while you can.",
    likes: 693,
    comments: 156,
    shares: 99,
    tag: "Meta",
  },
];

export const featuredCards: FeaturedCard[] = [
  {
    id: 1,
    title: "Season 12 Tournament",
    subtitle: "$50,000 Prize Pool — Registration Open",
    category: "TOURNAMENT",
    views: "42.3K",
    color: "orange",
    icon: "🏆",
  },
  {
    id: 2,
    title: "Movement Mastery Guide",
    subtitle: "Advanced techniques from top 10 players",
    category: "GUIDE",
    views: "28.7K",
    color: "blue",
    icon: "📖",
  },
  {
    id: 3,
    title: "Phoenix_Gamer Highlights",
    subtitle: "Season 11 best plays compilation",
    category: "HIGHLIGHT",
    views: "156K",
    color: "purple",
    icon: "🎮",
  },
  {
    id: 4,
    title: "Meta Report: Season 12",
    subtitle: "Weapon tier list and strategy breakdown",
    category: "META",
    views: "31.2K",
    color: "green",
    icon: "📊",
  },
];

export const eventsData: GameEvent[] = [
  {
    id: 1,
    name: "Booyah World Championship",
    date: "Apr 15, 2026",
    time: "6:00 PM UTC",
    prizePool: "$250,000",
    participants: 128,
    maxParticipants: 128,
    region: "Global",
    mode: "Squad (4v4)",
    status: "upcoming",
    color: "orange",
  },
  {
    id: 2,
    name: "NA Regional Open",
    date: "Apr 5, 2026",
    time: "3:00 PM EST",
    prizePool: "$25,000",
    participants: 47,
    maxParticipants: 64,
    region: "North America",
    mode: "Duo",
    status: "upcoming",
    color: "blue",
  },
  {
    id: 3,
    name: "Community Clash #23",
    date: "Mar 30, 2026",
    time: "5:00 PM UTC",
    prizePool: "$5,000",
    participants: 32,
    maxParticipants: 32,
    region: "Global",
    mode: "Solo",
    status: "live",
    color: "green",
  },
  {
    id: 4,
    name: "Asia Pacific Invitational",
    date: "May 1, 2026",
    time: "2:00 PM JST",
    prizePool: "$75,000",
    participants: 12,
    maxParticipants: 32,
    region: "Asia Pacific",
    mode: "Squad (4v4)",
    status: "upcoming",
    color: "purple",
  },
];

export const playerStats = {
  username: "Phoenix_Gamer",
  tier: "Apex",
  totalMatches: 1842,
  wins: 450,
  losses: 1392,
  winRate: 24.4,
  kdr: 8.7,
  totalKills: 12430,
  avgDamage: 847,
  topPlacement: 1,
  longestStreak: 14,
  headshotRate: 42.1,
  seasonRating: 9850,
  favoriteWeapon: "Tempest AR",
  playTime: "2,340 hours",
  badges: [
    "Top 1% Global",
    "1000 Wins Club",
    "Headshot Expert",
    "Tournament Winner",
  ],
  weeklyStats: [
    { day: "Mon", wins: 8, kills: 67 },
    { day: "Tue", wins: 12, kills: 98 },
    { day: "Wed", wins: 6, kills: 52 },
    { day: "Thu", wins: 15, kills: 124 },
    { day: "Fri", wins: 18, kills: 143 },
    { day: "Sat", wins: 22, kills: 187 },
    { day: "Sun", wins: 14, kills: 119 },
  ],
};
