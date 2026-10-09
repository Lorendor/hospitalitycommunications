import type { CSSProperties } from "react";

/**
 * Renders text word by word so a parent with data-reveal="words"
 * can slide each word up in sequence.
 */
export function SplitText({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, i) => (
        <span key={i}>
          <span className="word">
            <span style={{ "--i": i } as CSSProperties}>{word}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}
