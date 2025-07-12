import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      if (underline) {
        underline.style.top = `${selected * 2.5}rem`;
      }
    };
    transformSelected();
  }, [selected]);


  const experiences = 
  [
    {
      name: "LNMIIT",
      role: "Project Intern",
      start: "May 2023",
      end: "July 2023",
      url:"",
      shortDescription: 
      [
        "Worked on a project titled “Smart Street Light Monitoring System,” improving system reliability by 30%.",
        "Gained hands-on experience with GSM modules, Arduino, LoRa communication, and various environmental sensors.",
        "Designed a user-friendly interface using Tinkercad, reducing setup time by 40% and enabling online data integration with The Things Network."
      ],
    },

  ];

  if (!experiences[selected]) return null;

  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences.map((experience, index) => (
            <li
              key={experience.name}
              className={`exp-slider-item ${
                index === selected ? "exp-slider-item-selected" : ""
              }`}
              onClick={() => setSelected(index)}
            >
              <span>{experience.name}</span>
            </li>
          ))}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                {experiences[selected].url ? (
                  <Link
                    href={experiences[selected].url}
                    className="link"
                    target="_blank"
                  >
                    {experiences[selected].name}
                  </Link>
                ) : (
                  <span className="link">{experiences[selected].name}</span>
                )}
              </span>
            </h3>
            <p className="exp-details-range">
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className="exp-details-list">
              {experiences[selected].shortDescription.map((description, index) => (
                <li key={index} className="exp-details-list-item">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
