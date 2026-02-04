import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { navigation, companyInfo } from '@/data/siteData';
import logo from '@/assets/logo/prime logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsContactOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-md shadow-brand-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Prime Building Solutions" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors link-underline ${
                  location.pathname === item.href 
                    ? 'text-primary' 
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Contact Dropdown */}
            <div ref={contactRef} className="relative">
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  navigation.contact.some(c => location.pathname === c.href)
                    ? 'text-primary' 
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                Contact
                <ChevronDown 
                  className={`h-4 w-4 transition-transform ${isContactOpen ? 'rotate-180' : ''}`} 
                />
              </button>

              <AnimatePresence>
                {isContactOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-56 bg-card rounded-lg shadow-brand-lg border border-border overflow-hidden"
                  >
                    {navigation.contact.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block px-4 py-3 text-sm transition-colors ${
                          location.pathname === item.href
                            ? 'bg-primary/10 text-primary'
                            : 'text-foreground/80 hover:bg-muted/30 hover:text-primary'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              {companyInfo.phone}
            </a>
            <Link to="/quote" className="btn-hero-primary text-sm px-6 py-2.5">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navigation.main.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-3 text-base font-medium ${
                      location.pathname === item.href 
                        ? 'text-primary bg-primary/5' 
                        : 'text-foreground/80'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-border my-2" />
                <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Contact
                </p>
                {navigation.contact.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-3 text-base ${
                      location.pathname === item.href 
                        ? 'text-primary bg-primary/5' 
                        : 'text-foreground/80'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-border my-2" />
                <div className="px-4 py-3 space-y-3">
                  <a 
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center gap-2 text-foreground/80"
                  >
                    <Phone className="h-4 w-4" />
                    {companyInfo.phone}
                  </a>
                  <a 
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center gap-2 text-foreground/80"
                  >
                    <Mail className="h-4 w-4" />
                    {companyInfo.email}
                  </a>
                </div>
                <div className="px-4 pt-2">
                  <Link to="/quote" className="btn-hero-primary w-full text-center">
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
