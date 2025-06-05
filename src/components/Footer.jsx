import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-batik-brown text-white"
    >
      {/* MOBILE FOOTER */}
      <div className="block md:hidden bg-batik-brown text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="space-y-6">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-7 h-7 bg-batik-gold rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-base">B</span>
                </div>
                <span className="font-serif text-base font-bold">
                  Dapur Azka Qanita
                </span>
              </div>
              <p className="text-batik-cream mb-2 text-xs leading-snug">
                Mengangkat cita rasa kue tradisional Palembang dengan kualitas
                tinggi dan sentuhan modern yang menggoda.
              </p>
              <div className="flex space-x-3 mb-4">
                <a
                  href="#"
                  className="text-batik-cream hover:text-batik-gold transition-colors"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="#"
                  className="text-batik-cream hover:text-batik-gold transition-colors"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  className="text-batik-cream hover:text-batik-gold transition-colors"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>
            {/* Quick Links */}
            <div className="flex flex-row gap-20 px-2">
              <div>
                <h3 className="font-serif text-sm font-semibold mb-2">
                  Tautan Cepat
                </h3>
                <ul className="space-y-1 text-xs">
                  <li>
                    <Link
                      to="/about"
                      className="text-batik-cream hover:text-batik-gold transition-colors"
                    >
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="text-batik-cream hover:text-batik-gold transition-colors"
                    >
                      Layanan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/portfolio"
                      className="text-batik-cream hover:text-batik-gold transition-colors"
                    >
                      Portofolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="text-batik-cream hover:text-batik-gold transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className="text-batik-cream hover:text-batik-gold transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Contact Info */}
              <div>
                <h3 className="font-serif text-sm font-semibold mb-2">
                  Kontak
                </h3>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center space-x-2">
                    <MapPin size={13} className="text-batik-gold" />
                    <span className="text-batik-cream">
                      Palembang, Indonesia
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Phone size={13} className="text-batik-gold" />
                    <span className="text-batik-cream">+62 811 7874 458</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Mail size={13} className="text-batik-gold" />
                    <span className="text-batik-cream">
                      dapurazkaqanita@gmail.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-batik-gold/20 mt-6 pt-4 text-center">
            <p className="text-batik-cream text-xs">
              © 2024 Dapur Azka. Semua hak dilindungi. |
              <Link
                to="/legal"
                className="hover:text-batik-gold transition-colors ml-1"
              >
                Kebijakan Privasi
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* DESKTOP FOOTER */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-batik-gold rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <span className="font-serif text-xl font-bold">
                  Dapur Azka Qanita
                </span>
              </div>
              <p className="text-batik-cream mb-4 max-w-md">
                Mengangkat cita rasa kue tradisional Palembang dengan kualitas
                tinggi dan sentuhan modern yang menggoda.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-batik-cream hover:text-batik-gold transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-batik-cream hover:text-batik-gold transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-batik-cream hover:text-batik-gold transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4">
                Tautan Cepat
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-batik-cream hover:text-batik-gold transition-colors"
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-batik-cream hover:text-batik-gold transition-colors"
                  >
                    Layanan
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="text-batik-cream hover:text-batik-gold transition-colors"
                  >
                    Portofolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-batik-cream hover:text-batik-gold transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-batik-cream hover:text-batik-gold transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4">Kontak</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <MapPin size={16} className="text-batik-gold" />
                  <span className="text-batik-cream text-sm">
                    Palembang, Indonesia
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={16} className="text-batik-gold" />
                  <span className="text-batik-cream text-sm">
                    +62 811 7874 458
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail size={16} className="text-batik-gold" />
                  <span className="text-batik-cream text-sm">
                    dapurazkaqanita@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/*MOBILKE*/}
          <div className="block md:hidden border-t border-batik-gold/20 mt-8 pt-8 text-center">
            <p className="text-batik-cream text-[5px]">
              © 2024 Dapur Azka. Semua hak dilindungi. |
              <Link
                to="/legal"
                className="hover:text-batik-gold transition-colors ml-1"
              >
                Kebijakan Privasi
              </Link>
            </p>
          </div>
          {/*DESKTOP*/}
          <div className="hidden md:block border-t border-batik-gold/20 mt-8 pt-8 text-center">
            <p className="text-batik-cream text-sm">
              © 2024 Dapur Azka. Semua hak dilindungi. |
              <Link
                to="/legal"
                className="hover:text-batik-gold transition-colors ml-1"
              >
                Kebijakan Privasi
              </Link>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
