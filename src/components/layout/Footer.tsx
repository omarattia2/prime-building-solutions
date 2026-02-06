import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { navigation, companyInfo } from '@/data/siteData';
import logo from '@/assets/logo-stacked.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Prime Building Solutions"
              className="h-40 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
              {companyInfo.tagline}. Transforming spaces with precision, innovation, and sustainable building practices.
            </p>
            <div className="flex gap-4">
              <a 
                href={companyInfo.social.linkedin}
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href={companyInfo.social.instagram}
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href={companyInfo.social.facebook}
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Pages */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              {navigation.contact.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Details</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{companyInfo.email}</span>
                </a>
              </li>
              <li>
                <a 
                  href={companyInfo.whatsapp.link}
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <MessageCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" />
                  <span className="text-sm">WhatsApp {companyInfo.whatsapp.number}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>{companyInfo.address.street}</p>
                  <p>{companyInfo.address.postalCode} {companyInfo.address.city}</p>
                  <p>{companyInfo.address.country}</p>
                </div>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/80">{companyInfo.hours.weekdays}</p>
              <p className="text-sm text-primary-foreground/80">{companyInfo.hours.saturday}</p>
              <p className="text-sm text-primary-foreground/80">{companyInfo.hours.sunday}</p>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-primary-foreground/20">
          <a 
            href={`tel:${companyInfo.phone}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call Us Now
          </a>
          <a 
            href={`mailto:${companyInfo.email}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors"
          >
            <Mail className="h-5 w-5" />
            Send an Email
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
