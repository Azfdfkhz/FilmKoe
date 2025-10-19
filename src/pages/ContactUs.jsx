// src/pages/ContactUs.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a question or want to work with us? Fill out the form below or reach out directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-6 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">technova@gmail.id.com</p>
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+1 25548 4451 5548</p>
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">Jl AI emas no. 665, Jakarta, Indonesia</p>
              </div>
              <div>
                <h3 className="font-semibold">Working Hours</h3>
                <p className="text-gray-600">sesuai mood</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">📱 Instagram</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">🐦 Twitter</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">💼 LinkedIn</a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Your Message</label>
                <textarea
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Tell us about your project, question, or feedback..."
                  required
                ></textarea>
              </div>
              <div>
                <label className="block mb-2 font-medium">Rate Your Experience (Optional)</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-2xl text-yellow-400 hover:text-yellow-500"
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Feedback Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gray-50 p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold mb-4">We Value Your Feedback</h2>
          <p className="text-gray-600 mb-6">
            Your opinion helps us improve our services. Let us know what you think!
          </p>
          <textarea
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Share your thoughts, suggestions, or complaints..."
          ></textarea>
          <button
            type="button"
            className="mt-4 bg-green-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Submit Feedback
          </button>
        </motion.div>
      </div>
    </div>
  );
}