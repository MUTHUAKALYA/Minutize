import React from "react";

const Button = ({ label }) => {
  return (
    <button className="bg-lightPrimary py-2 w-full text-white hover:bg-darkSecondary hover:text-lightPrimary
    font-extrabold rounded-md">
      {label}
    </button>
  );
};

export default Button;
