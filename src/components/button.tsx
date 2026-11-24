import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./primitives.module.css";

interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  fullWidth?: boolean;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  fullWidth = false,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = [
    styles.button,
    variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary,
    fullWidth ? styles.buttonFull : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
