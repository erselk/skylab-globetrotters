import Breadcrumb from "@/components/Breadcrumb";
import ToursGrid from "@/components/ToursGrid";
import ToursSearchBox from "@/components/ToursSearchBox";

export const dynamic = "force-static";

export default function ToursPage() {
  return (
    <main className="pb-16">
      <Breadcrumb title="Our Tours" backgroundImageSrc="/images/destinations/santorini-sunset.jpg" />
      <ToursSearchBox />
      <section className="mt-10">
        <ToursGrid />
      </section>
    </main>
  );
}


