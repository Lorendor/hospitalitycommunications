import type { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./sections/footer";

/** Shared shell for the privacy policy, legal notice and terms pages. */
export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="bg-cream pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h1 className="text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.06] font-light tracking-tight text-navy">
            {title}
          </h1>
          <div className="mt-10 grid gap-5 text-lg leading-relaxed text-ink/75">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
