import Image from "next/image";
import Link from "next/link";
import React,{useRef} from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion,useInView } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/cctv.jpg",
      projectName: "Smart CCTV Surveillance System",
      projectLink: "https://netlify.com",
      projectDescription:
        "Harnessing existing CCTV networks, our project integrates AI and ML technologies for enhanced Crowd Management, Crime Prevention, and Work Monitoring. Through facial recognition, weapon detection, violence detection, and crowd analysis, we aim to bolster security and optimize operational efficiency, ensuring public safety and productivity.",
      projectTech: [],
      projectExternalLinks: {
        github: "https://github.com/13sanidhya",
        externalLink: "https://github.com/13sanidhya/CCTV-surveillance-system",
      },
    },
    {
      image: "/crop_recommend.jpg",
      projectName: "AgroGenius",
      projectLink: "https://netlify.com",
      projectDescription:
        "A sophisticated agricultural recommendation system that guides farmers in optimal crop selection and fertilizer usage based on specific soil conditions. Utilizing advanced algorithms and data analytics, the system provides tailored advice to farmers, enhancing crop yield, reducing costs, and promoting sustainable farming practices.",
      projectTech: [],
      projectExternalLinks: {
        github: "https://github.com/13sanidhya",
        externalLink:
          "https://github.com/13sanidhya/agriculture-and-crop-management-system",
      },
    },
    {
      image: "/SSLMS.jpeg",
      projectName: "Smart Street Light Monitoring System",
      projectLink: "https://netlify.com",
      projectDescription:
        "Automatic monitoring of street lights, adjusting brightness or turning them on/off based on real-time data. This helps in saving energy, reducing costs, and improving overall urban lighting efficiency. It also enables timely maintenance by detecting faulty lights, ensuring well-lit and safer streets while conserving energy resource.",
      projectTech: [],
      projectExternalLinks: {
        github: "https://github.com/13sanidhya",
        externalLink:
          "https://github.com/13sanidhya/Smart-Street-Light-Monitoring-System",
      },
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>

      <div className="projects-container" ref={ref}>
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }, index) => (
            <motion.div
              className="project"
              key={projectName}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <motion.div
                className="project-image"
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="project-image-overlay"></div>
                <div className="project-image-container">
                  <Image src={image} fill alt={projectName} quality={100} />
                </div>
              </motion.div>

              <motion.div
                className="project-info"
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <p className="project-info-overline">Featured Project</p>
                <h3 className="project-info-title">{projectName}</h3>
                <div className="project-info-description">
                  <p>{projectDescription}</p>
                </div>
                <ul className="project-info-tech-list">
                  {projectTech.map((tech) => (
                    <li className="project-info-tech-list-item" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
                <ul className="project-info-links">
                  <li className="project-info-links-item">
                    <Link
                      href={projectExternalLinks.github}
                      className="project-info-links-item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub />
                    </Link>
                  </li>
                  <li className="project-info-links-item">
                    <Link
                      href={projectExternalLinks.externalLink}
                      className="project-info-links-item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink />
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}

export default Projects;