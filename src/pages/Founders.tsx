import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { useState } from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const founders = [
  {
    id: 1,
    name: 'AshthaNor',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 10+ years in tech innovation and digital transformation. Alexander founded NovaTech with a mission to democratize access to premium web solutions for businesses of all sizes.',
    fullBio: 'Before founding NovaTech, Alexander led product teams at several Fortune 500 companies, where he developed a passion for bridging the gap between technology and business needs. His expertise spans product strategy, team building, and digital innovation.',
    image: 'https://freeimage.host/i/fr1iOJ4',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 2,
    name: 'Jack',
    role: 'Chief Financial Officer',
    bio: 'Financial expert ensuring sustainable growth and investor confidence. Marcus has managed portfolios worth billions and brings fiscal discipline to our operations.',
    fullBio: 'With an MBA from Wharton and experience at top investment banks, Marcus ensures NovaTech maintains financial health while investing in growth. His strategic financial planning has been crucial to our sustainable scaling.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 3,
    name: '----',
    role: 'Chief Financial Officer',
    bio: 'Financial expert ensuring sustainable growth and investor confidence. Marcus has managed portfolios worth billions and brings fiscal discipline to our operations.',
    fullBio: 'With an MBA from Wharton and experience at top investment banks, Marcus ensures NovaTech maintains financial health while investing in growth. His strategic financial planning has been crucial to our sustainable scaling.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
  },
];

const Founders = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

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
              Our <span className="text-gradient">Founders</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Meet the visionaries who built NovaTech from the ground up.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="pb-32">
        <div className="container-premium">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flip-card cursor-pointer ${
                  index === 1 ? 'w-80 h-[500px] lg:w-96 lg:h-[550px]' : 'w-72 h-[450px] lg:w-80 lg:h-[480px]'
                } ${flippedCards.has(founder.id) ? 'flipped' : ''}`}
                onClick={() => toggleFlip(founder.id)}
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front card-premium overflow-hidden">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="text-primary text-sm font-medium mb-2">{founder.role}</p>
                      <h3 className="text-2xl font-bold">{founder.name}</h3>
                    </div>
                    <div className="absolute top-4 right-4 text-muted-foreground/50 text-sm">
                      Click to flip
                    </div>
                  </div>

                  {/* Back */}
                  <div className="flip-card-back card-premium p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                      <p className="text-primary text-sm font-medium mb-6">{founder.role}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {founder.bio}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {founder.fullBio}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3 mt-6">
                      <a
                        href={founder.linkedin}
                        onClick={(e) => e.stopPropagation()}
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href={founder.twitter}
                        onClick={(e) => e.stopPropagation()}
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                      >
                        <Twitter size={16} />
                      </a>
                    </div>
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

export default Founders;
