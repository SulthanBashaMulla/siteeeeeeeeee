import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Globe, Layers, ShoppingCart } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to captivate and convert visitors into customers.',
  },
  {
    icon: Layers,
    title: 'Static & Multi-page',
    description: 'Professional websites that showcase your brand with elegance and performance.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Powerful online stores with seamless shopping experiences and secure payments.',
  },
];

export const ServicesPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-gradient-to-b from-background to-card/30">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services We <span className="text-gradient">Provide</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive web solutions tailored to elevate your digital presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => navigate('/services')}
              className="card-premium p-8 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
