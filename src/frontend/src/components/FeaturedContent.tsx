import { Badge } from "@/components/ui/badge";
import { featuredCards } from "@/data/gameData";
import { ArrowRight, Eye } from "lucide-react";
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

export function FeaturedContent() {
  return (
    <section
      className="px-4 lg:px-16 py-12"
      style={{ background: "oklch(0.13 0.013 240)" }}
    >
      <div className="flex items-center justify-between mb-8">
        <h2
          className="section-title text-3xl"
          style={{ color: "oklch(0.92 0.005 240)" }}
        >
          Featured <span style={{ color: "oklch(0.70 0.18 50)" }}>Content</span>
        </h2>
        <button
          type="button"
          className="nav-link text-xs flex items-center gap-1 hover:opacity-80 transition-opacity"
          style={{ color: "oklch(0.70 0.18 50)" }}
        >
          View All <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredCards.map((card, i) => (
          <motion.div
            key={card.id}
            data-ocid={`featured.item.${i + 1}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-lg border cursor-pointer group transition-all duration-300 hover:-translate-y-1 ${glowClasses[card.color]}`}
            style={{ background: "oklch(0.14 0.015 240)", borderWidth: "1px" }}
          >
            <div className="p-5">
              <div className="text-3xl mb-3">{card.icon}</div>
              <Badge
                className="mb-2 text-xs font-condensed tracking-widest uppercase"
                style={{
                  background: `${accentColors[card.color]}20`,
                  color: accentColors[card.color],
                  border: `1px solid ${accentColors[card.color]}40`,
                }}
              >
                {card.category}
              </Badge>
              <h3
                className="font-condensed font-bold text-lg uppercase leading-tight mb-1 group-hover:text-primary transition-colors"
                style={{ color: "oklch(0.92 0.005 240)" }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: "oklch(0.68 0.01 240)" }}
              >
                {card.subtitle}
              </p>
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center gap-1 text-xs"
                  style={{ color: "oklch(0.68 0.01 240)" }}
                >
                  <Eye className="w-3 h-3" /> {card.views} views
                </div>
                <ArrowRight
                  className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: accentColors[card.color] }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
