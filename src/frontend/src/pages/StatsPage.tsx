import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { playerStats } from "@/data/gameData";
import { Award, Clock, Crosshair, Swords, Target, Zap } from "lucide-react";
import { motion } from "motion/react";

const statCards = [
  {
    label: "Total Wins",
    value: playerStats.wins,
    suffix: "",
    icon: <Award className="w-5 h-5" />,
    color: "orange",
  },
  {
    label: "KD Ratio",
    value: playerStats.kdr,
    suffix: "",
    icon: <Crosshair className="w-5 h-5" />,
    color: "blue",
  },
  {
    label: "Win Rate",
    value: playerStats.winRate,
    suffix: "%",
    icon: <Target className="w-5 h-5" />,
    color: "purple",
  },
  {
    label: "Headshot %",
    value: playerStats.headshotRate,
    suffix: "%",
    icon: <Swords className="w-5 h-5" />,
    color: "green",
  },
  {
    label: "Total Matches",
    value: playerStats.totalMatches.toLocaleString(),
    suffix: "",
    icon: <Zap className="w-5 h-5" />,
    color: "orange",
  },
  {
    label: "Avg Damage",
    value: playerStats.avgDamage,
    suffix: "",
    icon: <Target className="w-5 h-5" />,
    color: "blue",
  },
  {
    label: "Best Streak",
    value: playerStats.longestStreak,
    suffix: " wins",
    icon: <Award className="w-5 h-5" />,
    color: "purple",
  },
  {
    label: "Play Time",
    value: playerStats.playTime,
    suffix: "",
    icon: <Clock className="w-5 h-5" />,
    color: "green",
  },
];

const accentColors: Record<string, string> = {
  orange: "oklch(0.70 0.18 50)",
  blue: "oklch(0.62 0.18 240)",
  purple: "oklch(0.63 0.22 300)",
  green: "oklch(0.75 0.14 170)",
};

const glowClasses: Record<string, string> = {
  orange: "border-glow-orange",
  blue: "border-glow-blue",
  purple: "border-glow-purple",
  green: "border-glow-green",
};

const maxBarVal = Math.max(...playerStats.weeklyStats.map((d) => d.kills));

export function StatsPage() {
  return (
    <div className="px-4 lg:px-16 py-10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center font-condensed font-black text-xl flex-shrink-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.70 0.18 50), oklch(0.63 0.22 300))",
            color: "white",
            boxShadow: "0 0 25px oklch(0.70 0.18 50 / 0.4)",
          }}
        >
          PG
        </div>
        <div>
          <h1
            className="font-condensed font-black text-3xl uppercase"
            style={{ color: "oklch(0.92 0.005 240)" }}
          >
            {playerStats.username}
          </h1>
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="flex items-center gap-1 text-sm"
              style={{ color: "oklch(0.70 0.18 50)" }}
            >
              <Zap className="w-3.5 h-3.5" /> {playerStats.tier} Rank
            </span>
            <span className="text-xs" style={{ color: "oklch(0.68 0.01 240)" }}>
              ·
            </span>
            <span className="text-sm" style={{ color: "oklch(0.68 0.01 240)" }}>
              Rating:{" "}
              <strong style={{ color: "oklch(0.62 0.18 240)" }}>
                {playerStats.seasonRating.toLocaleString()}
              </strong>
            </span>
            <span className="text-xs" style={{ color: "oklch(0.68 0.01 240)" }}>
              ·
            </span>
            <span className="text-sm" style={{ color: "oklch(0.68 0.01 240)" }}>
              Fav weapon:{" "}
              <strong style={{ color: "oklch(0.92 0.005 240)" }}>
                {playerStats.favoriteWeapon}
              </strong>
            </span>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-8">
        {playerStats.badges.map((badge) => (
          <Badge
            key={badge}
            className="font-condensed text-xs uppercase tracking-wider px-3 py-1"
            style={{
              background: "oklch(0.70 0.18 50 / 0.15)",
              color: "oklch(0.70 0.18 50)",
              border: "1px solid oklch(0.70 0.18 50 / 0.3)",
            }}
          >
            ⚡ {badge}
          </Badge>
        ))}
      </div>

      {/* Stat grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {statCards.map((card, i) => (
          <motion.div
            key={card.label}
            data-ocid={`stats.item.${i + 1}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className={`rounded-lg border ${glowClasses[card.color]} p-4`}
            style={{ background: "oklch(0.14 0.015 240)", borderWidth: "1px" }}
          >
            <div
              className="flex items-center gap-2 mb-2"
              style={{ color: accentColors[card.color] }}
            >
              {card.icon}
              <span
                className="text-xs uppercase tracking-wider font-semibold"
                style={{ color: "oklch(0.68 0.01 240)" }}
              >
                {card.label}
              </span>
            </div>
            <div
              className="font-condensed font-black text-2xl"
              style={{ color: "oklch(0.92 0.005 240)" }}
            >
              {card.value}
              {card.suffix}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Weekly chart */}
      <div
        className="rounded-lg border p-6"
        style={{
          background: "oklch(0.14 0.015 240)",
          borderColor: "oklch(0.25 0.025 240)",
        }}
      >
        <h3
          className="section-title text-xl mb-6"
          style={{ color: "oklch(0.92 0.005 240)" }}
        >
          Weekly Kill Performance
        </h3>
        <div className="flex items-end gap-3 h-40">
          {playerStats.weeklyStats.map((day, i) => (
            <div
              key={day.day}
              className="flex-1 flex flex-col items-center gap-1"
            >
              <span
                className="text-xs font-condensed font-bold"
                style={{ color: "oklch(0.70 0.18 50)" }}
              >
                {day.kills}
              </span>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(day.kills / maxBarVal) * 100}%` }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
                className="w-full rounded-t"
                style={{
                  background:
                    i === 5
                      ? "oklch(0.70 0.18 50)"
                      : "oklch(0.70 0.18 50 / 0.4)",
                  boxShadow:
                    i === 5 ? "0 0 12px oklch(0.70 0.18 50 / 0.5)" : "none",
                  minHeight: "4px",
                }}
              />
              <span
                className="text-xs"
                style={{ color: "oklch(0.68 0.01 240)" }}
              >
                {day.day}
              </span>
            </div>
          ))}
        </div>

        {/* Win rate bar */}
        <div className="mt-8">
          <div className="flex justify-between text-sm mb-2">
            <span
              className="font-semibold"
              style={{ color: "oklch(0.92 0.005 240)" }}
            >
              Win Rate
            </span>
            <span style={{ color: "oklch(0.70 0.18 50)" }}>
              {playerStats.winRate}%
            </span>
          </div>
          <Progress value={playerStats.winRate} className="h-2" />
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span
              className="font-semibold"
              style={{ color: "oklch(0.92 0.005 240)" }}
            >
              Headshot Rate
            </span>
            <span style={{ color: "oklch(0.63 0.22 300)" }}>
              {playerStats.headshotRate}%
            </span>
          </div>
          <Progress value={playerStats.headshotRate} className="h-2" />
        </div>
      </div>
    </div>
  );
}
