import React from "react";
import { LucideIcon } from "lucide-react";

interface InputProps {
  label: string;
  icon?: LucideIcon;
  name: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "date" | "time" | "number" | "textarea";
  disabled?: boolean;
  required?: boolean;
  min?: string;
  rows?: number;
  options?: { value: string; label: string }[];
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  icon: Icon,
  name,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  type = "text",
  disabled = false,
  required = false,
  min,
  rows,
  options,
  className = "",
}) => {
  const inputClasses = `input-standard ${error ? "error" : ""} ${className}`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="input-label flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4" />}
        {label} {required && "*"}
      </label>
      {type === "textarea" || rows ? (
        <textarea
          id={name}
          name={name}
          value={value || ""}
          onChange={onChange}
          onBlur={onBlur}
          rows={rows || 5}
          className={`${inputClasses} resize-none`}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
      ) : options ? (
        <select
          id={name}
          name={name}
          value={value || ""}
          onChange={onChange}
          onBlur={onBlur}
          className={`${inputClasses} bg-white`}
          style={{
            paddingRight: "2.5rem",
            backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
            backgroundPosition: "right 0.75rem center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1.25em 1.25em",
            appearance: "none",
          }}
          disabled={disabled}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value || ""}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClasses}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          min={min}
        />
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;