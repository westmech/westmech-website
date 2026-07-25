"use client";

import React from "react";

export interface InputProps {
  label?: string;
  hint?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Text input with label + optional mono hint. */
export function Input({
  label,
  hint,
  placeholder,
  type = "text",
  value,
  onChange,
  disabled,
  style,
}: InputProps) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-sans)", ...style }}>
      {label && <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ink)" }}>{label}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          appearance: "none",
          fontFamily: "var(--font-sans)",
          fontSize: 14.5,
          color: "var(--ink)",
          background: disabled ? "var(--paper-sunken)" : "var(--paper-raised)",
          border: focus ? "1.5px solid var(--azure)" : "1.5px solid var(--line)",
          borderRadius: "var(--radius-sm)",
          padding: "10px 12px",
          outline: "none",
          boxShadow: focus ? "0 0 0 3px var(--azure-tint)" : "none",
          transition:
            "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
        }}
      />
      {hint && <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--ink-3)" }}>{hint}</span>}
    </label>
  );
}

export interface SelectProps {
  label?: string;
  options: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Native select, styled to match Input. */
export function Select({ label, options = [], value, onChange, disabled, style }: SelectProps) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-sans)", ...style }}>
      {label && <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ink)" }}>{label}</span>}
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 14.5,
          color: "var(--ink)",
          background: disabled ? "var(--paper-sunken)" : "var(--paper-raised)",
          border: focus ? "1.5px solid var(--azure)" : "1.5px solid var(--line)",
          borderRadius: "var(--radius-sm)",
          padding: "10px 12px",
          outline: "none",
          boxShadow: focus ? "0 0 0 3px var(--azure-tint)" : "none",
        }}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
