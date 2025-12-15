import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Shravani Overseas (E-Commerce Platform)",
      description: "A full-stack e-commerce solution with payment integration, user authentication, admin dashboard and user dashboard. Features include product management, shopping cart, order tracking, and secure checkout process.",
      tags: ["Next.js", "MongoDB", "Express.js", "Tailwind CSS", "ShadcnUI"],
      image: "/shravani-img.png",
      liveUrl: "https://www.shravanioverseas.com/",
      // githubUrlFrontend: "https://github.com/tf-technical/Shravni-oversies-frontend",
      // githubUrlBackend: "https://github.com/PRAMOD222/Shravni-Oversies-backend",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      title: "Swarnaras (E-Commerce Platform)",
      description: "A full-stack e-commerce solution with payment integration, user authentication, admin dashboard and user dashboard. Features modern UI with responsive design and smooth user experience.",
      tags: ["Next.js", "MongoDB", "Express.js", "Tailwind CSS", "ShadcnUI"],
      image: "/swarnaras-img.png",
      liveUrl: "https://swarnaras-frontend.vercel.app/",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      title: "FashionClub(Clothing Store:E-Commerce Platform)",
      description: "E-Commerce website for a clothing store with user authentication, admin dashboard and user dashboard built with Cursor AI. Features modern design and seamless shopping experience.",
      tags: ["Next.js", "Javascript", "MongoDB", "Cursor AI"],
      image: "/clothing-img.png",
      liveUrl: "#",
      githubUrl: "https://github.com/KaveriKumbhar/ClothingShop",
      category: "Full Stack"
    },
    {
      title: "Greensmith-solar website",
      description: "It is a static website for a solar company. It is built with Next.js and Tailwind CSS.",
      tags: ["Next.js", "Tailwind CSS", "Gmail-integration"],
      image: "/greensmith-img.png",
      liveUrl: "https://greensmith-solar-website-anyr.vercel.app/",
      githubUrl: "#",
      category: "Static Website"
    },
    {
      title: "Parshv Enterprises",
      description: "It is a static website for a autimation company. It is built with Next.js and Tailwind CSS.",
      tags: ["Next.js", "Tailwind CSS", "Gmail-integration"],
      image: "/parshv-img.png",
      liveUrl: "#",
      githubUrl: "#",
      category: "Static Website"
    },
    {
      title: "Task Manager App",
      description: "It is a dynamic website for a task management application. It is built with Next.js and Tailwind CSS at frontend and Nest JS at backend and PostgreSQL(Supabase and Typeorm) as database.",
      tags: ["Next.js", "Tailwind CSS", "Nest JS", "PostgreSQL", "Supabase", "Typeorm"],
      image: "/task-img.png",
      liveUrl: "https://task-manager-frontend-alpha-eight.vercel.app/",
      githubUrl: "https://github.com/KaveriKumbhar/task-manager-frontend",
      category: "Dynamic Website"
    }
    
  ];

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my skills in web development, from simple websites to complex full-stack applications.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 border border-gray-700 animate-fade-up"
                style={{ animationDelay: `${100 + index * 100}ms` }}
              >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {project.category}
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-4 text-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-gray-700">
                    <Link
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-400 hover:text-white font-medium transition-colors text-sm"
                    >
                      <FiGithub className="w-4 h-4" />
                      Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-4">
              Have a project in mind?
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

