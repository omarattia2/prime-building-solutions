import { motion } from 'framer-motion';
import { Star, Quote, BadgeCheck, ExternalLink } from 'lucide-react';
import { testimonials } from '@/data/siteData';

// Avatar initials generator
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
};

// Generate consistent color based on name
const getAvatarColor = (name: string) => {
  const colors = [
    'bg-primary',
    'bg-secondary',
    'bg-accent',
  ];
  const index = name.length % colors.length;
  return colors[index];
};

const Testimonials = () => {
  const averageRating = (
    testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header with aggregate rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {/* Google Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-5 py-2.5 mb-6 shadow-sm"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${star <= Math.round(Number(averageRating)) ? 'fill-primary text-primary' : 'text-muted'}`}
                />
              ))}
            </div>
            <span className="font-bold text-foreground">{averageRating}</span>
            <span className="text-muted-foreground text-sm">on Google</span>
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
          </motion.div>

          <h2 className="heading-xl text-foreground mb-4">Trusted by Homeowners</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied customers who transformed their homes with Prime Building Solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-elevated relative group hover-lift"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>

              {/* Author with avatar */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className={`w-10 h-10 rounded-full ${getAvatarColor(testimonial.name)} flex items-center justify-center text-primary-foreground font-semibold text-sm`}
                >
                  {getInitials(testimonial.name)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <BadgeCheck className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">100+ verified reviews</span> across Google and Trustpilot
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
