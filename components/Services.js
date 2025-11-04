import { FiCode, FiLayout, FiSearch, FiServer, FiTrendingUp, FiTool } from "react-icons/fi";

export default function Services() {
  const services = [
    {
      icon: <FiCode className="w-12 h-12" />,
      title: "Static Web Development",
      description: "Create a fast, secure, and easy-to-maintain static website for a strong and reliable online presence.",
    },
    {
      icon: <FiLayout className="w-12 h-12" />,
      title: "Dynamic Web Development",
      description: "Develop interactive, responsive dynamic websites tailored to your business needs, ensuring engagement and scalability.",
    },
    // {
    //   icon: <FiSearch className="w-12 h-12" />,
    //   title: "Expert SEO Services",
    //   description: "Boost your website's search engine ranking and attract more organic traffic with comprehensive SEO strategies.",
    // },
    {
      icon: <FiTrendingUp className="w-12 h-12" />,
      title: "Innovative Web Design",
      description: "Design visually stunning, user-friendly websites that reflect your brand and captivate your audience.",
    },
    {
      icon: <FiServer className="w-12 h-12" />,
      title: "Reliable Web Hosting on Vercel",
      description: "Provide secure, fast, and scalable hosting to ensure your website is always accessible and performing optimally.",
    },
    {
      icon: <FiTool className="w-12 h-12" />,
      title: "Comprehensive Web Upgrade",
      description: "Keep your website up-to-date with regular upgrades, security patches, and maintenance for optimal performance.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3 animate-fade-up">
            SKILLS
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white animate-fade-up delay-100">
            SKILLS  
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 animate-fade-up ${index===0?"":""}`}
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6 text-blue-500 group-hover:text-purple-500 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

