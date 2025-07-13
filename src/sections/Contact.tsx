import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        I&apos;m currently exploring new opportunities where I can apply my skills in AI, ML, and software development to solve meaningful problems. Whether you&apos;re hiring, collaborating, or just want to connect, feel free to reach out. I&apos;m always excited to discuss new ideas, learn from others, and contribute to impactful work. Let&apos;s connect and build something great together!
      </p>

      <div className="contact-cta">
        {/* Primary mailto link */}
        <a
          href="mailto:sanidhyashandilya13@gmail.com"
          className="btn"
          aria-label="Send email to Sanidhya"
        >
          Say Hello
        </a>

        {/* Fallback Gmail compose link */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sanidhyashandilya13@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          // style={{ marginTop: "1rem" }}
        >
          Or write via Gmail
        </a>
      </div>
    </motion.div>
  );
}

export default Contact;
