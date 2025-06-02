import { Link } from "react-router-dom"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

const CTASection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-20 bg-gradient-to-r from-batik-brown to-batik-navy relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 batik-pattern opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
          Siap Mewujudkan Proyek Impian Anda?
        </h2>

        <p className="text-xl text-batik-cream mb-8 max-w-3xl mx-auto">
          Mari berkolaborasi untuk menciptakan produk handycraft yang memukau. Tim ahli kami siap membantu mewujudkan
          visi kreatif Anda.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            to="/contact"
            className="bg-batik-gold hover:bg-batik-gold/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            Mulai Konsultasi Gratis
            <ArrowRight className="ml-2" size={20} />
          </Link>

          <Link
            to="/product"
            className="border-2 border-white text-white hover:bg-white hover:text-batik-brown font-semibold py-4 px-8 rounded-lg transition-all duration-300"
          >
            Lihat Product
          </Link>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-3 text-batik-cream">
            <Phone size={20} className="text-batik-gold" />
            <span>+62 895-2489-3101</span>
          </div>

          <div className="flex items-center justify-center space-x-3 text-batik-cream">
            <Mail size={20} className="text-batik-gold" />
            <span>info@domesa.co</span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-batik-cream mb-6">Dipercaya oleh 1000+ klien di seluruh Indonesia</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="w-20 h-12 bg-white/20 rounded flex items-center justify-center">
              <span className="text-white font-bold">LOGO</span>
            </div>
            <div className="w-20 h-12 bg-white/20 rounded flex items-center justify-center">
              <span className="text-white font-bold">LOGO</span>
            </div>
            <div className="w-20 h-12 bg-white/20 rounded flex items-center justify-center">
              <span className="text-white font-bold">LOGO</span>
            </div>
            <div className="w-20 h-12 bg-white/20 rounded flex items-center justify-center">
              <span className="text-white font-bold">LOGO</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default CTASection
