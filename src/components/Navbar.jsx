// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white shadow-sm py-4 px-6 flex justify-between items-center"
    >
      <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        TechNova
      </Link>
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
        <Link to="/solutions" className="hover:text-blue-600 transition">Solutions</Link>
        <Link to="/about" className="hover:text-blue-600 transition">About</Link>
        <Link to="/contact-us" className="hover:text-blue-600 transition">Contact</Link>
        <Link to="/order" className="hover:text-blue-600 transition">Order</Link>
      </div>
      <Link
  to="/order"
  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
>
  Order Now
</Link>
    </motion.nav>
  );
}