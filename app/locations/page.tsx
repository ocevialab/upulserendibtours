import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Calendar } from "lucide-react";
import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.upulserendibtours.com";

export const metadata: Metadata = {
  title: "Photography Locations",
  description:
    "Explore Yala National Park, Udawalawe National Park, and Sigiriya - prime wildlife photography locations in Sri Lanka. Best times to visit and photography tips.",
  openGraph: {
    title: "Wildlife Photography Locations in Sri Lanka",
    description:
      "Explore prime wildlife photography locations: Yala, Udawalawe, and Sigiriya.",
    images: [`${baseUrl}/assets/parks/R (1).jpeg`],
  },
};

export default function LocationsPage() {
  const locations = [
    {
      name: "Yala National Park",
      description:
        "Renowned for having one of the highest leopard densities in the world, Yala National Park offers diverse habitats from lagoons to grasslands. It's home to elephants, sloth bears, crocodiles, and over 200 bird species.",
      highlights: [
        "Sri Lankan leopards",
        "Asian elephants",
        "Sloth bears",
        "Saltwater crocodiles",
        "Diverse bird species",
      ],
      bestTime: "February to July",
      image: "/assets/parks/R (1).jpeg",
      mapLink:
        "https://www.google.com/maps/place/Yala+National+Park/@6.4639613,81.4693098,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae5d3a62ffb9359:0x3bb623d70b5a3314!8m2!3d6.4639613!4d81.4718847!16zL20vMDJxMXo1?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "Udawalawe National Park",
      description:
        "Famous for its elephant population, Udawalawe National Park provides one of the best wildlife viewing experiences in Sri Lanka. The park centers around the Udawalawe Reservoir, creating ideal conditions for elephants, water birds, and other wildlife.",
      highlights: [
        "Large elephant herds",
        "Water buffalo",
        "Spotted deer",
        "Peacocks",
        "Eagles and hawks",
      ],
      bestTime: "All year round, with peak from May to September",
      image: "/assets/parks/udawlwa.jpeg",
      mapLink:
        "https://www.google.com/maps/search/Udawalawe+National+Park/@6.456513,80.8620081,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "Sigiriya and Surroundings",
      description:
        "While famous for its ancient rock fortress, the areas surrounding Sigiriya offer unique wildlife opportunities. The mix of forests, water bodies, and grasslands creates diverse habitats for many species.",
      highlights: [
        "Gray langurs",
        "Toque macaques",
        "Land monitors",
        "Diverse butterfly species",
        "Rich birdlife",
      ],
      bestTime: "January to April",
      image: "/assets/parks/sigiriy.jpg",
      mapLink:
        "https://www.google.com/maps/place/Sigiriya/@7.9570327,80.7576821,17z/data=!3m1!4b1!4m6!3m5!1s0x3afca15b724c9ab3:0xab1771275b370d52!8m2!3d7.9570327!4d80.760257!16zL20vMDRnX2tr?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Photography Locations
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore the magnificent wildlife habitats of Sri Lanka where I
            conduct my photography. Each location offers unique ecosystems and
            incredible wildlife viewing opportunities.
          </p>
        </div>

        {/* Location Cards */}
        <div className="space-y-16 md:space-y-24">
          {locations.map((location, index) => (
            <section
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold">
                  {location.name}
                </h2>

                <p>{location.description}</p>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Camera className="h-5 w-5 text-primary" /> Wildlife
                    Highlights
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {location.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>
                    <strong>Best Time to Visit:</strong> {location.bestTime}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Button asChild className="rounded-full">
                    <Link href="/contact">Book a Safari</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full">
                    <a
                      href={location.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MapPin className="h-4 w-4" /> View on Map
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover"
                />
              </div>
            </section>
          ))}
        </div>

        {/* Photography Tips */}
        <section className="mt-16 md:mt-24 mb-16 bg-card rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-center">
            Photography Tips for Sri Lankan Wildlife
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Best Light Conditions",
                tip: "The golden hours (early morning and late afternoon) provide the most beautiful light for wildlife photography in Sri Lanka.",
              },
              {
                title: "Equipment Recommendations",
                tip: "A telephoto lens (at least 300mm) is essential for wildlife photography. Also bring a weather-sealed camera body, as conditions can be humid.",
              },
              {
                title: "Wildlife Behavior",
                tip: "Learn about animal behaviors before your trip. For example, elephants are most active near water sources in the late afternoon.",
              },
              {
                title: "Seasonal Considerations",
                tip: "The dry season (May to September) often concentrates animals around water sources, making them easier to photograph.",
              },
              {
                title: "Patience is Key",
                tip: "Wildlife photography requires patience. Be prepared to wait for hours for the perfect shot.",
              },
              {
                title: "Respect the Environment",
                tip: "Always maintain a safe distance from wildlife and follow park rules and your guide's instructions.",
              },
            ].map((tip, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border">
                <h3 className="text-lg font-playfair font-semibold mb-3">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground">{tip.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary text-primary-foreground rounded-xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Join a Photography Expedition
            </h2>
            <p className="mb-8">
              Experience the thrill of wildlife photography in these magnificent
              locations. I offer guided photography safaris for individuals and
              small groups, customized to your skill level and interests.
            </p>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="rounded-full"
            >
              <Link href="/contact">Book Your Experience</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
