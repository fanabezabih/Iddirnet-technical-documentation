

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ProductOverview() {
  const [currentInfoImage, setCurrentInfoImage] = useState(0);
  const infoImages = ['/images/infor1.png', '/images/infor2.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInfoImage((prev) => (prev + 1) % infoImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [infoImages.length]);

  return (
    <section className="py-5">
      {/* Product Overview */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Product Overview</h2>
      </div>

      <div className="flex justify-center mb-8">
        <Image
          src="/images/phones.png"
          alt="Mobile App Screenshots"
          width={600}
          height={400}
          className="rounded-xl shadow-lg max-w-full h-auto transition-transform hover:scale-102"
        />
      </div>

      <div className="flex justify-center mb-12">
        <Link
          href="https://play.google.com/store/search?q=iddirnet&c=apps&hl=en"
          className="inline-block bg-white text-orange-400 border-2 border-orange-400 hover:border-orange-500 hover:bg-orange-50 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-md"
        >
          Mobile App
        </Link>
      </div>

      {/* Admin Dashboard and Informational Website Section */}
      <section id="admin-dashboard" className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Admin Dashboard */}
          <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Admin Dashboard</h3>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/dashboard.png"
                alt="Admin Dashboard Preview"
                width={900}
                height={700}
                className="rounded-xl max-w-full h-auto shadow-inner"
              />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A web-based dashboard for Iddir administrators to manage members, contributions, events,
              and resources with real-time insights and full control.
            </p>
            <div className="flex justify-center">
              <Link href="https://iddirnet-beige.vercel.app/" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-700 font-medium">
                Explore Dashboard
                <Image
                  src="/images/arrow.png"
                  alt="Go to Admin Dashboard"
                  width={24}
                  height={24}
                  className="transition-transform hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Informational Website */}
          <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Informational Website</h3>
            <div className="flex justify-center mb-4">
              <div className="relative w-full max-w-[900px] aspect-[1160/700] rounded-xl overflow-hidden shadow-inner">
                {infoImages.map((src, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentInfoImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Informational Website Slide ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A public-facing website that explains the IddirNet mission, benefits, and how to get started.
              Designed to educate and onboard new communities.
            </p>
            <div className="flex justify-center">
              <Link href="https://iddirnet.vercel.app/" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-700 font-medium">
                Visit Website
                <Image
                  src="/images/arrow.png"
                  alt="Go to Info Website"
                  width={24}
                  height={24}
                  className="transition-transform hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}