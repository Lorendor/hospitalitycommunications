import Image from "next/image";
import heroImage from "@/public/images/hero.webp";
import { delay } from "@/lib/reveal";
import { ArrowIcon } from "../icons";
import { SplitText } from "../split-text";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh items-end overflow-hidden bg-navy-deep pt-24"
    >
      <Image
        src={heroImage}
        alt="Hospitality professionals in conversation in a hotel lounge"
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover object-[center_35%]"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-navy-deep/90 via-navy-deep/40 to-navy-deep/20" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy-deep/80 via-navy-deep/35 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-6 pt-24 pb-16 lg:px-10 lg:pb-24">
        <p data-reveal="fade" className="eyebrow text-cream/80">
          Hospitality Training · Communication · Leadership
        </p>
        <h1
          data-reveal="words"
          style={delay(150)}
          className="mt-6 max-w-4xl text-[clamp(2.5rem,6.2vw,5.25rem)] leading-[1.04] font-light tracking-tight text-cream"
        >
          <SplitText text="Empowering Hospitality Teams Through Better Communication" />
        </h1>
        <p
          data-reveal="fade"
          style={delay(500)}
          className="mt-8 max-w-xl text-lg leading-relaxed text-cream/85"
        >
          Hospitality English course, communication &amp; leadership workshops,
          consulting, and assessments designed specifically for the hospitality
          industry.
        </p>
        <div
          data-reveal="fade"
          style={delay(650)}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a href="#services" className="btn btn-gold">
            Explore Services
            <ArrowIcon className="btn-arrow" />
          </a>
          <a href="#contact" className="btn btn-outline-light">
            Book a Consultation
            <ArrowIcon className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
