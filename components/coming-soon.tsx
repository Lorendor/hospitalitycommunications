import Link from "next/link";
import { delay } from "@/lib/reveal";
import { ArrowIcon } from "./icons";
import { Navbar } from "./navbar";
import { ScrollReveal } from "./scroll-reveal";
import { Footer } from "./sections/footer";
import { SplitText } from "./split-text";

/** Holding page for sections of the site that are not built yet. */
export function ComingSoon({ title, text }: { title: string; text: string }) {
  return (
    <>
      <Navbar />
      <main className="flex min-h-svh items-center bg-navy pt-32 pb-20 text-cream">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <p data-reveal="fade" className="eyebrow text-gold">
            Coming soon
          </p>
          <h1
            data-reveal="words"
            style={delay(150)}
            className="mt-6 max-w-4xl text-[clamp(2.5rem,6.2vw,5.25rem)] leading-[1.04] font-light tracking-tight"
          >
            <SplitText text={title} />
          </h1>
          <p
            data-reveal="fade"
            style={delay(450)}
            className="mt-8 max-w-xl text-lg leading-relaxed text-cream/80"
          >
            {text}
          </p>
          <div
            data-reveal="fade"
            style={delay(600)}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link href="/#contact" className="btn btn-gold">
              Book a Consultation
              <ArrowIcon className="btn-arrow" />
            </Link>
            <Link href="/" className="btn btn-outline-light">
              Back to Home
              <ArrowIcon className="btn-arrow" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
