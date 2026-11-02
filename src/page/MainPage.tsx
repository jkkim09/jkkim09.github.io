import Hero from '../components/main/Hero';
import Introduction from '../components/main/Introduction';
import Skills from '../components/main/Skills';
import Experience from '../components/main/Experience';
import CareerTimeline from '../components/main/CareerTimeline';

export default function MainPage() {
  return (
    <main id="main-content" className="min-w-0 bg-black text-white">
      <Hero />
      <Introduction />
      <Skills />
      <Experience />
      <CareerTimeline />
    </main>
  );
}
