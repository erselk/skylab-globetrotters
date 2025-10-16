'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import SubTitle from './SubTitle';

type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: string;
};

const team: TeamMember[] = [
  { id: 1, name: 'Donald D. Schafer', position: 'CEO & Founder', image: '/images/team/donald-schafer.jpg' },
  { id: 2, name: 'Jane Cooper', position: 'COO', image: '/images/team/jane-cooper.jpg' },
  { id: 3, name: 'Wade Warren', position: 'CTO', image: '/images/team/wade-warren.jpg' },
  { id: 4, name: 'Esther Howard', position: 'CMO', image: '/images/team/esther-howard.jpg' },
  { id: 5, name: 'Theresa Webb', position: 'Lead Guide', image: '/images/team/theresa-webb.jpg' },
  { id: 6, name: 'Cody Fisher', position: 'Product Manager', image: '/images/team/cody-fisher.jpg' },
];

export default function TeamSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center mb-12">
          <SubTitle text="Our Team" />
          <h2 className="text-3xl lg:text-5xl font-bold text-black">Meet Our Team</h2>
          <p className="text-gray-600 mt-4">Meet our expert and passionate team members.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.id} className="group rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-bold text-black">{member.name}</h4>
                  <p className="text-gray-600 mt-2">{member.position}</p>

                  <div className="h-2" />

                  <div className="h-px w-32 bg-black/10" />

                  <div className="h-4" />

                  <ul className="flex items-center gap-4">
                    <li>
                      <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-amber-500 transition-colors duration-500 ease-out">
                        <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-amber-500 transition-colors duration-500 ease-out">
                        <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-amber-500 transition-colors duration-500 ease-out">
                        <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-amber-500 transition-colors duration-500 ease-out">
                        <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


