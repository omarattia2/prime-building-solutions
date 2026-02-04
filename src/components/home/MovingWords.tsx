import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const words = ['Precision', 'Craft', 'Quality', 'Design', 'Excellence', 'Trust'];

const MovingWords = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-25%', '0%']);

  return (
    <section 
      ref={containerRef}
      className="section-padding-sm overflow-hidden bg-background"
    >
      <div className="relative">
        {/* First row - moves left */}
        <motion.div 
          style={{ x: x1 }}
          className="flex gap-8 mb-6"
        >
          {[...words, ...words].map((word, index) => (
            <span
              key={`row1-${index}`}
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary/10 whitespace-nowrap select-none"
            >
              {word}
            </span>
          ))}
        </motion.div>

        {/* Second row - moves right */}
        <motion.div 
          style={{ x: x2 }}
          className="flex gap-8"
        >
          {[...words, ...words].map((word, index) => (
            <span
              key={`row2-${index}`}
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary/5 whitespace-nowrap select-none"
            >
              {word}
            </span>
          ))}
        </motion.div>

        {/* Center highlight */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-xl text-primary text-center px-4"
          >
            Craftsmanship in Every Detail
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default MovingWords;
