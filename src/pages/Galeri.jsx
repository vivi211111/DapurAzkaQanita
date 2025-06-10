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
      title: "Paket Kue Keluarga",
      description:
        "Paket hemat kue basah untuk keluarga, terdiri dari aneka kue tradisional Palembang. Gratis ongkir dan kemasan eksklusif!",
      features: [
        "Aneka Kue Basah Keluarga",
        "Varian Bisa Pilih",
        "Kemasan Eksklusif",
        "Gratis Ongkir",
      ],
      originalPrice: "Rp 350.000",
      specialPrice: "Rp 275.000",
      popular: true,
    },
    {
      icon: Palette,
      title: "Kue Tradisional Spesial",
      description:
        "Dapatkan koleksi kue tradisional Palembang dengan harga spesial hanya di bulan ini! Stok terbatas.",
      features: [
        "Kue Khas Palembang",
        "Bahan Pilihan",
        "Rasa Autentik",
        "Sertifikat Halal",
      ],
      originalPrice: "Rp 200.000",
      specialPrice: "Rp 150.000",
      popular: false,
    },
    {
      icon: Shirt,
      title: "Kue Modern Diskon 20%",
      description:
        "Kue modern kekinian, dapatkan diskon spesial untuk pembelian minggu ini.",
      features: [
        "Desain Menarik",
        "Bahan Premium",
        "Custom Rasa",
        "Pilihan Ukuran Lengkap",
      ],
      originalPrice: "Rp 180.000",
      specialPrice: "Rp 145.000",
      popular: false,
    },
    {
      icon: Gift,
      title: "Hampers Kue Promo",
      description:
        "Hampers kue eksklusif dengan harga promo, cocok untuk hadiah spesial dan hantaran.",
      features: [
        "Limited Edition",
        "Packaging Mewah",
        "Personalisasi",
        "Bulk Order",
      ],
      originalPrice: "Rp 400.000",
      specialPrice: "Rp 320.000",
      popular: false,
    },
  ];

  // Data galeri penjualan (foto & video produk kue)
  const galeriPenjualan = [
    {
      type: "video",
      src: "video1.mp4",
      poster: "/portfolio/proses-maksubah.jpg",
      title: "Proses Pembuatan Maksubah",
      desc: "Video dokumentasi proses pembuatan Maksubah di dapur kami.",
    },
    {
      type: "video",
      src: "video2.mp4",
      poster: "/portfolio/proses-maksubah.jpg",
      title: "Proses Pembuatan Maksubah",
      desc: "Video dokumentasi proses pembuatan Maksubah di dapur kami.",
    },
    {
      type: "video",
      src: "video3.mp4",
      poster: "/portfolio/proses-maksubah.jpg",
      title: "Proses Pembuatan Maksubah",
      desc: "Video dokumentasi proses pembuatan Maksubah di dapur kami.",
    },
    {
      type: "video",
      src: "video4.mp4",
      poster: "/portfolio/proses-maksubah.jpg",
      title: "Proses Pembuatan Maksubah",
      desc: "Video dokumentasi proses pembuatan Maksubah di dapur kami.",
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
        {/* MOBILE HERO: hanya tampil di <md */}
        <section className="block md:hidden py-10 bg-gradient-to-br from-batik-cream to-batik-gold/20">
          <div className="max-w-7xl mx-auto px-2 text-center">
            <h1 className="font-serif text-2xl font-bold text-batik-brown mb-3">
              Galeri Kami
            </h1>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              Temukan ragam kue khas Palembang dengan cita rasa autentik dan
              tampilan yang menggoda.
            </p>
          </div>
        </section>
        {/* DESKTOP HERO: hanya tampil di md+ */}
        <section className="hidden md:block py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown mb-6">
              Galeri Kami
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan ragam kue khas Palembang dengan cita rasa autentik dan
              tampilan yang menggoda.
            </p>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="py-10 md:py-20 bg-white">
          <div className="max-w-full xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            {/*MOBILE*/}
            <div className="block md:hidden text-center mb-12">
              <h2 className="font-serif text-xl font-bold text-batik-brown mb-4">
                Galeri Penjualan
              </h2>
              <p className="text-sm text-gray-600 max-w-3xl mx-auto">
                Video produk, proses produksi, dan dokumentasi milik toko kami.
              </p>
            </div>
            {/*DESKTOP:*/}
            <div className="hidden md:block text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-brown mb-4">
                Galeri Penjualan
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Video produk, proses produksi, dan dokumentasi milik toko kami.
              </p>
            </div>
            <div className="max-w-screen-xl mx-auto">
              {/* MOBILE: grid 2 kolom, DESKTOP: tetap */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                {galeriPenjualan.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative group rounded-xl overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-[1.02]"
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-40 md:h-64 object-cover"
                      />
                    ) : (
                      <video
                        controls
                        poster={item.poster}
                        className="w-full h-40 md:h-64 object-cover"
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                    )}
                    <div className="p-2 md:p-4">
                      <h3 className="font-semibold text-batik-brown mb-1 text-xs md:text-base">
                        {item.title}
                      </h3>
                      <p className="text-[11px] md:text-sm text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Galeri Testimoni Klien */}
        <section className="py-10 md:py-20 bg-batik-cream/30">
          <div className="max-w-full xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            {/*MOBILE*/}
            <div className="block md:hidden text-center mb-12">
              <h2 className="font-serif text-xl font-bold text-batik-brown mb-4">
                Galeri Testimoni Klien
              </h2>
              <p className="text-sm text-gray-600 max-w-3xl mx-auto">
                Foto & video review dari pelanggan kami yang telah mencoba
                produk.
              </p>
            </div>
            {/*DESKTOP*/}
            <div className="hidden md:block text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-brown mb-4">
                Galeri Testimoni Klien
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Foto & video review dari pelanggan kami yang telah mencoba
                produk.
              </p>
            </div>
            <div className="max-w-screen-xl mx-auto">
              {/* MOBILE: grid 2 kolom, DESKTOP: tetap */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 md:gap-8">
                {galeriTestimoni.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative group rounded-xl overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-[1.02]"
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-40 md:h-64 object-cover"
                      />
                    ) : (
                      <video
                        controls
                        poster={item.poster}
                        className="w-full h-40 md:h-64 object-cover"
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                    )}
                    <div className="p-2 md:p-4">
                      <h3 className="font-semibold text-batik-brown mb-1 text-xs md:text-base">
                        {item.title}
                      </h3>
                      <p className="text-[11px] md:text-sm text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/*MOBILE*/}
        <section className="block md:hidden py-10 md:py-20 bg-gradient-to-r from-batik-brown to-batik-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
              Sudah Tertarik Untuk Membeli?
            </h2>
            <p className="text-sm text-batik-cream mb-8 max-w-3xl mx-auto">
              Jangan lewatkan penawaran bundling hemat untuk kue khas Palembang.
              Stok terbatas, buruan checkout sekarang!
            </p>
            <div className="flex sm:flex-row gap-4 justify-center">
              <Link to="/product">
                <button className="bg-batik-gold hover:bg-batik-gold/90 text-white text-sm font-semibold py-2 px-8 rounded-lg transition-all duration-300">
                  Lihat Semua Product
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-batik-brown text-sm font-semibold py-2 px-8 rounded-lg transition-all duration-300">
                  Hubungi Admin
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/*DESKTOP*/}
        <section className="hidden md:block py-20 bg-gradient-to-r from-batik-brown to-batik-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Sudah Tertarik Untuk Membeli?
            </h2>
            <p className="text-xl text-batik-cream mb-8 max-w-3xl mx-auto">
              Jangan lewatkan penawaran bundling hemat untuk kue khas Palembang.
              Stok terbatas, buruan checkout sekarang!
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
