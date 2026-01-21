import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Luxe Fashion',
    category: 'E-commerce',
    description: 'A premium fashion e-commerce platform with seamless shopping experience and elegant product showcases.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    techStack: ['React', 'Shopify', 'Tailwind CSS', 'Stripe'],
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'TechFlow SaaS',
    category: 'Landing Page',
    description: 'A high-converting landing page for a B2B SaaS product with stunning animations and clear value propositions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    techStack: ['Next.js', 'Framer Motion', 'TypeScript', 'Vercel'],
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Artisan Coffee',
    category: 'Multi-page',
    description: 'A beautiful multi-page website for a specialty coffee brand featuring their story, products, and locations.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
    techStack: ['React', 'Sanity CMS', 'GSAP', 'Netlify'],
    liveUrl: '#',
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
  {
    id: 6,
    title: 'Gourmet Delights',
    category: 'E-commerce',
    description: 'An upscale food delivery platform featuring curated restaurants and seamless ordering experience.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
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
