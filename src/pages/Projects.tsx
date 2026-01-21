import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'NDC college',
  category: 'Multi-page static site',
  description: 'A modern and premium college website designed to deliver a seamless digital experience for students, faculty, and visitors.',
    image: 'https://i.postimg.cc/15R8gMRz/6970c6f3d78ea0421218bed3.jpg',
  techStack: ['Html5', 'css3', 'Tailwind CSS', 'Javascript', 'Dynamic animations'],
  liveUrl: 'https://preview-ndc.onrender.com/',
  },
  {
    id: 2,
    title: 'Portofolio',
  category: 'Dynamic page',
  description: 'A modern and professional portfolio website designed to showcase my skills, projects, and services with a clean, premium user experience. ',
    image: 'https://i.postimg.cc/28j1qTjS/6970c6bf397b6140795952f6.jpg',
  techStack: ['React.js', 'Framer Motion', 'TypeScript', 'Vercel', 'Tailwind CSS'],
  liveUrl: 'https://sulthanbasha27-portfolio.vercel.app',
  },
  {
    id: 3,
    title: 'CurrencY',
  category: 'Multi-page',
  description: 'A modern hardware and building-materials store website developed for Currency, offering products such as hinges, steel components, and other industrial supplies.',
    image: 'https://i.postimg.cc/NfGKybGc/6970c69fd2d2e0761602c015.jpg',
  techStack: ['React.js', 'vercel', 'Typescript', 'Framer-motion', 'spck editor'],
  liveUrl: 'https://currency-store-site.vercel.app/',
  },
  {
    id: 4,
    title: 'Wellness Studio',
    category: 'Landing Page',
    description: 'A calming, elegant landing page for a premium wellness and yoga studio with booking integration.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop',
    techStack: ['React', 'Tailwind CSS', 'Calendly API', 'Vercel'],
    liveUrl: '#',
  },
  {
    id: 5,
    title: 'Urban Realty',
    category: 'Multi-page',
    description: 'A sophisticated real estate platform with property listings, virtual tours, and agent profiles.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    techStack: ['Next.js', 'Supabase', 'Mapbox', 'Stripe'],
    liveUrl: '#',
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Explore our portfolio of stunning digital experiences we've crafted for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => navigate(`/projects/${project.id}`)}
                className="card-premium overflow-hidden cursor-pointer group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-primary text-sm font-medium mb-2">{project.category}</p>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
