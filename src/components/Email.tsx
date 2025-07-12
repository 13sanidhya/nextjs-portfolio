import React from "react";
import { motion } from "framer-motion";
import { HTMLMotionProps } from "framer-motion";

const Email: React.FC = () => {
  const MotionDiv = motion.div as React.ComponentType<HTMLMotionProps<'div'>>;

  return (
    <MotionDiv
      className="email"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 1.95 }}
    >
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=sanidhyashandilya13@gmail.com"
        className="email-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send email to Sanidhya via Gmail"
      >
        <span>sanidhyashandilya13@gmail.com</span>
      </a>
    </MotionDiv>
  );
};

export default Email;