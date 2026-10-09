import Image from "next/image";
import tailoredImage from "@/public/images/needtailored.png";
import { delay } from "@/lib/reveal";
import { ArrowIcon } from "../icons";
import { SplitText } from "../split-text";

const solutions = ["Assessments", "Custom Training", "Communication Consulting"];

export function Solutions() {
  return (
    <section id="solutions" className="bg-navy py-16 text-cream sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="flex min-w-0 flex-col lg:col-span-6">
          <p data-reveal="fade" className="eyebrow text-cream/70">
            Business Solutions
          </p>
          <h2
            data-reveal="words"
            className="mt-6 text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.06] font-light tracking-tight"
          >
            <SplitText text="Need something more tailored?" />
          </h2>

          <ul className="mt-10 grid grid-cols-1 gap-3 lg:mt-12">
            {solutions.map((solution, i) => (
              <li
                key={solution}
                data-reveal="fade"
                style={delay(150 + i * 100)}
                className="flex items-center gap-4 rounded-2xl bg-cream/7 px-5 py-4 transition-colors duration-500 hover:bg-cream/13 sm:gap-5 sm:px-6 sm:py-5"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                <h3 className="text-lg font-normal tracking-tight sm:text-xl">
                  {solution}
                </h3>
              </li>
            ))}
          </ul>

          <div data-reveal="fade" style={delay(450)} className="mt-10">
            <a href="#contact" className="btn btn-gold w-full sm:w-auto">
              Book a Consultation
              <ArrowIcon className="btn-arrow" />
            </a>
          </div>
        </div>

        <div
          data-reveal="fade"
          style={delay(150)}
          className="relative aspect-4/3 overflow-hidden rounded-3xl lg:col-span-6 lg:aspect-auto lg:min-h-136"
        >
          <Image
            src={tailoredImage}
            alt="Trainer presenting to a room of hospitality staff"
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[35%_center]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy-deep/60 via-transparent to-transparent" />
          {/* Compact pill on phones, a larger glass card from sm up. */}
          <div className="absolute bottom-3 left-3 flex items-baseline gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur-xl ring-inset sm:bottom-6 sm:left-6 sm:block sm:rounded-2xl sm:px-6 sm:py-5">
            <p className="text-lg leading-none font-light tracking-tight sm:text-4xl">
              14+
            </p>
            <p className="text-xs text-cream/85 sm:mt-2 sm:text-sm">
              Years in Hospitality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
