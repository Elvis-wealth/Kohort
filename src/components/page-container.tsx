import type { ReactNode } from "react";
import styles from "./primitives.module.css";

interface PageContainerProps {
  children: ReactNode;
  size?: "default" | "narrow" | "auth";
  as?: "div" | "main" | "section";
  className?: string;
}

export function PageContainer({
  children,
  size = "default",
  as: Tag = "div",
  className,
}: PageContainerProps) {
  const classes = [
    styles.container,
    size === "narrow" ? styles.containerNarrow : "",
    size === "auth" ? styles.containerAuth : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
