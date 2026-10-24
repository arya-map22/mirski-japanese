import { About } from "@/components/sections/About";
import { CareerCta } from "@/components/sections/CareerCta";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Journey } from "@/components/sections/Journey";
import { Marquee } from "@/components/sections/Marquee";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Welcome } from "@/components/sections/Welcome";
import { PatternDivider } from "@/components/ui/PatternDecor";

export default function HomePage() {
  return (
    <>
      <Welcome />
      <PatternDivider className="bg-cream pt-2" />
      <Marquee />
      <About />
      <Journey />
      <Pricing />
      <Features />
      <Testimonials />
      <CareerCta />
      <Faq />
    </>
  );
}
