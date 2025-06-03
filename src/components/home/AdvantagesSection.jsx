import { CheckCircle, Star, Shield, Truck } from "lucide-react"
import { motion } from "framer-motion"

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: CheckCircle,
      title: "Kualitas Terjamin",
      description: "Setiap kue dibuat dengan resep turun-temurun dan bahan pilihan, serta diproses oleh pembuat kue berpengalaman",
    },
    {
      icon: Star,
      title: "Cita Rasa Autentik",
      description: "Rasa khas Palembang yang otentik dan tidak akan Anda temukan di tempat lain",
    },
    {
      icon: Shield,
      title: "Garansi Kepuasan",
      description: "Kami menjamin 100% kepuasan pelanggan. Uang kembali jika Anda tidak puas dengan rasa atau kualitas produk kami",
    },
    {
      icon: Truck,
      title: "Pengiriman Aman",
      description: "Pengemasan khusus dan sistem pengiriman aman untuk memastikan kue sampai dalam kondisi segar dan utuh",
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-20 bg-batik-cream/30 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-brown mb-4">Mengapa Memilih Kami?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kepercayaan pelanggan adalah prioritas utama kami. Inilah yang membuat Domesa menjadi pilihan
            terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow duration-300">
                <advantage.icon
                  className="text-batik-gold group-hover:text-batik-brown transition-colors duration-300"
                  size={32}
                />
              </div>

              <h3 className="font-serif text-xl font-semibold text-batik-brown mb-3">{advantage.title}</h3>

              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default AdvantagesSection
