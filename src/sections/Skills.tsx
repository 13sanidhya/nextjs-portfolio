"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import styles from '../scss/sections/Skill.module.scss';
import { motion } from "framer-motion";
import Image from "next/image";


const skillsData = [
  // Core AI/ML
  { name: "Machine Learning", image: "/assets/skills/ml.png" },
  { name: "Deep Learning", image: "/assets/skills/deep-learning.png" },
  { name: "NLP", image: "/assets/skills/nlp.png" },
  { name: "YOLOv8", image: "/assets/skills/Yolo.png" },
  { name: "OpenCV", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
  { name: "Scikit-learn", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
  { name: "Keras", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
  { name: "TensorFlow", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },

  // Data Science & Analysis
  { name: "Data Analyst", image: "/assets/skills/data-analytics.png" },
  { name: "Power BI", image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "Pandas", image: "/assets/skills/panda.png" },
  { name: "Seaborn", image: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" },
  { name: "Matplotlib", image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
  { name: "Numpy", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },

  // Programming Languages
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "OOPs", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "DSA", image: "/assets/skills/DSA.png" },

  // Web Development
  { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },

  // Systems & Tools
  { name: "Operating System", image: "/assets/skills/operation.png" },
  { name: "Computer Networks", image: "/assets/skills/CN.png" },

  // IoT & Deployment
  { name: "IOT", image: "/assets/skills/IOT.png" },
  { name: "MLOps", image: "/assets/skills/MLOps.png" },

  // Utilities & Engineering
  { name: "Prompt Engineering", image: "https://cdn-icons-png.flaticon.com/512/3094/3094833.png" },
  { name: "MS Office", image: "/assets/skills/ms-office.png" },

  // NEW: Developer Tools
  { name: "VS Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Linux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
];


const chunk = (arr: typeof skillsData, size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const Skills = () => {
  const slides = chunk(skillsData, 8);
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleWheel = useCallback(() => {
    if (timeoutRef.current) return;

    const nextIndex = (activeIndex + 1) % slides.length;
    setActiveIndex(nextIndex);

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
    }, 700);
  }, [activeIndex, slides.length]);

  useEffect(() => {
    const container = document.getElementById("skillScroller");
    container?.addEventListener("wheel", handleWheel);
    return () => container?.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  return (
    <div className={styles.skillsSection} id="skills">
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className={styles.sectionTitle}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <motion.p
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tools & Technologies I Thrive With
        </motion.p>
      </motion.div>

      <div className={styles.scrollerWrapper}>
        <div id="skillScroller" className={styles.verticalScroll}>
          {slides.map((group, index) => (
            <div
              key={index}
              className={
                index === activeIndex ? styles.activeSlide : styles.slide
              }
            >
              <div className={styles.grid}>
                {group.map((skill, idx) => (
                  <motion.div
                    className={styles.skillItem}
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.6, ease: "easeOut" }}
                  >
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={60}
                      height={60}
                      className={styles.skillImage}
                    />
                    <p>{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.scrollbar}>
          {slides.map((_, i) => (
            <div
              key={i}
              className={`${styles.dot} ${
                i === activeIndex ? styles.activeDot : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;