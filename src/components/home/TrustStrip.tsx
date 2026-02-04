import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award } from 'lucide-react';

const trustItems = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Clock, text: '24-Hour Response' },
  { icon: Users, text: 'Expert Craftsmen' },
  { icon: Award, text: 'Quality Guaranteed' },
];

const TrustStrip = () => {
  return (
    <section className="bg-primary/5 py-8 border-y border-border/50">
      <div className="container-wide">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <item.icon className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium text-foreground/80">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
