import { lazy, Suspense } from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';

const About = lazy(() => import('../components/About'));
const Skills = lazy(() => import('../components/Skills'));
const Projects = lazy(() => import('../components/Projects'));
const Experience = lazy(() => import('../components/Experience'));
const Services = lazy(() => import('../components/Services'));
const Achievements = lazy(() => import('../components/Achievements'));
const Contact = lazy(() => import('../components/Contact'));

function SectionLoader() {
  return (
    <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="spinner-border text-info" role="status" style={{ width: '2rem', height: '2rem' }} />
    </div>
  );
}

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Achievements />
        <Contact />
      </Suspense>
    </MainLayout>
  );
}
