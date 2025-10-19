// src/pages/About.jsx
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-6"
      >
        About TechNova
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-700 mb-6"
      >
        Founded in 2020, TechNova is a digital innovation partner for forward-thinking businesses.
        We combine deep technical expertise with strategic business insight to deliver solutions
        that matter.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-700"
      >
        Our team of engineers, designers, and strategists are passionate about building the future —
        one line of code at a time.
      </motion.p>
    </div>
  );
}