import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FiAward, FiUsers, FiTrendingUp, FiHeart } from "react-icons/fi";

export const metadata = {
  title: "About | Kaveri Kumbhar",
  description: "Learn more about Kaveri Kumbhar - Web Developer, skills, experience, and journey.",
};

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React.js", "Next.js", "JavaScript","TypeScript", "HTML", "CSS", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "Gmail-integration", "OAuth-Integration", "REST APIs"] },
    { category: "Tools & Others", items: ["Git & GitHub", "VS Code", "Responsive Design"] },
  ];

  const stats = [
    { icon: <FiAward />, number: "7+", label: "Projects Completed" },
    { icon: <FiUsers />, number: "3+", label: "Happy Clients" },
    { icon: <FiTrendingUp />, number: "4+", label: "Months Experience" },
    { icon: <FiHeart />, number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Passionate web developer dedicated to creating beautiful, functional, and user-friendly digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image/Avatar */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Gradient Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 rounded-full animate-pulse"></div>
                
                {/* Image Container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 p-2">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl shadow-blue-500/50">
                    <Image
                      src="/kaveri-photo.jpeg"
                      alt="Kaveri Kumbhar"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/30 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                Hi, I'm Kaveri Kumbhar
              </h2>
              <p className="text-gray-400 leading-relaxed">
                I'm a passionate web developer with expertise in building modern, responsive, and user-friendly web applications. 
                With a strong foundation in both frontend and backend technologies, I specialize in the MERN stack and create 
                seamless digital experiences.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My journey in web development started with a curiosity about how websites work, and has evolved into a 
                professional career where I help businesses and individuals bring their ideas to life through code.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I believe in writing clean, maintainable code and staying updated with the latest web technologies and 
                best practices. Every project is an opportunity to learn something new and deliver exceptional results.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {/* TF Strategy Pvt. Ltd. */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all animate-fade-up">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h3 className="text-2xl font-semibold text-white">Web Developer</h3>
                <p className="text-blue-300 font-medium">TF Strategy Pvt. Ltd., Kolhapur <span className="ml-2 text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-200 align-middle">Currently Working</span></p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Contributed to full‑stack development tasks, improving UI and backend efficiency.</li>
                <li>Recognized as Developer of the Month for outstanding performance.</li>
              </ul>
            </div>

            {/* LandCheck Pvt. Ltd. */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all animate-fade-up delay-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h3 className="text-2xl font-semibold text-white">Frontend Development Intern</h3>
                <p className="text-blue-300 font-medium">LandCheck Pvt. Ltd., Chennai</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Assisted in developing the frontend using React.js and Tailwind CSS.</li>
                <li>Collaborated with senior developers to build user‑friendly, high‑performance interfaces.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 animate-fade-up">
              <h3 className="text-xl font-semibold text-white mb-1">B.Tech, Computer Science & Engineering</h3>
              <p className="text-blue-300 mb-2">Sant Gajanan Maharaj College of Engineering, Mahagaon</p>
              <p className="text-gray-400">2021 – 2025 • CGPA: 9</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 animate-fade-up delay-100">
              <h3 className="text-xl font-semibold text-white mb-1">12th (HSC)</h3>
              <p className="text-blue-300 mb-2">M. R. Jr. College, Gadhinglaj (2021)</p>
              <p className="text-gray-400">Marks: 94.50%</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 animate-fade-up delay-200">
              <h3 className="text-xl font-semibold text-white mb-1">10th (SSC)</h3>
              <p className="text-blue-300 mb-2">S. M. High School, Basarge (2019)</p>
              <p className="text-gray-400">Marks: 92.20%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${100 + index * 100}ms` }}>
                <div className="text-4xl mb-3 flex justify-center text-white">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 animate-fade-up"
                style={{ animationDelay: `${100 + index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {skillSet.category}
                </h3>
                <div className="space-y-3">
                  {skillSet.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 text-gray-300 bg-gray-800/50 px-4 py-2 rounded-lg animate-fade-in"
                      style={{ animationDelay: `${200 + skillIndex * 50}ms` }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            My Philosophy
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-6">
            "Great web development is not just about writing code—it's about solving problems, 
            creating experiences, and making a positive impact on people's lives through technology."
          </p>
          <p className="text-gray-400 leading-relaxed">
            I approach every project with dedication, creativity, and a commitment to excellence. 
            Whether it's a simple landing page or a complex web application, I strive to deliver 
            solutions that exceed expectations.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
