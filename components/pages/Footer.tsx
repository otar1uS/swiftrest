// components/Footer.jsx
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.footer
      className="bg-gray-900 text-white py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-gray-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-400">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-8 border-t border-gray-700 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>
            &copy; {new Date().getFullYear()} SWIFTREST. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
