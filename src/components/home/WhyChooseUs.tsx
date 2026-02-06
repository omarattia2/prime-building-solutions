import { motion } from 'framer-motion';
import { Check, Shield, MessageSquare, Users, Sparkles, HeartHandshake } from 'lucide-react';
import { whyChooseUs } from '@/data/siteData';

const iconMap: Record<string, React.ElementType> = {
  'One Point of Contact': MessageSquare,
  'Clear Planning & Communication': Users,
  'Skilled, Reliable Professionals': Shield,
  'Clean Delivery & Attention to Detail': Sparkles,
  'Aftercare & Support': HeartHandshake,
};

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Why Prime Building Solutions
            </span>
            <h2 className="heading-xl text-foreground mb-6">
              A Renovation Experience <span className="text-gradient-brand">You Can Trust</span>
            </h2>
            <p className="body-md text-muted-foreground mb-8">
              We're committed to delivering exceptional results with a smooth, stress-free experience from first call to final walkthrough.
            </p>

            {/* Guarantees */}
            <div className="flex flex-wrap gap-3">
              {['On-time delivery', 'Fixed pricing', 'Quality guaranteed'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full"
                >
                  <Check className="h-4 w-4" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Cards */}
          <div className="grid gap-4">
            {whyChooseUs.map((item, index) => {
              const IconComponent = iconMap[item.title] || Check;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <IconComponent className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
