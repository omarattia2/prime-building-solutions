import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award, CheckCircle, Star } from 'lucide-react';

const trustItems = [
  { icon: Shield, text: 'Fully Licensed & Insured', highlight: true },
  { icon: Clock, text: '24hr Response Guarantee' },
  { icon: Star, text: '4.9★ Google Rating' },
  { icon: CheckCircle, text: 'Free No-Obligation Quotes' },
];

const TrustStrip = () => {
  return (
    <section className="bg-card py-6 border-y border-border/50 shadow-sm">
      <div className="container-wide">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="flex items-center gap-2"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                <item.icon className="h-4 w-4 text-primary" />
              </span>
              <span className="text-sm font-semibold text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
