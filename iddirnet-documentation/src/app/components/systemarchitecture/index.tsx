import Image from 'next/image';

export default function SystemArchitecture() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold text-orange-500 mb-8">System Architecture</h2>

      {/* Clickable Architecture Diagram */}
      <div className="flex justify-center mb-12">
        <a
          href="https://lucid.app/lucidchart/5b591621-374c-4fe3-8fe9-f8877f7ce3ba/edit?invitationId=inv_5efca279-a249-403a-819a-90fb701e0782&page=0_0#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform duration-300 hover:scale-102 focus:outline-none"
        >
          <Image
            src="/images/System architecture.png"
            alt="System Architecture Diagram"
            width={1200}
            height={600}
            className="rounded-xl shadow-lg max-w-full h-auto mx-auto"
          />
        </a>
      </div>

      {/* Backend & Database Details */}
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Backend (API) */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Backend (API)</h3>
          <div className="w-24 h-1 bg-orange-500 rounded-full mb-4"></div>
          <p className="text-gray-700 leading-relaxed max-w-2xl text-center">
            Django REST Framework handles API endpoints, managing HTTP requests, data serialization, validation, and authentication.
          </p>
        </div>

        {/* Database */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Database</h3>
          <div className="w-24 h-1 bg-orange-500 rounded-full mb-4"></div>
          <p className="text-gray-700 leading-relaxed max-w-2xl text-center">
            PostgreSQL for relational data storage, ensuring reliability, ACID compliance, and scalability for Iddir communities.
          </p>
        </div>
      </div>
    </section>
  );
}