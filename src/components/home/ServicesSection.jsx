import { motion } from "framer-motion";
import { Palette, Shirt, Home, Gift } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Batik Tradisional",
      description:
        "Koleksi batik asli dengan motif tradisional yang diwariskan turun temurun",
      features: ["Motif Klasik", "Pewarna Alami", "Handmade"],
    },
    {
      icon: Shirt,
      title: "Fashion Modern",
      description:
        "Pakaian kontemporer dengan sentuhan batik untuk gaya hidup modern",
      features: ["Desain Trendy", "Bahan Premium", "Custom Design"],
    },
    {
      icon: Home,
      title: "Dekorasi Rumah",
      description:
        "Produk dekorasi rumah dengan nuansa budaya Indonesia yang elegan",
      features: ["Interior Design", "Furniture", "Aksesoris"],
    },
    {
      icon: Gift,
      title: "Souvenir Eksklusif",
      description:
        "Cinderamata unik yang mencerminkan kekayaan budaya Nusantara",
      features: ["Limited Edition", "Packaging Mewah", "Personalisasi"],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-20 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-brown dark:text-batik-gold mb-4">
            Produk & Layanan Unggulan
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Kami menawarkan berbagai produk handycraft berkualitas tinggi yang
            memadukan tradisi dengan inovasi modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800"
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-batik-gold rounded-lg flex items-center justify-center mb-4 group-hover:bg-batik-brown transition-colors duration-300">
                  <service.icon className="text-white" size={24} />
                </div>

                <h3 className="font-serif text-xl font-semibold text-batik-brown dark:text-batik-gold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                    >
                      <div className="w-2 h-2 bg-batik-gold rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
