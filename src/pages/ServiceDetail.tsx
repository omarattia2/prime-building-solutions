import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { services } from '@/data/siteData';

import projectKitchen from '@/assets/project-kitchen.jpg';
import projectBathroom from '@/assets/project-bathroom.jpg';
import projectLiving from '@/assets/project-living.jpg';
import projectExtension from '@/assets/project-extension.jpg';
import projectOutdoor from '@/assets/project-outdoor.jpg';
import projectOffice from '@/assets/project-office.jpg';
import heroBathroom from '@/assets/hero-bathroom.jpg';

const serviceImages: Record<string, string[]> = {
  'bathroom-renovations': [projectBathroom, heroBathroom, projectLiving],
  'kitchen-remodeling': [projectKitchen, projectLiving, heroBathroom],
  'full-home-renovations': [projectLiving, projectKitchen, projectBathroom],
  'home-extensions': [projectExtension, projectLiving, projectOutdoor],
  'outdoor-living': [projectOutdoor, projectExtension, projectLiving],
  'commercial-fitouts': [projectOffice, projectKitchen, projectLiving],
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const service = services.find((s) => s.slug === slug);
  const images = serviceImages[slug || ''] || [projectBathroom];

  if (!service) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="heading-xl text-foreground mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-hero-secondary">
            <ArrowLeft className="h-5 w-5" />
            Back to Services
          </Link>
        </div>
      </Layout>
    );
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-primary/5 py-4">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{service.title}</span>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div 
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setIsGalleryOpen(true)}
              >
                <img
                  src={images[currentImage]}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-foreground font-medium">
                    Click to expand
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`relative w-20 h-16 rounded-lg overflow-hidden transition-all ${
                      currentImage === index 
                        ? 'ring-2 ring-primary ring-offset-2' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                {service.category}
              </span>
              <h1 className="heading-xl text-foreground mt-2 mb-6">
                {service.title}
              </h1>
              <p className="body-md text-muted-foreground mb-8">
                {service.description}
              </p>

              <h3 className="font-semibold text-foreground mb-4">What's Included:</h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote" className="btn-hero-primary">
                  Request a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/consultation" className="btn-hero-secondary">
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fullscreen Gallery */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center"
            onClick={() => setIsGalleryOpen(false)}
          >
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-6 right-6 p-2 text-primary-foreground hover:bg-primary-foreground/20 rounded-lg transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 p-2 text-primary-foreground hover:bg-primary-foreground/20 rounded-lg transition-colors"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <motion.img
              key={currentImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[currentImage]}
              alt={service.title}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 p-2 text-primary-foreground hover:bg-primary-foreground/20 rounded-lg transition-colors"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="absolute bottom-6 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setCurrentImage(index); }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentImage === index 
                      ? 'bg-primary-foreground' 
                      : 'bg-primary-foreground/40 hover:bg-primary-foreground/60'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default ServiceDetail;
