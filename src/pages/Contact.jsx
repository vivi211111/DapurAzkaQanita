"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccess("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setError("Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch (err) {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      details: [
        "Komplek TOP 100, Blok. A7 No. 27",
        "Jakabaring-Palembang",
        "Indonesia",
      ],
    },
    {
      icon: Phone,
      title: "Telepon",
      details: ["+62 811 7874 458 ", "+62 812 7116 550"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["dapurazkaqanita@gmail.com"],
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: [
        "Senin - Jumat: 08:00 - 17:00",
        "Sabtu: 08:00 - 15:00",
        "Minggu: Tutup",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown dark:text-batik-gold mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nikmati kelezatan kue tradisional khas Palembang buatan kami.
              Hubungi tim kami untuk pemesanan dan ciptakan momen manis bersama
              orang tercinta.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-batik-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-batik-brown dark:text-batik-gold mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 dark:text-gray-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form & Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-batik-brown dark:text-batik-gold mb-6">
                  Kirim Pesan
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="nama@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="+62 812 3456 7890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subjek *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      >
                        <option value="">Pilih subjek</option>
                        <option value="konsultasi">Konsultasi Produk</option>
                        <option value="pemesanan">Pemesanan</option>
                        <option value="kerjasama">Kerjasama Bisnis</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Ceritakan kebutuhan atau pertanyaan Anda..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary inline-flex items-center justify-center disabled:opacity-60"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center"><svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg> Mengirim...</span>
                    ) : (
                      <><Send className="mr-2" size={20} />Kirim Pesan</>
                    )}
                  </button>
                  {success && <div className="text-green-600 text-center font-semibold mt-2">{success}</div>}
                  {error && <div className="text-red-600 text-center font-semibold mt-2">{error}</div>}
                </form>
              </div>

              {/* Map & Additional Info */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-batik-brown dark:text-batik-gold mb-6">
                  Lokasi Kami
                </h2>

                {/* Google Maps Embed */}
                <div className="w-full h-64 rounded-lg mb-6 overflow-hidden border border-batik-gold/30">
                  <iframe
                    src="https://www.google.com/maps?q=-3.022857,104.782857&hl=id&z=17&output=embed"
                    title="Lokasi Dapur Azka Qanita"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Additional Info */}
                <div className="bg-batik-cream/30 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="font-serif text-xl font-semibold text-batik-brown dark:text-batik-gold mb-4">
                    Informasi Tambahan
                  </h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li>• Konsultasi gratis untuk semua layanan</li>
                    <li>• Estimasi harga dalam 24 jam</li>
                    <li>• Garansi kepuasan 100%</li>
                    <li>• Pengiriman ke seluruh Indonesia</li>
                    <li>• Pembayaran fleksibel</li>
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="mt-6 grid grid-cols-1 gap-4">
                  <a
                    href="tel:+6288276729787"
                    className="bg-batik-gold text-white text-center py-3 px-4 rounded-lg hover:bg-batik-brown transition-colors duration-300"
                  >
                    Chat Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Contact;
