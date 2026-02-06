import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, ChevronDown } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const ServiceRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    urgency: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Service request submitted:', formData);
    alert('Thank you! We will contact you about your service request shortly.');
    setFormData({ name: '', email: '', phone: '', address: '', serviceType: '', urgency: '', description: '' });
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
              <Wrench className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="heading-display text-primary-foreground mb-6">
              Service Request
            </h1>
            <p className="body-lg text-primary-foreground/80">
              Need repairs or maintenance on a previous project? Submit a service request and we'll take care of it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card-elevated"
          >
            <h2 className="heading-md text-foreground mb-6">Submit Service Request</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="label-field">Your Name</label>
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

              <div>
                <label htmlFor="address" className="label-field">Property Address</label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="input-field"
                  placeholder="Street, City, Postal Code"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="serviceType" className="label-field">Service Type</label>
                  <div className="relative">
                    <select
                      id="serviceType"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="input-field appearance-none pr-10"
                      required
                    >
                      <option value="">Select type</option>
                      <option value="repair">Repair</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="warranty">Warranty Issue</option>
                      <option value="modification">Modification</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="urgency" className="label-field">Urgency</label>
                  <div className="relative">
                    <select
                      id="urgency"
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="input-field appearance-none pr-10"
                      required
                    >
                      <option value="">Select urgency</option>
                      <option value="emergency">Emergency</option>
                      <option value="urgent">Urgent (within 48h)</option>
                      <option value="standard">Standard (within 1 week)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="label-field">Describe the Issue</label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="input-field min-h-[120px] resize-y"
                  placeholder="Please describe the issue in detail..."
                  required
                />
              </div>

              <button type="submit" className="btn-hero-primary w-full">
                Submit Service Request
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceRequest;
