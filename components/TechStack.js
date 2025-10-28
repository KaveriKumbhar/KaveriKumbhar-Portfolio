"use client";

export default function TechStack() {
  const technologies = [
    "Next.js",
    "React.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Material UI",
    "Shadcn UI",
    "Material UI",
    "Express.js",
    "MongoDB",
    "Vercel",
    "Github",
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
      <div className="relative">
        {/* Scrolling Container */}
        <div className="flex animate-scroll">
          {/* First set of technologies */}
          <div className="flex gap-8 px-4 whitespace-nowrap">
            {technologies.map((tech, index) => (
              <span
                key={`first-${index}`}
                className="text-white text-xl md:text-2xl font-semibold"
              >
                {tech} 🔸
              </span>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex gap-8 px-4 whitespace-nowrap" aria-hidden="true">
            {technologies.map((tech, index) => (
              <span
                key={`second-${index}`}
                className="text-white text-xl md:text-2xl font-semibold"
              >
                {tech} 🔸
              </span>
            ))}
          </div>

          {/* Third set for extra smoothness */}
          <div className="flex gap-8 px-4 whitespace-nowrap" aria-hidden="true">
            {technologies.map((tech, index) => (
              <span
                key={`third-${index}`}
                className="text-white text-xl md:text-2xl font-semibold"
              >
                {tech} 🔸
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

