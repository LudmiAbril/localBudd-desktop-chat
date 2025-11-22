import { ChevronDownIcon } from "raster-react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  className?: string;
}

const Select = ({ value, onChange, options, className = "" }: SelectProps) => {
  return (
    <div className={`appearance-none relative w-[12rem] ${className}`}>
      <select
        className="input-base w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon
        strokeWidth={5}
        radius={5}
        size={30}
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-800"
      />
    </div>
  );
};

export default Select;
