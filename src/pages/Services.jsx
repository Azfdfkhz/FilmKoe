// src/pages/Services.jsx
import { motion } from 'framer-motion';

const serviceList = [
  {
    title: 'AI & Machine Learning',
    desc: 'Predictive analytics, NLP, computer vision, and intelligent automation.',
    icon: '🧠',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'AWS, Azure, GCP deployment, CI/CD pipelines, and infrastructure as code.',
    icon: '☁️',
  },
  {
    title: 'Cybersecurity',
    desc: 'Penetration testing, SOC, zero-trust architecture, and compliance.',
    icon: '🛡️',
  },
  {
    title: 'Custom Software',
    desc: 'Web, mobile, and desktop apps built with React, Node.js, Python, and more.',
    icon: '💻',
  },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-4"
      >
        Our Technology Services
      </motion.h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        End-to-end digital solutions designed to scale with your business.
      </p>

      <div className="space-y-8">
        {serviceList.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-sm"
          >
            <div className="text-4xl">{s.icon}</div>
            <div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}