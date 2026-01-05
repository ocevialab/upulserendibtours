"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.upulserendibtours.com";

export function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  if (paths.length === 0) {
    return null; // Don't show breadcrumb on home page
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      ...paths.map((path, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " "),
        item: `${baseUrl}/${paths.slice(0, index + 1).join("/")}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="text-muted-foreground hover:text-primary">
              <Home className="h-4 w-4" />
            </Link>
          </li>
          {paths.map((path, index) => (
            <li key={path} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" />
              {index === paths.length - 1 ? (
                <span className="text-foreground capitalize">
                  {path.replace(/-/g, " ")}
                </span>
              ) : (
                <Link
                  href={`/${paths.slice(0, index + 1).join("/")}`}
                  className="text-muted-foreground hover:text-primary capitalize"
                >
                  {path.replace(/-/g, " ")}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
