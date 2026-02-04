import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';
import MovingWords from '@/components/home/MovingWords';
import ProjectsShowcase from '@/components/home/ProjectsShowcase';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import WhoWeWorkFor from '@/components/home/WhoWeWorkFor';
import Process from '@/components/home/Process';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import FinalCTA from '@/components/home/FinalCTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustStrip />
      <MovingWords />
      <ProjectsShowcase />
      <WhyChooseUs />
      <WhoWeWorkFor />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
