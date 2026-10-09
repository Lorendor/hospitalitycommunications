"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logoMark from "@/public/images/logo-mark.webp";
import { navLinks, site } from "@/lib/site";
import { ArrowIcon } from "./icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [pill, setPill] = useState({ left: 0, width: 0, glide: false });

  // Glide only when moving link to link; on first entry the pill fades in where it is.
  function highlight(label: string, el: HTMLElement) {
    setPill({
      left: el.offsetLeft,
      width: el.offsetWidth,
      glide: active !== null,
    });
    setActive(label);
  }

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="pointer-events-auto mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full bg-cream pr-2.5 pl-5 shadow-[0_12px_40px_-18px_hsl(219_65%_16%/0.45)] ring-1 ring-navy/5">
        <Link
          href="/#top"
          aria-label={`${site.name} home`}
          className="flex items-center gap-3 text-navy"
          onClick={() => setOpen(false)}
        >
          <Image src={logoMark} alt="" className="h-10 w-auto" preload />
          <span className="leading-none">
            <span className="block text-[0.85rem] font-medium tracking-[0.2em] uppercase">
              Hospitality
            </span>
            <span className="mt-1.5 block text-[0.55rem] tracking-[0.42em] uppercase">
              Communications
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main"
          className="relative hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setActive(null)}
        >
          {/* One highlight that glides between links instead of each link fading on its own. */}
          <span
            aria-hidden
            className={`absolute inset-y-0 left-0 rounded-full bg-navy ease-out-expo motion-reduce:transition-none ${
              pill.glide
                ? "transition-[transform,width,opacity] duration-500"
                : "transition-opacity duration-300"
            } ${active === null ? "opacity-0" : "opacity-100"}`}
            style={{
              width: pill.width,
              transform: `translateX(${pill.left}px)`,
            }}
          />
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative rounded-full px-4 py-2 text-base transition-colors duration-300 xl:text-[1.0625rem] ${
                active === link.label ? "text-cream" : "text-navy"
              }`}
              onMouseEnter={(event) =>
                highlight(link.label, event.currentTarget)
              }
              onFocus={(event) => highlight(link.label, event.currentTarget)}
              onBlur={() => setActive(null)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            href="/#contact"
            className="btn btn-sm btn-navy hidden sm:inline-flex"
            onClick={() => setOpen(false)}
          >
            Book a Consultation
            <ArrowIcon className="btn-arrow" />
          </Link>

          <button
            type="button"
            className="relative h-11 w-11 rounded-full text-navy transition-colors duration-300 hover:bg-navy/15 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`absolute left-3 h-px w-5 bg-current transition-all duration-300 ${
                open ? "top-1/2 rotate-45" : "top-4.5"
              }`}
            />
            <span
              className={`absolute left-3 h-px w-5 bg-current transition-all duration-300 ${
                open ? "top-1/2 -rotate-45" : "top-6.25"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        inert={!open}
        className={`pointer-events-auto mx-auto mt-2 grid max-w-6xl transition-[grid-template-rows,opacity,translate] duration-500 ease-out-expo lg:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none -translate-y-2 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden rounded-3xl bg-cream shadow-[0_24px_60px_-24px_hsl(219_65%_16%/0.5)] ring-1 ring-navy/5">
          <nav aria-label="Mobile" className="flex flex-col p-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-xl font-light tracking-tight text-navy transition-colors duration-300 hover:bg-navy/15"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="btn btn-navy mt-3 sm:hidden"
              onClick={() => setOpen(false)}
            >
              Book a Consultation
              <ArrowIcon className="btn-arrow" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
