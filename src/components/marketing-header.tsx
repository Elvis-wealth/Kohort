"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { PageContainer } from "@/components/page-container";
import styles from "./marketing-header.module.css";

export const MARKETING_NAV_LINKS = [
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;

interface NavPanelProps {
  open: boolean;
  onNavigate: () => void;
}

function MarketingNavPanel({ open, onNavigate }: NavPanelProps) {
  return (
    <nav
      id="marketing-nav"
      aria-label="Main navigation"
      className={`${styles.navPanel} ${open ? styles.navPanelOpen : ""}`}
    >
      <ul className={styles.navList}>
        {MARKETING_NAV_LINKS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={styles.navLink}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.actions}>
        <Button href="/login" variant="secondary">
          Log in
        </Button>
        <Button href="/signup" variant="primary">
          Sign up
        </Button>
      </div>
    </nav>
  );
}

export function MarketingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <PageContainer>
        <div className={styles.desktopRow}>
          <div className={styles.bar}>
            <Link href="/" className={styles.logo}>
              Kohorts
            </Link>
            <button
              type="button"
              className={styles.menuButton}
              aria-expanded={menuOpen}
              aria-controls="marketing-nav"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
          <MarketingNavPanel
            open={menuOpen}
            onNavigate={() => setMenuOpen(false)}
          />
        </div>
      </PageContainer>
    </header>
  );
}
