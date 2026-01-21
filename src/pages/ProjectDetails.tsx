import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'NDC college',
    category: 'Multi-page static site',
    description: 'A modern and premium college website designed to deliver a seamless digital experience for students, faculty, and visitors. The platform features structured academic information, event highlights, admissions guidance, and an elegant UI that reflects the institution’s values and excellence.',

challenge: 'NDC College required a high-quality digital presence that could represent its academic reputation, improve student engagement, and provide fast, easy access to essential information across all devices.',

solution: 'We developed a custom Javascript based website with performance-first architecture, implementing lazy loading, optimized media assets, and an intuitive navigation structure. The result was faster load times, improved accessibility, and a significant increase in user engagement and enquiry conversions.',
    image: 'https://i.postimg.cc/15R8gMRz/6970c6f3d78ea0421218bed3.jpg',
    techStack: ['Html5', 'css3', 'Tailwind CSS', 'Javascript', 'Dynamic animations'],
    liveUrl: 'https://preview-ndc.onrender.com/',
  },
  {
    id: 2,
    title: 'Portofolio',
    category: 'Dynamic page',
    description: 'A modern and professional portfolio website designed to showcase my skills, projects, and services with a clean, premium user experience. The platform highlights selected works, technical expertise, and contact pathways through an elegant and responsive interface.',

challenge: 'I needed a personal portfolio that clearly communicates my capabilities, stands out visually, and performs smoothly across devices while remaining easy for recruiters and clients to navigate.',

solution: 'I built a custom React-based portfolio website with a performance-first mindset, implementing lazy loading, optimized assets, and smooth animations. The result is a fast, visually refined site that effectively presents my work and improves engagement and inquiries.',
    image: 'https://i.postimg.cc/28j1qTjS/6970c6bf397b6140795952f6.jpg',
    techStack: ['React.js', 'Framer Motion', 'TypeScript', 'Vercel', 'Tailwind CSS'],
    liveUrl: 'https://sulthanbasha27-portfolio.vercel.app',
  },
  {
    id: 3,
    title: 'CurrencY',
    category: 'Multi-page',
    description: 'A modern hardware and building-materials store website developed for Currency, offering products such as hinges, steel components, and other industrial supplies. The platform presents products in a clean, organized layout that makes browsing and selection simple for customers.',

challenge: 'Currency needed a digital storefront that could clearly showcase a wide range of hardware products while remaining easy to navigate, fast to load, and accessible for both retail and bulk buyers.',

solution: 'I built a React-based store website with structured product categorization, optimized images, and responsive layouts. The site focuses on performance and usability, enabling customers to quickly find products and submit enquiries, resulting in improved engagement and lead generation.',
    image: 'https://i.postimg.cc/NfGKybGc/6970c69fd2d2e0761602c015.jpg',
    techStack: ['React.js', 'vercel', 'Typescript', 'Framer-motion', 'spck editor'],
    liveUrl: 'https://currency-store-site.vercel.app/',
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
