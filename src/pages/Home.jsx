// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  { title: 'AI & Machine Learning', desc: 'Intelligent systems that learn and adapt.' },
  { title: 'Cloud Solutions', desc: 'Scalable, secure, and future-ready infrastructure.' },
  { title: 'Cybersecurity', desc: 'Protect your digital assets with enterprise-grade security.' },
  { title: 'Custom Software', desc: 'Tailored applications for your unique business needs.' },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 md:py-32 text-center relative overflow-hidden">
        {/* Animated Gradient Blob - dari index.css */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Transform Your Business <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            with Technology
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
        >
          We build innovative digital solutions that drive growth, efficiency, and competitive advantage.
        </motion.p>

        {/* ✅ FIX: Tombol "Order Disini" bisa diklik 100% */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10" // ← INI KUNCI: pastikan tombol di atas semua blob
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(239, 68, 68, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => {
              alert("Yah gak bisa, kalo mau order di bagian kanan atas 😄");
            }}
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-xl font-medium transition-colors duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Order Disini
          </motion.button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10+", label: "Projects Delivered" },
            { number: "90%", label: "Client Satisfaction" },
            { number: "5+", label: "Tech Partners" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100"
            >
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="text-blue-600 hover:underline font-medium inline-flex items-center">
            View All Services →
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We combine deep technical expertise with strategic business insight to deliver solutions that matter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🚀",
              title: "Innovation First",
              desc: "We stay ahead of the curve with emerging tech like AI, blockchain, and IoT."
            },
            {
              icon: "🤝",
              title: "Client-Centric",
              desc: "Your goals are our goals. We tailor every solution to your unique needs."
            },
            {
              icon: "🔒",
              title: "Security Guaranteed",
              desc: "Enterprise-grade security built into every layer of our solutions."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}