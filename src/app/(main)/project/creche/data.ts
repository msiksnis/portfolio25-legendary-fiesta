import { ProjectData } from "@/app/(main)/project/utils/projectTypes";

export const crecheProjectData: ProjectData = {
  title: "Dog Daycare Center Dashboard",
  note: "This is a minified demo application for demonstration purposes only. The data is not real and the functionality is limited.",

  description:
    "The Dog Daycare Center Dashboard is a web application designed for a UK-based dog daycare center to efficiently manage daily operations. The admin can manage owners, dogs, bookings, and more. While payments are excluded in this demo version, the app supports check-in/out functionality, real-time statuses for dogs, and role-based notifications. Automated email notifications for expiring vaccinations, birthdays, and other events are included. Authentication features such as role-based access control, two-factor authentication, and password resets are implemented using NextAuth and Resend. The app is fully responsive and works seamlessly across devices.",

  techTags: [
    { id: 1, name: "Next.js" },
    { id: 2, name: "TypeScript" },
    { id: 3, name: "Tailwind CSS" },
    { id: 4, name: "TanStack Query" },
    { id: 5, name: "Zustand" },
    { id: 6, name: "Supabase" },
    { id: 7, name: "Prisma" },
    { id: 8, name: "Resend" },
    { id: 9, name: "React Hook Form" },
    { id: 10, name: "Zod" },
    { id: 11, name: "Framer Motion" },
    { id: 12, name: "NextAuth" },
    { id: 13, name: "React Day Picker" },
  ],
  demoLink: "https://dog-daycare-demo-msiksnis.vercel.app/",
  repoLink: "https://github.com/msiksnis/dog-daycare-demo-msiksnis",
  images: [
    "/mockups/creche/bookings_mobile.png",
    "/mockups/creche/bookings.png",
    "/mockups/creche/owners.png",
    "/mockups/creche/owners_mobile.png",
    "/mockups/creche/canines_mobile.png",
    "/mockups/creche/canines.png",
    "/mockups/creche/notifications.png",
    "/mockups/creche/notifications_mobile.png",
  ],
  features: [
    {
      feature: "Homepage",
      description:
        "Displays all bookings for 'today' or any selected day. Admins can check in and out dogs, view detailed dog profiles, and modify or delete bookings.",
    },
    {
      feature: "Owners Management",
      description:
        "A centralized table listing all dog owners and their dogs. Admins can add, edit, or remove owner profiles as needed.",
    },
    {
      feature: "Canine Management",
      description:
        "A complete database of registered dogs, where admins can add, edit, delete, and schedule bookings for dogs.",
    },
    {
      feature: "Notifications",
      description:
        "A notification system with support for marking as read, viewing details, and confirming actions. Notifications include expiring vaccinations, birthdays, and role requests.",
    },
    {
      feature: "Profile Management",
      description:
        "Users can update their profile, change their password, request role changes, and enable two-factor authentication.",
    },
    {
      feature: "Authentication and Security",
      description:
        "Role-based authentication using NextAuth with both credentials and OAuth providers. Security features include two-factor authentication, password resets, and email confirmations powered by Resend.",
    },
    {
      feature: "Full Application Features",
      description:
        "The full version of the app (not included in the demo) offers payment processing, shop items (e.g., treats and toys), prepaid packages, and advanced features.",
    },
    {
      feature: "Responsive Design",
      description:
        "Optimized for all screen sizes, ensuring seamless usage across desktop, tablet, and mobile devices.",
    },
  ],
};
