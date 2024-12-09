import { MagicCard } from "./ui/magic-card";
import ShinyButton from "./ui/shiny-button";

interface ContactSectionProps {
  contactFormOpen: boolean;
  setContactFormOpen: (value: boolean) => void;
}

export default function ContactSection({
  contactFormOpen,
  setContactFormOpen,
}: ContactSectionProps) {
  return (
    <div
      id="contact"
      className="w-full rounded-4xl border bg-gradient-to-t from-[#1f1f22] to-[#0A0A0D]"
    >
      <MagicCard className="items-center justify-center rounded-4xl px-16">
        <div className="mx-auto flex flex-col justify-center space-y-10 py-12">
          <div className="w-fit text-pretty font-semibold text-muted-foreground sm:text-3xl md:text-4xl">
            Looking to hire a Developer?
            <br />
            Have a project in mind?
            <br />
            Or just want to say Hi?
          </div>
          {contactFormOpen ? (
            "Contact form"
          ) : (
            <ShinyButton
              onClick={() => setContactFormOpen(true)}
              className="mx-auto h-14 w-full max-w-96 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-2xl font-semibold leading-6 text-primary"
            >
              Contact
            </ShinyButton>
          )}
        </div>
      </MagicCard>
    </div>
  );
}
