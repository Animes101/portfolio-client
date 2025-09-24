import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png.png";
import { motion } from "framer-motion";

















const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen flex items-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300">
            Hi, I’m Animes Barman
          </h3>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mt-2"
          >
            Frontend Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="py-6 text-gray-700 dark:text-gray-400"
          >
            with a passion for crafting intuitive and visually appealing websites.
            From responsive design to smooth user interactions, I focus on every detail.
            Let's collaborate to bring your vision to life. Explore my portfolio and see
            how I can help you achieve your goals.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex gap-4 mt-4"
          >
            <button className="btn btn-primary">Download CV</button>
            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center items-center"
        >
          <img
            src={logo}
            className="border-4 border-violet-600 rounded-full shadow-lg w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover"
            alt="Profile"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;