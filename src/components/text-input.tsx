import type { InputHTMLAttributes } from "react";
import styles from "./primitives.module.css";

interface TextInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "className"
> {
  id: string;
  label: string;
  error?: string;
}

export function TextInput({
  id,
  label,
  type = "text",
  error,
  ...rest
}: TextInputProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={styles.input}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={errorId}
        {...rest}
      />
      {error ? (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
