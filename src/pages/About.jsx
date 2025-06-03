import { Target, Eye, Award, Heart, ChefHat, Coffee, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Fika Luhrida",
      role: "Founder & CEO",
      description: "Pengalaman 20 tahun di industri batik dan fashion",
      image: "/about/hatta.jpg",
    },
    {
      name: "Evania Loveola",
      role: "Creative Director",
      description: "Desainer senior dengan spesialisasi motif tradisional",
      image: "/about/Eva.jpg",
    },
    {
      name: "Aidilya Laila Andhini",
      role: "Production Manager",
      description: "Ahli dalam manajemen produksi dan quality control",
      image: "/about/Andhini.jpg",
    },
    {
      name: "Dhea Mutmainah",
      role: "Marketing Director",
      description: "Strategi pemasaran dan pengembangan bisnis",
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
      <section className="py-20 bg-gradient-to-br from-batik-cream/100 to-batik-gold/20 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown dark:text-batik-gold mb-6">
            Tentang Dapur Azka Qanita
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Perjalanan kami menghadirkan cita rasa otentik Palembang 
            sebagai wujud pelestarian budaya dalam setiap sajian.
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
              <h2 className="font-serif text-3xl font-bold text-batik-brown dark:text-batik-gold mb-6">
                Cerita Kami
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Dapur Azka Qanita berdiri sejak 2010 sebagai usaha keluarga yang berfokus pada pembuatan kue tradisional Palembang dan nusantara. Kami berkomitmen menghadirkan cita rasa otentik, kualitas premium, dan pelayanan ramah untuk setiap pelanggan.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Berawal dari dapur rumah sederhana, Dapur Azka kini dipercaya melayani berbagai acara keluarga, kantor, hingga pesanan skala besar. Kami selalu menggunakan bahan segar, resep turun-temurun, dan proses tradisional untuk menjaga kelezatan dan keaslian setiap produk.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Setiap kue yang kami sajikan adalah hasil kerja keras, cinta, dan dedikasi tim kami. Kami ingin menjadi bagian dari momen spesial Anda, serta terus melestarikan warisan kuliner Indonesia melalui inovasi dan pelayanan terbaik.
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
                  alt="Dapur Azka Qanita"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  src="/about/dapur_azka.jpg"
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
          <h2 className="text-3xl font-bold text-batik-brown mb-12 text-center">
            Nilai-Nilai Kami
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {[
              {
                icon: <Heart className="w-10 h-10 text-orange-500" />,
                title: "Kualitas Terjamin",
                description:
                  "Kami menggunakan bahan pilihan terbaik untuk setiap hidangan yang kami sajikan.",
              },
              {
                icon: <ChefHat className="w-10 h-10 text-orange-500" />,
                title: "Pelayanan Ramah",
                description:
                  "Tim kami siap melayani dengan senyuman dan memberikan pengalaman yang menyenangkan.",
              },
              {
                icon: <Flame className="w-10 h-10 text-orange-500" />,
                title: "Proses Tradisional",
                description:
                  "Kami mengolah kue dengan cara tradisional yang menghasilkan tekstur dan aroma khas yang tidak tergantikan.",
              },
              {
                icon: <Award className="w-10 h-10 text-orange-500" />,
                title: "Resep Autentik",
                description:
                  "Setiap hidangan dibuat dengan resep turun temurun yang telah teruji kelezatannya.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#4A2C1A] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-brown dark:text-batik-gold mb-4">
              Tim Kami
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dibalik setiap karya yang kami hasilkan, terdapat tim profesional
              yang berdedikasi tinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-batik-gold/20 to-batik-brown/20 dark:from-batik-gold/10 dark:to-batik-brown/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-batik-brown dark:text-batik-gold mb-2">
                  {member.name}
                </h3>
                <p className="text-batik-gold font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-batik-brown to-batik-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Merasakan Kelezatan Kue Kami?
          </h2>
          <p className="text-xl text-batik-cream mb-8 max-w-3xl mx-auto">
            Manjakan diri dan orang tersayang dengan kue tradisional Palembang
            favorit Anda. Segera dapatkan sebelum stok habis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/product">
              <button className="bg-batik-gold hover:bg-batik-gold/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Lihat Semua Product
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-white text-white hover:bg-white hover:text-batik-brown font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Hubungi Admin
              </button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
