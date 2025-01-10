// import Hero from "../components/Hero"
// import Features from "../components/Features"
// import CTA from "../components/CTA"
// import Partners from "@/components/Partners"
import { Blog } from "@/components/sections/blog";
import { Community } from "@/components/sections/community";
import { CTA } from "@/components/sections/cta";
import { Examples } from "@/components/sections/examples";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { Pricing } from "@/components/sections/pricing";
import { Statistics } from "@/components/sections/statistics";
import { Testimonials } from "@/components/sections/testimonials";
import { UseCases } from "@/components/sections/use-cases";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Logos />
        {/* <Examples /> */}
        <UseCases />
        <Features />
        {/* <Statistics /> */}
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        {/* <Community /> */}
        {/* <Blog /> */}
        <CTA />
        {/* <Footer /> */}
      </main>
    </>
  );
}
