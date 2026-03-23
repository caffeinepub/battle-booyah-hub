import { Badge } from "@/components/ui/badge";
import { leaderboardData } from "@/data/gameData";
import { ArrowRight, Crown, Trophy, Zap } from "lucide-react";
import { motion } from "motion/react";

const tierColors: Record<string, string> = {
  Apex: "oklch(0.70 0.18 50)",
  Diamond: "oklch(0.62 0.18 240)",
  Platinum: "oklch(0.63 0.22 300)",
  Gold: "oklch(0.80 0.16 80)",
};

const rankStyle = (rank: number) => {
  if (rank === 1)
    return {
      color: "oklch(0.85 0.18 85)",
      icon: <Crown className="w-4 h-4" />,
    };
  if (rank === 2)
    return {
      color: "oklch(0.75 0.01 240)",
      icon: <Trophy className="w-3.5 h-3.5" />,
    };
  if (rank === 3)
    return {
      color: "oklch(0.62 0.10 50)",
      icon: <Trophy className="w-3.5 h-3.5" />,
    };
  return { color: "oklch(0.68 0.01 240)", icon: null };
};

interface LeaderboardSectionProps {
  compact?: boolean;
  onViewAll?: () => void;
}

export function LeaderboardSection({
  compact = true,
  onViewAll,
}: LeaderboardSectionProps) {
  const players = compact ? leaderboardData.slice(0, 5) : leaderboardData;

  return (
    <section className="px-4 lg:px-16 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2
          className="section-title text-3xl"
          style={{ color: "oklch(0.92 0.005 240)" }}
        >
          Global{" "}
          <span style={{ color: "oklch(0.70 0.18 50)" }}>Leaderboard</span>
        </h2>
        {onViewAll && (
          <button
            type="button"
            data-ocid="leaderboard.link"
            onClick={onViewAll}
            className="nav-link text-xs flex items-center gap-1 hover:opacity-80 transition-opacity"
            style={{ color: "oklch(0.70 0.18 50)" }}
          >
            Full Leaderboard <ArrowRight className="w-3 h-3" />
          </button>
        )}
      </div>

      <div
        className="rounded-lg border overflow-hidden"
        style={{
          borderColor: "oklch(0.25 0.025 240)",
          background: "oklch(0.14 0.015 240)",
        }}
      >
        {/* Table header */}
        <div
          className="grid grid-cols-[48px_1fr_80px_80px_80px] gap-2 px-4 py-3 text-xs uppercase tracking-widest font-semibold"
          style={{
            background: "oklch(0.11 0.012 240)",
            color: "oklch(0.68 0.01 240)",
            borderBottom: "1px solid oklch(0.25 0.025 240)",
          }}
        >
          <span>#</span>
          <span>Player</span>
          <span className="text-right">Wins</span>
          <span className="text-right">KDR</span>
          <span className="text-right">Rating</span>
        </div>

        {players.map((player, i) => {
          const rs = rankStyle(player.rank);
          return (
            <motion.div
              key={player.username}
              data-ocid={`leaderboard.item.${i + 1}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-[48px_1fr_80px_80px_80px] gap-2 px-4 py-3 items-center hover:bg-white/[0.02] transition-colors cursor-pointer"
              style={{
                borderBottom:
                  i < players.length - 1
                    ? "1px solid oklch(0.25 0.025 240 / 0.5)"
                    : "none",
              }}
            >
              <div
                className="flex items-center gap-1 font-condensed font-bold"
                style={{ color: rs.color }}
              >
                {rs.icon || player.rank}
              </div>
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-condensed font-bold text-xs flex-shrink-0"
                  style={{
                    background: `${tierColors[player.tier]}20`,
                    color: tierColors[player.tier],
                    border: `1px solid ${tierColors[player.tier]}40`,
                  }}
                >
                  {player.avatar}
                </div>
                <div className="min-w-0">
                  <div
                    className="font-semibold text-sm truncate"
                    style={{ color: "oklch(0.92 0.005 240)" }}
                  >
                    {player.username}
                  </div>
                  <div
                    className="flex items-center gap-1 text-xs"
                    style={{ color: tierColors[player.tier] }}
                  >
                    <Zap className="w-2.5 h-2.5" />
                    {player.tier}
                  </div>
                </div>
              </div>
              <div
                className="text-right font-condensed font-bold text-sm"
                style={{ color: "oklch(0.92 0.005 240)" }}
              >
                {player.wins}
              </div>
              <div
                className="text-right font-condensed font-bold text-sm"
                style={{ color: "oklch(0.70 0.18 50)" }}
              >
                {player.kdr}
              </div>
              <div
                className="text-right font-condensed font-bold text-sm"
                style={{ color: "oklch(0.62 0.18 240)" }}
              >
                {player.rating.toLocaleString()}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
