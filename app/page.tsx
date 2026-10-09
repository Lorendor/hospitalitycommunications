import { Navbar } from "@/components/navbar";
import { ScrollReveal } from "@/components/scroll-reveal";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Solutions } from "@/components/sections/solutions";
import { Why } from "@/components/sections/why";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Solutions />
        <Why />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
