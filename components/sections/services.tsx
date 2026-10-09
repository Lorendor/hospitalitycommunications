import { delay } from "@/lib/reveal";
import { ArrowIcon } from "../icons";
import { SplitText } from "../split-text";

// TODO: point each href at its own page (course / workshops) once those exist.
const services = [
  {
    name: "Online Hospitality English Course",
    title: "Practical English for Real Hospitality Situations",
    text: "Build the language skills needed to communicate confidently with guests and colleagues.",
    cta: "Explore our course",
    href: "#contact",
  },
  {
    name: "Hospitality Communication Workshops",
    title: "Transform Everyday Guest Interactions into Exceptional Experiences",
    text: "Practical workshops designed to strengthen guest and team communication.",
    cta: "Explore our workshops",
    href: "#contact",
  },
  {
    name: "Leadership Development Workshops",
    title: "Build Confident Hospitality Leaders",
    text: "Develop the communication skills needed to lead teams, manage challenges and give effective feedback.",
    cta: "Explore our workshops",
    href: "#contact",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2
          data-reveal="words"
          className="text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.06] font-light tracking-tight text-navy"
        >
          <SplitText text="Our Services" />
        </h2>

        <ul className="mt-16 grid gap-x-6 gap-y-16 md:grid-cols-3 lg:mt-20">
          {services.map((service, i) => (
            <li key={service.name} data-reveal="fade" style={delay(i * 120)}>
              <a href={service.href} className="group flex h-full flex-col">
                {/* Image placeholder: replace with <Image> when photos are ready. */}
                <div className="grid aspect-4/5 place-items-center overflow-hidden rounded-3xl bg-cream">
                  <span className="eyebrow text-navy/35 transition-transform duration-700 ease-out-expo group-hover:scale-110">
                    Image placeholder
                  </span>
                </div>
                <p className="eyebrow mt-8 text-navy/70">{service.name}</p>
                <h3 className="mt-4 text-2xl leading-snug font-normal tracking-tight text-navy">
                  {service.title}
                </h3>
                <p className="mt-4 leading-relaxed text-ink/70">
                  {service.text}
                </p>
                <span className="mt-auto inline-flex items-center gap-3 pt-8 text-sm font-medium tracking-wide text-navy">
                  {service.cta}
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-cream transition-colors duration-500 group-hover:bg-gold">
                    <ArrowIcon className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5" />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
