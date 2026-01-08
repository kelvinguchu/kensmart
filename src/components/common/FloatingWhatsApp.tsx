import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'motion/react'

export const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/254712431201"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </motion.a>
  )
}
