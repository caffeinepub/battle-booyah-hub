import { CommunityActivity } from "@/components/CommunityActivity";
import { FeaturedContent } from "@/components/FeaturedContent";
import { HeroSection } from "@/components/HeroSection";
import { LeaderboardSection } from "@/components/LeaderboardSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CommunityPage } from "@/pages/CommunityPage";
import { EventsPage } from "@/pages/EventsPage";
import { LeaderboardPage } from "@/pages/LeaderboardPage";
import { SquadsPage } from "@/pages/SquadsPage";
import { StatsPage } from "@/pages/StatsPage";
import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "oklch(0.11 0.012 240)" }}
    >
      <SiteHeader activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="flex-1">
        {activeTab === "home" && (
          <>
            <HeroSection onNavChange={handleTabChange} />
            <FeaturedContent />
            <LeaderboardSection
              compact
              onViewAll={() => handleTabChange("leaderboards")}
            />
            <CommunityActivity
              compact
              onViewAll={() => handleTabChange("community")}
            />
          </>
        )}
        {activeTab === "squads" && <SquadsPage />}
        {activeTab === "stats" && <StatsPage />}
        {activeTab === "leaderboards" && <LeaderboardPage />}
        {activeTab === "community" && <CommunityPage />}
        {activeTab === "events" && <EventsPage />}
      </main>

      <SiteFooter />
    </div>
  );
}
