import Image from "next/image";
import videoPoster from "@/public/images/founder-video-poster.webp";
import { delay } from "@/lib/reveal";
import { ArrowIcon, PlayIcon } from "../icons";
import { SplitText } from "../split-text";

const offers = [
  {
    title: "Develop Skills",
    text: "Practical English and communication training.",
  },
  {
    title: "Strengthen Teams",
    text: "Workshops for communication, collaboration and leadership.",
  },
  {
    title: "Improve Performance",
    text: "Assessments, consulting and customized solutions.",
  },
];

const stats = [
  { value: "14+", label: "Years in Hospitality" },
  { value: "International", label: "Hospitality Experience" },
  { value: "Multicultural", label: "Team Leadership" },
  { value: "Practical", label: "Industry-Focused Training" },
];

export function About() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p data-reveal="fade" className="eyebrow text-navy/70">
              Who we are &amp; what we offer
            </p>
            <h2
              data-reveal="words"
              className="mt-6 text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.06] font-light tracking-tight text-navy"
            >
              <SplitText text="Better Communication. Better Hospitality." />
            </h2>
          </div>
          <p
            data-reveal="fade"
            style={delay(200)}
            className="self-end text-lg leading-relaxed text-ink/75 lg:col-span-5"
          >
            From guest interactions to team communication and leadership, we
            help hospitality professionals communicate with greater confidence,
            clarity and professionalism.
          </p>
        </div>

        <ul className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-20">
          {offers.map((offer, i) => (
            <li key={offer.title} data-reveal="fade" style={delay(i * 120)}>
              <article className="group flex h-full flex-col gap-10 rounded-3xl md:gap-16 bg-white p-8 transition-[background-color,translate,box-shadow] duration-500 ease-out-expo hover:-translate-y-1.5 hover:bg-navy hover:shadow-[0_30px_60px_-30px_hsl(219_65%_26%/0.55)] lg:p-10">
                <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                <div>
                  <h3 className="text-2xl font-normal tracking-tight text-navy transition-colors duration-500 group-hover:text-cream">
                    {offer.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink/70 transition-colors duration-500 group-hover:text-cream/80">
                    {offer.text}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-24 grid items-center gap-12 lg:mt-32 lg:grid-cols-12 lg:gap-16">
          {/* Video placeholder: swap this block for the real <video> / embed. */}
          <div
            data-reveal="fade"
            className="relative aspect-video overflow-hidden rounded-3xl bg-navy lg:col-span-7"
          >
            <Image
              src={videoPoster}
              alt="Founder of Hospitality Communications at work"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy-deep/25" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-cream/95 text-navy sm:h-20 sm:w-20">
                <PlayIcon className="h-5 w-5 translate-x-0.5 sm:h-7 sm:w-7" />
              </span>
            </div>
            <span className="eyebrow absolute bottom-5 left-6 text-cream/90">
              Video coming soon
            </span>
          </div>

          <div className="lg:col-span-5">
            <h3
              data-reveal="words"
              className="text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.12] font-light tracking-tight text-navy"
            >
              <SplitText text="Hospitality Experience. Practical Training." />
            </h3>
            <p
              data-reveal="fade"
              style={delay(200)}
              className="mt-6 text-lg leading-relaxed text-ink/75"
            >
              Founded by a hospitality professional with 14+ years of
              international experience, Hospitality Communications brings
              real-world hospitality experience into practical language,
              communication and leadership training.
            </p>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 lg:mt-20 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-reveal="fade"
              style={delay(i * 100)}
              className="flex flex-col-reverse justify-end gap-2"
            >
              <dt className="text-sm text-ink/65">{stat.label}</dt>
              <dd className="text-[clamp(1.5rem,2.6vw,2.5rem)] leading-none font-light tracking-tight text-navy">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div data-reveal="fade" className="mt-14">
          <a href="#contact" className="btn btn-navy">
            Contact Us
            <ArrowIcon className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
