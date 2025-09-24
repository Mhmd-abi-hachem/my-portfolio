import React from "react";
import { Link } from "react-router-dom";

const VARIATION_CLASSES = {
  primary:
    "font-semibold rounded-full bg-[#1e1e1e] text-[#fefefe] border border-transparent hover:border hover:border-[#1e1e1e] hover:bg-[#e5e7df] hover:text-[#1e1e1e] transition-all duration-300",
  secondary:
    "border border-[#f7f7f7] rounded-full hover:bg-[#f7f7f7] transition duration-300 hover:text-[#1a1a1a]",
  tertiary:
    "border-b-1 border-transparent hover:border-[#1e1e1e] transition duration-200",
};

function Button({ to, variation = "primary", size = "medium", children }) {
  const variantClass =
    VARIATION_CLASSES[variation] || VARIATION_CLASSES.primary;

  const sizeClass =
    size === "large"
      ? "gap-2 md:gap-4 w-full justify-center items-center px-8 sm:px-10 md:px-12 py-4  md:py-5  text-4xl"
      : size === "medium"
      ? "gap-4 py-6 px-20 md:px-26 text-[2.6rem]"
      : "gap-2 md:gap-4 w-auto justify-center mx-auto items-center text-[2rem] pb-1";

  return (
    <Link to={to} className={`group flex ${variantClass} ${sizeClass}`}>
      {children}{" "}
      <span className="group-hover:translate-x-2 transition-transform pb-1 md:pb-0 duration-200">
        &rarr;
      </span>
    </Link>
  );
}

export default Button;
