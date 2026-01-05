import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.upulserendibtours.com";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Upul Dunuhinga for wildlife photography services, safari bookings, workshops, and fine art prints. Phone: +94 773070717 | Email: upul.enterprises@gmail.com",
  openGraph: {
    title: "Contact Upul Dunuhinga | Wildlife Photographer",
    description:
      "Contact for wildlife photography services, safari bookings, and workshops.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

