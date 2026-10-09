import { delay } from "@/lib/reveal";
import { site } from "@/lib/site";
import { ContactForm } from "../contact-form";
import {
  ArrowIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "../icons";
import { SplitText } from "../split-text";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    Icon: MailIcon,
  },
  {
    label: "Phone",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
    Icon: PhoneIcon,
  },
  {
    label: "WhatsApp",
    value: "Send us a message",
    href: site.whatsapp,
    Icon: WhatsAppIcon,
  },
];

const socials = [
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedInIcon },
  { label: "Instagram", href: site.instagram, Icon: InstagramIcon },
];

export function Contact() {
  return (
    <section id="contact" className="bg-cream py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p data-reveal="fade" className="eyebrow text-navy/70">
              Contact
            </p>
            <h2
              data-reveal="words"
              className="mt-6 text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.06] font-light tracking-tight text-navy"
            >
              <SplitText text="Book a Consultation" />
            </h2>
          </div>
          <p
            data-reveal="fade"
            style={delay(200)}
            className="self-end text-lg leading-relaxed text-ink/75 lg:col-span-5"
          >
            Tell us about your team and we&apos;ll get back to you with the
            right training, workshop or assessment.
          </p>
        </div>

        <div
          data-reveal="fade"
          className="mt-10 grid grid-cols-1 overflow-hidden rounded-4xl bg-white shadow-[0_40px_90px_-50px_hsl(219_65%_16%/0.45)] lg:mt-14 lg:grid-cols-12"
        >
          <div className="flex min-w-0 flex-col gap-12 bg-navy p-8 text-cream sm:p-10 lg:col-span-5 lg:p-12">
            <ul className="grid grid-cols-1 gap-3">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label} className="min-w-0">
                  <a
                    href={href}
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 rounded-2xl bg-cream/[0.07] p-4 transition-colors duration-500 hover:bg-cream/[0.14]"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cream/10 transition-colors duration-500 group-hover:bg-gold group-hover:text-navy-deep">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs tracking-[0.18em] text-cream/60 uppercase">
                        {label}
                      </span>
                      <span className="mt-1 block text-base wrap-anywhere sm:text-lg">
                        {value}
                      </span>
                    </span>
                    <ArrowIcon className="mr-1 h-4 w-4 shrink-0 text-cream/50 transition-[translate,color] duration-500 ease-out-expo group-hover:translate-x-1 group-hover:text-cream" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center justify-between gap-6">
              <p className="text-sm text-cream/60">Follow along</p>
              <ul className="flex gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label} className="min-w-0">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-12 w-12 place-items-center rounded-full bg-cream/10 transition-[background-color,color,translate] duration-500 ease-out-expo hover:-translate-y-1 hover:bg-gold hover:text-navy-deep"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="min-w-0 p-8 sm:p-10 lg:col-span-7 lg:p-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
