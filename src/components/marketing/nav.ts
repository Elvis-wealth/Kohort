export type MarketingViewId =
  "home" | "pricing" | "testimonials" | "about" | "faq";

export interface MarketingNavItem {
  id: Exclude<MarketingViewId, "home">;
  label: string;
}

export const MARKETING_NAV_ITEMS: readonly MarketingNavItem[] = [
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Testimonials" },
  { id: "about", label: "About" },
  { id: "faq", label: "FAQ" },
];

export const MARKETING_VIEW_TITLES: Record<MarketingViewId, string> = {
  home: "Kohorts — Sell, run and certify paid cohorts in one place",
  pricing: "Pricing | Kohorts",
  testimonials: "Testimonials | Kohorts",
  about: "About | Kohorts",
  faq: "FAQ | Kohorts",
};
