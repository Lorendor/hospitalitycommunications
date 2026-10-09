import type { CSSProperties } from "react";

/** Inline style that staggers a [data-reveal] element's entrance. */
export function delay(ms: number) {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}
