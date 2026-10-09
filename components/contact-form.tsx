"use client";

import type { FormEvent } from "react";
import { site } from "@/lib/site";
import { ArrowIcon } from "./icons";

const interests = [
  "Online Hospitality English Course",
  "Corporate Training",
  "Communication Workshops",
  "Leadership Workshops",
  "Hospitality English Assessment",
  "Communication Consulting",
  "Communication Audit",
  "Custom Training",
  "Consultation",
  "Other",
];

// TODO: confirm these options with the client.
const contactMethods = ["Email", "Phone", "WhatsApp"];

const labelClass = "text-xs tracking-[0.18em] text-navy/70 uppercase";

const fieldClass =
  "w-full rounded-2xl border border-transparent bg-cream/70 px-5 py-4 text-base text-ink placeholder:text-ink/40 transition-colors duration-300 hover:bg-cream focus:border-navy focus:bg-white focus:outline-none";

function Optional() {
  return (
    <span className="ml-2 tracking-normal text-navy/45 normal-case">
      optional
    </span>
  );
}

export function ContactForm() {
  // No backend yet: hand the message to the visitor's email app.
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const name = `${value("firstName")} ${value("lastName")}`;

    // Optional fields are left out of the email when empty.
    const details = [
      ["Name", name],
      ["Email", value("email")],
      ["Phone", value("phone")],
      ["Interested in", value("interest")],
      ["Number of employees / learners", value("teamSize")],
      ["Preferred way to contact", value("contactMethod")],
    ]
      .filter(([, answer]) => answer)
      .map(([label, answer]) => `${label}: ${answer}`);

    const subject = `Enquiry from ${name}: ${value("interest")}`;
    const body = [...details, "", value("message")].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-7">
      <div className="grid gap-7 sm:grid-cols-2 sm:gap-5">
        <label className="grid gap-3">
          <span className={labelClass}>First name</span>
          <input
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className={fieldClass}
          />
        </label>
        <label className="grid gap-3">
          <span className={labelClass}>Last name</span>
          <input
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className={fieldClass}
          />
        </label>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 sm:gap-5">
        <label className="grid gap-3">
          <span className={labelClass}>Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </label>
        <label className="grid gap-3">
          <span className={labelClass}>
            Phone
            <Optional />
          </span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
          />
        </label>
      </div>

      <fieldset>
        <legend className={`${labelClass} mb-3`}>
          What are you interested in?
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {interests.map((interest) => (
            <label key={interest} className="cursor-pointer">
              <input
                type="radio"
                name="interest"
                value={interest}
                required
                className="peer sr-only"
              />
              <span className="block rounded-full bg-cream/70 px-4 py-2.5 text-sm text-navy transition-colors duration-300 peer-checked:bg-navy peer-checked:text-cream peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold hover:bg-cream peer-checked:hover:bg-navy">
                {interest}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-3">
        <span className={labelClass}>
          Tell us a little about what you&apos;re looking for
        </span>
        <textarea
          name="message"
          required
          rows={4}
          className={`${fieldClass} resize-none`}
        />
      </label>

      <div className="grid gap-7 sm:grid-cols-2 sm:gap-5">
        <label className="grid gap-3">
          <span className={labelClass}>
            Employees / learners
            <Optional />
          </span>
          <input
            name="teamSize"
            type="text"
            inputMode="numeric"
            className={fieldClass}
          />
        </label>
        <label className="grid gap-3">
          <span className={labelClass}>Preferred way to contact you</span>
          <span className="relative">
            <select
              name="contactMethod"
              defaultValue=""
              className={`${fieldClass} cursor-pointer appearance-none pr-12`}
            >
              <option value="">Select an option</option>
              {contactMethods.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
            <ArrowIcon className="pointer-events-none absolute top-1/2 right-5 h-4 w-4 -translate-y-1/2 rotate-90 text-navy/60" />
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="btn btn-navy w-full sm:w-auto sm:justify-self-start"
      >
        Get in Touch
        <ArrowIcon className="btn-arrow" />
      </button>
    </form>
  );
}
