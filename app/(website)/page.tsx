import AboutMe from "@/components/Home/AboutMe";
import Decorator from "@/components/Home/Decorator";
import Faq from "@/components/Home/Faq";
import Footer from "@/components/Home/Footer";
import Happy_Client from "@/components/Home/Happy_Client";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import Navbar from "@/components/Home/Navbar";
import PricingSection from "@/components/Home/PricingSection";
import WebsiteName from "@/components/Home/WebsiteName";
import Weknow from "@/components/Home/Weknow";


export default function Home() {
  return (
    <div className="">
        <Navbar />
      <Hero />
      <Weknow/>
      <div className="bg-[linear-gradient(180deg,#FDF9EA_0%,#FCF2E2_8.7%,#F8E7DA_15.67%,#D3D6F7_32%,#EADEE3_55.85%,#FDF5E5_75.8%,#FEF9EB_90.61%,#737373_100%)]">

      {/* <AboutSite /> */}
      {/* <Quote/> */}
      <AboutMe />
        {/* <Quote/> */}
      <WebsiteName />
      <HowItWorks />
      <Faq />
      <Decorator />

      <Happy_Client/>

      <PricingSection />
      </div>
         <Footer/>

    </div>
  );
}
