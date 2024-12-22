import "./styles.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}

// import React from "react";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Toaster } from "react-hot-toast";

// import "../globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
// });

// export const metadata: Metadata = {
//   title: "Developer Marty",
//   description: "Personal portfolio site of developer Marty",
// };

// export default function MainLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Toaster />
//         <div className="flex min-h-screen flex-col">
//           <Navbar />
//           <div className="flex-1">
//             {children}
//             <SpeedInsights />
//             <Analytics />
//           </div>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }
