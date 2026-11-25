"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { PageContainer } from "@/components/page-container";
import {
  MARKETING_NAV_ITEMS,
  type MarketingViewId,
} from "@/components/marketing/nav";
import styles from "./marketing-header.module.css";

interface MarketingHeaderProps {
  activeView: MarketingViewId;
  onNavigate: (view: MarketingViewId) => void;
}

interface NavPanelProps {
  open: boolean;
  activeView: MarketingViewId;
  onNavigate: (view: MarketingViewId) => void;
  onClose: () => void;
}

function MarketingNavPanel({
  open,
  activeView,
  onNavigate,
  onClose,
}: NavPanelProps) {
  return (
    <nav
      id="marketing-nav"
      aria-label="Main navigation"
      className={`${styles.navPanel} ${open ? styles.navPanelOpen : ""}`}
    >
      <ul className={styles.navList}>
        {MARKETING_NAV_ITEMS.map((item) => {
          const active = activeView === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
                aria-current={active ? "true" : undefined}
                onClick={() => {
                  onNavigate(item.id);
                  onClose();
                }}
              >
                {item.label}
              </button>
            </li>
          );
        })}
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

export function MarketingHeader({
  activeView,
  onNavigate,
}: MarketingHeaderProps) {
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
            <Link
              href="/"
              className={styles.logo}
              onClick={() => onNavigate("home")}
            >
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
            activeView={activeView}
            onNavigate={onNavigate}
            onClose={() => setMenuOpen(false)}
          />
        </div>
      </PageContainer>
    </header>
  );
}
