import { Star, Quote, Building, Calendar, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [showModal, setShowModal] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    rating: 5,
    content: "",
  });
  const [allTestimonials, setAllTestimonials] = useState([
    {
      id: 1,
      name: "Sarah Wijaya",
      role: "Ibu Rumah Tangga",
      company: "-",
      rating: 5,
      content:
        "Kuenya enak banget, teksturnya lembut dan rasa manisnya pas. Anak-anak di rumah suka sekali dengan Maksubah!",
      project: "Maksubah",
      date: "Januari 2025",
      image: "placeholder.jpg",
    },
    {
      id: 2,
      name: "Budi Santoso",
      role: "Pengusaha Kue",
      company: "Santoso Cake Shop",
      rating: 5,
      content:
        "Maksubah Prunes benar-benar favorit pelanggan di toko saya. Rasa prunes-nya menambah cita rasa unik!",
      project: "Maksubah Prunes",
      date: "Februari 2025",
      image: "placeholder.jpg",
    },
    {
      id: 3,
      name: "Maya Sari",
      role: "Pecinta Kue",
      company: "-",
      rating: 5,
      content:
        "Maksubah Keju sangat lembut dan kejunya melimpah. Cocok untuk hantaran keluarga!",
      project: "Maksubah Keju",
      date: "Maret 2025",
      image: "placeholder.jpg",
    },
    {
      id: 4,
      name: "Dr. Ahmad Fauzi",
      role: "Dosen",
      company: "Universitas Palembang",
      rating: 4,
      content:
        "Lapan Jam Duren aromanya harum dan rasa duriannya terasa. Cocok untuk oleh-oleh khas Palembang.",
      project: "Lapan Jam Duren",
      date: "April 2025",
      image: "placeholder.jpg",
    },
    {
      id: 5,
      name: "Rina Kusuma",
      role: "Ibu Rumah Tangga",
      company: "-",
      rating: 5,
      content:
        "Lapis Kojo Duren warnanya cantik dan rasa duriannya pas, tidak terlalu manis. Anak-anak suka!",
      project: "Lapis Kojo Duren",
      date: "Mei 2025",
      image: "placeholder.jpg",
    },
    {
      id: 6,
      name: "Pak Joko Widodo",
      role: "Pecinta Kue Tradisional",
      company: "-",
      rating: 5,
      content:
        "Engkak Duren teksturnya legit dan rasa duriannya mantap. Sangat recommended untuk acara keluarga!",
      project: "Engkak Duren",
      date: "Juni 2025",
      image: "placeholder.jpg",
    },
    {
      id: 7,
      name: "Andini Pratiwi",
      role: "Mahasiswa",
      company: "-",
      rating: 4,
      content:
        "Maksubah Coklat cocok untuk pecinta coklat, rasa manis dan coklatnya seimbang.",
      project: "Maksubah Coklat",
      date: "Juli 2025",
      image: "placeholder.jpg",
    },
    {
      id: 8,
      name: "Eka Saputra",
      role: "Guru",
      company: "SMA 1 Palembang",
      rating: 5,
      content:
        "Lapis Legit Original sangat lembut dan aromanya harum. Cocok untuk hantaran lebaran.",
      project: "Lapis Legit Original",
      date: "Agustus 2025",
      image: "placeholder.jpg",
    },
    {
      id: 9,
      name: "Eva Lestari",
      role: "Ibu Rumah Tangga",
      company: "-",
      rating: 5,
      content:
        "Lapan Jam Keju rasanya unik, manis dan gurih kejunya terasa. Pasti order lagi!",
      project: "Lapan Jam Keju",
      date: "September 2025",
      image: "placeholder.jpg",
    },
    {
      id: 11,
      name: "Dewi Anggraini",
      role: "PNS",
      company: "Kantor Gubernur",
      rating: 5,
      content:
        "Lapis Legit Prunes cocok untuk oleh-oleh, rasa prunes-nya segar dan tidak terlalu manis.",
      project: "Lapis Legit Prunes",
      date: "November 2025",
      image: "placeholder.jpg",
    },
  ]);

  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [sortBy, setSortBy] = useState("Terbaru");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [showVideo, setShowVideo] = useState({});

  // Tambahkan state untuk pagination dan load more
  const [page, setPage] = useState(1);
  const perPage = 5; // jumlah komentar per halaman
  const [showAll, setShowAll] = useState(false);

  // Untuk infinite scroll
  const [infiniteCount, setInfiniteCount] = useState(perPage);

  // Ambil daftar unik kategori/proyek dari data testimonial
  const testimonialProjects = Array.from(
    new Set(allTestimonials.map((t) => t.project))
  ).filter(Boolean);
  // Daftar produk dari Product.jsx (hardcode judul produk, urutkan abjad, tanpa duplikat)
  const productNames = [
    "Maksubah",
    "Maksubah Prunes",
    "Maksubah Keju",
    "Maksubah Coklat",
    "Lapan Jam",
    "Lapan Jam Duren",
    "Lapan Jam Keju",
    "Lapis Kojo",
    "Lapis Kojo Duren",
    "Engkak",
    "Engkak Duren",
    "Maksubah Kojo (Makjo)",
    "Maksubah Kojo (Makjo) Prunes",
    "Maksubah Engkak Kojo (MakEngKo)",
    "Lapis Legit Original",
    "Lapis Legit Nanas",
    "Lapis Legit Keju",
    "Lapis Legit Coklat",
    "Lapis Legit Prunes",
  ];
  // Gabungkan dan urutkan, tanpa duplikat
  const projectOptions = Array.from(
    new Set([...testimonialProjects, ...productNames])
  ).sort();

  // Hitung statistik rating
  const totalReview = allTestimonials.length;
  const totalRating = allTestimonials.reduce((sum, t) => sum + t.rating, 0);
  const avgRating = totalReview ? totalRating / totalReview : 0;
  const ratingDist = [5, 4, 3, 2, 1].map(
    (star) => allTestimonials.filter((t) => t.rating === star).length
  );

  // Helper untuk parsing tanggal (format: "Januari 2024", "Ongoing", "01 Jan 2024")
  function parseDate(str) {
    if (!str) return 0;
    if (str.toLowerCase().includes("ongoing")) return new Date().getTime();
    // Coba format "01 Jan 2024"
    const d1 = Date.parse(str);
    if (!isNaN(d1)) return d1;
    // Format "Januari 2024"
    const bulan = [
      "januari",
      "februari",
      "maret",
      "april",
      "mei",
      "juni",
      "juli",
      "agustus",
      "september",
      "oktober",
      "november",
      "desember",
    ];
    const parts = str.toLowerCase().split(" ");
    if (parts.length === 2) {
      const idx = bulan.indexOf(parts[0]);
      if (idx !== -1) {
        return Date.parse(
          `01 ${bulan[idx][0].toUpperCase() + bulan[idx].slice(1)} ${parts[1]}`
        );
      }
    }
    return 0;
  }

  // Filter, search, sort
  let filteredTestimonials = allTestimonials.filter((t) => {
    const matchSearch =
      t.project.toLowerCase().includes(search.toLowerCase()) ||
      t.content.toLowerCase().includes(search.toLowerCase());
    const matchRating = ratingFilter === 0 || t.rating === ratingFilter;
    const matchCategory = !categoryFilter || t.project === categoryFilter;
    return matchSearch && matchRating && matchCategory;
  });

  if (sortBy === "Terbaru") {
    filteredTestimonials = filteredTestimonials
      .slice()
      .sort((a, b) => parseDate(b.date) - parseDate(a.date));
  } else if (sortBy === "Terlama") {
    filteredTestimonials = filteredTestimonials
      .slice()
      .sort((a, b) => parseDate(a.date) - parseDate(b.date));
  } else if (sortBy === "Rating Tertinggi") {
    filteredTestimonials = filteredTestimonials
      .slice()
      .sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "Rating Terendah") {
    filteredTestimonials = filteredTestimonials
      .slice()
      .sort((a, b) => a.rating - b.rating);
  }

  const stats = [
    { number: "1000+", label: "Klien Puas" },
    { number: "98%", label: "Tingkat Kepuasan" },
    { number: "4.9/5", label: "Rating Rata-rata" },
    { number: "500+", label: "Review Positif" },
  ];

  // Video testimonials data (global, mudah ditambah)
  const videoTestimonials = [
    {
      id: 1,
      name: "Sarah Wijaya",
      title: "Testimoni Klien 1",
      thumbnail: "placeholder.jpg",
      video: "placeholder.jpg",
    },
    {
      id: 2,
      name: "Budi Santoso",
      title: "Testimoni Klien 2",
      thumbnail: "placeholder.jpg",
      video: "placeholder.jpg",
    },
    {
      id: 3,
      name: "Maya Sari",
      title: "Testimoni Klien 3",
      thumbnail: "placeholder.jpg",
      video: "placeholder.jpg",
    },
    // Tambahkan video baru di sini
  ];

  // Pagination logic
  const totalPages = Math.ceil(filteredTestimonials.length / perPage);
  const pagedTestimonials = filteredTestimonials.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Hero Section */}
      {/*MOBILE*/}
      <section className="py-10 bg-gradient-to-br from-batik-cream to-batik-gold/20">
        <div className="block md:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-2xl font-bold text-batik-brown mb-6">
            Testimoni Klien
          </h1>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Kepuasan klien adalah kebanggaan kami. Simak pengalaman mereka yang
            telah mempercayakan proyek handycraft kepada kami.
          </p>
        </div>
      </section>
      {/*DESKTOP*/}
      <section className="hidden md:block py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown mb-6">
            Testimoni Klien
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kepuasan klien adalah kebanggaan kami. Simak pengalaman mereka yang
            telah mempercayakan proyek handycraft kepada kami.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center md:items-start">
            {/* MOBILE: rating & distribusi lebih kecil, desktop tetap */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-8">
              <div className="text-4xl md:text-5xl font-bold text-batik-brown font-serif mb-1 md:mb-2">
                {avgRating.toFixed(1)}
              </div>
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 md:w-6 md:h-6 ${
                      i < Math.round(avgRating)
                        ? "text-batik-gold fill-current"
                        : "text-batik-gold/40"
                    } mr-0.5 md:mr-1`}
                  />
                ))}
              </div>
              <div className="text-gray-500 text-xs md:text-sm">
                {totalReview} Total Review
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <div className="font-semibold text-batik-brown text-sm md:text-base mb-1 md:mb-2">
                Distribusi Rating:
              </div>
              <div className="space-y-1 md:space-y-2">
                {[5, 4, 3, 2, 1].map((star, idx) => (
                  <div key={star} className="flex items-center gap-1 md:gap-2">
                    <span
                      className="w-6 md:w-8 flex items-center text-xs md:text-base font-bold"
                      style={{ color: "#D4AF37" }}
                    >
                      {star}
                      <Star
                        className="w-3 h-3 md:w-4 md:h-4 ml-0.5 md:ml-1"
                        style={{ color: "#D4AF37", fill: "#D4AF37" }}
                      />
                    </span>
                    <div
                      className="flex-1 h-1 md:h-2 rounded-full overflow-hidden"
                      style={{ background: "#E5E7EB" }}
                    >
                      <div
                        className="h-1 md:h-2 rounded-full"
                        style={{
                          background: "#D4AF37",
                          width: totalReview
                            ? `${(ratingDist[idx] / totalReview) * 100}%`
                            : "0%",
                        }}
                      ></div>
                    </div>
                    <span
                      className="w-5 md:w-6 text-[10px] md:text-xs font-semibold"
                      style={{ color: "#444" }}
                    >
                      ({ratingDist[idx]})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter/Action Bar */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* MOBILE: pencarian di tengah, filter di bawah pencarian, ukuran kecil */}
          <div className="block md:hidden">
            <div className="flex justify-center w-full mb-3">
              <input
                type="text"
                placeholder="Cari review (kue, komentar)..."
                className="w-[90%] max-w-[320px] px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-batik-gold focus:border-batik-gold text-sm bg-white mx-auto"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 gap-7 px-5 mx-auto">
              <select
                className="w-full px-2 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">Semua Kategori</option>
                {projectOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <select
                className="w-full px-2 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none"
                value={ratingFilter}
                onChange={(e) => setRatingFilter(Number(e.target.value))}
              >
                <option value={0}>Semua Rating</option>
                <option value={5}>5 Bintang</option>
                <option value={4}>4 Bintang</option>
                <option value={3}>3 Bintang</option>
                <option value={2}>2 Bintang</option>
                <option value={1}>1 Bintang</option>
              </select>
              <select
                className="w-full px-2 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Terbaru</option>
                <option>Terlama</option>
                <option>Rating Tertinggi</option>
                <option>Rating Terendah</option>
              </select>
              <button
                className="w-full bg-batik-orange hover:bg-batik-gold text-white font-semibold px-2 py-2 rounded-lg text-xs flex items-center justify-center gap-2 transition-all duration-200 mt-1"
                onClick={() => setShowModal(true)}
              >
                <span>Beri Ulasan Kue</span>
              </button>
            </div>
          </div>
          {/* DESKTOP: tetap seperti semula */}
          <div className="hidden md:flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-between">
            <div className="flex justify-center w-full md:w-auto">
              <input
                type="text"
                placeholder="Cari review (kue, komentar)..."
                className="w-full max-w-[250px] px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-batik-gold focus:border-batik-gold text-sm bg-white"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto justify-end md:justify-end">
              <select
                className="w-48 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">Semua Kategori</option>
                {projectOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <select
                className="w-40 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
                value={ratingFilter}
                onChange={(e) => setRatingFilter(Number(e.target.value))}
              >
                <option value={0}>Semua Rating</option>
                <option value={5}>5 Bintang</option>
                <option value={4}>4 Bintang</option>
                <option value={3}>3 Bintang</option>
                <option value={2}>2 Bintang</option>
                <option value={1}>1 Bintang</option>
              </select>
              <select
                className="w-40 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Terbaru</option>
                <option>Terlama</option>
                <option>Rating Tertinggi</option>
                <option>Rating Terendah</option>
              </select>
              <button
                className="bg-batik-orange hover:bg-batik-gold text-white font-semibold px-4 py-2 rounded-lg text-sm ml-2 flex items-center gap-2 transition-all duration-200"
                onClick={() => setShowModal(true)}
              >
                <span>Beri Ulasan Kue</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Form Review */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-batik-brown hover:text-batik-gold"
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="font-serif text-xl font-bold text-batik-brown mb-4">
              Beri Ulasan Kue
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setAllTestimonials([
                  {
                    id: allTestimonials.length + 1,
                    name: reviewForm.name || "Anonim",
                    role: "Pelanggan Baru",
                    company: "-",
                    rating: reviewForm.rating,
                    content: reviewForm.content,
                    project: "-",
                    date: new Date().toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }),
                    image: "",
                  },
                  ...allTestimonials,
                ]);
                setReviewForm({ name: "", rating: 5, content: "" });
                setShowModal(false);
              }}
              className="flex flex-col gap-3"
            >
              <input
                type="text"
                placeholder="Nama Anda (opsional)"
                className="border px-3 py-2 rounded-lg text-sm"
                value={reviewForm.name}
                onChange={(e) =>
                  setReviewForm((f) => ({ ...f, name: e.target.value }))
                }
              />
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Rating:</span>
                {[1, 2, 3, 4, 5].map((i) => (
                  <button
                    type="button"
                    key={i}
                    className={`focus:outline-none ${
                      reviewForm.rating >= i
                        ? "text-batik-gold"
                        : "text-gray-300"
                    }`}
                    onClick={() => setReviewForm((f) => ({ ...f, rating: i }))}
                  >
                    <Star className="w-5 h-5 fill-current" />
                  </button>
                ))}
              </div>
              <textarea
                placeholder="Tulis ulasan Anda..."
                className="border px-3 py-2 rounded-lg text-sm min-h-[80px]"
                value={reviewForm.content}
                onChange={(e) =>
                  setReviewForm((f) => ({ ...f, content: e.target.value }))
                }
                required
              />
              <button
                type="submit"
                className="bg-batik-gold hover:bg-batik-orange text-white font-semibold px-4 py-2 rounded-lg mt-2"
              >
                Kirim Ulasan
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Testimonials Grid - Pagination on Mobile Only */}
      <section className="py-10 bg-batik-cream/30">
        <div className="max-w-full xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-2 md:px-4 xl:px-6">
          <div className="max-w-screen-xl mx-auto">
            {/* MOBILE: Pagination */}
            <div className="block md:hidden">
              <div className="grid grid-cols-1 gap-4 mb-6">
                {pagedTestimonials.map((t, idx) => (
                  <div
                    key={t.id}
                    className="bg-white rounded-xl shadow p-2 md:p-6 flex flex-col gap-1 md:gap-3 border border-gray-100 text-xs md:text-base mx-auto w-full max-w-sm"
                    style={{ minHeight: 80 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {t.image ? (
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-batik-brown text-xs">
                          {t.name
                            ?.split(" ")
                            .map((w) => w[0])
                            .join("")}
                        </div>
                      )}
                      <div>
                        <div className="font-semibold text-batik-brown text-xs md:text-base">
                          {t.name}
                        </div>
                        {/* MOBILE: role & tanggal 2 baris, DESKTOP: tetap 1 baris */}
                        <div className="text-xs text-gray-400 hidden md:block">
                          {t.role} • {t.date}
                        </div>
                        <div className="text-xs text-gray-400 block md:hidden">
                          <div>{t.role}</div>
                          <div>{t.date}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-batik-gold fill-current"
                        />
                      ))}
                      {[...Array(5 - t.rating)].map((_, i) => (
                        <Star
                          key={i + 10}
                          className="w-4 h-4 text-gray-200 fill-current"
                        />
                      ))}
                      <span className="ml-2 text-xs font-semibold text-batik-brown">
                        {t.project}
                      </span>
                    </div>
                    {/* Perkecil text deskripsi review di mobile */}
                    <div className="text-gray-700 text-xs md:text-base mb-1 md:mb-2">
                      {t.content}
                    </div>
                    <button className="flex items-center text-[10px] md:text-xs text-batik-orange hover:underline w-fit">
                      <span>Membantu (0)</span>
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-2 mb-8">
                <button
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                  className="px-2 py-1 rounded bg-gray-200 text-batik-brown text-xs disabled:opacity-50"
                >
                  &lt;
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`px-2 py-1 rounded text-xs ${
                      page === i + 1
                        ? "bg-batik-gold text-white"
                        : "bg-gray-100 text-batik-brown"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={page === totalPages}
                  className="px-2 py-1 rounded bg-batik-gold text-white text-xs disabled:opacity-50"
                >
                  &gt;
                </button>
              </div>
            </div>
            {/* DESKTOP: Semua testimoni tanpa pagination */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 mb-6">
              {filteredTestimonials.map((t, idx) => (
                <div
                  key={t.id}
                  className="bg-white rounded-xl shadow p-2 md:p-6 flex flex-col gap-1 md:gap-3 border border-gray-100 text-xs md:text-base mx-auto w-full max-w-sm"
                  style={{ minHeight: 80 }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-batik-brown text-xs">
                        {t.name
                          ?.split(" ")
                          .map((w) => w[0])
                          .join("")}
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-batik-brown text-xs md:text-base">
                        {t.name}
                      </div>
                      {/* MOBILE: role & tanggal 2 baris, DESKTOP: tetap 1 baris */}
                      <div className="text-xs text-gray-400 hidden md:block">
                        {t.role} • {t.date}
                      </div>
                      <div className="text-xs text-gray-400 block md:hidden">
                        <div>{t.role}</div>
                        <div>{t.date}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-batik-gold fill-current"
                      />
                    ))}
                    {[...Array(5 - t.rating)].map((_, i) => (
                      <Star
                        key={i + 10}
                        className="w-4 h-4 text-gray-200 fill-current"
                      />
                    ))}
                    <span className="ml-2 text-xs font-semibold text-batik-brown">
                      {t.project}
                    </span>
                  </div>
                  {/* Perkecil text deskripsi review di mobile */}
                  <div className="text-gray-700 text-xs md:text-base mb-1 md:mb-2">
                    {t.content}
                  </div>
                  <button className="flex items-center text-[10px] md:text-xs text-batik-orange hover:underline w-fit">
                    <span>Membantu (0)</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-full xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          {/*MOBILE*/}
          <div className="block md:hidden text-center mb-16">
            <h2 className="font-serif text-xl md:text-4xl font-bold text-batik-brown mb-4">
              Video Testimoni
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Dengarkan langsung pengalaman klien kami melalui video testimoni
            </p>
          </div>
          {/*DESKTOP*/}
          <div className="hidden md:block text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-brown mb-4">
              Video Testimoni
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dengarkan langsung pengalaman klien kami melalui video testimoni
            </p>
          </div>

          {/* Video Grid */}
          <div className="max-w-screen-xl mx-auto">
            <div className="flex overflow-x-auto gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
              {videoTestimonials.map((vid) => (
                <div
                  key={vid.id}
                  className="relative group cursor-pointer flex-shrink-0 w-[60vw] max-w-xs md:w-auto"
                >
                  <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-batik-gold/10 to-batik-brown/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:brightness-95">
                    {!showVideo[vid.id] ? (
                      <>
                        <img
                          src={vid.thumbnail}
                          alt={vid.name}
                          className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-100 transition-all duration-300"
                        />
                        <button
                          className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-lg"
                          onClick={() =>
                            setShowVideo((prev) => ({
                              ...prev,
                              [vid.id]: true,
                            }))
                          }
                        >
                          <div className="w-0 h-0 border-l-[18px] border-l-batik-brown border-y-[12px] border-y-transparent ml-1"></div>
                        </button>
                      </>
                    ) : (
                      <video
                        controls
                        autoPlay
                        poster={vid.thumbnail}
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src={vid.video} type="video/mp4" />
                      </video>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow">
                    <h3 className="font-semibold mb-1">{vid.title}</h3>
                    <p className="text-sm opacity-90">{vid.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <span
                className="block md:hidden  text-batik-gold hover:text-batik-orange font-semibold text-xs cursor-pointer underline underline-offset-4 transition-colors duration-200 items-center gap-1"
                onClick={() => (window.location.href = "/galeri")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    window.location.href = "/galeri";
                }}
              >
                Lihat Video Lainnya{" "}
                <span className="text-xs font-bold">&gt;</span>
              </span>
              <span
                className="hidden md:block text-batik-gold hover:text-batik-orange font-semibold text-base cursor-pointer underline underline-offset-4 transition-colors duration-200 items-center gap-1"
                onClick={() => (window.location.href = "/galeri")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    window.location.href = "/galeri";
                }}
              >
                Lihat Video Lainnya{" "}
                <span className="text-lg font-bold">&gt;</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Testimonials;
