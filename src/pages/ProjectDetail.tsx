import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Ruler, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { projects } from '@/data/siteData';

import projectKitchen from '@/assets/project-kitchen.jpg';
import projectLiving from '@/assets/project-living.jpg';
import projectBathroom from '@/assets/project-bathroom.jpg';
import projectExtension from '@/assets/project-extension.jpg';
import projectOffice from '@/assets/project-office.jpg';
import projectOutdoor from '@/assets/project-outdoor.jpg';

const projectImages: Record<number, string[]> = {
  1: [projectBathroom, projectKitchen, projectLiving],
  2: [projectKitchen, projectBathroom, projectExtension],
  3: [projectLiving, projectOffice, projectKitchen],
  4: [projectExtension, projectOutdoor, projectLiving],
  5: [projectOffice, projectLiving, projectKitchen],
  6: [projectOutdoor, projectExtension, projectBathroom],
};

// Extended project details
const projectDetails: Record<string, {
  duration: string;
  area: string;
  scope: string[];
  challenge: string;
  solution: string;
}> = {
  'modern-bathroom-rotterdam': {
    duration: '4 weeks',
    area: '12 m²',
    scope: ['Complete demolition', 'Plumbing overhaul', 'Underfloor heating', 'Custom vanity', 'Walk-in shower'],
    challenge: 'The existing bathroom had outdated plumbing and poor ventilation, requiring a complete system overhaul while maintaining the building\'s historic character.',
    solution: 'We installed modern plumbing hidden behind custom wall panels, added a powerful ventilation system, and created a luxurious spa-like retreat with marble surfaces and premium fixtures.',
  },
  'open-kitchen-amsterdam': {
    duration: '6 weeks',
    area: '35 m²',
    scope: ['Wall removal', 'Structural support beam', 'Custom cabinetry', 'Island installation', 'Lighting design'],
    challenge: 'Creating an open-plan layout required removing a load-bearing wall while maintaining structural integrity.',
    solution: 'Our engineers designed a concealed steel beam solution that opened up the space completely, allowing for a stunning island kitchen with seamless flow into the living area.',
  },
  'luxury-living-den-haag': {
    duration: '8 weeks',
    area: '45 m²',
    scope: ['Built-in storage', 'Ambient lighting', 'Fireplace installation', 'Custom millwork', 'Acoustic panels'],
    challenge: 'The client wanted a sophisticated entertainment space that could transition from family relaxation to elegant hosting.',
    solution: 'We designed multi-functional built-ins with hidden storage, installed a modern gas fireplace, and created a layered lighting system that transforms the mood of the room.',
  },
  'glass-extension-utrecht': {
    duration: '12 weeks',
    area: '28 m²',
    scope: ['Foundation work', 'Steel frame', 'Triple-glazed panels', 'Underfloor heating', 'Motorized blinds'],
    challenge: 'Maximizing natural light while maintaining energy efficiency and ensuring seamless integration with the existing home.',
    solution: 'We used a thermally broken steel frame with triple-glazed panels, integrated underfloor heating, and motorized external blinds for temperature control.',
  },
  'home-office-rotterdam': {
    duration: '3 weeks',
    area: '18 m²',
    scope: ['Soundproofing', 'Built-in desk', 'Shelving system', 'Task lighting', 'Video call backdrop'],
    challenge: 'Creating a professional workspace that supports focus and video calls while fitting the home\'s aesthetic.',
    solution: 'We installed acoustic panels behind decorative wood slats, custom-built a wrap-around desk with integrated cable management, and designed perfect lighting for video conferencing.',
  },
  'outdoor-deck-amsterdam': {
    duration: '5 weeks',
    area: '40 m²',
    scope: ['Composite decking', 'Pergola structure', 'Outdoor kitchen', 'Integrated lighting', 'Planter boxes'],
    challenge: 'The narrow canal-side lot required creative space utilization while meeting strict heritage guidelines.',
    solution: 'We designed a multi-level deck that maximizes the space, with a custom pergola for partial shade and an outdoor kitchen that extends the living space during warmer months.',
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const images = projectImages[project.id] || [projectBathroom];
  const details = projectDetails[project.slug];

  const openGallery = (index: number) => setSelectedImageIndex(index);
  const closeGallery = () => setSelectedImageIndex(null);
  const nextImage = () => setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  const prevImage = () => setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));

  return (
    <Layout>
      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-wide pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
            <span className="block text-sm font-medium text-primary-foreground/80 uppercase tracking-wider mb-2">
              {project.category}
            </span>
            <h1 className="heading-display text-primary-foreground mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {project.location}
              </span>
              {details && (
                <>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {details.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <Ruler className="h-4 w-4" />
                    {details.area}
                  </span>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="heading-lg text-foreground mb-4">About This Project</h2>
                <p className="body-md text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Challenge & Solution */}
              {details && (
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="card-subtle"
                  >
                    <h3 className="heading-md text-foreground mb-3">The Challenge</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {details.challenge}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="card-subtle"
                  >
                    <h3 className="heading-md text-foreground mb-3">Our Solution</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {details.solution}
                    </p>
                  </motion.div>
                </div>
              )}

              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h2 className="heading-lg text-foreground mb-6">Project Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={() => openGallery(index)}
                      className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="card-elevated sticky top-24"
              >
                <h3 className="heading-md text-foreground mb-4">Project Scope</h3>
                {details && (
                  <ul className="space-y-3 mb-8">
                    {details.scope.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        </span>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-foreground mb-4">Start Your Project</h4>
                  <p className="text-sm text-muted-foreground mb-6">
                    Interested in a similar transformation? Let's discuss your vision.
                  </p>
                  <Link to="/quote" className="btn-hero-primary w-full text-center">
                    Get a Free Quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-padding-sm bg-primary/5">
        <div className="container-wide">
          <h2 className="heading-lg text-foreground mb-8 text-center">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/projects/${relatedProject.slug}`} className="block">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                      <img
                        src={projectImages[relatedProject.id]?.[0]}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {relatedProject.category}
                    </span>
                    <h3 className="font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                      {relatedProject.title}
                    </h3>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Gallery Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center"
            onClick={closeGallery}
          >
            {/* Close button */}
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 p-3 bg-primary-foreground/10 rounded-full text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 p-3 bg-primary-foreground/10 rounded-full text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={images[selectedImageIndex]}
              alt={`${project.title} - Image ${selectedImageIndex + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/80 text-sm">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default ProjectDetail;
