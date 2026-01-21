import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Globe, Layers, ShoppingCart, Check, Zap, Shield, Palette, Code } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Landing Page Websites',
    description: 'High-converting landing pages designed to captivate visitors and drive conversions. Perfect for product launches, marketing campaigns, and lead generation.',
    features: [
      'Conversion-optimized design',
      'A/B testing ready',
      'Fast loading speeds',
      'Mobile-first approach',
      'SEO optimized',
      'Analytics integration',
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
  },
  {
    icon: Layers,
    title: 'Static & Multi-page Websites',
    description: 'Professional websites that showcase your brand with elegance and performance. Ideal for businesses, portfolios, and corporate presentations.',
    features: [
      'Custom design & branding',
      'Multiple page layouts',
      'Blog integration',
      'Contact forms',
      'CMS integration',
      'Performance optimized',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Sanity CMS', 'Netlify'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Websites',
    description: 'Powerful online stores with seamless shopping experiences and secure payment processing. Scale your business with a world-class e-commerce platform.',
    features: [
      'Product management',
      'Secure payments',
      'Inventory tracking',
      'Order management',
      'Customer accounts',
      'Analytics dashboard',
    ],
    techStack: ['React', 'Shopify', 'Stripe', 'Supabase', 'Next.js'],
  },
];

const whyUs = [
  { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
  { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security for all projects' },
  { icon: Palette, title: 'Custom Design', desc: 'Unique designs tailored to your brand' },
  { icon: Code, title: 'Clean Code', desc: 'Maintainable, scalable codebase' },
];

const Services = () => {
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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Comprehensive web solutions designed to elevate your digital presence 
              and drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-20">
        <div className="container-premium space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`card-premium p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <service.icon className="w-24 h-24 text-primary/50" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card/30">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient">Us</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Partner with us for exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
