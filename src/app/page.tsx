import Hero from '@/components/Hero';
import About from '@/components/About';
import PopularDestinations from '@/components/PopularDestinations';
import PopularServices from '@/components/PopularServices';
import FeaturedFeatures from '@/components/FeaturedFeatures';
import ReadyToTravel from '@/components/ReadyToTravel';
import StatsSection from '@/components/StatsSection';
import Testimonials from '@/components/Testimonials';
import BlogSection from '@/components/BlogSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      <About />

      <PopularDestinations />

      <PopularServices />

      <FeaturedFeatures />

      <ReadyToTravel />

      <StatsSection />

      <Testimonials />

      <BlogSection />
    </main>
  );
}
