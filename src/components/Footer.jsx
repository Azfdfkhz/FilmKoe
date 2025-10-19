// src/components/Footer.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">TechNova</h3>
          <p className="text-gray-400">Empowering businesses with cutting-edge technology solutions.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li>AI & Machine Learning</li>
            <li>Cloud Infrastructure</li>
            <li>Cybersecurity</li>
            <li>Custom Software</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <p className="text-gray-400">technova@gmail.id.com</p>
          <p className="text-gray-400">+1 25548 4451 5548</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center text-gray-500">
        © {new Date().getFullYear()} TechNova. All rights reserved.
      </div>
    </footer>
  );
}