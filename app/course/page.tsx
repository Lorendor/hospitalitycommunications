import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Course | Hospitality Communications",
};

export default function Page() {
  return (
    <ComingSoon
      title="Online Hospitality English Course"
      text="This page is on its way. In the meantime, get in touch and we'll tell you all about the course."
    />
  );
}
