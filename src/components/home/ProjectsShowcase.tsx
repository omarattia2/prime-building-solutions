import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/siteData';

import projectKitchen from '@/assets/project-kitchen.jpg';
import projectLiving from '@/assets/project-living.jpg';
import projectBathroom from '@/assets/project-bathroom.jpg';
import projectExtension from '@/assets/project-extension.jpg';
import projectOffice from '@/assets/project-office.jpg';
import projectOutdoor from '@/assets/project-outdoor.jpg';

const projectImages: Record<number, string> = {
  1: projectBathroom,
  2: projectKitchen,
  3: projectLiving,
  4: projectExtension,
  5: projectOffice,
  6: projectOutdoor,
};

const categories = ['All', 'Bathrooms', 'Kitchens', 'Renovations', 'Extensions', 'Outdoor'];

const ProjectsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-xl text-foreground mb-4">Our Recent Projects</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Browse our portfolio of completed renovations and see the quality of our craftsmanship firsthand.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/projects/${project.slug}`} className="block">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                  <img
                    src={projectImages[project.id]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-2 text-primary-foreground font-medium">
                      View Project
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {project.category} • {project.location}
                  </span>
                  <h3 className="heading-md text-foreground mt-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/projects" className="btn-hero-secondary">
            View All Projects
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
