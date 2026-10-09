import Image from "next/image";
import sectionBackground from "@/public/images/sectionbg.png";
import sectionBackgroundMobile from "@/public/images/sectionbgmobile.png";
import { delay } from "@/lib/reveal";
import { SplitText } from "../split-text";

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

const imageAlt = "Hotel reception team welcoming guests at the front desk";

export function Why() {
  return (
    <section
      id="why"
      className="relative isolate overflow-hidden bg-navy-deep text-cream lg:flex lg:min-h-[max(50rem,42vw)]"
    >
      {/* lg and up: the wide photo sits behind the whole section, under glass cards. */}
      <Image
        src={sectionBackground}
        alt={imageAlt}
        fill
        placeholder="blur"
        sizes="100vw"
        className="-z-20 hidden object-cover object-[42%_top] lg:block"
      />
      <div className="absolute inset-0 -z-10 hidden bg-linear-to-t from-navy-deep/95 via-navy-deep/50 to-navy-deep/10 lg:block" />

      {/* Mobile: the portrait photo is shown on its own, with the content below it. */}
      <div className="relative aspect-4/5 max-h-136 w-full lg:hidden">
        <Image
          src={sectionBackgroundMobile}
          alt={imageAlt}
          fill
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[center_38%]"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-navy-deep to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-16 lg:mt-auto lg:px-10 lg:pt-56 lg:pb-24">
        <h2
          data-reveal="words"
          className="max-w-3xl text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.06] font-light tracking-tight"
        >
          <SplitText text="Why Hospitality Communications?" />
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-4">
          {reasons.map((reason, i) => (
            <li
              key={reason.title}
              data-reveal="fade"
              style={delay(i * 100)}
              className="h-full"
            >
              <article className="flex h-full gap-4 rounded-2xl bg-cream/7 p-5 transition-[background-color,translate] duration-500 ease-out-expo lg:block lg:rounded-3xl lg:bg-white/10 lg:p-8 lg:ring-1 lg:ring-white/20 lg:backdrop-blur-xl lg:ring-inset lg:hover:-translate-y-1.5 lg:hover:bg-white/18">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gold lg:hidden" />
                <div>
                  <h3 className="text-xl font-normal tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-cream/80 lg:mt-3">
                    {reason.text}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
