import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Linkedin, Twitter, Github } from 'lucide-react';

const teamMembers = [
  {
    name: 'David Park',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Emily Rodriguez',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'James Wilson',
    role: 'Backend Engineer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Sophia Chen',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Michael Brown',
    role: 'DevOps Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Lisa Thompson',
    role: 'Marketing Lead',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face',
    linkedin: '#',
  },
];

const Team = () => {
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
              Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Meet the talented individuals who bring our clients' visions to life 
              with passion, expertise, and dedication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-32">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium overflow-hidden group"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={member.linkedin}
                      className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding bg-card/50">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              We're always looking for talented individuals who share our passion 
              for creating exceptional digital experiences.
            </p>
            <a
              href="/contact"
              className="btn-hero inline-flex"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
