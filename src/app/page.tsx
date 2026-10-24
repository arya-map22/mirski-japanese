import { About } from "@/components/sections/About";
import { CareerCta } from "@/components/sections/CareerCta";
import { Consultation } from "@/components/sections/Consultation";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Marquee } from "@/components/sections/Marquee";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Journey />
      <Features />
      <Consultation />
      <Testimonials />
      <CareerCta />
      <Faq />
    </>
  );
}
