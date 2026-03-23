import { Badge } from "@/components/ui/badge";
import { communityPosts } from "@/data/gameData";
import { ArrowRight, Heart, MessageCircle, Share2, Zap } from "lucide-react";
import { motion } from "motion/react";

const tierColors: Record<string, string> = {
  Apex: "oklch(0.70 0.18 50)",
  Diamond: "oklch(0.62 0.18 240)",
  Platinum: "oklch(0.63 0.22 300)",
  Gold: "oklch(0.80 0.16 80)",
};

interface CommunityActivityProps {
  compact?: boolean;
  onViewAll?: () => void;
}

export function CommunityActivity({
  compact = true,
  onViewAll,
}: CommunityActivityProps) {
  const posts = compact ? communityPosts.slice(0, 2) : communityPosts;

  return (
    <section
      className="px-4 lg:px-16 py-12"
      style={{ background: "oklch(0.13 0.013 240)" }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2
          className="section-title text-3xl"
          style={{ color: "oklch(0.92 0.005 240)" }}
        >
          Community{" "}
          <span style={{ color: "oklch(0.70 0.18 50)" }}>Activity</span>
        </h2>
        {onViewAll && (
          <button
            type="button"
            data-ocid="community.link"
            onClick={onViewAll}
            className="nav-link text-xs flex items-center gap-1 hover:opacity-80 transition-opacity"
            style={{ color: "oklch(0.70 0.18 50)" }}
          >
            View All <ArrowRight className="w-3 h-3" />
          </button>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            data-ocid={`community.item.${i + 1}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-lg border p-4 hover:border-white/10 transition-all"
            style={{
              background: "oklch(0.14 0.015 240)",
              borderColor: "oklch(0.25 0.025 240)",
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-condensed font-bold text-sm flex-shrink-0"
                style={{
                  background: `${tierColors[post.tier]}20`,
                  color: tierColors[post.tier],
                  border: `1px solid ${tierColors[post.tier]}40`,
                }}
              >
                {post.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center flex-wrap gap-2 mb-1">
                  <span
                    className="font-semibold text-sm"
                    style={{ color: "oklch(0.92 0.005 240)" }}
                  >
                    {post.username}
                  </span>
                  <span
                    className="flex items-center gap-1 text-xs"
                    style={{ color: tierColors[post.tier] }}
                  >
                    <Zap className="w-2.5 h-2.5" />
                    {post.tier}
                  </span>
                  <Badge
                    className="text-xs px-2 py-0"
                    style={{
                      background: "oklch(0.17 0.02 240)",
                      color: "oklch(0.68 0.01 240)",
                      border: "none",
                    }}
                  >
                    {post.tag}
                  </Badge>
                  <span
                    className="text-xs ml-auto"
                    style={{ color: "oklch(0.68 0.01 240)" }}
                  >
                    {post.timestamp}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: "oklch(0.80 0.005 240)" }}
                >
                  {post.content}
                </p>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-xs transition-colors hover:text-red-400"
                    style={{ color: "oklch(0.68 0.01 240)" }}
                  >
                    <Heart className="w-3.5 h-3.5" />
                    {post.likes.toLocaleString()}
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-xs transition-colors"
                    style={{ color: "oklch(0.68 0.01 240)" }}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    {post.comments}
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-xs transition-colors"
                    style={{ color: "oklch(0.68 0.01 240)" }}
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    {post.shares}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
