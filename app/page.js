import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-cyan-50 flex flex-col items-center justify-center py-8 sm:py-12 md:py-20 px-2">
      <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-center px-2 sm:px-4 md:px-12">
        <div className="flex flex-col gap-6 sm:gap-8 items-start justify-center animate-fade-in md:pl-8">
          <h1 className="text-2xl md:text-4xl font-semibold text-cyan-800 leading-tight tracking-tight">
            BlinkURL <span className="text-cyan-500">— Short links in a blink!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl font-normal md:font-light">
            The trusted, privacy-first URL shortener for professionals, teams, and creators. Instantly create memorable, branded links for your business, portfolio, or campaigns.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="/shorten">
              <button className="bg-cyan-700 hover:bg-cyan-800 text-white shadow-xl rounded-lg px-8 py-3 font-bold text-lg transition duration-200">
                Get Started
              </button>
            </Link>
            <Link href="/about">
              <button className="bg-white border-2 border-cyan-700 text-cyan-700 hover:bg-cyan-50 shadow-lg rounded-lg px-8 py-3 font-semibold text-lg transition duration-200">
                Learn More
              </button>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 mt-8 items-center">
            <span className="text-gray-500 text-base">Trusted by:</span>
            <span className="font-semibold text-cyan-700">Startups</span>
            <span className="font-semibold text-cyan-700">Marketers</span>
            <span className="font-semibold text-cyan-700">Developers</span>
            <span className="font-semibold text-cyan-700">Educators</span>
          </div>
        </div>
        <div className="flex justify-center items-center relative min-h-75 animate-fade-in-up">
          <div className="w-full h-80 md:h-105 relative">
            <Image
              className="rounded-2xl shadow-2xl object-cover object-center border-4 border-cyan-100"
              src="/vector.jpg"
              alt="Professional URL Shortener Illustration"
              fill
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
