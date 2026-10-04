import React from 'react';
import { ExperienceDepthView } from '../motion/ExperienceDepthView';
import { ExperienceSection } from '../ExperienceSection';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-20 bg-[#120B07] text-[#FAF7F2]">
      {/* 3D Depth View */}
      <ExperienceDepthView />

      {/* Accordion Detail Breakdown */}
      <div className="border-t border-white/10 bg-[#F4EFEA] text-[#3C2317]">
        <ExperienceSection />
      </div>
    </div>
  );
};
