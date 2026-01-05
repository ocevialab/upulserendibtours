import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Camera, Users, Image as ImageIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Metadata } from "next";
import { StructuredData } from "@/components/structured-data";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.upulserendibtours.com";

export const metadata: Metadata = {
  title: "Photography Services",
  description:
    "Book wildlife safaris, photography workshops, and purchase fine art prints. Professional wildlife photography services in Yala, Udawalawe, and Sigiriya. Starting from $350/day.",
  openGraph: {
    title: "Wildlife Photography Services | Upul Dunuhinga",
    description:
      "Book wildlife safaris, photography workshops, and purchase fine art prints.",
  },
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Wildlife Photography Services",
    provider: {
      "@type": "Person",
      name: "Upul Dunuhinga",
    },
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wildlife Photography Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wildlife Safaris",
            description:
              "Guided photography expeditions to Sri Lanka's most biodiverse locations",
            price: "350",
            priceCurrency: "USD",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Photography Workshops",
            description:
              "Hands-on training for wildlife photography enthusiasts",
            price: "500",
            priceCurrency: "USD",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fine Art Prints",
            description: "Museum-quality prints of Sri Lankan wildlife",
            price: "120",
            priceCurrency: "USD",
          },
        },
      ],
    },
  };

  return (
    <div className="pt-24 pb-16">
      <StructuredData data={serviceSchema} />
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Photography Services
          </h1>
          <p className="text-lg text-muted-foreground">
            From guided wildlife safaris to fine art prints, explore how we can
            work together to capture and share the beauty of Sri Lankan
            wildlife.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="relative overflow-hidden border-2 border-primary">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
              Most Popular
            </div>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-playfair">
                Wildlife Safaris
              </CardTitle>
              <CardDescription>
                Guided photography expeditions to Sri Lanka&apos;s most
                biodiverse locations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Customized safari itineraries",
                    "Expert wildlife tracking and spotting",
                    "Photography guidance and tips",
                    "Small groups (max 4 people)",
                    "All-inclusive packages available",
                    "Transportation in specialized safari vehicles",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <div className="text-3xl font-playfair font-bold">$350</div>
                  <p className="text-sm text-muted-foreground">per day</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full rounded-full">
                <Link href="/contact">Book a Safari</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-playfair">
                Photography Workshops
              </CardTitle>
              <CardDescription>
                Hands-on training for wildlife photography enthusiasts of all
                skill levels.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Wildlife photography techniques",
                    "Camera settings and equipment guidance",
                    "Field sessions in prime locations",
                    "Post-processing tutorials",
                    "Portfolio review and feedback",
                    "Group size limited to 6 participants",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <div className="text-3xl font-playfair font-bold">$500</div>
                  <p className="text-sm text-muted-foreground">
                    per workshop (2 days)
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full rounded-full">
                <Link href="/contact">View Schedule</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ImageIcon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-playfair">
                Fine Art Prints
              </CardTitle>
              <CardDescription>
                Museum-quality prints of Sri Lankan wildlife for your home or
                office.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Gallery-quality archival prints",
                    "Multiple sizes available",
                    "Framing options",
                    "Limited edition series",
                    "Signed certificates of authenticity",
                    "Worldwide shipping",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <div className="text-3xl font-playfair font-bold">$120</div>
                  <p className="text-sm text-muted-foreground">
                    unframed print (12×16&quot;)
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full rounded-full">
                <Link href="/contact">Shop Prints</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Custom Services */}
        <section className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold">
                Custom Services
              </h2>
              <p>
                Need something specific? I offer customized photography services
                tailored to your unique requirements. Whether it&apos;s a
                private wildlife photography tour, specialized workshops for
                corporate teams, or custom print installations, I&apos;m here to
                help.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 h-fit">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Private Photography Tours</h3>
                    <p className="text-muted-foreground">
                      Exclusive wildlife expeditions customized to your
                      photography goals and interests.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 h-fit">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Corporate Workshops</h3>
                    <p className="text-muted-foreground">
                      Team-building and creative workshops focused on wildlife
                      photography.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 h-fit">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Custom Print Collections</h3>
                    <p className="text-muted-foreground">
                      Curated wildlife photography installations for offices,
                      hotels, and public spaces.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild className="rounded-full">
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"
                  alt="Custom wildlife safari"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[3/4] relative mt-8 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg"
                  alt="Wildlife photography workshop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16 md:mb-24 bg-muted py-12 rounded-xl">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center">
              Client Experiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "The wildlife safari with Upul transformed my photography. His knowledge of animal behavior helped me capture images I never thought possible.",
                  name: "David Thompson",
                  title: "UK",
                },
                {
                  quote:
                    "Upul's workshop was the perfect blend of technical instruction and practical field experience. I learned more in two days than I had in months of self-study.",
                  name: "Lisa Nakamura",
                  title: "Japan",
                },
                {
                  quote:
                    "The prints we ordered for our hotel lobby have received countless compliments from guests. The quality is exceptional and they perfectly showcase Sri Lankan wildlife.",
                  name: "Rajiv Patel",
                  title: "India",
                },
                {
                  quote:
                    "Our corporate team-building workshop was both educational and inspirational. Everyone left with a new appreciation for wildlife photography.",
                  name: "Christine Wu",
                  title: "Singapore",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
                  <blockquote className="mb-4 text-foreground">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What camera equipment should I bring on a safari?",
                answer:
                  "For wildlife photography, I recommend a DSLR or mirrorless camera with a telephoto lens (at least 300mm). Bring spare batteries, memory cards, and a sturdy tripod. Weather protection for your gear is also essential.",
              },
              {
                question: "Are your workshops suitable for beginners?",
                answer:
                  "Absolutely! I offer workshops for all skill levels, from complete beginners to advanced photographers. The curriculum is tailored to match the participants' experience level.",
              },
              {
                question: "How many people join your safari tours?",
                answer:
                  "To ensure quality instruction and the best wildlife viewing opportunities, I limit safari groups to a maximum of 4 participants. Private tours are also available.",
              },
              {
                question: "What's included in your safari packages?",
                answer:
                  "Standard packages include photography guidance, transportation in specialized safari vehicles, park entrance fees, and accommodation. Meals and equipment rental can be added as options.",
              },
              {
                question: "Do you ship prints internationally?",
                answer:
                  "Yes, I ship fine art prints worldwide using insured courier services to ensure they arrive safely. Custom framing options are available in select countries.",
              },
              {
                question:
                  "How far in advance should I book a safari or workshop?",
                answer:
                  "For peak season (December-March), I recommend booking at least 3-4 months in advance. For other times, 1-2 months notice is usually sufficient, but earlier bookings are always recommended.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary text-primary-foreground rounded-xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Ready to Capture Wildlife Moments?
            </h2>
            <p className="mb-8">
              Contact me to discuss your wildlife photography needs, book a
              safari, or inquire about workshops and prints. Let&apos;s create
              unforgettable wildlife photography experiences together.
            </p>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="rounded-full"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
