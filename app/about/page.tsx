import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Camera, Award, Users, Calendar } from "lucide-react";
import profile from "public/assets/prof.jpg";
import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.upulserendibtours.com";

export const metadata: Metadata = {
  title: "About Upul Dunuhinga",
  description:
    "Learn about Upul Dunuhinga, an award-winning wildlife photographer with 15+ years of experience capturing Sri Lankan wildlife. 500+ photography expeditions, 25+ awards.",
  openGraph: {
    title: "About Upul Dunuhinga | Wildlife Photographer",
    description:
      "Award-winning wildlife photographer with 15+ years of experience capturing Sri Lankan wildlife.",
    images: [`${baseUrl}/assets/prof.jpg`],
  },
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Photographer Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              // src="https://images.pexels.com/photos/5346438/pexels-photo-5346438.jpeg"
              src={profile}
              alt="Upul Dunuhinga, Wildlife Photographer"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold">
              Upul Dunuhinga
            </h1>
            <p className="text-xl text-muted-foreground">
              Wildlife Photographer
            </p>
            <div className="space-y-4">
              <p>
                I am a passionate wildlife photographer based in Sri Lanka,
                dedicated to capturing the magnificent biodiversity of our
                island nation. My journey in wildlife photography began over 15
                years ago when I first visited Yala National Park with a simple
                point-and-shoot camera.
              </p>
              <p>
                What started as a casual interest quickly evolved into a
                lifelong passion. I have since spent countless hours in national
                parks across Sri Lanka, including Yala, Udawalawe, and the
                surroundings of Sigiriya, patiently waiting for those perfect
                moments when wildlife reveals its true essence.
              </p>
              <p>
                My work focuses on showcasing the beauty of Sri Lankan wildlife
                while raising awareness about conservation efforts. Through my
                lens, I aim to connect people with nature and inspire a deeper
                appreciation for our planet's biodiversity.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild className="rounded-full">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/gallery">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-card rounded-xl mb-16 md:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="h-10 w-10 text-primary" />,
                value: "15+",
                label: "Years of Experience",
              },
              {
                icon: <Calendar className="h-10 w-10 text-primary" />,
                value: "500+",
                label: "Photography Expeditions",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                value: "25+",
                label: "Photography Awards",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                value: "100+",
                label: "Workshop Students",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className="mx-auto mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-playfair font-bold mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* My Approach */}
        <section className="mb-16 md:mb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center">
              My Approach With Visitors
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              {/* Teaching Moments */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="../about/1.jpeg"
                  alt="Teaching tourists photography techniques"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Group Shots */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="../about/2.jpeg"
                  alt="Group photography session with tourists"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Equipment Demonstration */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="../about/3.jpeg"
                  alt="Demonstrating camera equipment to tourists"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Wildlife Observation */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="../about/4.jpeg"
                  alt="Observing wildlife with tourists"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="../about/5.jpeg"
                  alt="Observing wildlife with tourists"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="../about/6.jpeg"
                  alt="Observing wildlife with tourists"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="../about/7.jpeg"
                  alt="Observing wildlife with tourists"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="../about/8.jpeg"
                  alt="Observing wildlife with tourists"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="../about/9.jpeg"
                  alt="Observing wildlife with tourists"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="../about/10.jpeg"
                  alt="Observing wildlife with tourists"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="../about/11.jpeg"
                  alt="Observing wildlife with tourists"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="../about/12.jpeg"
                  alt="Observing wildlife with tourists"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Descriptive text with your approach */}
            <div className="max-w-3xl mx-auto mt-12 px-4 text-center">
              <p className="text-muted-foreground mb-6">
                My photography sessions with visitors combine technical guidance
                with authentic wildlife encounters. I enjoy helping tourists
                capture professional-quality images while ensuring minimal
                impact on nature.
              </p>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <div className="h-3 w-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">
                  Available for group workshops and private tours
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16 md:mb-24 bg-muted py-12 md:py-16 rounded-xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center">
              What Others Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Upul's wildlife photography workshop transformed how I approach nature photography. His patience and deep knowledge of wildlife behavior is inspiring.",
                  name: "Michael Roberts",
                  title: "Amateur Photographer",
                },
                {
                  quote:
                    "Working with Upul on our conservation project was remarkable. His photographs captured the essence of Sri Lankan wildlife in a way that truly resonates.",
                  name: "Dr. Sarah Chen",
                  title: "Wildlife Conservationist",
                },
                {
                  quote:
                    "The safari tour with Upul was the highlight of our Sri Lanka trip. His ability to spot and photograph wildlife is matched only by his enthusiasm for sharing knowledge.",
                  name: "James & Emma Wilson",
                  title: "Tourists from Australia",
                },
                {
                  quote:
                    "Upul's fine art prints adorn our office walls, bringing the beauty of Sri Lankan wildlife into our everyday environment. Truly exceptional work.",
                  name: "Thomas Anderson",
                  title: "Corporate Client",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
                  <blockquote className="mb-4 text-foreground">
                    "{testimonial.quote}"
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

        {/* Call to Action */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Let's Connect
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you're interested in joining a wildlife photography
              workshop, commissioning a project, or simply want to discuss
              wildlife photography, I'd love to hear from you.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
