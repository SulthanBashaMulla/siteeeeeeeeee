import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Luxe Fashion',
    category: 'E-commerce',
    description: 'A premium fashion e-commerce platform with seamless shopping experience and elegant product showcases. The platform features advanced filtering, wishlist functionality, and a sophisticated checkout process.',
    challenge: 'The client needed a high-end e-commerce experience that could compete with luxury fashion retailers while maintaining fast performance and conversion optimization.',
    solution: 'We built a custom React-based storefront with Shopify as the backend, implementing lazy loading, image optimization, and a streamlined checkout flow that reduced cart abandonment by 40%.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop',
    techStack: ['React', 'Shopify', 'Tailwind CSS', 'Stripe', 'Framer Motion'],
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'TechFlow SaaS',
    category: 'Landing Page',
    description: 'A high-converting landing page for a B2B SaaS product with stunning animations and clear value propositions. Designed to maximize demo requests and trial signups.',
    challenge: 'The SaaS startup needed a landing page that could clearly communicate their complex product offering while driving conversions and standing out in a crowded market.',
    solution: 'We created an interactive landing page with smooth scroll animations, interactive product demos, and strategically placed CTAs that increased conversion rates by 65%.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    techStack: ['Next.js', 'Framer Motion', 'TypeScript', 'Vercel', 'Tailwind CSS'],
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Artisan Coffee',
    category: 'Multi-page',
    description: 'A beautiful multi-page website for a specialty coffee brand featuring their story, products, and locations. The design emphasizes craftsmanship and artisanal quality.',
    challenge: 'The coffee brand wanted to convey their artisanal approach and premium quality through their digital presence while making it easy for customers to find their stores.',
    solution: 'We designed a visually rich website with immersive storytelling, integrated store locator, and a CMS for easy content updates. The site saw a 120% increase in store visits.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop',
    techStack: ['React', 'Sanity CMS', 'GSAP', 'Netlify', 'Mapbox'],
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'Wellness Studio',
    category: 'Landing Page',
    description: 'A calming, elegant landing page for a premium wellness and yoga studio with booking integration. The design promotes tranquility and mindfulness.',
    challenge: 'The wellness studio needed a digital presence that reflected their peaceful atmosphere while making class booking seamless and intuitive.',
    solution: 'We created a zen-inspired design with soft animations, integrated Calendly for bookings, and optimized for mobile users who often book on-the-go.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&h=800&fit=crop',
    techStack: ['React', 'Tailwind CSS', 'Calendly API', 'Vercel', 'Framer Motion'],
    liveUrl: '#',
  },
  {
    id: 5,
    title: 'Urban Realty',
    category: 'Multi-page',
    description: 'A sophisticated real estate platform with property listings, virtual tours, and agent profiles. Built to serve both buyers and sellers with a premium experience.',
    challenge: 'The real estate agency needed a platform that could showcase high-value properties with the sophistication they deserved while providing powerful search and filtering.',
    solution: 'We built a full-featured platform with interactive maps, virtual tour integration, and an agent dashboard. Listing inquiries increased by 200%.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop',
    techStack: ['Next.js', 'Supabase', 'Mapbox', 'Stripe', 'TypeScript'],
    liveUrl: '#',
  },
  {
    id: 6,
    title: 'Gourmet Delights',
    category: 'E-commerce',
    description: 'An upscale food delivery platform featuring curated restaurants and seamless ordering experience. Designed for food enthusiasts seeking premium dining at home.',
    challenge: 'The client wanted to differentiate from mainstream delivery apps by focusing on premium restaurants and a curated, high-end experience.',
    solution: 'We created a marketplace platform with chef profiles, curated collections, and a sophisticated ordering system that increased average order value by 45%.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
    liveUrl: '#',
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <Layout>
        <div className="section-padding container-premium text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/projects')}
            className="btn-hero"
          >
            Back to Projects
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Back Button */}
      <div className="container-premium pt-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </motion.button>
      </div>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="card-premium overflow-hidden"
          >
            <div className="aspect-[16/9] lg:aspect-[21/9]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32">
        <div className="container-premium">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <p className="text-primary font-medium mb-3">{project.category}</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                  {project.description}
                </p>

                {/* Challenge */}
                <div className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Tech Stack */}
              <div className="card-premium p-6">
                <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Link */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero w-full flex items-center justify-center gap-2"
              >
                View Live Site
                <ExternalLink size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetails;
