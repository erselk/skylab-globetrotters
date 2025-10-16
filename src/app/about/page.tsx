import Breadcrumb from '@/components/Breadcrumb';
import Availability from '@/components/Availability';
import WhoWeAre from '@/components/WhoWeAre';
import ReadyToTravel from '@/components/ReadyToTravel';
import Testimonials from '@/components/Testimonials';
import TeamSection from '@/components/TeamSection';

export const dynamic = 'force-static';

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Breadcrumb title="About Us" backgroundImageSrc="/images/destinations/santorini-sunset.jpg" />

      <Availability />

      <WhoWeAre />

      <TeamSection />

      <ReadyToTravel />

      <Testimonials />
    </main>
  );
}


