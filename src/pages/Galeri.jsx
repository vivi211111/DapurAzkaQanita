import {
  Palette,
  Shirt,
  Home,
  Gift,
  Star,
  CheckCircle,
  Package,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Galeri = () => {
  const offers = [
    {
      icon: Package,
      title: "Bundling Batik Keluarga",
      description:
        "Paket hemat untuk keluarga, terdiri dari 4 baju batik motif pilihan. Gratis ongkir dan gift box!",
      features: [
        "4 Baju Batik Dewasa & Anak",
        "Motif Bisa Pilih",
        "Gift Box Eksklusif",
        "Gratis Ongkir",
      ],
      originalPrice: "Rp 2.000.000",
      specialPrice: "Rp 1.500.000",
      popular: true,
    },
    {
      icon: Palette,
      title: "Batik Tradisional Spesial",
      description:
        "Dapatkan koleksi batik tradisional dengan harga spesial hanya di bulan ini! Stok terbatas.",
      features: [
        "Motif Klasik Jawa",
        "Pewarna Alami",
        "Handmade Premium",
        "Sertifikat Keaslian",
      ],
      originalPrice: "Rp 700.000",
      specialPrice: "Rp 500.000",
      popular: false,
    },
    {
      icon: Shirt,
      title: "Fashion Modern Diskon 20%",
      description:
        "Fashion batik modern untuk gaya kekinian, dapatkan diskon spesial untuk pembelian minggu ini.",
      features: [
        "Desain Trendy",
        "Bahan Premium",
        "Custom Design",
        "Size Chart Lengkap",
      ],
      originalPrice: "Rp 950.000",
      specialPrice: "Rp 750.000",
      popular: false,
    },
    {
      icon: Gift,
      title: "Souvenir Eksklusif Promo",
      description:
        "Cinderamata unik dengan harga promo, cocok untuk hadiah spesial dan koleksi.",
      features: [
        "Limited Edition",
        "Packaging Mewah",
        "Personalisasi",
        "Bulk Order",
      ],
      originalPrice: "Rp 200.000",
      specialPrice: "Rp 150.000",
      popular: false,
    },
  ];

  // Data galeri penjualan (foto & video produk kue)
  const galeriPenjualan = [
    {
      type: "image",
      src: "/portfolio/kue-maksubah-original.jpg",
      title: "Maksubah Original",
      desc: "Maksubah klasik dengan lapisan legit dan aroma rempah khas Palembang.",
    },
    {
      type: "image",
      src: "/portfolio/kue-maksubah-prunes.jpg",
      title: "Maksubah Prunes",
      desc: "Maksubah dengan topping prunes premium, rasa manis legit dan segar.",
    },
    {
      type: "image",
      src: "/portfolio/kue-maksubah-keju.jpg",
      title: "Maksubah Keju",
      desc: "Maksubah dengan taburan keju melimpah, gurih dan lembut.",
    },
    {
      type: "video",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster: "/portfolio/proses-maksubah.jpg",
      title: "Proses Pembuatan Maksubah",
      desc: "Video dokumentasi proses pembuatan Maksubah di dapur kami.",
    },
    {
      type: "image",
      src: "/portfolio/kue-lapis-legit.jpg",
      title: "Lapis Legit Spesial",
      desc: "Lapis legit dengan 18 lapisan, tekstur lembut dan aroma butter.",
    },
    {
      type: "image",
      src: "/portfolio/kue-bolu-kukus.jpg",
      title: "Bolu Kukus Pelangi",
      desc: "Bolu kukus warna-warni, lembut dan cocok untuk acara keluarga.",
    },
    // Tambahkan lebih banyak foto/video produk kue jika diperlukan
  ];

  // Data galeri testimoni klien (foto & video review dari klien)
  const galeriTestimoni = [
    {
      type: "image",
      src: "/testimonials/Sarah Wijaya.jpeg?height=400&width=600",
      title: "Sarah Wijaya",
      desc: "Kue Maksubah enak banget, anak-anak suka!",
    },
    {
      type: "video",
      src: "https://www.w3schools.com/html/movie.mp4",
      poster: "/testimonials/Budi Santoso.jpeg?height=400&width=600",
      title: "Budi Santoso",
      desc: "Review video Maksubah Prunes dari pelanggan.",
    },
    {
      type: "image",
      src: "/testimonials/Maya Sari.jpeg?height=400&width=600",
      title: "Maya Sari",
      desc: "Maksubah Keju sangat lembut dan kejunya melimpah.",
    },
    {
      type: "image",
      src: "/testimonials/Rina Kusuma.jpeg?height=400&width=600",
      title: "Rina Kusuma",
      desc: "Lapis legitnya wangi dan tidak terlalu manis, recommended!",
    },
    {
      type: "video",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster: "/testimonials/Dr. Ahmad Fauzi.jpeg?height=400&width=600",
      title: "Dr. Ahmad Fauzi",
      desc: "Testimoni video: Bolu Kukus Pelangi cocok untuk acara kantor.",
    },
    // Tambahkan lebih banyak foto/video testimoni kue jika diperlukan
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown mb-6">
              Galeri Kami
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan ragam kue khas Palembang dengan 
              cita rasa autentik dan tampilan yang menggoda.
            </p>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-full xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-brown mb-4">
                Galeri Penjualan
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Foto & video produk, proses produksi, dan dokumentasi milik toko
                kami.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
              {galeriPenjualan.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-xl overflow-hidden shadow-lg bg-white"
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <video
                      controls
                      poster={item.poster}
                      className="w-full h-64 object-cover"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-batik-brown mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeri Testimoni Klien */}
        <section className="py-20 bg-batik-cream/30">
          <div className="max-w-full xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-brown mb-4">
                Galeri Testimoni Klien
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Foto & video review dari pelanggan kami yang telah mencoba produk.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
              {galeriTestimoni.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-xl overflow-hidden shadow-lg bg-white"
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <video
                      controls
                      poster={item.poster}
                      className="w-full h-64 object-cover"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-batik-brown mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-batik-brown to-batik-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Sudah Tertarik Untuk Membeli?
            </h2>
            <p className="text-xl text-batik-cream mb-8 max-w-3xl mx-auto">
              Jangan lewatkan penawaran bundling hemat untuk
              kue khas Palembang. Stok terbatas, buruan checkout sekarang!
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
      </div>
    </motion.div>
  );
};

export default Galeri;
