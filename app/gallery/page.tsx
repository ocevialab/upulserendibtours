import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GalleryPage() {
  // Gallery data with categories
  const galleries = {
    Elephants: [
      { src: "../gallery/Elephant/Elephant1.jpg", alt: "Elephant", caption: "" },
      { src: "../gallery/Elephant/Elephant2.JPG", alt: "Elephant", caption: "" },
      { src: "../gallery/Elephant/Elephant3.JPG", alt: "Elephant", caption: "" },
      { src: "../gallery/Elephant/Elephant4.jpg", alt: "Elephant", caption: "" },
      { src: "../gallery/Elephant/Elephant5.jpg", alt: "Elephant", caption: "" },
      { src: "../gallery/Elephant/Elephant 6.JPG", alt: "Elephant", caption: "" },
      { src: "../gallery/Elephant/Elephant 7.JPG", alt: "Elephant", caption: "" },
      { src: "../gallery/Elephant/Elephant 8.JPG", alt: "Elephant", caption: "" },
      { src: "../gallery/Elephant/Elephant 9.JPG", alt: "Elephant", caption: "" },
      { src: "../gallery/Elephant/Elephant 10.JPG", alt: "Elephant", caption: "" },
      { src: "../gallery/Elephant/Elephant 12.JPG", alt: "Elephant", caption: "" },
    ],
    birds: [
      { src: "../gallery/Birds/Birds 1.jpg", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 2.jpg", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 3.jpg", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 4.jpg", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 5.jpg", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 6.JPG", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 7.JPG", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 8.JPG", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 9.JPG", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 10.JPG", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 11.JPG", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 12.JPG", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 13.JPG", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 14.JPG", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 15.JPG", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 16.JPG", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 17.JPG", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 18.JPG", alt: "birds", caption: "" },
      { src: "../gallery/Birds/Birds 19.JPG", alt: "birds", caption: "" },
    ],
    reptiles: [
      { src: "/assets/Crocdile 2.jpg", alt: "Crocodile", caption: "Marsh crocodile, Yala" },
      { src: "/assets/Crocdile 3.jpg", alt: "Crocodile", caption: "" },
      { src: "../gallery/Crocadile/Crocadile 1.JPG", alt: "Crocodile", caption: "" },
      { src: "../gallery/Crocadile/Crocadile 3.JPG", alt: "Crocodile", caption: "" },
      { src: "../gallery/Crocadile/Crocadile 4.JPG", alt: "Crocodile", caption: "" },
      { src: "../gallery/Crocadile/Crocadile 5.JPG", alt: "Crocodile", caption: "" },
      { src: "../gallery/Crocadile/1.jpeg", alt: "Crocodile", caption: "" },
    ],
    Monkey: [
      { src: "../gallery/Monkey/Monkey 1.jpg", alt: "Monkey", caption: "" },
      { src: "../gallery/Monkey/Monkey 2.jpg", alt: "Monkey", caption: "" },
      { src: "../gallery/Monkey/Monkey 3.jpg", alt: "Monkey", caption: "" },
      { src: "../gallery/Monkey/Monkey 4.jpg", alt: "Monkey", caption: "" },
    ],
    Tiger: [
      { src: "../gallery/Tiger/Tiger 1.jpg", alt: "Tiger", caption: "" },
      { src: "../gallery/Tiger/Tiger 2.jpg", alt: "Tiger", caption: "" },
      { src: "../gallery/Tiger/Tiger 3.jpg", alt: "Tiger", caption: "" },
      { src: "../gallery/Tiger/Tiger 4.jpg", alt: "Tiger", caption: "" },
      { src: "../gallery/Tiger/Tiger 6.JPG", alt: "Tiger", caption: "" },
      { src: "../gallery/Tiger/Tiger 7.JPG", alt: "Tiger", caption: "" },
      { src: "../gallery/Tiger/Tiger 8.JPG", alt: "Tiger", caption: "" },
      { src: "../gallery/Tiger/Tiger 9.JPG", alt: "Tiger", caption: "" },
      { src: "../gallery/Tiger/Tiger 10.JPG", alt: "Tiger", caption: "" },
    ],
    Deer: [
      { src: "../gallery/Deers/1.JPG", alt: "Deer", caption: "" },
      { src: "../gallery/Deers/2.JPG", alt: "Deer", caption: "" },
      { src: "../gallery/Deers/3.JPG", alt: "Deer", caption: "" },
      { src: "../gallery/Deers/4.JPG", alt: "Deer", caption: "" },
      { src: "../gallery/Deers/5.JPG", alt: "Deer", caption: "" },
    ],
    Jackal: [
      { src: "../gallery/Jackals/1.JPG", alt: "Golden Jackal", caption: "" },
      { src: "../gallery/Jackals/2.JPG", alt: "Golden Jackal", caption: "" },
      { src: "../gallery/Jackals/3.JPG", alt: "Golden Jackal", caption: "" },
    ]
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Wildlife Gallery</h1>
          <p className="text-lg text-muted-foreground">
            Explore the diverse wildlife of Sri Lanka through my lens. Each photograph captures a unique moment in nature, telling stories of Sri Lanka's rich biodiversity.
          </p>
        </div>

        {/* Gallery Tabs */}
        <Tabs defaultValue="Elephants" className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="grid w-full grid-cols-4 gap-1 pb-2 md:max-w-md md:grid-cols-7">
              {/* First Line - 4 items */}
              <TabsTrigger value="Elephants">Elephants</TabsTrigger>
              <TabsTrigger value="birds">Birds</TabsTrigger>
              <TabsTrigger value="reptiles">Reptiles</TabsTrigger>
              <TabsTrigger value="Monkey">Monkey</TabsTrigger>

              {/* Second Line - 3 items */}
              <TabsTrigger value="Tiger">Tiger</TabsTrigger>
              <TabsTrigger value="Deer">Deer</TabsTrigger>
              <TabsTrigger value="Jackal">Golden Jackal</TabsTrigger>
            </TabsList>
          </div>

          {/* Elephants Gallery */}
          <TabsContent value="Elephants" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleries.Elephants.map((photo, index) => (
                <div key={index} className="image-card group overflow-hidden bg-card rounded-lg border">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm">View Full Size</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Birds Gallery */}
          <TabsContent value="birds" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleries.birds.map((photo, index) => (
                <div key={index} className="image-card group overflow-hidden bg-card rounded-lg border">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm">View Full Size</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Reptiles Gallery */}
          <TabsContent value="reptiles" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleries.reptiles.map((photo, index) => (
                <div key={index} className="image-card group overflow-hidden bg-card rounded-lg border">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm">View Full Size</Button>
                    </div>
                  </div>
                  {photo.caption && (
                    <div className="p-4">
                      <p className="text-sm font-medium">{photo.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Monkey Gallery */}
          <TabsContent value="Monkey" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleries.Monkey.map((photo, index) => (
                <div key={index} className="image-card group overflow-hidden bg-card rounded-lg border">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm">View Full Size</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Tiger Gallery */}
          <TabsContent value="Tiger" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleries.Tiger.map((photo, index) => (
                <div key={index} className="image-card group overflow-hidden bg-card rounded-lg border">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm">View Full Size</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Deer Gallery */}
          <TabsContent value="Deer" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleries.Deer.map((photo, index) => (
                <div key={index} className="image-card group overflow-hidden bg-card rounded-lg border">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm">View Full Size</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Jackal Gallery */}
          <TabsContent value="Jackal" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleries.Jackal.map((photo, index) => (
                <div key={index} className="image-card group overflow-hidden bg-card rounded-lg border">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm">View Full Size</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}