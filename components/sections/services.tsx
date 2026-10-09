import Image from "next/image";
import Link from "next/link";
import courseImage from "@/public/images/service1.png";
import workshopsImage from "@/public/images/service2.jpg";
import leadershipImage from "@/public/images/service3.png";
import { delay } from "@/lib/reveal";
import { ArrowIcon } from "../icons";
import { SplitText } from "../split-text";

const services = [
  {
    name: "Online Hospitality English Course",
    image: courseImage,
    alt: "Trainer working on a laptop in a hotel lounge",
    title: "Practical English for Real Hospitality Situations",
    text: "Build the language skills needed to communicate confidently with guests and colleagues.",
    cta: "Explore Our Course",
    href: "/course",
  },
  {
    name: "Hospitality Communication Workshops",
    image: workshopsImage,
    alt: "Two hospitality professionals in conversation over coffee",
    title: "Transform Everyday Guest Interactions into Exceptional Experiences",
    text: "Practical workshops designed to strengthen guest and team communication.",
    cta: "Explore Our Workshops",
    href: "/workshops",
  },
  {
    name: "Leadership Development Workshops",
    image: leadershipImage,
    alt: "Trainer presenting to a room of hospitality staff",
    title: "Build Confident Hospitality Leaders",
    text: "Develop the communication skills needed to lead teams, manage challenges and give effective feedback.",
    cta: "Explore Our Workshops",
    href: "/workshops",
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

        <ul className="mt-16 grid gap-6 md:grid-cols-3 lg:mt-20">
          {services.map((service, i) => (
            <li key={service.name} data-reveal="fade" style={delay(i * 120)}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-cream">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 lg:p-9">
                  <h3 className="text-[clamp(1.5rem,2.1vw,1.875rem)] leading-[1.15] font-normal tracking-tight text-navy">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-lg leading-snug text-navy/80">
                    {service.title}
                  </p>
                  <p className="mt-3 leading-relaxed text-ink/70">
                    {service.text}
                  </p>
                  <div className="mt-auto pt-9">
                    <Link href={service.href} className="btn btn-navy">
                      {service.cta}
                      <ArrowIcon className="btn-arrow" />
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
