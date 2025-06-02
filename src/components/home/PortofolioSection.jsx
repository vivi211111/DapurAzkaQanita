import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PortfolioSection = () => {
  // State untuk video play per item (misal 4 item)
  const [showVideo, setShowVideo] = useState([false, false, false, false]);
  const navigate = useNavigate();

  // Contoh: item ke-0 dan ke-2 adalah video, lainnya gambar
  const PortfolioSection = [
    {
      title: "Koleksi Batik Royal",
      category: "Fashion",
      description:
        "Koleksi eksklusif untuk acara formal dengan motif klasik Yogyakarta",
      type: "video",
      thumbnail: "/portfolio/BATIK.jpg",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "Dekorasi Hotel Bintang 5",
      category: "Interior",
      description: "Proyek dekorasi hotel mewah dengan tema budaya Nusantara",
      type: "image",
      thumbnail: "/portfolio/BATIK2.jpg",
    },
    {
      title: "Seragam Perusahaan",
      category: "Corporate",
      description: "Desain seragam korporat dengan identitas batik modern",
      type: "video",
      thumbnail: "/portfolio/BATIK3.jpg",
      video: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      title: "Souvenir Pernikahan",
      category: "Wedding",
      description: "Paket souvenir pernikahan dengan kemasan premium",
      type: "image",
      thumbnail: "/portfolio/Souvenir1.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Wijaya",
      role: "CEO PT. Nusantara Jaya",
      content:
        "Kualitas produk luar biasa! Tim sangat profesional dan hasil akhir melebihi ekspektasi.",
      rating: 5,
    },
    {
      name: "Budi Santoso",
      role: "Event Organizer",
      content:
        "Pelayanan excellent dan produk berkualitas tinggi. Sangat merekomendasikan!",
      rating: 5,
    },
    {
      name: "Maya Sari",
      role: "Fashion Designer",
      content:
        "Kolaborasi yang luar biasa! Mereka memahami visi kreatif dengan sempurna.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portfolio Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-brown dark:text-batik-gold mb-4">
              Galeri Kami
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Beberapa proyek terbaik yang telah kami kerjakan bersama
              klien-klien terpercaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-batik-cream to-batik-gold/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Video or Image */}
                {item.type === "video" ? (
                  <div className="aspect-square w-full flex items-center justify-center relative">
                    {!showVideo[index] ? (
                      <>
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover z-0"
                        />
                        <button
                          className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                          onClick={() =>
                            setShowVideo((v) =>
                              v.map((s, i) => (i === index ? true : s))
                            )
                          }
                        >
                          <div className="w-0 h-0 border-l-[18px] border-l-batik-brown border-y-[12px] border-y-transparent ml-1"></div>
                        </button>
                      </>
                    ) : (
                      <video
                        controls
                        autoPlay
                        poster={item.thumbnail}
                        className="absolute inset-0 w-full h-full object-cover z-0"
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                    )}
                  </div>
                ) : (
                  <div className="aspect-square w-full flex items-center justify-center relative">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                  </div>
                )}
                {/* Overlay & Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-xs bg-batik-gold px-2 py-1 rounded-full inline-block mb-2">
                    {item.category}
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="text-white" size={20} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <span
              className="text-batik-gold hover:text-batik-orange font-semibold text-base cursor-pointer underline underline-offset-4 transition-colors duration-200 flex items-center gap-1"
              onClick={() => navigate("/galeri")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") navigate("/galeri");
              }}
            >
              Lihat Semua Galeri{" "}
              <span className="text-lg font-bold">&gt;</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
