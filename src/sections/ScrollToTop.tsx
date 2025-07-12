import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        className="scrollToTopBtn"
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "27px", 
          backgroundColor: "#854ce6",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          zIndex: 1000,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          transition: "opacity 0.3s ease-in-out",
        }}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={16} />
      </button>
    )
  );
};

export default ScrollToTop;