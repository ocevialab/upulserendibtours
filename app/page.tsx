import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera } from "lucide-react";
import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.upulserendibtours.com";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Award-winning wildlife photography by Upul Dunuhinga showcasing Sri Lankan wildlife. Explore galleries, book safaris, and learn wildlife photography techniques.",
  openGraph: {
    title: "Wild Life Photography | Upul Dunuhinga | Sri Lankan Wildlife",
    description:
      "Award-winning wildlife photography by Upul Dunuhinga showcasing Sri Lankan wildlife.",
    images: [`${baseUrl}/gallery/featured/1.jpeg`],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="hero-video-container relative flex items-center h-screen"
        aria-label="Hero section"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="../gallery/video/2.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <Image
              src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg"
              alt="Sri Lankan elephant in the wild"
              fill
              className="object-cover"
              priority
            />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="max-w-3xl fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
              Capturing Sri Lanka&apos;s Wild Beauty
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Award-winning wildlife photography by Upul Dunuhinga, showcasing
              the diverse and magnificent wildlife of Sri Lanka.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/gallery">Explore Gallery</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full bg-transparent text-white border-white hover:text-white hover:bg-white/20"
              >
                <Link href="/about">About Photographer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section
        className="py-16 md:py-24 bg-muted"
        aria-labelledby="featured-work"
      >
        <div className="container mx-auto px-4 md:px-6">
          <header className="flex flex-col items-center text-center mb-12">
            <h2
              id="featured-work"
              className="text-3xl md:text-4xl font-playfair font-bold mb-4"
            >
              Featured Work
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              A showcase of my finest wildlife moments, captured across Sri
              Lanka&apos;s stunning national parks.{" "}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                src: "../gallery/featured/1.jpeg",
                alt: "Close-up of a leopard",
                title: "Painted Stork",
                description:
                  "Painted Stork, a striking wader found across Sri Lanka’s wetlands.",
              },
              {
                src: "../gallery/featured/2.jpeg",
                alt: "Asian Elephant family",
                title: "Elephant",
                description:
                  "Sri Lankan elephants roam freely across the island’s lush national parks.",
              },
              {
                src: "../gallery/featured/3.jpg",
                alt: "Crocodile",
                title: "Crocodile",
                description:
                  "Sri Lankan crocodiles thrive in rivers, lakes, and coastal wetland habitats.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="image-card group overflow-hidden bg-card rounded-lg"
              >
                <div className="aspect-square relative">
                  <Image
                    src={item.src}
                    alt={`${item.title} - ${item.description} by Upul Dunuhinga`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <Button variant="secondary" size="sm" asChild>
                      <Link href="/gallery">View More</Link>
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-playfair text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/gallery" className="flex items-center gap-2">
                View Complete Gallery <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-24" aria-labelledby="locations-heading">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2
                id="locations-heading"
                className="text-3xl md:text-4xl font-playfair font-bold"
              >
                Explore Sri Lanka&apos;s Wildlife Habitats
              </h2>
              <p className="text-muted-foreground">
                Sri Lanka, a biodiversity hotspot, hosts diverse wildlife
                habitats—from rainforests and mountains to dry plains and
                wetlands. National parks like Yala and Sinharaja shelter
                elephants, leopards, bears, and exotic birds. Rivers and
                mangroves support aquatic life, while forests protect endemic
                species, making Sri Lanka a paradise for nature lovers.{" "}
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Yala National Park",
                    description:
                      "    Yala National Park is famous for leopards, elephants, and wildlife.",
                  },
                  {
                    title: "Udawalawe National Park",
                    description:
                      "    Udawalawe National Park is famous for elephants, birds, and natural beauty.",
                  },
                  {
                    title: "Sigiriya Surroundings",
                    description:
                      " Sigiriya surroundings feature lush forests, wildlife, and scenic ancient landscapes.",
                  },
                ].map((location, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-2 h-fit">
                      <Camera className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-playfair font-semibold">
                        {location.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {location.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild className="rounded-full">
                <Link href="/locations">Discover Locations</Link>
              </Button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                <Image
                  src="https://i.ibb.co/WvtXc7tM/DSC-2824.jpg"
                  alt="Sigiriya rock"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[3/4] relative mt-8 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"
                  alt="Udawalawe National Park"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Quote Section */}
      <section
        className="parallax-section"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/hxff4nsd/DSC-1971.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-playfair italic mb-6">
              &quot;Wildlife photography requires patience, understanding
              animals, appreciating nature, and freezing fleeting moments that
              reveal the planet&apos;s incredible beauty.&quot;
            </p>
            <cite className="text-lg">— Upul Dunuhinga</cite>
          </blockquote>
        </div>
      </section>

      {/* Services/Photography Packages */}
      <section
        className="py-16 md:py-24 bg-card"
        aria-labelledby="sri-lankan-gems"
      >
        <div className="container mx-auto px-4 md:px-6">
          <header className="flex flex-col items-center text-center mb-12">
            <h2
              id="sri-lankan-gems"
              className="text-3xl md:text-4xl font-playfair font-bold mb-4"
            >
              Sri Lankan Gems
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore the cultural and historical wonders of Sri Lanka through
              my lens.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                place: "Kandy",
                image: "../gallery/Sri Lankan Gems/1.jpeg",
                description:
                  "The hill capital featuring the sacred Temple of the Tooth and lush landscapes.",
                // buttonText: "View Kandy"
              },
              {
                place: "Polonnaruwa",
                image: "../gallery/Sri Lankan Gems/3.jpeg",
                description:
                  "Ancient ruins and well-preserved statues from Sri Lanka's medieval capital.",
                // buttonText: "View Polonnaruwa"
              },
              {
                place: "Anuradhapura",
                image: "../gallery/Sri Lankan Gems/5.jpeg",
                description:
                  "One of the ancient world's great cities, with sprawling Buddhist ruins.",
                // buttonText: "View Anuradhapura"
              },
              {
                place: "Galle",
                image: "../gallery/Sri Lankan Gems/6.jpeg",
                description:
                  "Colonial charm meets tropical beauty in this fortified seaside city.",
                // buttonText: "View Galle"
              },
              {
                place: "Jaffna",
                image: "../gallery/Sri Lankan Gems/4.jpeg",
                description:
                  "Vibrant Tamil culture, unique cuisine, and stunning coastal landscapes.",
                // buttonText: "View Jaffna"
              },
              {
                place: "Colombo",
                image: "../gallery/Sri Lankan Gems/2.jpeg",
                description:
                  "The bustling commercial capital with a mix of modern and colonial architecture.",
                // buttonText: "View Colombo"
              },
            ].map((location, index) => (
              <div
                key={index}
                className="bg-background rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="h-48 md:h-64 overflow-hidden">
                  <img
                    src={location.image}
                    alt={`${location.place} - ${location.description} by Upul Dunuhinga`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-3">
                    {location.place}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {location.description}
                  </p>
                  {/* <Button asChild variant="outline" className="w-full">
              <Link href={`/gallery/${location.place.toLowerCase()}`}>
                {location.buttonText}
              </Link>
            </Button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 md:py-24 bg-primary text-primary-foreground"
        aria-labelledby="cta-heading"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2
                id="cta-heading"
                className="text-3xl md:text-4xl font-playfair font-bold mb-4"
              >
                Let&apos;s Work Together
              </h2>
              <p className="text-primary-foreground/90 max-w-xl">
                Whether you&apos;re looking for wildlife photography services,
                planning to join a safari, or interested in purchasing prints,
                I&apos;m here to help bring your vision to life.
              </p>
            </div>
            <div>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
