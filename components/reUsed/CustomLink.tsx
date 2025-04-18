import Link from "next/link";
import React from 'react';
import { cn } from "@/lib/utils";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  type?: "primary" | "secondary" | "danger" | "info";
  underline?: boolean; // Optional underline hover effect
}

const linkVariants = {
  primary: "text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300",
  secondary: "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200",
  danger: "text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400",
  info: "text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300",
};

const underlineVariants = {
  primary: "hover:underline hover:underline-offset-4 hover:decoration-sky-400",
  secondary: "hover:underline hover:underline-offset-4 hover:decoration-gray-400",
  danger: "hover:underline hover:underline-offset-4 hover:decoration-red-400",
  info: "hover:underline hover:underline-offset-4 hover:decoration-cyan-400",
};

function CustomLink({ 
  href, 
  children, 
  className, 
  type = "primary", 
  underline = true
}: LinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors duration-200 font-medium",
        linkVariants[type],
        underline && underlineVariants[type],
        className
      )}
    >
      {children}
    </Link>
  );
}

export default CustomLink;