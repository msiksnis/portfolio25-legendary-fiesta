import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./styles.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="main-layout">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </section>
  );
}
