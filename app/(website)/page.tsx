import AboutSite from "@/components/Home/AboutSite";
import Decorator from "@/components/Home/Decorator";
import Faq from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
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
    </div>
  );
}
