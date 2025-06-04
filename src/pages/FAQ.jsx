"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Search,
  MessageCircle,
  Phone,
  Mail,
  InstagramIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openItems, setOpenItems] = useState([0]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Umum",
      faqs: [
        {
          question: "Apa saja jenis kue yang tersedia di toko ini?",
          answer:
            "Kami menyediakan berbagai jenis kue seperti kue ulang tahun, kue tart, brownies, bolu, kue kering, dan aneka pastry. Semua kue dibuat fresh setiap hari dengan bahan berkualitas.",
        },
        {
          question: "Apakah bisa request desain atau varian rasa khusus?",
          answer:
            "Tentu! Anda dapat request desain kue custom, tulisan, atau varian rasa sesuai keinginan. Silakan hubungi kami minimal 2 hari sebelum tanggal pengambilan/pengiriman.",
        },
        {
          question: "Apakah kue yang dijual halal?",
          answer:
            "Semua produk kue kami dijamin halal dan tidak mengandung bahan pengawet berbahaya. Kami hanya menggunakan bahan-bahan berkualitas dan bersertifikat halal.",
        },
        {
          question: "Apakah bisa request kartu ucapan atau lilin ulang tahun?",
          answer:
            "Tentu, Anda dapat menambahkan permintaan kartu ucapan, lilin ulang tahun, atau dekorasi tambahan saat melakukan pemesanan. Silakan tulis permintaan khusus Anda di catatan pesanan.",
        },
        {
          question:
            "Apakah ada promo atau diskon untuk pembelian dalam jumlah banyak?",
          answer:
            "Kami menyediakan promo dan diskon khusus untuk pembelian dalam jumlah besar, seperti untuk acara kantor, arisan, atau event. Hubungi customer service kami untuk info lebih lanjut.",
        },
        {
          question: "Apakah ada sertifikat keamanan pangan untuk produk kue?",
          answer:
            "Semua produk kami diproduksi sesuai standar keamanan pangan dan telah memiliki izin PIRT. Kami selalu menjaga kebersihan dan kualitas bahan baku.",
        },
      ],
    },
    {
      title: "Pemesanan & Pembayaran",
      faqs: [
        {
          question: "Bagaimana cara memesan kue di toko ini?",
          answer:
            "Anda dapat memesan kue melalui website, WhatsApp, atau langsung datang ke toko. Pilih produk, tentukan varian/rasa, lalu lakukan pembayaran untuk konfirmasi pesanan.",
        },
        {
          question: "Metode pembayaran apa saja yang diterima?",
          answer:
            "Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, GoPay, DANA), dan pembayaran tunai di toko. Untuk pemesanan online, pembayaran dilakukan sebelum pengiriman.",
        },
        {
          question: "Apakah bisa pesan kue untuk acara besar (catering/event)?",
          answer:
            "Bisa! Kami melayani pemesanan kue dalam jumlah besar untuk acara ulang tahun, pernikahan, arisan, kantor, dan event lainnya. Hubungi kami untuk penawaran harga khusus dan konsultasi kebutuhan Anda.",
        },
        {
          question: "Apakah kue bisa dikirim ke luar kota/provinsi?",
          answer:
            "Untuk saat ini, pengiriman reguler kami melayani area Jabodetabek dan sekitarnya. Untuk pengiriman ke luar kota/provinsi, silakan konsultasikan dengan tim kami untuk solusi pengiriman khusus atau pengiriman dalam keadaan beku.",
        },
      ],
    },
    {
      title: "Pengiriman & Pengambilan",
      faqs: [
        {
          question:
            "Apakah tersedia layanan delivery? Area mana saja yang dijangkau?",
          answer:
            "Kami melayani pengiriman kue ke area Jabodetabek dan sekitarnya. Untuk area lain, silakan konfirmasi ke customer service kami. Pengiriman dilakukan dengan armada khusus agar kue tetap aman sampai tujuan.",
        },
        {
          question: "Kapan kue bisa diambil atau dikirim setelah pemesanan?",
          answer:
            "Untuk kue ready stock bisa diambil/dikirim di hari yang sama. Untuk kue custom/pre-order, minimal H-1 atau sesuai kesepakatan. Waktu pengambilan/pengiriman dapat dipilih saat pemesanan.",
        },
        {
          question: "Bagaimana jika kue rusak saat pengiriman?",
          answer:
            "Jika kue rusak atau tidak sesuai pesanan saat diterima, segera hubungi kami maksimal 1x24 jam setelah penerimaan. Kami akan memberikan solusi penggantian atau refund sesuai kebijakan toko.",
        },
        {
          question: "Bagaimana kue dikemas agar tetap aman selama pengiriman?",
          answer:
            "Setiap kue dikemas menggunakan box food grade yang kokoh, dilapisi bubble wrap, dan diberi ice gel (untuk kue dingin) agar tetap segar dan aman sampai tujuan. Kami memastikan kue tidak mudah rusak selama proses pengiriman.",
        },
        {
          question: "Apakah kue bisa dikirim dalam keadaan beku?",
          answer:
            "Beberapa jenis kue seperti brownies dan kue kering bisa dikirim dalam keadaan beku atau setengah beku untuk menjaga kesegaran. Silakan request saat pemesanan jika ingin pengiriman frozen.",
        },
      ],
    },
    {
      title: "Stok, Garansi & Penyimpanan",
      faqs: [
        {
          question: "Apakah semua kue selalu ready stock?",
          answer:
            "Beberapa kue seperti brownies, bolu, dan kue kering biasanya ready stock. Untuk kue tart, kue ulang tahun, dan kue custom, sebaiknya pre-order minimal H-1 untuk memastikan ketersediaan.",
        },
        {
          question: "Berapa lama daya tahan kue? Bagaimana cara menyimpannya?",
          answer:
            "Daya tahan kue berbeda-beda: kue tart & bolu 2-3 hari di kulkas, brownies 4-5 hari, kue kering hingga 2 minggu dalam wadah tertutup. Simpan di tempat sejuk dan kering, hindari sinar matahari langsung.",
        },
        {
          question: "Apakah ada garansi untuk kue yang dibeli?",
          answer:
            "Kami memberikan garansi jika kue rusak, basi, atau tidak sesuai pesanan saat diterima. Silakan dokumentasikan dan hubungi kami maksimal 1x24 jam setelah penerimaan untuk klaim garansi.",
        },
        {
          question: "Bagaimana cara memanaskan ulang kue tertentu?",
          answer:
            "Untuk brownies atau bolu, Anda bisa memanaskan ulang di microwave selama 10-20 detik atau di oven dengan suhu rendah selama 3-5 menit. Jangan terlalu lama agar tekstur tetap lembut.",
        },
        {
          question:
            "Bagaimana cara memastikan kue tetap segar saat acara outdoor?",
          answer:
            "Simpan kue di tempat teduh dan sejuk, hindari paparan sinar matahari langsung. Untuk acara outdoor, gunakan ice gel atau cooler box agar kue tetap segar dan tidak mudah meleleh.",
        },
      ],
    },
  ];

  const allFaqs = faqCategories.flatMap((category) =>
    category.faqs.map((faq) => ({ ...faq, category: category.title }))
  );

  const filteredFaqs = allFaqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="pt-16">
        {/* Hero Section */}
        {/*MOBILE*/}
        <section className="block md:hidden py-10 bg-gradient-to-br from-batik-cream to-batik-gold/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-2xl font-bold text-batik-brown dark:text-batik-gold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Temukan jawaban untuk pertanyaan yang sering diajukan seputar
              produk dan layanan Batik Nusantara.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari pertanyaan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full max-w-[220px] px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-batik-gold focus:border-batik-gold text-sm bg-white"
                />
              </div>
            </div>
          </div>
        </section>
        {/*DESKTOP*/}
        <section className="hidden md:block py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown dark:text-batik-gold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Temukan jawaban untuk pertanyaan yang sering diajukan seputar
              produk dan layanan Batik Nusantara.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari pertanyaan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl focus:ring-2 focus:ring-batik-gold focus:border-transparent text-base"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {searchTerm ? (
              // Search Results
              <div>
                <h2 className="font-serif text-xl md:text-2xl font-bold text-batik-brown dark:text-batik-gold mb-8">
                  Hasil Pencarian "{searchTerm}" ({filteredFaqs.length} hasil)
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 gap-4">
                  {filteredFaqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg"
                    >
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                      >
                        <div>
                          <h3 className="font-semibold text-sm md:text-base text-batik-brown dark:text-batik-gold">
                            {faq.question}
                          </h3>
                          <span className="text-[10px] md:text-sm text-batik-gold">
                            {faq.category}
                          </span>
                        </div>
                        {openItems.includes(index) ? (
                          <ChevronUp className="text-batik-gold" size={18} />
                        ) : (
                          <ChevronDown className="text-batik-gold" size={18} />
                        )}
                      </button>
                      {openItems.includes(index) && (
                        <div className="px-4 md:px-6 pb-3 md:pb-4">
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Category-based FAQ
              <div className="space-y-12">
                {faqCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-batik-brown dark:text-batik-gold mb-6">
                      {category.title}
                    </h2>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 gap-4">
                      {category.faqs.map((faq, faqIndex) => {
                        const globalIndex = categoryIndex * 10 + faqIndex;
                        return (
                          <div
                            key={faqIndex}
                            className="border border-gray-200 dark:border-gray-700 rounded-lg"
                          >
                            <button
                              onClick={() => toggleItem(globalIndex)}
                              className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                            >
                              <h3 className="font-semibold text-sm md:text-base text-batik-brown dark:text-batik-gold">
                                {faq.question}
                              </h3>
                              {openItems.includes(globalIndex) ? (
                                <ChevronUp
                                  className="text-batik-gold"
                                  size={18}
                                />
                              ) : (
                                <ChevronDown
                                  className="text-batik-gold"
                                  size={18}
                                />
                              )}
                            </button>
                            {openItems.includes(globalIndex) && (
                              <div className="px-4 md:px-6 pb-3 md:pb-4">
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-batik-cream/30 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/*MOBILE*/}
            <div className="block md:hidden text-center mb-12">
              <h2 className="font-serif text-xl font-bold text-batik-brown dark:text-batik-gold mb-4">
                Tidak Menemukan Jawaban?
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Tim customer service kami siap membantu Anda dengan pertanyaan
                atau kebutuhan khusus lainnya.
              </p>
            </div>
            {/*DESKTOP*/}
            <div className="hidden md:block text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-batik-brown dark:text-batik-gold mb-4">
                Tidak Menemukan Jawaban?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Tim customer service kami siap membantu Anda dengan pertanyaan
                atau kebutuhan khusus lainnya.
              </p>
            </div>

            {/*CONTACT*/}
            {/*MOBILE*/}
            <div className="block md:hidden grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="w-10 h-10 bg-batik-gold rounded-full flex items-center justify-center mx-auto mb-2">
                  <InstagramIcon className="text-white" size={18} />
                </div>
                <h3 className="font-serif text-sm font-semibold text-batik-brown dark:text-batik-gold mb-1">
                  DM Kami
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                  Chat langsung dengan tim support kami
                </p>
                <button className="btn-primary text-sm py-2 px-4 rounded-lg min-w-[120px]">
                  @dapur_azka_qanita
                </button>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-batik-brown rounded-full flex items-center justify-center mx-auto mb-2">
                  <Phone className="text-white" size={18} />
                </div>
                <h3 className="font-serif text-sm font-semibold text-batik-brown dark:text-batik-gold mb-1">
                  Telepon
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                  Hubungi hotline customer service kami
                </p>
                <button className="btn-primary text-sm py-2 px-4 rounded-lg min-w-[120px]">
                  +62 811-7874-456
                </button>
              </div>
              <div className="text-center col-span-2">
                <div className="w-10 h-10 bg-batik-maroon rounded-full flex items-center justify-center mx-auto mb-2">
                  <Mail className="text-white" size={18} />
                </div>
                <h3 className="font-serif text-sm font-semibold text-batik-brown dark:text-batik-gold mb-1">
                  Email
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                  Kirim pertanyaan detail via email
                </p>
                <button className="btn-primary text-sm py-2 px-4 rounded-lg min-w-[120px]">
                  info@batiknusantara.com
                </button>
              </div>
            </div>
            {/*DESKTOP*/}
            <div className="hidden md:grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-batik-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <InstagramIcon className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-batik-brown dark:text-batik-gold mb-2">
                  DM Kami
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Chat langsung dengan tim support kami
                </p>
                <button className="btn-primary">@dapur_azka_qanita</button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-batik-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-batik-brown dark:text-batik-gold mb-2">
                  Telepon
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Hubungi hotline customer service kami
                </p>
                <button className="btn-primary">+62 811-7874-456</button>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-batik-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-batik-brown dark:text-batik-gold mb-2">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Kirim pertanyaan detail via email
                </p>
                <button className="btn-primary">info@batiknusantara.com</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default FAQ;
