import Image from 'next/image';

export default function TargetUsers() {
  return (
    <section className="py-5">
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our target users?</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Our target audience comprises the esteemed leaders and dedicated members of an iddir,
            actively engaged on the vibrant platform, where they collaborate, connect, and contribute
            to their community's shared goals with passion and purpose.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/images/target.png"
            alt="Target Users Icon"
            width={400}
            height={400}
            className="max-w-full h-auto animate-rotate-slow"
          />
        </div>
      </div>
    </section>
  );
}