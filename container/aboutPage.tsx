import React from "react";
import Hero from "@/components/about/Hero";
import Team from "@/components/about/Team"
import { getTeamMembers } from "@/sanity/lib/data";

export default async function AboutPage() {
  const members = await getTeamMembers()
 
  console.log(members);
  return (
    <div className="min-h-screen">
      <div>
        <Hero />
      </div>

      <div>
        <Team members={members}/>
      </div>
    </div>
  );
};
