import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Passionate about Artificial Intelligence and Machine Learning, I&apos;m a final-year Computer Science student who enjoys building intelligent solutions to real-world problems. With a strong foundation in programming and a mindset rooted in continuous learning, I strive to blend creativity with technology. Whether it&apos;s deploying ML models, analyzing data, or collaborating on impactful projects, I&apos;m always excited to push boundaries and grow as both a technologist and a problem solver.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Artificial Intelligance</li>
            <li className="about-grid-info-list-item">Machine Learning</li>
            <li className="about-grid-info-list-item">Data Analytics</li>
            <li className="about-grid-info-list-item">Deep Learning</li>
            <li className="about-grid-info-list-item">Power BI</li>
            <li className="about-grid-info-list-item">AWS</li>
            <li className="about-grid-info-list-item">SQL & Data Management</li>
            <li className="about-grid-info-list-item">Computer Vision (YOLOv8, OpenCV)</li>
            <li className="about-grid-info-list-item">IoT Prototyping</li>
            {/* <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">C/C++</li> */}
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/image.JPG" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
