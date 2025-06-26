import AboutMe from "@/components/Home/AboutMe";
import AboutSite from "@/components/Home/AboutSite";
import Decorator from "@/components/Home/Decorator";
import Faq from "@/components/Home/Faq";
import Footer from "@/components/Home/Footer";
import Happy_Client from "@/components/Home/Happy_Client";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import Navbar from "@/components/Home/Navbar";
import PricingSection from "@/components/Home/PricingSection";
import WebsiteName from "@/components/Home/WebsiteName";


export default function Home() {
  return (
    <div>
        <Navbar />
      <Hero />
      <AboutSite />
      <AboutMe />
      <WebsiteName />
      <HowItWorks />
      <Faq />
      <Decorator />

      <Happy_Client/>

      <PricingSection />
         <Footer/>

    </div>
  );
}
