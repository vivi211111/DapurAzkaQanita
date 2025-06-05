import {
  Target,
  Eye,
  Award,
  Heart,
  ChefHat,
  Coffee,
  Flame,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Fika Luhrida",
      role: "Founder & CEO",
      description:
        "Berpengalaman lebih dari 20 tahun di dunia kuliner dan kue tradisional Palembang.",
      image: "/about/hatta.jpg",
    },
    {
      name: "Evania Loveola",
      role: "Creative Director",
      description:
        "Ahli dalam inovasi resep dan pengembangan varian kue basah Dapur Azka.",
      image: "/about/Eva.jpg",
    },
    {
      name: "Aidilya Laila Andhini",
      role: "Production Manager",
      description:
        "Mengelola proses produksi kue dengan standar kualitas tinggi dan higienis.",
      image: "/about/Andhini.jpg",
    },
    {
      name: "Dhea Mutmainah",
      role: "Marketing Director",
      description: "Strategi pemasaran dan pengembangan bisnis kue Dapur Azka.",
      image: "/about/Eka.jpg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="py-10 md:20 bg-gradient-to-br from-batik-cream/100 to-batik-gold/20 dark:from-gray-900 dark:to-gray-800">
        {/*MOBILE*/}
        <div className="block md:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-2xl md:text-5xl font-bold text-batik-brown dark:text-batik-gold mb-6">
            Tentang Dapur Azka Qanita
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Perjalanan kami menghadirkan cita rasa otentik Palembang sebagai
            wujud pelestarian budaya dalam setiap sajian.
          </p>
        </div>
        {/*DESKTOP*/}
        <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown dark:text-batik-gold mb-6">
            Tentang Dapur Azka Qanita
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Perjalanan kami menghadirkan cita rasa otentik Palembang sebagai
            wujud pelestarian budaya dalam setiap sajian.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-serif text-xl md:text-3xl font-bold text-batik-brown dark:text-batik-gold mb-6">
                Cerita Kami
              </h2>
              <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-6">
                Dapur Azka berdiri dari kecintaan keluarga kami terhadap kue
                basah tradisional Palembang. Kami ingin menghadirkan cita rasa
                otentik dan kualitas terbaik untuk setiap pelanggan.
              </p>
              <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-6">
                Berawal dari dapur rumah, kini Dapur Azka berkembang menjadi
                produsen kue basah yang dipercaya untuk berbagai acara, mulai
                dari keluarga hingga perusahaan.
              </p>
              <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300">
                Setiap produk Dapur Azka dibuat dengan bahan pilihan, resep
                turun-temurun, dan sentuhan modern agar selalu menghadirkan
                pengalaman rasa yang istimewa.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  alt="Bahan masakan segar"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  src="https://images.unsplash.com/photo-1556909006-3490b8946a40"
                />
                <img
                  alt="Hidangan lezat disajikan"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-batik-cream/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold text-batik-brown mb-12 text-center">
            Nilai-Nilai Kami
          </h2>
          {/* MOBILE: grid 2 kolom, card/icon/font lebih kecil; DESKTOP: tetap */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                icon: <Heart className="w-7 h-7 md:w-10 md:h-10 text-orange-500" />,
                title: "Kualitas Terjamin",
                description:
                  "Kami menggunakan bahan pilihan terbaik untuk setiap hidangan yang kami sajikan.",
              },
              {
                icon: <ChefHat className="w-7 h-7 md:w-10 md:h-10 text-orange-500" />,
                title: "Pelayanan Ramah",
                description:
                  "Tim kami siap melayani dengan senyuman dan memberikan pengalaman yang menyenangkan.",
              },
              {
                icon: <Flame className="w-7 h-7 md:w-10 md:h-10 text-orange-500" />,
                title: "Proses Tradisional",
                description:
                  "Kami mengolah kue dengan cara tradisional yang menghasilkan tekstur dan aroma khas yang tidak tergantikan.",
              },
              {
                icon: <Award className="w-7 h-7 md:w-10 md:h-10 text-orange-500" />,
                title: "Resep Autentik",
                description:
                  "Setiap hidangan dibuat dengan resep turun temurun yang telah teruji kelezatannya.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-3 md:p-6 rounded-lg shadow text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-2 md:mb-4">{value.icon}</div>
                <h3 className="text-base md:text-xl font-semibold text-[#4A2C1A] mb-1 md:mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-batik-brown dark:text-batik-gold mb-4">
              Tim Kami
            </h2>
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dibalik setiap karya yang kami hasilkan, terdapat tim profesional
              yang berdedikasi tinggi.
            </p>
          </div>

          {/* MOBILE: grid 2 kolom, card & foto lebih kecil; DESKTOP: tetap */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-batik-gold/20 to-batik-brown/20 dark:from-batik-gold/10 dark:to-batik-brown/10 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-serif text-base md:text-xl font-semibold text-batik-brown dark:text-batik-gold mb-1 md:mb-2">
                  {member.name}
                </h3>
                <p className="text-batik-gold font-medium mb-2 md:mb-3 text-xs md:text-base">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-batik-brown to-batik-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Siap Merasakan Kelezatan Kue Kami?
          </h2>
          <p className="text-sm md:text-xl text-batik-cream mb-6 md:mb-8 max-w-3xl mx-auto">
            Manjakan diri dan orang tersayang dengan kue tradisional Palembang favorit Anda. Segera dapatkan sebelum stok habis.
          </p>
          <div className="flex sm:flex-row gap-4 justify-center">
            <Link to="/product" className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-batik-gold hover:bg-batik-gold/90 text-sm text-white font-semibold py-3 md:py-4 px-8 md:px-8 rounded-lg transition-all duration-300 md:text-lg">
                Lihat Semua Product
              </button>
            </Link>
            <Link to="/contact" className="w-full md:w-auto">
              <button className="w-full md:w-auto border-2 border-white text-sm text-white hover:bg-white hover:text-batik-brown font-semibold py-3 md:py-4 px-8 md:px-8 rounded-lg transition-all duration-300 md:text-lg">
                Hubungi Admin
              </button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
//// tess
export default About;
