import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, ChevronDown, Clock, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { companyInfo } from '@/data/siteData';
import useFormStatus from '@/hooks/useFormStatus';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  interests: '',
};

const Showroom = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { status, runSubmit, resetStatus } = useFormStatus();
  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runSubmit(
      () =>
        new Promise<void>((resolve) => {
          console.log('Showroom appointment submitted:', formData);
          setTimeout(resolve, 800);
        })
    );
  };

  const handleReset = () => {
    setFormData(initialFormData);
    resetStatus();
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
            <h1 className="heading-display text-primary-foreground mb-6">
              Visit Our Showroom
            </h1>
            <p className="body-lg text-primary-foreground/80 mb-6">
              Experience our craftsmanship firsthand. Browse materials, fixtures, and finishes in our Rotterdam showroom.
            </p>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <MapPin className="h-5 w-5" />
              <span>{companyInfo.address.street}, {companyInfo.address.city}</span>
            </div>
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
            <h2 className="heading-md text-foreground mb-6">Book Your Showroom Visit</h2>
            
            {isSuccess ? (
              <div className="py-6 text-center">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Thank you!</h3>
                <p className="text-muted-foreground mb-6">We will contact you within 24 hours.</p>
                <button type="button" onClick={handleReset} className="btn-hero-primary w-full sm:w-auto">
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="label-field">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-field"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="label-field">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-field"
                      required
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="label-field">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="input-field"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="label-field">
                      <Clock className="inline h-4 w-4 mr-1" />
                      Preferred Time
                    </label>
                    <div className="relative">
                      <select
                        id="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="input-field appearance-none pr-10"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Select time</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="interests" className="label-field">What are you interested in?</label>
                  <textarea
                    id="interests"
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    className="input-field min-h-[100px] resize-y"
                    placeholder="Tiles, fixtures, cabinets, flooring, etc."
                    disabled={isSubmitting}
                  />
                </div>

                <button type="submit" className="btn-hero-primary w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Book Showroom Visit'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Showroom;
