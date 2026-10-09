import Image from "next/image";
import consultationImage from "@/public/images/consultation.webp";
import { delay } from "@/lib/reveal";
import { ArrowIcon } from "../icons";
import { SplitText } from "../split-text";

const solutions = ["Assessments", "Custom Training", "Communication Consulting"];

const reasons = [
  {
    title: "Hospitality Expertise",
    text: "Training built from real industry experience.",
  },
  {
    title: "Practical Learning",
    text: "Real workplace situations—not textbook English alone.",
  },
  {
    title: "Industry-Specific",
    text: "Designed specifically for hospitality teams.",
  },
  {
    title: "Flexible Solutions",
    text: "Online courses, workshops, assessments and customized training.",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="bg-navy py-24 text-cream lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p data-reveal="fade" className="eyebrow text-cream/70">
              Business Solutions
            </p>
            <h2
              data-reveal="words"
              className="mt-6 text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.06] font-light tracking-tight"
            >
              <SplitText text="Need something more tailored?" />
            </h2>
            <ul
              data-reveal="fade"
              style={delay(200)}
              className="mt-10 flex flex-wrap gap-3"
            >
              {solutions.map((solution) => (
                <li
                  key={solution}
                  className="rounded-full bg-cream/10 px-5 py-2.5 text-sm tracking-wide"
                >
                  {solution}
                </li>
              ))}
            </ul>
            <div data-reveal="fade" style={delay(320)} className="mt-10">
              <a href="#contact" className="btn btn-gold">
                Book a Consultation
                <ArrowIcon className="btn-arrow" />
              </a>
            </div>
          </div>

          <div
            data-reveal="fade"
            style={delay(150)}
            className="relative aspect-4/3 overflow-hidden rounded-3xl lg:col-span-6"
          >
            <Image
              src={consultationImage}
              alt="A consultation between two hospitality professionals"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-24 lg:mt-36">
          <h2
            data-reveal="words"
            className="max-w-3xl text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.1] font-light tracking-tight"
          >
            <SplitText text="Why Hospitality Communications?" />
          </h2>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, i) => (
              <li
                key={reason.title}
                data-reveal="fade"
                style={delay(i * 100)}
                className="h-full"
              >
                <article className="flex h-full flex-col gap-10 rounded-3xl md:gap-14 bg-cream/[0.07] p-8 transition-[background-color,translate] duration-500 ease-out-expo hover:-translate-y-1.5 hover:bg-cream/[0.13]">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                  <div>
                    <h3 className="text-xl font-normal tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-cream/75">
                      {reason.text}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
