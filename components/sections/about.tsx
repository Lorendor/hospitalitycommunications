import Image from "next/image";
import videoPoster from "@/public/images/placeholder.jpeg";
import { delay } from "@/lib/reveal";
import {
  ArrowIcon,
  BookIcon,
  GrowthIcon,
  PlayIcon,
  TeamIcon,
} from "../icons";
import { SplitText } from "../split-text";

const offers = [
  {
    title: "Develop Skills",
    text: "Practical English and communication training.",
    Icon: BookIcon,
  },
  {
    title: "Strengthen Teams",
    text: "Workshops for communication, collaboration and leadership.",
    Icon: TeamIcon,
  },
  {
    title: "Improve Performance",
    text: "Assessments, consulting and customized solutions.",
    Icon: GrowthIcon,
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
    <section id="about" className="bg-cream py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
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

        {/* Below md the cards use the navy "hovered" look permanently, since phones have no hover. */}
        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-16 lg:gap-5">
          {offers.map(({ title, text, Icon }, i) => (
            <li key={title} data-reveal="fade" style={delay(i * 120)}>
              <article className="group flex h-full items-start gap-5 rounded-3xl bg-navy p-6 transition-[background-color,translate,box-shadow] duration-500 ease-out-expo md:flex-col md:gap-8 md:bg-white md:p-8 md:hover:-translate-y-1.5 md:hover:bg-navy md:hover:shadow-[0_30px_60px_-30px_hsl(219_65%_26%/0.55)] lg:p-10">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold text-navy-deep transition-colors duration-500 md:bg-cream md:text-navy md:group-hover:bg-gold md:group-hover:text-navy-deep lg:h-14 lg:w-14">
                  <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-normal tracking-tight text-cream transition-colors duration-500 md:text-navy md:group-hover:text-cream lg:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-cream/80 transition-colors duration-500 md:text-ink/70 md:group-hover:text-cream/80 lg:mt-3">
                    {text}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid gap-6 lg:mt-32 lg:grid-cols-12 lg:gap-16">
          <h3
            data-reveal="words"
            className="max-w-[13em] text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.1] font-light tracking-tight text-navy lg:col-span-7"
          >
            <SplitText text="Hospitality Experience. Practical Training." />
          </h3>
          <p
            data-reveal="fade"
            style={delay(200)}
            className="self-end text-lg leading-relaxed text-ink/75 lg:col-span-5"
          >
            Founded by a hospitality professional with 14+ years of
            international experience, Hospitality Communications brings
            real-world hospitality experience into practical language,
            communication and leadership training.
          </p>
        </div>

        {/* Video placeholder: swap this block for the real <video> / embed. */}
        <div
          data-reveal="fade"
          className="group relative mt-10 aspect-video overflow-hidden rounded-3xl bg-navy shadow-[0_40px_90px_-50px_hsl(219_65%_16%/0.6)] lg:mt-14 lg:rounded-4xl"
        >
          <Image
            src={videoPoster}
            alt="Founder of Hospitality Communications speaking to camera"
            fill
            placeholder="blur"
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy-deep/65 via-navy-deep/15 to-navy-deep/10" />
          {/* Play button sits in the corner so it doesn't cover her face. */}
          <div className="absolute bottom-4 left-4 flex items-center gap-4 sm:bottom-8 sm:left-8 sm:gap-5">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-cream text-navy transition-transform duration-500 ease-out-expo group-hover:scale-110 sm:h-20 sm:w-20">
              <PlayIcon className="h-5 w-5 translate-x-0.5 sm:h-8 sm:w-8" />
            </span>
            <span className="eyebrow text-cream/90">Video coming soon</span>
          </div>
        </div>

        <dl className="mt-4 grid grid-cols-2 gap-4 lg:mt-5 lg:grid-cols-4 lg:gap-5">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-reveal="fade"
              style={delay(i * 100)}
              className="flex min-w-0 flex-col-reverse justify-end gap-2 rounded-3xl bg-white p-5 sm:p-7 lg:p-8"
            >
              <dt className="text-sm text-ink/65">{stat.label}</dt>
              <dd className="text-[clamp(1.2rem,2.4vw,2.25rem)] leading-none font-light tracking-tight text-navy">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div data-reveal="fade" className="mt-10 lg:mt-12">
          <a href="#contact" className="btn btn-navy w-full sm:w-auto">
            Contact Us
            <ArrowIcon className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
