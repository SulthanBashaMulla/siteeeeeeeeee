import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Luxe Fashion',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'TechFlow SaaS',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Artisan Coffee',
    category: 'Multi-page',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Wellness Studio',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Urban Realty',
    category: 'Multi-page',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
  },
];

export const RecentWorks = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 340;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="section-padding bg-gradient-to-b from-card/30 to-background">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Recent <span className="text-gradient">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Explore our latest projects and see how we bring ideas to life
            </p>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => navigate(`/projects/${project.id}`)}
                className="flex-shrink-0 w-80 snap-center cursor-pointer group"
              >
                <div className="card-premium overflow-hidden">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-primary text-sm font-medium mb-1">{project.category}</p>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
