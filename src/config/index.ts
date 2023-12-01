export const PRODUCT_CATEGORIES = [
  {
    label: "Components",
    value: "web_components" as const,
    featured: [
      {
        name: "Popular Components",
        href: `/products?category=web_components`,
        imageSrc: "/nav/ui-kits/blue.jpg",
      },
      {
        name: "New Releases",
        href: "/products?category=web_components&sort=desc",
        imageSrc: "/nav/ui-kits/mixed.jpg",
      },
      {
        name: "Editor's Picks",
        href: "/products?category=web_components",
        imageSrc: "/nav/ui-kits/purple.jpg",
      },
    ],
  },
  {
    label: "MyTutorials",
    value: "video_resources" as const,
    featured: [
      {
        name: "Tutorials Collection",
        href: `/products?category=video_resources`,
        imageSrc: "/nav/tutorial/base.jpg",
      },
      {
        name: "Latest Videos",
        href: "/products?category=video_resources&sort=desc",
        imageSrc: "/nav/tutorial/java.png",
      },
      {
        name: "Must-Watch Series",
        href: "/products?category=video_resources",
        imageSrc: "/nav/tutorial/js.jpeg",
      },
    ],
  },
  {
    label: "Documentation",
    value: "documentation" as const,
    featured: [
      {
        name: "Getting Started Guide",
        href: `/products?category=documentation`,
        imageSrc: "/nav/docs/books.jpeg",
      },
      {
        name: "Advanced Techniques",
        href: "/products?category=documentation&sort=desc",
        imageSrc: "/nav/docs/cd.webp",
      },
      {
        name: "FAQs and Troubleshooting",
        href: "/products?category=documentation",
        imageSrc: "/nav/docs/js.png",
      },
    ],
  },

  {
    label: "Security Tools",
    value: "security_tools" as const,
    featured: [
      {
        name: "Penetration Testing Kits",
        href: `/products?category=security_tools`,
        imageSrc: "/nav/security-tools/SQL-Injection.jpg",
      },
      {
        name: "Security Best Practices",
        href: "/products?category=security_tools&sort=desc",
        imageSrc: "/nav/security-tools/linux.webp",
      },
      {
        name: "Threat Intelligence",
        href: "/products?category=security_tools",
        imageSrc: "/nav/security-tools/sectools.jpeg",
      },
    ],
  },
];
