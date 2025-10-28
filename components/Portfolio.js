import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Shravani Overseas (E-Commerce Platform)",
      description: "A full-stack e-commerce solution with payment integration, user authentication, admin dashboard and user dashboard.",
      tags: ["Next.js", "MongoDB", "Express.js", "Tailwind CSS","ShadcnUI"],
      image: "/shravani-img.png",
      liveUrl: "https://www.shravanioverseas.com/",
      // githubUrlFrontend: "https://github.com/tf-technical/Shravni-oversies-frontend",
      // githubUrlBackend: "https://github.com/PRAMOD222/Shravni-Oversies-backend",
    },
    {
      title: "Swarnaras (E-Commerce Platform)",
      description: "A full-stack e-commerce solution with payment integration, user authentication, admin dashboard and user dashboard.",
      tags: ["Next.js", "MongoDB", "Express.js", "Tailwind CSS","ShadcnUI"],
      image: "/swarnaras-img.png",
      liveUrl: "https://swarnaras-frontend.vercel.app/",
      // githubUrl: "#",
    },
    {
      title: "Clothing Store (E-Commerce Platform)",
      description: "E-Commerce website for a clothing store with user authentication, admin dashboard and user dashboard build with a Cursor AI.",
      tags: ["Next.js", "Javascript", "MongoDB", "Cursor AI"],
      image: "/clothing-img.png",
      liveUrl: "#",
      githubUrl: "https://github.com/KaveriKumbhar/ClothingShop",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-800 to-gray-900" id="portfolio">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Top Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Case Study
          </p>
        </div>

        {/* Projects Grid */}
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
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    <FiExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-400 hover:text-white font-medium transition-colors"
                  >
                    <FiGithub className="w-5 h-5" />
                    Code
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}

