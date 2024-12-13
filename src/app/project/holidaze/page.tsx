import ProjectOverview from "../ProjectOverview";

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
  images: string[];
  features: Feature[];
}

const holidazeProjectData: ProjectData = {
  title: "Venue Booking App",
  note: "Built as part of my school exam to demonstrate modern web development skills.",
  description:
    "Holidaze is a full-featured accommodation booking site built with modern web technologies, offering a straightforward user experience for both travelers and venue managers. Deployed on Netlify, Holidaze is a prime example of a performant, user-friendly, responsive web app that combines robust functionality, clean design, and an intuitive interface.",
  techTags: [
    "React",
    "TypeScript",
    "TailwindCSS",
    "TanStack Router",
    "TanStack Query",
    "Zustand",
    "React Hook Form",
    "Zod",
    "Framer Motion",
  ],
  demoLink: "https://venue-booking-msiksnis.netlify.app/",
  repoLink: "https://github.com/msiksnis/pe2-solid-parakeet",
  images: [
    "/mockups/holidaze_landing_with_bg.webp",
    "/mockups/holidaze_single_venue_with_bg.webp",
    "/mockups/holidaze_mobile_landing_section.webp",
    "/mockups/holidaze_mobile_single_venue_section.webp",
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

export default function HolidazePage() {
  return <ProjectOverview {...holidazeProjectData} />;
}
