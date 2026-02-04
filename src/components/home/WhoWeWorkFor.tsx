import { motion } from 'framer-motion';
import { Home, Building2, Store, Hammer, Wrench } from 'lucide-react';
import { clientTypes } from '@/data/siteData';

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  Store,
  Hammer,
  Wrench,
};

const WhoWeWorkFor = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-xl text-foreground mb-4">Who We Work For</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            From homeowners to businesses, we deliver tailored solutions for every type of project.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {clientTypes.map((client, index) => {
            const Icon = iconMap[client.icon];
            return (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-brand-md transition-all min-w-[140px]"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">{client.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkFor;
