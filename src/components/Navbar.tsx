"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MagicCard } from "./ui/magic-card";
import { customScrollTo } from "@/lib/utils";
import { useScreenSizes } from "@/hooks/useResponsive";

const TABS = [
  { name: "Home", target: "home" },
  { name: "Portfolio", target: "portfolio" },
  { name: "Contact", target: "contact" },
];

/**
 * The Navbar component renders a tab-based navigation bar with a highlighting
 * effect for the currently active tab. It supports:
 * - Navigating to the homepage route (`/`)
 * - Scrolling smoothly to in-page sections (e.g. "home", "portfolio", "contact")
 * - Updating the active tab based on visible sections (via Intersection Observer)
 * - Handling transitions to and from project pages or contact pages
 */
export default function Navbar() {
  const [activeTab, setActiveTab] = useState(TABS[0].name);
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  /** Indicates if the navbar is currently scrolling due to a user click. */
  const [isScrolling, setIsScrolling] = useState(false);

  /** Ref to the container element used for the active tab highlight clipPath calculation. */
  const containerRef = useRef<HTMLDivElement>(null);
  /** Ref to the currently active tab's button element, used for positioning the highlight. */
  const activeTabElementRef = useRef<HTMLButtonElement>(null);

  const router = useRouter();
  const pathname = usePathname();

  const { isMobile } = useScreenSizes();

  /**
   * Synchronize the active tab based on the current route.
   * If the pathname indicates a project or contact page, update the tab accordingly.
   */
  useEffect(() => {
    if (!pathname) return;
    if (pathname === "/") {
      setActiveTab("Home");
    } else if (pathname.startsWith("/project")) {
      setActiveTab("Portfolio");
    } else if (pathname.startsWith("/contact")) {
      setActiveTab("Contact");
    }
  }, [pathname]);

  /**
   * Handles user clicks on a tab.
   * - Updates activeTab immediately.
   * - If "Contact" or "Portfolio" is clicked from a non-home route, navigates to "/" first and sets scrollTarget.
   * - Otherwise, if on home, it scrolls directly to the target section.
   *
   * @param tabName - The name of the tab clicked (e.g. "Home", "Portfolio", "Contact")
   * @param target - The target section ID (e.g. "home", "portfolio", "contact")
   */
  const handleTabClick = (tabName: string, target: string) => {
    setActiveTab(tabName);

    if (pathname !== "/") {
      // If not on home, but user clicked Portfolio or Contact, navigate home first
      if (tabName === "Contact" || tabName === "Portfolio") {
        setScrollTarget(target);
        router.push("/");
        return;
      }
      if (target === "home") {
        router.push("/");
        return;
      }
    } else {
      // Already on home, scroll directly
      const section = document.getElementById(target);
      if (section) {
        const top =
          section.getBoundingClientRect().top +
          window.scrollY -
          (isMobile ? 86 : 20);
        setIsScrolling(true);
        customScrollTo(top, () => {
          setIsScrolling(false);
        });
      }
    }
  };

  /**
   * After navigating back to "/", if we have a scrollTarget set (e.g. "contact" or "portfolio"),
   * scroll to that section.
   */
  useEffect(() => {
    if (pathname === "/" && scrollTarget) {
      const section = document.getElementById(scrollTarget);
      if (section) {
        const top =
          section.getBoundingClientRect().top +
          window.scrollY -
          (isMobile ? 86 : 20);
        setIsScrolling(true);
        customScrollTo(top, () => {
          setIsScrolling(false);
        });
        setScrollTarget(null); // Clear target after scrolling
      }
    }
  }, [pathname, scrollTarget]);

  /**
   * Sets up an Intersection Observer to determine which section is most visible
   * as the user scrolls. If not currently scrolling due to a click, update the
   * activeTab based on the visible section.
   */
  useEffect(() => {
    const sections = TABS.map((tab) =>
      document.getElementById(tab.target),
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return; // Don't override activeTab while auto-scrolling

        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length > 0) {
          // Find the section with the greatest intersection ratio.
          const mostVisible = visibleSections.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev,
          );

          const matchingTab = TABS.find(
            (tab) => tab.target === mostVisible.target.id,
          );
          if (matchingTab) {
            setActiveTab(matchingTab.name);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isScrolling]);

  /**
   * Updates the highlight clipPath to match the currently active tab's position.
   * The highlight is a background element clipped to show only behind the active tab.
   */
  useEffect(() => {
    const container = containerRef.current;
    if (activeTab && container) {
      const activeTabElement = activeTabElementRef.current;
      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
        const containerWidth = container.offsetWidth;
        const rightPercent =
          100 - ((offsetLeft + offsetWidth) / containerWidth) * 100;
        const leftPercent = (offsetLeft / containerWidth) * 100;
        container.style.clipPath = `inset(0 ${rightPercent.toFixed()}% 0 ${leftPercent.toFixed()}% round 17px)`;
      }
    }
  }, [activeTab]);

  /**
   * Handles clicks on the active tab highlight element.
   * - If the active tab is "Home", do nothing. Else call handleTabClick with the active tab's target.
   */
  const handleActiveTabClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const tabName = event.currentTarget.getAttribute("data-tab");
    if (tabName && tabName !== "Home") {
      const matchingTab = TABS.find((tab) => tab.name === tabName);
      if (matchingTab) {
        handleTabClick(matchingTab.name, matchingTab.target);
      }
    }
  };

  return (
    <div className="sticky top-4 z-50 mx-auto mb-6 mt-4 flex w-full items-center sm:static sm:mt-8 sm:w-fit">
      <MagicCard className="rounded-full border bg-card px-2 py-1.5">
        <div
          className="relative flex flex-col"
          role="tablist"
          aria-label="Navigation Tabs"
        >
          <ul className="flex w-full justify-between gap-x-2 sm:justify-center md:gap-x-4 lg:gap-x-6 xl:gap-x-12">
            {TABS.map((tab) => (
              <li key={tab.name}>
                <button
                  ref={activeTab === tab.name ? activeTabElementRef : null}
                  data-tab={tab.name}
                  onClick={() => handleTabClick(tab.name, tab.target)}
                  className={`flex h-9 items-center whitespace-nowrap rounded-full px-6 text-base font-medium text-muted-foreground ${
                    activeTab === tab.name ? "text-primary" : ""
                  }`}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>

          {/* The highlight behind the active tab */}
          <div
            aria-hidden
            className="absolute z-10 w-full overflow-hidden transition-[clip-path] duration-300"
            ref={containerRef}
            style={{ clipPath: "inset(0 75% 0 0 round 17px)" }}
          >
            <ul className="flex w-full justify-between gap-x-2 bg-gradient-to-br from-amber-300 to-amber-500 text-primary shadow sm:justify-center md:gap-x-4 lg:gap-x-6 xl:gap-x-12">
              {TABS.map((tab) => (
                <li key={tab.name}>
                  <button
                    data-tab={tab.name}
                    onClick={handleActiveTabClick}
                    className="flex h-9 items-center whitespace-nowrap rounded-full px-6 font-medium opacity-100"
                    tabIndex={-1}
                  >
                    {tab.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MagicCard>
    </div>
  );
}
