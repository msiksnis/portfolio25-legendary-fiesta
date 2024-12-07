const NAV_FILTERS = ["home", "about", "portfolio", "contact"] as const;

export const VALID_FILTERS: (ForTabs | "home")[] = [
  "home",
  "about",
  "portfolio",
  "contact",
];

export type ForTabs = "about" | "portfolio" | "contact";

export type NAV_FILTERS = (typeof NAV_FILTERS)[number];
