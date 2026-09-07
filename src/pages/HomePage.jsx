import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import PillarsSection from '../components/PillarsSection';
import ActionsSection from '../components/ActionsSection';
import CallToAction from '../components/CallToAction';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PillarsSection />
      <ActionsSection />
      <CallToAction />
    </>
  );
}