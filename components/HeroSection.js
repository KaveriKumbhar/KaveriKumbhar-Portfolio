import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 animate-fade-in">
        {/* Profile Photo */}
        <div className="mb-8 inline-block animate-scale-in">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
            <div className="relative w-full h-full p-1">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl shadow-blue-500/50">
                <Image
                  src="/kaveri-photo.jpeg"
                  alt="Kaveri Kumbhar"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Greeting */}
        <h2 className="text-xl md:text-2xl text-gray-400 mb-4 font-medium animate-fade-up">
          Hello, I'm
        </h2>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-fade-up delay-100">
          Kaveri Kumbhar
        </h1>

        {/* Job Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 animate-fade-up delay-200">
          Web Developer
        </h3>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 mt-4 animate-fade-up delay-300"
        >
          Contact Me
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-blue-600/5 to-transparent"></div>
    </section>
  );
}
