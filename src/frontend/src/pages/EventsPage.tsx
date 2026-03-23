import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { eventsData } from "@/data/gameData";
import { Calendar, Clock, Flame, Globe, Trophy, Users } from "lucide-react";
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

export function EventsPage() {
  return (
    <div className="px-4 lg:px-16 py-10">
      <div className="mb-8">
        <h1
          className="section-title text-4xl mb-2"
          style={{ color: "oklch(0.92 0.005 240)" }}
        >
          Upcoming <span style={{ color: "oklch(0.70 0.18 50)" }}>Events</span>
        </h1>
        <p style={{ color: "oklch(0.68 0.01 240)" }}>
          Compete in tournaments and community events. Climb the ranks. Win big.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {eventsData.map((event, i) => (
          <motion.div
            key={event.id}
            data-ocid={`events.item.${i + 1}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-lg border ${glowClasses[event.color]} p-5 flex flex-col gap-4`}
            style={{ background: "oklch(0.14 0.015 240)", borderWidth: "1px" }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {event.status === "live" && (
                    <Badge
                      className="text-xs px-2 py-0.5 animate-pulse_glow"
                      style={{
                        background: "oklch(0.55 0.22 25 / 0.2)",
                        color: "oklch(0.70 0.22 25)",
                        border: "1px solid oklch(0.55 0.22 25 / 0.5)",
                      }}
                    >
                      <Flame className="w-2.5 h-2.5 mr-1" />
                      LIVE
                    </Badge>
                  )}
                  {event.status === "upcoming" && (
                    <Badge
                      className="text-xs px-2 py-0.5"
                      style={{
                        background: "oklch(0.62 0.18 240 / 0.15)",
                        color: "oklch(0.62 0.18 240)",
                        border: "1px solid oklch(0.62 0.18 240 / 0.4)",
                      }}
                    >
                      UPCOMING
                    </Badge>
                  )}
                </div>
                <h3
                  className="font-condensed font-bold text-xl uppercase"
                  style={{ color: "oklch(0.92 0.005 240)" }}
                >
                  {event.name}
                </h3>
              </div>
              <div className="text-right flex-shrink-0">
                <div
                  className="font-condensed font-black text-2xl"
                  style={{ color: accentColors[event.color] }}
                >
                  {event.prizePool}
                </div>
                <div
                  className="text-xs uppercase tracking-wider"
                  style={{ color: "oklch(0.68 0.01 240)" }}
                >
                  Prize Pool
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div
                className="flex items-center gap-2"
                style={{ color: "oklch(0.68 0.01 240)" }}
              >
                <Calendar
                  className="w-3.5 h-3.5"
                  style={{ color: accentColors[event.color] }}
                />
                {event.date}
              </div>
              <div
                className="flex items-center gap-2"
                style={{ color: "oklch(0.68 0.01 240)" }}
              >
                <Clock
                  className="w-3.5 h-3.5"
                  style={{ color: accentColors[event.color] }}
                />
                {event.time}
              </div>
              <div
                className="flex items-center gap-2"
                style={{ color: "oklch(0.68 0.01 240)" }}
              >
                <Globe
                  className="w-3.5 h-3.5"
                  style={{ color: accentColors[event.color] }}
                />
                {event.region}
              </div>
              <div
                className="flex items-center gap-2"
                style={{ color: "oklch(0.68 0.01 240)" }}
              >
                <Trophy
                  className="w-3.5 h-3.5"
                  style={{ color: accentColors[event.color] }}
                />
                {event.mode}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span
                  className="flex items-center gap-1"
                  style={{ color: "oklch(0.68 0.01 240)" }}
                >
                  <Users className="w-3 h-3" /> {event.participants}/
                  {event.maxParticipants} registered
                </span>
                <span
                  style={{
                    color:
                      event.participants < event.maxParticipants
                        ? "oklch(0.75 0.14 170)"
                        : "oklch(0.55 0.22 25)",
                  }}
                >
                  {event.participants < event.maxParticipants
                    ? `${event.maxParticipants - event.participants} spots left`
                    : "Full"}
                </span>
              </div>
              <Progress
                value={(event.participants / event.maxParticipants) * 100}
                className="h-1.5"
              />
            </div>

            <Button
              data-ocid={`events.register_button.${i + 1}`}
              disabled={event.participants >= event.maxParticipants}
              className="w-full font-condensed font-bold uppercase tracking-wider h-9"
              style={{
                background:
                  event.participants < event.maxParticipants
                    ? accentColors[event.color]
                    : "oklch(0.20 0.02 240)",
                color:
                  event.participants < event.maxParticipants
                    ? "oklch(0.11 0.012 240)"
                    : "oklch(0.50 0.01 240)",
                boxShadow:
                  event.participants < event.maxParticipants
                    ? `0 0 15px ${accentColors[event.color]}40`
                    : "none",
              }}
            >
              {event.participants >= event.maxParticipants
                ? "Registration Closed"
                : event.status === "live"
                  ? "Join Now"
                  : "Register"}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
