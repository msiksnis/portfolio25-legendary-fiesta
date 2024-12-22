import { MagicCard } from "./ui/magic-card";

export default function Footer() {
  return (
    <div className="mx-auto mb-10 flex w-full max-w-4xl justify-center rounded-4xl border border-border bg-card">
      <MagicCard className="items-center justify-center rounded-4xl px-16 py-4">
        <div className="text-muted-foreground">
          All rights reserved. © 2024
        </div>
      </MagicCard>
    </div>
  );
}
