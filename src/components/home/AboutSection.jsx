import { Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const kueStories = [
  {
    name: "Maksubah",
    image: "/portfolio/kue-maksubah-prunes.jpg",
    story:
      "Maksubah adalah kue tradisional Palembang yang hanya dibuat pada momen istimewa seperti Lebaran dan pernikahan. Kue ini melambangkan kemakmuran dan kehangatan keluarga.",
  },
  {
    name: "Lapis Legit",
    image: "/portfolio/kue-lapis-legit.jpg",
    story:
      "Lapis Legit dikenal sebagai kue seribu lapis, simbol kesabaran dan ketekunan. Biasanya disajikan saat hari besar sebagai tanda syukur dan kebersamaan.",
  },
  {
    name: "Bolu Kukus Pelangi",
    image: "/portfolio/kue-bolu-kukus.jpg",
    story:
      "Bolu Kukus Pelangi dengan warna-warni ceria sering menjadi favorit anak-anak saat Lebaran, melambangkan kebahagiaan dan harapan baru.",
  },
];

const AboutSection = () => {
  const [selectedStory, setSelectedStory] = useState(0);

  return (
    <section className="py-20 bg-batik-cream/30 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg border border-batik-gold/30 dark:border-batik-gold/10">
              <img
                src="/about/Andhini.jpg"
                alt="Dapur Azka Qanita"
                className="w-full h-[380px] md:h-[420px] lg:h-[460px] object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-bold text-batik-brown dark:text-batik-gold mb-4"
            >
              Tentang Dapur Azka Qanita
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-4 max-w-2xl"
            >
              Sejak 2015, Dapur Azka Qanita telah menjadi rumah kedua bagi para
              mahasiswa dan pekerja di sekitar kampus. Kami bangga menyajikan
              makanan rumahan yang lezat dengan cita rasa autentik dan harga yang
              terjangkau.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl"
            >
              Dengan komitmen pada kualitas bahan baku segar dan resep turun
              temurun, setiap hidangan kami dibuat dengan penuh cinta untuk
              memberikan pengalaman kuliner yang tak terlupakan.
            </motion.p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="bg-batik-gold/10 dark:bg-batik-gold/20 rounded-xl p-5 flex flex-col items-center shadow"
              >
                <Users className="text-batik-brown mb-2" size={32} />
                <div className="text-2xl font-bold text-batik-brown dark:text-batik-gold">
                  1000+
                </div>
                <div className="text-batik-brown dark:text-batik-gold text-sm font-medium">
                  Pelanggan Setia
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="bg-batik-gold/10 dark:bg-batik-brown/30 rounded-xl p-5 flex flex-col items-center shadow"
              >
                <Award className="text-batik-brown dark:text-batik-gold mb-2" size={32} />
                <div className="text-2xl font-bold text-batik-brown dark:text-batik-gold">
                  9
                </div>
                <div className="text-batik-brown dark:text-batik-gold text-sm font-medium">
                  Tahun Berpengalaman
                </div>
              </motion.div>
            </div>

            {/* Feature List */}
            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mb-0 space-y-2 text-batik-brown dark:text-batik-gold/90 text-base"
            >
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-batik-gold"></span>
                Bahan segar pilihan terbaik
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-batik-gold"></span>
                Pelayanan cepat dan ramah
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-batik-gold"></span>
                Harga terjangkau untuk mahasiswa
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
