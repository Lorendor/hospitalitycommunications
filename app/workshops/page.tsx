import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Workshops | Hospitality Communications",
};

export default function Page() {
  return (
    <ComingSoon
      title="Hospitality Communication & Leadership Workshops"
      text="This page is on its way. In the meantime, get in touch and we'll tell you all about our workshops."
    />
  );
}
