// Button.tsx
import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => (
  <Link href={link} className="btn" aria-label={`Go to ${text}`}>
    {text}
  </Link>
);

export default Button;
