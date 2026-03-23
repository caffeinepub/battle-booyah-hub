import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart2, Users } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onNavChange: (tab: string) => void;
}

export function HeroSection({ onNavChange }: HeroSectionProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "45vh" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-battle-bg.dim_1920x800.jpg')",
        }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.11 0.012 240 / 0.95) 40%, oklch(0.11 0.012 240 / 0.5) 75%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "oklch(0.11 0.012 240 / 0.3)" }}
      />

      {/* Content */}
      <div
        className="relative z-10 px-4 lg:px-16 py-16 flex flex-col justify-center"
        style={{ minHeight: "45vh" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <Badge
            className="mb-4 font-condensed tracking-widest uppercase text-xs px-3 py-1"
            style={{
              background: "oklch(0.70 0.18 50 / 0.15)",
              color: "oklch(0.70 0.18 50)",
              border: "1px solid oklch(0.70 0.18 50 / 0.4)",
            }}
          >
            ⚡ Season 12 Now Live
          </Badge>
          <h1
            className="font-condensed font-black uppercase leading-none mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "oklch(0.92 0.005 240)",
              letterSpacing: "0.04em",
            }}
          >
            DOMINATE THE{" "}
            <span
              style={{
                color: "oklch(0.70 0.18 50)",
                textShadow: "0 0 30px oklch(0.70 0.18 50 / 0.5)",
              }}
            >
              BATTLEFIELD
            </span>
          </h1>
          <p
            className="text-base mb-8 leading-relaxed"
            style={{ color: "oklch(0.68 0.01 240)" }}
          >
            Track your stats, join elite squads, and climb the global
            leaderboard. Battle Booyah Hub — where legends are made.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              data-ocid="hero.primary_button"
              onClick={() => onNavChange("stats")}
              className="font-condensed font-bold uppercase tracking-wider px-6 h-11 text-base"
              style={{
                background: "oklch(0.70 0.18 50)",
                color: "oklch(0.11 0.012 240)",
                boxShadow: "0 0 20px oklch(0.70 0.18 50 / 0.4)",
              }}
            >
              <BarChart2 className="w-4 h-4 mr-2" />
              VIEW MY STATS
            </Button>
            <Button
              data-ocid="hero.secondary_button"
              onClick={() => onNavChange("squads")}
              variant="outline"
              className="font-condensed font-bold uppercase tracking-wider px-6 h-11 text-base"
              style={{
                borderColor: "oklch(0.62 0.18 240 / 0.6)",
                color: "oklch(0.62 0.18 240)",
                background: "oklch(0.62 0.18 240 / 0.1)",
                boxShadow: "0 0 20px oklch(0.62 0.18 240 / 0.2)",
              }}
            >
              <Users className="w-4 h-4 mr-2" />
              JOIN A SQUAD
            </Button>
          </div>

          {/* Stats bar */}
          <div
            className="flex flex-wrap gap-6 mt-8 pt-6"
            style={{ borderTop: "1px solid oklch(0.25 0.025 240)" }}
          >
            {[
              { label: "Active Players", value: "124K" },
              { label: "Squads", value: "8,240" },
              { label: "Tournaments", value: "340" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-condensed font-black text-xl"
                  style={{ color: "oklch(0.70 0.18 50)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs uppercase tracking-wider"
                  style={{ color: "oklch(0.68 0.01 240)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
