import ProjectOverview from "../auction-house/ProjectOverview";

export default function HolidazePage() {
  return (
    <ProjectOverview
      title="Venue Booking App"
      description="Holidaze is a full-featured accommodation booking site built with
          modern web technologies, offering a straightforward user experience
          for both travelers and venue managers. Visitors can browse, filter,
          and search through a diverse range of venues. Authenticated users can
          reserve venues, manage bookings, and save favorites. Venue managers
          benefit from dedicated pages for hosting, editing, and deleting their
          listings, as well as a reservations overview. This project
          demonstrates proficiency in React (with Vite), TailwindCSS, TanStack
          Router and Query, Zustand for state management, and form handling
          powered by React Hook Form with Zod validation. Deployed on Netlify,
          Holidaze is a prime example of a performant, user-friendly web app
          that combines robust functionality, clean design, and an intuitive
          interface."
      techTags={[
        "React",
        "TypeScript",
        "TailwindCSS",
        "TanStack Router",
        "TanStack Query",
        "Zustand",
        "React Hook Form",
        "Zod",
        "Framer Motion",
      ]}
      demoLink="https://venue-booking-msiksnis.netlify.app/"
      repoLink="https://github.com/msiksnis/pe2-solid-parakeet"
      images={[
        "/mockups/holidaze_landing_with_bg.webp",
        "/mockups/holidaze_single_venue_with_bg.webp",
        "/mockups/holidaze_mobile_landing_section.webp",
        "/mockups/holidaze_mobile_single_venue_section.webp",
      ]}
    />
  );
}
