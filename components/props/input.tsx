import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  inputLabel: string;
}

const Input: React.FC<InputProps> = ({ inputLabel, ...props }) => {
  return (
    <div className="relative z-0 mt-5">
      <input
        {...props}
        className="peer block w-full appearance-none bg-transparent border-2 border-gray-700 rounded-md p-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-0 duration-300 transition"
        placeholder=" "
      />
      <label className="absolute top-2 text-gray-400 left-0 -translate-y-7 scale-[.8] -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-2 peer-focus:-translate-y-7 peer-focus:scale-[.8] peer-focus:left-0 peer-focus:text-slate-200 transition-all duration-300">
        {inputLabel}
      </label>
    </div>
  );
};

export default Input;
