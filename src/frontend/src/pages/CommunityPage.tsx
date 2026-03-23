import { CommunityActivity } from "@/components/CommunityActivity";

export function CommunityPage() {
  return (
    <div className="py-6">
      <div className="px-4 lg:px-16 pb-2">
        <h1
          className="section-title text-4xl mb-1"
          style={{ color: "oklch(0.92 0.005 240)" }}
        >
          Community <span style={{ color: "oklch(0.70 0.18 50)" }}>Feed</span>
        </h1>
        <p style={{ color: "oklch(0.68 0.01 240)" }}>
          Latest posts, tips, and highlights from top players.
        </p>
      </div>
      <CommunityActivity compact={false} />
    </div>
  );
}
