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
      projectLink: "https://netlify.com", // replace with actual link if deployed
      projectDescription:
        "An intelligent surveillance solution leveraging existing CCTV networks integrated with AI/ML models for real-time crowd monitoring, facial recognition, weapon and violence detection. Designed to enhance public safety and operational oversight.",
      projectTech: ["Python", "YOLOv8", "OpenCV", "Deep Learning"],
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
        "A smart crop and fertilizer recommendation system based on soil conditions, leveraging machine learning and data analytics. Designed to boost crop yield, reduce costs, and support sustainable agriculture through personalized suggestions.",
      projectTech: ["Python", "Pandas", "Scikit-learn", "Flask"],
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
        "IoT-based system for automated streetlight control using real-time environmental data. Integrated LoRa, GSM, and Arduino to optimize energy use, reduce maintenance costs, and enable remote monitoring via The Things Network.",
      projectTech: ["Arduino", "LoRa", "GSM", "IoT", "The Things Network"],
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