import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';

const About = () => {
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
              About <span className="text-gradient">WybZite</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We are a premium digital agency dedicated to crafting exceptional web experiences 
              that drive business growth and leave lasting impressions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-card/30">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2025, WybZite emerged from a shared vision to bridge the gap between 
                  innovative technology and elegant design. What started as a small team of passionate 
                  developers has grown into a full-service digital agency.
                </p>
                <p>
                  We believe that every business deserves a digital presence that not only looks 
                  stunning but also performs exceptionally. Our approach combines cutting-edge 
                  technology with timeless design principles.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden card-premium">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">5+</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-premium p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🪢</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with exceptional digital solutions that drive growth, 
                enhance user experiences, and create lasting value in the digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="card-premium p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🎫</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading digital partner for ambitious businesses worldwide, 
                known for our innovation, quality, and transformative impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Core <span className="text-gradient">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Excellence', desc: 'We strive for perfection in every project' },
              { title: 'Innovation', desc: 'Pushing boundaries with creative solutions' },
              { title: 'Integrity', desc: 'Honest and transparent partnerships' },
              { title: 'Impact', desc: 'Delivering measurable business results' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
