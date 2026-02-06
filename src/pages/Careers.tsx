import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, ChevronDown } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const openPositions = [
  { title: 'Senior Project Manager', type: 'Full-time', location: 'Rotterdam' },
  { title: 'Skilled Carpenter', type: 'Full-time', location: 'Rotterdam' },
  { title: 'Bathroom Fitter', type: 'Full-time', location: 'Rotterdam' },
  { title: 'General Laborer', type: 'Full-time', location: 'Rotterdam' },
];

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Career application submitted:', formData);
    alert('Thank you for your application! We will review it and get back to you.');
    setFormData({ name: '', email: '', phone: '', position: '', experience: '', message: '' });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-brand section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="heading-display text-primary-foreground mb-6">
              Join Our Team
            </h1>
            <p className="body-lg text-primary-foreground/80">
              We're always looking for talented professionals who share our passion for quality craftsmanship. Build your career with Prime Building Solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding-sm bg-primary/5">
        <div className="container-wide">
          <h2 className="heading-lg text-foreground text-center mb-8">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-lg border border-border p-5 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold text-foreground">{position.title}</h3>
                  <p className="text-sm text-muted-foreground">{position.type} • {position.location}</p>
                </div>
                <Briefcase className="h-5 w-5 text-primary" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card-elevated"
          >
            <h2 className="heading-md text-foreground mb-6">Apply Now</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="label-field">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="label-field">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-field"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="label-field">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="position" className="label-field">Position of Interest</label>
                  <div className="relative">
                    <select
                      id="position"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="input-field appearance-none pr-10"
                      required
                    >
                      <option value="">Select position</option>
                      {openPositions.map((p) => (
                        <option key={p.title} value={p.title}>{p.title}</option>
                      ))}
                      <option value="other">Other / General Application</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="experience" className="label-field">Years of Experience</label>
                  <div className="relative">
                    <select
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="input-field appearance-none pr-10"
                      required
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="label-field">Tell Us About Yourself</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-field min-h-[120px] resize-y"
                  placeholder="Share your experience, skills, and why you'd like to join our team..."
                  required
                />
              </div>

              <button type="submit" className="btn-hero-primary w-full">
                Submit Application
              </button>

              <p className="text-xs text-muted-foreground text-center">
                You can also email your CV directly to careers@primebuildingsolutions.nl
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
