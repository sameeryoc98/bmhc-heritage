
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickDonate from "@/components/QuickDonate";
import AboutBMHC from "@/components/AboutBMHC";
import Appeals from "@/components/Appeals";
import Activities from "@/components/Activities";
import News from "@/components/News";
import Events from "@/components/Events";
import VisitUs from "@/components/VisitUs";
import CommunityVoices from "@/components/CommunityVoices";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <QuickDonate />
      <AboutBMHC />
      <Appeals />
      <Activities />
      <News />
      <Events />
      <VisitUs />
      <CommunityVoices />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
