

import React from "react";
import Hero from "@/components/about/Hero";
import Team from "@/components/about/Team";
import { getTeamMembers, getStats, getSiteSettings } from "@/sanity/lib/data";

export default async function AboutPage() {
  // ── Fetch all three in parallel — faster than awaiting one by one ─────────
  const [members, stats, settings] = await Promise.all([
    getTeamMembers(),
    getStats(),
    getSiteSettings(),
  ]);

  return (
    <div className="min-h-screen">
      <Hero
        stats={stats}
        mission={settings.mission}
        vision={settings.vision}
      />
      <Team members={members} />
    </div>
  );
}