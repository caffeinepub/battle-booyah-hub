import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { squadsData } from "@/data/gameData";
import { Globe, Trophy, UserPlus, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const glowClasses: Record<string, string> = {
  orange: "border-glow-orange",
  blue: "border-glow-blue",
  purple: "border-glow-purple",
  green: "border-glow-green",
};

const accentColors: Record<string, string> = {
  orange: "oklch(0.70 0.18 50)",
  blue: "oklch(0.62 0.18 240)",
  purple: "oklch(0.63 0.22 300)",
  green: "oklch(0.75 0.14 170)",
};

const tierColors: Record<string, string> = {
  Apex: "oklch(0.70 0.18 50)",
  Diamond: "oklch(0.62 0.18 240)",
  Platinum: "oklch(0.63 0.22 300)",
  Gold: "oklch(0.80 0.16 80)",
};

export function SquadsPage() {
  return (
    <div className="px-4 lg:px-16 py-10">
      <div className="mb-8">
        <h1
          className="section-title text-4xl mb-2"
          style={{ color: "oklch(0.92 0.005 240)" }}
        >
          Find Your <span style={{ color: "oklch(0.70 0.18 50)" }}>Squad</span>
        </h1>
        <p style={{ color: "oklch(0.68 0.01 240)" }}>
          Join an elite squad and compete together at the highest level.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {squadsData.map((squad, i) => (
          <motion.div
            key={squad.id}
            data-ocid={`squads.item.${i + 1}`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            className={`rounded-lg border ${glowClasses[squad.color]} p-5 flex flex-col gap-4`}
            style={{ background: "oklch(0.14 0.015 240)", borderWidth: "1px" }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3
                    className="font-condensed font-bold text-xl uppercase"
                    style={{ color: "oklch(0.92 0.005 240)" }}
                  >
                    {squad.name}
                  </h3>
                  <span
                    className="text-xs font-mono"
                    style={{ color: accentColors[squad.color] }}
                  >
                    {squad.tag}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span
                    className="flex items-center gap-1"
                    style={{ color: tierColors[squad.tier] }}
                  >
                    <Zap className="w-3 h-3" />
                    {squad.tier}
                  </span>
                  <span
                    className="flex items-center gap-1"
                    style={{ color: "oklch(0.68 0.01 240)" }}
                  >
                    <Globe className="w-3 h-3" />
                    {squad.region}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div
                  className="font-condensed font-black text-2xl"
                  style={{ color: accentColors[squad.color] }}
                >
                  {squad.wins.toLocaleString()}
                </div>
                <div
                  className="text-xs uppercase tracking-wider"
                  style={{ color: "oklch(0.68 0.01 240)" }}
                >
                  Total Wins
                </div>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.68 0.01 240)" }}
            >
              {squad.description}
            </p>

            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span
                  className="flex items-center gap-1"
                  style={{ color: "oklch(0.68 0.01 240)" }}
                >
                  <Users className="w-3 h-3" /> {squad.members}/
                  {squad.maxMembers} members
                </span>
                <span
                  style={{
                    color:
                      squad.members < squad.maxMembers
                        ? "oklch(0.75 0.14 170)"
                        : "oklch(0.55 0.22 25)",
                  }}
                >
                  {squad.members < squad.maxMembers
                    ? `${squad.maxMembers - squad.members} slots open`
                    : "Full"}
                </span>
              </div>
              <Progress
                value={(squad.members / squad.maxMembers) * 100}
                className="h-1.5"
                style={{ background: "oklch(0.20 0.02 240)" }}
              />
            </div>

            <Button
              data-ocid={`squads.join_button.${i + 1}`}
              disabled={squad.members >= squad.maxMembers}
              className="w-full font-condensed font-bold uppercase tracking-wider h-9"
              style={{
                background:
                  squad.members < squad.maxMembers
                    ? accentColors[squad.color]
                    : "oklch(0.20 0.02 240)",
                color:
                  squad.members < squad.maxMembers
                    ? "oklch(0.11 0.012 240)"
                    : "oklch(0.50 0.01 240)",
                boxShadow:
                  squad.members < squad.maxMembers
                    ? `0 0 15px ${accentColors[squad.color]}40`
                    : "none",
              }}
            >
              <UserPlus className="w-4 h-4 mr-2" />
              {squad.members >= squad.maxMembers
                ? "Squad Full"
                : "Request to Join"}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
