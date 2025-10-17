import Image from 'next/image';
import SubTitle from './SubTitle';

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Capsule Hotel Experience',
    description: 'Unique travel experience with modern and comfortable capsule hotel accommodation.',
    image: '/images/destinations/tokyo-skyline.jpg',
    link: '/hotels',
  },
  {
    id: 2,
    title: 'Adventure & Discovery',
    description: 'Unforgettable adventures with carefully selected routes worldwide.',
    image: '/images/destinations/santorini-sunset.jpg',
    link: '/tours',
  },
  {
    id: 3,
    title: 'Safe Travel',
    description: 'Safe tour organizations with 24/7 support and experienced team.',
    image: '/images/destinations/dubai-burj-khalifa.jpg',
    link: '/services',
  },
  {
    id: 4,
    title: 'Premium Service',
    description: 'Luxury travel experience with VIP transfers, guides and special organizations.',
    image: '/images/destinations/paris-eiffel.jpg',
    link: '/premium',
  },
];

export default function About() {
  return (
    <section className="relative bg-white py-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="max-w-3xl mb-16">
          <SubTitle text="About Us" />
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Globetrotters
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            We bring the future of travel understanding to today. With capsule hotel technology and carefully 
            planned tour programs, we are redefining the travel experience. Join us for modern, 
            comfortable and unforgettable moments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-black pr-4 relative pt-3">
                    <span className="absolute top-0 left-0 w-12 h-0.5 bg-amber-500"></span>
                    {feature.title}
                  </h4>
                  <a
                    href={feature.link}
                    className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                  <p className="text-gray-600 text-sm leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

