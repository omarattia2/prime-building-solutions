import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Check, ChevronDown } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import heroBathroom from '@/assets/hero-bathroom.jpg';

const consultationTypes = [
  'Home Renovation',
  'Bathroom Renovation',
  'Kitchen Remodeling',
  'Home Extension',
  'Commercial Fit-out',
  'Other',
];

const timeSlots = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
];

const benefits = [
  'Discuss your project vision and goals',
  'Get expert advice on feasibility and approach',
  'Receive a preliminary cost estimate',
  'Learn about our process and timeline',
  'No commitment required',
];

const Consultation = () => {
  const [formData, setFormData] = useState({
    consultationType: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation form submitted:', formData);
    alert('Thank you! We will confirm your consultation appointment shortly.');
    setFormData({ consultationType: '', date: '', time: '', name: '', email: '', phone: '' });
  };

  return (
    <Layout>
      {/* Hero with Background */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroBathroom} 
            alt="Consultation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-brand opacity-90" />
        </div>
        
        <div className="container-wide relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="heading-display text-primary-foreground mb-6">
                Plan a No-Obligation Consultation
              </h1>
              <p className="body-lg text-primary-foreground/80 mb-8">
                Take the first step toward your dream space. Our expert team will meet with you to understand your vision and provide personalized guidance.
              </p>

              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3 text-primary-foreground/90"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </span>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right - Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card rounded-xl shadow-brand-xl p-6 md:p-8">
                <h2 className="heading-md text-foreground mb-2">Book Your Consultation</h2>
                <p className="text-muted-foreground mb-6">
                  Choose a time that works for you. It's completely free.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="consultationType" className="label-field">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Consultation Type
                    </label>
                    <div className="relative">
                      <select
                        id="consultationType"
                        value={formData.consultationType}
                        onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                        className="input-field appearance-none pr-10"
                        required
                      >
                        <option value="">Select type</option>
                        {consultationTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="label-field">Preferred Date</label>
                      <input
                        type="date"
                        id="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="input-field"
                        required
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
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="name" className="label-field">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-field"
                      placeholder="Full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="label-field">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-field"
                      placeholder="your@email.com"
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
                      placeholder="+31 6 12345678"
                      required
                    />
                  </div>

                  <button type="submit" className="btn-hero-primary w-full">
                    Book My Consultation
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    Free consultation • No obligation • We'll confirm within 24 hours
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Consultation;
