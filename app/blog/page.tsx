import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      id: "leopard-photography",
      title: "The Art of Leopard Photography: Patience and Persistence",
      excerpt: "Capturing the elusive Sri Lankan leopard requires more than just technical skill. Learn the secrets to spotting and photographing these magnificent big cats in their natural habitat.",
      date: "April 15, 2023",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
      category: "Wildlife Tips"
    },
    {
      id: "elephant-behavior",
      title: "Understanding Elephant Behavior for Better Wildlife Photography",
      excerpt: "Elephants are complex creatures with fascinating social structures. Discover how understanding their behavior can lead to capturing more authentic and compelling photographs.",
      date: "March 3, 2023",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg",
      category: "Animal Behavior"
    },
    {
      id: "bird-photography",
      title: "Bird Photography in Sri Lanka: A Guide to Capturing Flight",
      excerpt: "With over 400 bird species, Sri Lanka is a paradise for bird photographers. Learn techniques for capturing birds in flight and creating stunning avian portraits.",
      date: "February 12, 2023",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/86596/owl-bird-eyes-eagle-owl-86596.jpeg",
      category: "Photography Techniques"
    },
    {
      id: "yala-guide",
      title: "A Photographer's Guide to Yala National Park",
      excerpt: "Yala offers incredible wildlife photography opportunities but navigating its vast territory requires local knowledge. Discover the best spots and times for photography.",
      date: "January 25, 2023",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/2835562/pexels-photo-2835562.jpeg",
      category: "Location Guides"
    },
    {
      id: "conservation",
      title: "Conservation Photography: Making a Difference Through Your Lens",
      excerpt: "Wildlife photography can be a powerful tool for conservation. Explore how your images can contribute to environmental awareness and protection efforts.",
      date: "December 8, 2022",
      readTime: "11 min read",
      image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
      category: "Conservation"
    },
    {
      id: "camera-settings",
      title: "Optimal Camera Settings for Wildlife Photography in Sri Lanka",
      excerpt: "From the bright light of dry zones to the dim forests, Sri Lanka's diverse ecosystems require different camera approaches. Learn the best settings for each environment.",
      date: "November 17, 2022",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg",
      category: "Photography Techniques"
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Wildlife Photography Blog</h1>
          <p className="text-lg text-muted-foreground">
            Stories, tips, and insights from the field. Join me as I share my photography experiences and knowledge about Sri Lanka's magnificent wildlife.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src="/assets/Tiger 1.JPG"
                alt="Sri Lankan leopard"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Featured</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>April 15, 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>8 min read</span>
                </div>
              </div>
              <h2 className="text-3xl font-playfair font-bold">The Art of Leopard Photography: Patience and Persistence</h2>
              <p className="text-muted-foreground">
                Capturing the elusive Sri Lankan leopard requires more than just technical skill. Learn the secrets to spotting and photographing these magnificent big cats in their natural habitat.
              </p>
              <Button asChild className="rounded-full">
                <Link href="/blog/leopard-photography" className="flex items-center gap-2">
                  Read Full Article <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="group bg-card rounded-lg overflow-hidden border transition-all hover:shadow-md">
              <div className="aspect-[16/10] relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-bold">{post.title}</h3>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href={`/blog/${post.id}`} className="flex items-center gap-2 text-primary">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Categories Section */}
        <section className="mb-16 bg-muted rounded-xl p-8">
          <h2 className="text-2xl font-playfair font-bold mb-6">Explore by Category</h2>
          <div className="flex flex-wrap gap-3">
            {["Wildlife Tips", "Animal Behavior", "Photography Techniques", "Location Guides", "Conservation", "Equipment Reviews", "Behind the Scenes"].map((category) => (
              <Button key={category} variant="outline" className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center bg-card border rounded-xl p-8 md:p-12 mb-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to my newsletter for the latest wildlife photography tips, stories from the field, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="rounded-md">Subscribe</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}