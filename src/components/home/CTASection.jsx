import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-10 md:py-20 bg-gradient-to-r from-batik-brown to-batik-navy relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 batik-pattern opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mb-6">
          Siap Menyajikan Kue Tradisional Terbaik untuk Momen Spesial Anda?
        </h2>

        <p className="text-sm md:text-xl text-batik-cream mb-8 max-w-3xl mx-auto">
          Mari rayakan hari istimewa Anda dengan cita rasa khas dari Dapur Azka Qanita. 
          Kue tradisional kami dibuat dengan resep turun-temurun selama 3 generasi, menghadirkan rasa otentik dalam setiap gigitan.
        </p>
        {/*MOBILE */}
        <div className="block md:hidden sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            to="/contact"
            className="bg-batik-gold hover:bg-batik-gold/90 text-white text-sm font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            Mulai Konsultasi Gratis
            <ArrowRight className="ml-2" size={20} />
          </Link>

          <Link
            to="/product"
            className="border-2 border-white text-white text-sm hover:bg-white hover:text-batik-brown font-semibold py-2 px-10 rounded-lg transition-all duration-300"
          >
            Lihat Product
          </Link>
        </div>
        {/*DESKTOP */}
        <div className="hidden md:block sm:flex-row gap-4 justify-center items-center mb-12">
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
      </div>
    </motion.section>
  );
};

export default CTASection;
