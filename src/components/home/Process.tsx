import { motion } from 'framer-motion';
import { processSteps } from '@/data/siteData';

const Process = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-xl text-foreground mb-4">How We Work</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            A clear, transparent process from first contact to project completion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-brand-md transition-all">
                <div className="w-16 h-16 rounded-full gradient-brand text-primary-foreground text-2xl font-bold flex items-center justify-center mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="heading-md text-foreground text-center mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-center">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
