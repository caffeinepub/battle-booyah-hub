import { LeaderboardSection } from "@/components/LeaderboardSection";

export function LeaderboardPage() {
  return (
    <div className="py-6">
      <div className="px-4 lg:px-16 pb-2">
        <h1
          className="section-title text-4xl mb-1"
          style={{ color: "oklch(0.92 0.005 240)" }}
        >
          Global <span style={{ color: "oklch(0.70 0.18 50)" }}>Rankings</span>
        </h1>
        <p style={{ color: "oklch(0.68 0.01 240)" }}>
          Top players from around the world, ranked by performance rating.
        </p>
      </div>
      <LeaderboardSection compact={false} />
    </div>
  );
}
