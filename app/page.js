import About from "@/components/About";
import Blog from "@/components/Blog";
import ContentCards from "@/components/ContentCards";
import ContentCards2 from "@/components/ContentCards2";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main>
        <Hero/>
        <About/>
        <div  className="h-40"></div>
        
        <ContentCards/>
        <div id="blog" className="h-40"></div>
        <Blog/>
        <div  className="h-40"></div>
        
        <div  id="services" className="h-40"></div>
        <ContentCards2/>
        <div id="cta" className="h-40"></div>
        <CTA/>
        <div id="" className="h-40"></div>
        <Gallery/>
        <div id="" className="h-40"></div>
        <Testimonials/>
        <div id="" className="h-40"></div>
        <Map/>
        <div id="" className="h-40"></div>
        <FAQ/>
        <div id="" className="h-40"></div>
        <Footer/>
      </main>
      
    </div>
  );
}
