"use client";

import type { FormEvent } from "react";
import { site } from "@/lib/site";
import { ArrowIcon } from "./icons";

const interests = [
  "English Course",
  "Communication Workshops",
  "Leadership Workshops",
  "Business Solutions",
];

const labelClass = "text-xs tracking-[0.18em] text-navy/70 uppercase";

const fieldClass =
  "w-full rounded-2xl border border-transparent bg-cream/70 px-5 py-4 text-base text-ink placeholder:text-ink/40 transition-colors duration-300 hover:bg-cream focus:border-navy focus:bg-white focus:outline-none";

export function ContactForm() {
  // No backend yet: hand the message to the visitor's email app.
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const interest = data.get("interest");
    const subject = `Consultation enquiry from ${data.get("name")}`;
    const body = [
      interest ? `Interested in: ${interest}\n` : null,
      data.get("message"),
      "",
      data.get("name"),
      data.get("email"),
    ]
      .filter((line) => line !== null)
      .join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-7">
      <div className="grid gap-7 sm:grid-cols-2 sm:gap-5">
        <label className="grid gap-3">
          <span className={labelClass}>Name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </label>
        <label className="grid gap-3">
          <span className={labelClass}>Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@hotel.com"
            className={fieldClass}
          />
        </label>
      </div>

      <fieldset className="grid gap-3">
        <legend className={`${labelClass} mb-3`}>I&apos;m interested in</legend>
        <div className="flex flex-wrap gap-2.5">
          {interests.map((interest) => (
            <label key={interest} className="cursor-pointer">
              <input
                type="radio"
                name="interest"
                value={interest}
                className="peer sr-only"
              />
              <span className="block rounded-full bg-cream/70 px-5 py-2.5 text-sm text-navy transition-colors duration-300 peer-checked:bg-navy peer-checked:text-cream peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold hover:bg-cream peer-checked:hover:bg-navy">
                {interest}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-3">
        <span className={labelClass}>Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your team and what you'd like to improve."
          className={`${fieldClass} resize-none`}
        />
      </label>

      <button type="submit" className="btn btn-navy justify-self-start">
        Send Message
        <ArrowIcon className="btn-arrow" />
      </button>
    </form>
  );
}
