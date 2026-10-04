import React from 'react';
import { Project } from '../../types/portfolio';
import { MagneticProjectList } from '../motion/MagneticProjectList';
import { FeaturedProjects } from '../FeaturedProjects';

interface ProjectsPageProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onSelectProject }) => {
  return (
    <div className="w-full min-h-screen pt-20 bg-[#170E08] text-[#FAF7F2]">
      {/* Magnetic Interactive Projects List with Cursor Follow */}
      <MagneticProjectList onSelectProject={onSelectProject} />

      {/* Structured Editorial Case Studies */}
      <div className="border-t border-white/10 bg-[#F4EFEA] text-[#3C2317]">
        <FeaturedProjects onSelectProject={onSelectProject} />
      </div>
    </div>
  );
};
