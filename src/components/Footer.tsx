import { MagicCard } from "./ui/magic-card";

export default function Footer() {
  return (
    <div className="rounded-4xl mx-auto mb-10 flex w-full max-w-[816px] justify-center bg-card">
      <MagicCard className="rounded-4xl items-center justify-center px-16 py-4">
        <div className="text-muted-foreground">
          All rights reserved. © 2024
        </div>
      </MagicCard>
    </div>
  );
}
