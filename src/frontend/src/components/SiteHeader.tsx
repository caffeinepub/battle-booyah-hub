import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Bell, Search, Settings, Shield, Zap } from "lucide-react";

interface SiteHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navLinks = [
  { id: "home", label: "Home" },
  { id: "squads", label: "Squads" },
  { id: "stats", label: "Stats" },
  { id: "leaderboards", label: "Leaderboards" },
  { id: "community", label: "Community" },
  { id: "events", label: "Events" },
];

export function SiteHeader({ activeTab, onTabChange }: SiteHeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: "oklch(0.11 0.012 240 / 0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid oklch(0.25 0.025 240)",
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 lg:px-8 h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div
            className="w-9 h-9 rounded flex items-center justify-center"
            style={{
              background: "oklch(0.70 0.18 50)",
              boxShadow: "0 0 12px oklch(0.70 0.18 50 / 0.5)",
            }}
          >
            <Shield
              className="w-5 h-5"
              style={{ color: "oklch(0.11 0.012 240)" }}
            />
          </div>
          <span
            className="font-condensed font-black text-lg tracking-widest uppercase hidden sm:block"
            style={{ color: "oklch(0.92 0.005 240)" }}
          >
            BATTLE <span style={{ color: "oklch(0.70 0.18 50)" }}>BOOYAH</span>{" "}
            HUB
          </span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-sm mx-4 hidden md:block">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
              style={{ color: "oklch(0.68 0.01 240)" }}
            />
            <Input
              data-ocid="header.search_input"
              placeholder="Search players, squads..."
              className="pl-9 h-9 rounded-full text-sm border-0"
              style={{
                background: "oklch(0.17 0.02 240)",
                color: "oklch(0.92 0.005 240)",
                borderColor: "oklch(0.25 0.025 240)",
              }}
            />
          </div>
        </div>

        {/* User area */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            data-ocid="header.search_input"
            className="md:hidden w-8 h-8 flex items-center justify-center rounded"
            style={{ color: "oklch(0.68 0.01 240)" }}
          >
            <Search className="w-4 h-4" />
          </button>
          <div className="relative">
            <button
              type="button"
              data-ocid="header.toggle"
              className="w-8 h-8 flex items-center justify-center rounded"
              style={{ color: "oklch(0.68 0.01 240)" }}
            >
              <Bell className="w-4 h-4" />
            </button>
            <span
              className="absolute top-1 right-1 w-2 h-2 rounded-full"
              style={{ background: "oklch(0.55 0.22 25)" }}
            />
          </div>
          <button
            type="button"
            data-ocid="header.toggle"
            className="w-8 h-8 flex items-center justify-center rounded"
            style={{ color: "oklch(0.68 0.01 240)" }}
          >
            <Settings className="w-4 h-4" />
          </button>
          <div
            className="flex items-center gap-2 pl-3"
            style={{ borderLeft: "1px solid oklch(0.25 0.025 240)" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-condensed font-bold text-sm flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.70 0.18 50), oklch(0.63 0.22 300))",
                color: "oklch(0.92 0.005 240)",
              }}
            >
              PG
            </div>
            <div className="hidden sm:block">
              <div
                className="font-semibold text-sm leading-tight"
                style={{ color: "oklch(0.92 0.005 240)" }}
              >
                Phoenix_Gamer
              </div>
              <div
                className="text-xs flex items-center gap-1"
                style={{ color: "oklch(0.70 0.18 50)" }}
              >
                <Zap className="w-3 h-3" />
                Rank: Apex
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav row */}
      <nav className="flex items-center justify-center gap-1 px-4 h-10 overflow-x-auto">
        {navLinks.map((link) => (
          <button
            type="button"
            key={link.id}
            data-ocid={`nav.${link.id}.link`}
            onClick={() => onTabChange(link.id)}
            className="nav-link px-3 py-1 relative transition-colors whitespace-nowrap"
            style={{
              color:
                activeTab === link.id
                  ? "oklch(0.70 0.18 50)"
                  : "oklch(0.68 0.01 240)",
            }}
          >
            {link.label}
            {activeTab === link.id && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                style={{
                  background: "oklch(0.70 0.18 50)",
                  boxShadow: "0 0 8px oklch(0.70 0.18 50)",
                }}
              />
            )}
          </button>
        ))}
      </nav>
    </header>
  );
}
