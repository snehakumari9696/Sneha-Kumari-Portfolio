/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { SiteNav, PageRoute } from './components/navigation/SiteNav';
import { HomePage } from './components/pages/HomePage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { ExperiencePage } from './components/pages/ExperiencePage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { CustomCursor } from './components/CustomCursor';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types/portfolio';
import { PageTransitionWrapper, PageTransitionMode } from './components/motion/PageTransitionWrapper';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Map each page to its distinct transition mode
  const getPageTransitionMode = (page: PageRoute): PageTransitionMode => {
    switch (page) {
      case 'home':
        return 'split-reveal';
      case 'projects':
        return 'cascade-spring';
      case 'experience':
        return 'depth-zoom';
      case 'about':
        return 'split-reveal';
      case 'contact':
        return 'cascade-spring';
    }
  };

  return (
    <div className="min-h-screen w-full relative bg-[#F4EFEA] text-[#3C2317] antialiased selection:bg-[#A67F54]/25 selection:text-[#3C2317]">
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Top 5-Page Navigation Bar: Home, Projects, Experience, About, Contact */}
      <SiteNav
        currentPage={currentPage}
        onNavigate={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Dynamic Page Routing with Motion Transitions */}
      <main className="w-full">
        {currentPage === 'home' && (
          <PageTransitionWrapper
            pageKey="home-page"
            transitionMode={getPageTransitionMode('home')}
          >
            <HomePage onNavigate={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} />
          </PageTransitionWrapper>
        )}

        {currentPage === 'projects' && (
          <PageTransitionWrapper
            pageKey="projects-page"
            transitionMode={getPageTransitionMode('projects')}
          >
            <ProjectsPage
              onSelectProject={(project) => setSelectedProject(project)}
            />
          </PageTransitionWrapper>
        )}

        {currentPage === 'experience' && (
          <PageTransitionWrapper
            pageKey="experience-page"
            transitionMode={getPageTransitionMode('experience')}
          >
            <ExperiencePage />
          </PageTransitionWrapper>
        )}

        {currentPage === 'about' && (
          <PageTransitionWrapper
            pageKey="about-page"
            transitionMode={getPageTransitionMode('about')}
          >
            <AboutPage />
          </PageTransitionWrapper>
        )}

        {currentPage === 'contact' && (
          <PageTransitionWrapper
            pageKey="contact-page"
            transitionMode={getPageTransitionMode('contact')}
          >
            <ContactPage onOpenResume={() => setIsResumeOpen(true)} />
          </PageTransitionWrapper>
        )}
      </main>

      {/* Deep-Dive Project Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Official Formatted Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
