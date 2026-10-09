import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service | Hospitality Communications",
};

export default function Page() {
  return (
    <LegalPage title="Terms of Service">
      {/* TODO: replace with the final legal text supplied by the client. */}
      <p>This page is being prepared and will be published soon.</p>
    </LegalPage>
  );
}
