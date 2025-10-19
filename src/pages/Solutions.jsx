// src/pages/Solutions.jsx
import { motion } from 'framer-motion';

export default function Solutions() {
  const industries = [
    { name: 'Fintech', desc: 'Secure, compliant, and scalable financial platforms.' },
    { name: 'Healthcare', desc: 'HIPAA-compliant systems with real-time data processing.' },
    { name: 'E-commerce', desc: 'High-performance stores with AI-driven personalization.' },
    { name: 'Logistics', desc: 'IoT-enabled tracking and route optimization.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-4"
      >
        Industry Solutions
      </motion.h1>
      <p className="text-gray-600 text-center mb-12">
        Tailored technology for your sector’s unique challenges.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {industries.map((ind, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 border border-gray-200 rounded-xl hover:border-blue-400 transition"
          >
            <h3 className="text-2xl font-bold mb-2">{ind.name}</h3>
            <p className="text-gray-600">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}