import { Shield } from "lucide-react";

const footerLinks = {
  SITE: ["Home", "About", "Contact", "Privacy Policy", "Terms of Service"],
  SQUADS: [
    "Find a Squad",
    "Create a Squad",
    "Squad Rankings",
    "Recruitment Board",
  ],
  LEADERBOARDS: [
    "Global Ranks",
    "Regional Rankings",
    "Season History",
    "Hall of Fame",
  ],
  COMMUNITY: ["News & Updates", "Guides", "Tournaments", "Discord"],
};

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="mt-auto"
      style={{
        background: "oklch(0.09 0.01 240)",
        borderTop: "1px solid oklch(0.25 0.025 240)",
      }}
    >
      <div className="px-4 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-56 flex-shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{ background: "oklch(0.70 0.18 50)" }}
              >
                <Shield
                  className="w-4 h-4"
                  style={{ color: "oklch(0.11 0.012 240)" }}
                />
              </div>
              <span
                className="font-condensed font-black text-base tracking-widest uppercase"
                style={{ color: "oklch(0.92 0.005 240)" }}
              >
                BATTLE{" "}
                <span style={{ color: "oklch(0.70 0.18 50)" }}>BOOYAH</span> HUB
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.68 0.01 240)" }}
            >
              The ultimate gaming community for competitive players. Track
              stats, find squads, and dominate the leaderboards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4
                  className="section-title text-xs mb-3"
                  style={{ color: "oklch(0.70 0.18 50)" }}
                >
                  {title}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <button
                        type="button"
                        className="text-sm hover:text-white transition-colors text-left"
                        style={{ color: "oklch(0.68 0.01 240)" }}
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-10 pt-6"
          style={{ borderTop: "1px solid oklch(0.25 0.025 240)" }}
        >
          <p className="text-xs" style={{ color: "oklch(0.68 0.01 240)" }}>
            © {year} Battle Booyah Hub. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "oklch(0.68 0.01 240)" }}>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              style={{ color: "oklch(0.70 0.18 50)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
