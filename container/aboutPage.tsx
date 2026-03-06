import React from "react";
import Hero from "@/components/about/Hero";
import Team from "@/components/about/Team"
import { getTeamMembers, getStats } from "@/sanity/lib/data";

export default async function AboutPage() {
  const members = await getTeamMembers();
  const stats = await getStats();
 
  console.log(members);
  return (
    <div className="min-h-screen">
      <div>
        <Hero stats={stats}/>
      </div>

      <div>
        <Team members={members}/>
      </div>
    </div>
  );
};
