import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const founders = [
  
  {
    id: 1,
    name: '-----',
    role: 'Chief Strategy Officer',
    bio: 'Strategic mastermind driving business growth through innovative solutions.',
    image: 'https://i.postimg.cc/hvJ0gM7x/6ae827fcca32bf53c2a286efeb0b145d.jpg',
  },
  {
    id: 2,
    name: 'AshthaNor',
    role: 'Founder & CEO',
    bio: 'A BCA stident with a vision and 1+ years in tech innovation and digital transformation.',
    image: 'https://i.postimg.cc/zvF45bkq/1768980877699.png',
  },
  {
    id: 3,
    name: 'Jack',
    role: 'Project Manager & CFO',
    bio: 'BCOM Graduate Relational to Financial expert ensuring sustainable growth and investor confidence.',
    image: 'https://i.postimg.cc/D0WcF5bX/51b106d479aed03e837a5260387773f5.jpg',
  },
];

export const FoundersPreview = () => {
  const navigate = useNavigate();
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
    <section className="section-padding">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-gradient">Founders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The visionaries behind WybZite's success
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`flip-card w-72 ${index === 1 ? 'md:w-80 md:h-[420px]' : 'md:h-96'} h-96 cursor-pointer ${flippedCards.has(founder.id) ? 'flipped' : ''}`}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-primary text-sm font-medium mb-1">{founder.role}</p>
                    <h3 className="text-xl font-semibold">{founder.name}</h3>
                  </div>
                </div>

                {/* Back */}
                <div className="flip-card-back card-premium p-6 flex flex-col items-center justify-center text-center">
                  <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{founder.role}</p>
                  <p className="text-muted-foreground mb-6">{founder.bio}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/founders');
                    }}
                    className="text-primary hover:underline text-sm"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
