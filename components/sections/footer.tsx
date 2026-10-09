import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import { legalLinks, navLinks, site } from "@/lib/site";
import {
  ArrowIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "../icons";

const socials = [
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedInIcon },
  { label: "Instagram", href: site.instagram, Icon: InstagramIcon },
  { label: "WhatsApp", href: site.whatsapp, Icon: WhatsAppIcon },
];

const headingClass = "eyebrow text-cream/50";

const linkClass =
  "inline-block text-lg text-cream/85 transition-[color,translate] duration-300 ease-out-expo hover:translate-x-1 hover:text-gold";

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 pt-16 lg:px-10 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* The logo is navy and gold, so it sits on a cream tile to stay visible. */}
          <div className="lg:col-span-4">
            <Link
              href="/#top"
              aria-label={`${site.name} home`}
              className="inline-block rounded-3xl bg-cream px-8 py-6"
            >
              <Image
                src={logo}
                alt={site.name}
                sizes="200px"
                className="h-auto w-40 lg:w-44"
              />
            </Link>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-[1fr_1fr_auto] lg:col-span-8">
            <nav aria-label="Footer">
              <p className={headingClass}>Explore</p>
              <ul className="mt-5 grid gap-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className={headingClass}>Follow</p>
              <ul className="mt-5 grid gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkClass} inline-flex items-center gap-3`}
                    >
                      <Icon className="h-5 w-5" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 min-w-0 sm:col-span-1">
              <p className={headingClass}>Contact</p>
              <ul className="mt-5 grid gap-3">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className={`${linkClass} wrap-anywhere`}
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${site.phone}`} className={linkClass}>
                    {site.phoneDisplay}
                  </a>
                </li>
              </ul>
              <Link href="/#contact" className="btn btn-gold mt-8">
                Book a Consultation
                <ArrowIcon className="btn-arrow" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 py-8 text-sm text-cream/55 lg:flex-row lg:items-center lg:justify-between lg:mt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <p>© {site.name}. All rights reserved.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/85 transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/#top"
            className="group inline-flex items-center gap-3 text-cream/85 transition-colors duration-300 hover:text-gold"
          >
            Back to top
            <span className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 transition-colors duration-500 group-hover:bg-gold group-hover:text-navy-deep">
              <ArrowIcon className="h-4 w-4 -rotate-90" />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
