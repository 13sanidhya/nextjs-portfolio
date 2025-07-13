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
        I am actively seeking new opportunities for growth and advancement. My
        passion for learning and drive to excel make me eager to explore fresh
        challenges and contribute my skills and expertise to new endeavors. If
        you have any opportunities available or know of any that align with my
        aspirations, I would welcome the chance to connect and discuss further.
        Please feel free to reach out—I&apos;m ready and excited to embark on the
        next chapter of my career journey.
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
