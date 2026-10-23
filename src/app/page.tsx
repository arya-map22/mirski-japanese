import { Courses } from "@/components/sections/Courses";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { Outcomes } from "@/components/sections/Outcomes";
import { WhyMirski } from "@/components/sections/WhyMirski";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyMirski />
      <Method />
      <Courses />
      <Outcomes />
      <Faq />
      <FinalCta />
    </>
  );
}
