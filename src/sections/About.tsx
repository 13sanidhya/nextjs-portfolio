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
            I&apos;m a very passionate person in Artificial Intelligence and Machine Learning. I am finishing my studies and being a computer engineer with the intention of building intelligent solutions for the real world. With strong programming skills and the continuous learning mentality, I aim to combine creativity with technology. Be it deploying ML models, analyzing data, or collaborating on meaningful projects, I truly have faith in breaking barriers and challenging myself as a technologist and problem solver.
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
