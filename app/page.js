import Blog from "@/components/Blog";
import ContentCards from "@/components/ContentCards";
import ContentCards2 from "@/components/ContentCards2";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main>
        <Hero/>
        <ContentCards/>
        <Blog/>
        <ContentCards2/>
        <CTA/>
        <Testimonials/>
        <Map/>
      </main>
      
    </div>
  );
}
