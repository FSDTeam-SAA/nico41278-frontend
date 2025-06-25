import AboutSite from "@/components/Home/AboutSite";
import Decorator from "@/components/Home/Decorator";
import Faq from "@/components/Home/Faq";
import Happy_Client from "@/components/Home/Happy_Client";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import PricingSection from "@/components/Home/PricingSection";
import WebsiteName from "@/components/Home/WebsiteName";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSite />
      <WebsiteName />
      <HowItWorks />
      <Faq />
      <Decorator />

      <Happy_Client/>

      <PricingSection />

    </div>
  );
}
