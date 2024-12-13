import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function customScrollTo(
  targetY: number,
  onComplete: () => void,
  speed = 1,
  easingFunction: (t: number) => number = easeOutCubic,
) {
  const startY = window.scrollY;
  const distance = targetY - startY;

  let duration = Math.abs(distance) / speed;
  const minDuration = 200;
  const maxDuration = 1200;
  duration = Math.max(minDuration, Math.min(duration, maxDuration));

  let startTime: number | null = null;

  function animate(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easingFunction(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // When scroll finishes, call onComplete
      onComplete();
    }
  }

  requestAnimationFrame(animate);
}
