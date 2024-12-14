"use client";

import ProjectOverview from "../components/ProjectOverview";

interface Feature {
  feature: string;
  description: string;
}

interface ProjectData {
  title: string;
  note: string;
  description: string;
  techTags: string[];
  demoLink: string;
  repoLink: string;
  images?: string[];
  features: Feature[];
}

const mrCapsStoreProjectData: ProjectData = {
  title: "E-commerce website Mr Cap's Store",
  note: "Built as part of my school exam to demonstrate modern web development skills.",

  description:
    "Mr Cap's Store is an e-commerce website selling unique products. It offers a modern and user-friendly shopping experience, allowing customers to browse products, add them to the cart, and checkout securely using Stripe. The platform also includes contact features powered by Resend for customer communication.",
  techTags: [
    "React (Vite)",
    "TailwindCSS",
    "TanStack Router",
    "TanStack Query",
    "Zustand",
    "Stripe",
    "Resend",
    "Netlify Functions",
    "React Hook Form",
    "Zod",
    "Framer Motion",
  ],
  demoLink: "https://caps-store.netlify.app",
  repoLink: "https://github.com/msiksnis/caps-store-musical-winner",
  images: [
    "/mockups/e-commerce/landing_section_mobile.png",
    "/mockups/e-commerce/landing_section.png",
    "/mockups/e-commerce/single_product_page.png",
    "/mockups/e-commerce/single_product_page_mobile.png",
    "/mockups/e-commerce/cart_page_mobile.png",
    "/mockups/e-commerce/cart_page.png",
    "/mockups/e-commerce/modal_with_form.png",
    "/mockups/e-commerce/modal_with_form_mobile.png",
  ],
  features: [
    {
      feature: "Homepage",
      description:
        "List of all products with filtering options for 'All Products', 'Top Rated', or 'Sale'. Includes a lookahead search functionality.",
    },
    {
      feature: "Single Product Page",
      description:
        "View detailed information about a product, including ratings, reviews, and the option to add it to the cart.",
    },
    {
      feature: "Cart Page",
      description: "A list of all items in the cart and the total price.",
    },
    {
      feature: "Checkout Page",
      description:
        "A form for customer details and checkout functionality using Stripe's demo account.",
    },
    {
      feature: "Contact Page",
      description:
        "Contact details and a form to send messages via Resend (serverless email).",
    },
  ],
};

export default function MrCapsStorePage() {
  return <ProjectOverview {...mrCapsStoreProjectData} />;
}
