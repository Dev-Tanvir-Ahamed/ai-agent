import AIAgentSteps from "@/components/HomePage/AgeentSteps.tsx/AgentSteps";
import ContentCreatorFeatures from "@/components/HomePage/Featured/ContentCreatorFeatured";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <ContentCreatorFeatures />
      {/* How It Works Section */}
      <AIAgentSteps />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
