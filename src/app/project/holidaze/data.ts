import { ProjectData } from "@/app/project/utils/projectTypes";

export const holidazeProjectData: ProjectData = {
  title: "Venue Booking App",
  note: "Built as part of my school exam to demonstrate modern web development skills.",
  description:
    "Holidaze is a full-featured accommodation booking site built with modern web technologies, offering a straightforward user experience for both travelers and venue managers. Deployed on Netlify, Holidaze is a prime example of a performant, user-friendly, responsive web app that combines robust functionality, clean design, and an intuitive interface.",
  techTags: [
    { id: 1, name: "React" },
    { id: 2, name: "TypeScript" },
    { id: 3, name: "TailwindCSS" },
    { id: 4, name: "TanStack Router" },
    { id: 5, name: "TanStack Query" },
    { id: 6, name: "Zustand" },
    { id: 7, name: "React Hook Form" },
    { id: 8, name: "Zod" },
    { id: 9, name: "Framer Motion" },
  ],
  demoLink: "https://venue-booking-msiksnis.netlify.app/",
  repoLink: "https://github.com/msiksnis/pe2-solid-parakeet",
  images: [
    "/mockups/holidaze/landing_section.webp",
    "/mockups/holidaze/single_venue_page.webp",
    "/mockups/holidaze/landing_section_mobile.webp",
    "/mockups/holidaze/single_venue_page_mobile.webp",
  ],
  features: [
    {
      feature: "User Authentication",
      description:
        "Register using any email ending in @stud.noroff.no (no actual email validation required), then log in and manage your user profile.",
    },
    {
      feature: "List of Venues",
      description:
        "Displays the latest venues with filtering options (All Venues, Cabins, Sunny Beaches, Mountain Views).",
    },
    {
      feature: "Search",
      description:
        "Search functionality allowing users to combine venue name/description matches with destination filters.",
    },
    {
      feature: "Single Venue View",
      description:
        "Detailed information about a single venue, including an image gallery.",
    },
    {
      feature: "Interactive Calendar",
      description: "Calendar with available dates for booking.",
    },
    {
      feature: "Booking",
      description:
        "Functionality to reserve a venue for selected dates and a specified number of guests.",
    },
    {
      feature: "User Profile",
      description: "View and update personal profile details.",
    },
    {
      feature: "Reservations",
      description: "View all your reservations, update, and cancel them.",
    },
    {
      feature: "Favorites",
      description: "View all your favorite venues and remove them.",
    },
    {
      feature: "Venue Management",
      description: "Venue Manager can add, update, and delete venues.",
    },
    {
      feature: "Reservations Management",
      description:
        "Venue Manager can see reservations made by guests, including dates and number of guests.",
    },
  ],
};
