import React from "react";
import Hero from "@/components/about/Hero";
import Team from "@/components/about/Team"

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <div>
        <Hero />
      </div>

      <div>
        <Team/>
      </div>
    </div>
  );
};

export default AboutPage;
