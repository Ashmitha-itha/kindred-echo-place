import Hero from "@/components/Hero";
import SupportSection from "@/components/SupportSection";
import CommunitySection from "@/components/CommunitySection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SupportSection />
      <CommunitySection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
