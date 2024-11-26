import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import ProfileImage from "../assets/Images/Profile.jpeg";
// import Contact from "./Contact";

function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // const [isContactOpen, setIsContactOpen] = useState(false);
  // const toggleContact = () => setIsContactOpen((prev) => !prev);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section
      id="contact"
      className="flex flex-col items-center bg-black text-white relative p-6"
    >
      {/* Text Content */}
      <div className="w-full lg:w-2/3 text-center relative">
        {/* Main Heading */}
        <h2 className="flex flex-col uppercase relative text-3xl sm:text-3xl lg:text-7xl font-bold mb-10 mt-10 z-10">
          <span>let's work</span> <span>together</span>
        </h2>

          <button className="hov-btn">
            contact now
          </button>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-8 mt-14"
        >
          <img
            src={ProfileImage}
            alt="Vikash Yadav"
            className="rounded-full w-32 sm:w-48 lg:w-72 h-40 sm:h-64 lg:h-96 object-cover"
          />
        </motion.div>

        {/* <p className="relative flex flex-auto -right-12 lg:right-24 text-center text-4xl md:text-[14rem] uppercase font-bold mb-4">
          portfolio
        </p> */}
        <Link 
        to="home"
        smooth={true}
        duration={500}
        className="nav-hover-btn cursor-pointer">
        <a>
          go back to top
        </a>
        </Link>
      </div>

      {/* <AnimatePresence>
        {isContactOpen && <Contact onClose={toggleContact} />}
      </AnimatePresence> */}
    </section>
  );
}

export default Footer;
