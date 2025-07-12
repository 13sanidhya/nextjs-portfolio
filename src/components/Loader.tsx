import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
  const [showSymbol, setShowSymbol] = useState("code");

  useEffect(() => {
    setTimeout(() => {
      setShowSymbol("logo");
    }, 1000);

    setTimeout(() => {
      setIsLoading(); 
    }, 2000);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            style={{ position: "absolute" }}
          >
            <title>Logo</title>
            <g>
              {/* Hexagon Shape */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                exit={{ scale: 2 }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
                   L 11, 27
                   L 11, 72
                   L 50, 95
                   L 89, 73
                   L 89, 28 z"
                fill="none"
              />

              {showSymbol === "code" && (
                <motion.text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="45"
                  fontFamily="Arial"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  &lt;/&gt;
                </motion.text>
              )}
              
              {showSymbol === "logo" && (
                <motion.text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="45"
                  fontFamily="Arial"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  S
                </motion.text>
              )}
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
