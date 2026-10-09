import { navLinks, site } from "@/lib/site";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "../icons";

const socials = [
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedInIcon },
  { label: "Instagram", href: site.instagram, Icon: InstagramIcon },
  { label: "WhatsApp", href: site.whatsapp, Icon: WhatsAppIcon },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-2xl font-light tracking-[0.18em] uppercase">
              Hospitality
              <span className="mt-2 block text-xs tracking-[0.42em] text-cream/70">
                Communications
              </span>
            </p>
            <p className="mt-6 text-sm text-cream/70">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <ul className="grid gap-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/80 transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid content-start gap-3 text-sm lg:col-span-3">
            <a
              href={`mailto:${site.email}`}
              className="w-fit text-cream/80 transition-colors duration-300 hover:text-gold"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone}`}
              className="w-fit text-cream/80 transition-colors duration-300 hover:text-gold"
            >
              {site.phoneDisplay}
            </a>
            <ul className="mt-4 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 transition-[background-color,color] duration-500 hover:bg-gold hover:text-navy-deep"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 text-xs text-cream/50">
          © {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
