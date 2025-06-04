"use client"

import { useState } from "react"
import { ExternalLink, Calendar, User, X, ShoppingCart, Star, Plus, Minus } from "lucide-react"
import { useCart } from "../context/CartContext"
import { motion } from "framer-motion"

const Product = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const { addToCart } = useCart()

  const categories = [
    { id: "all", name: "Semua" },
    { id: "Medium", name: "Medium" },
    { id: "premium", name: "Premium" },
  ]

  const portfolioItems = [
    // Middle
    {
      id: 1,
      title: "Maksubah",
      category: "Medium",
      price: 325000,
      image: "/portfolio/BATIK.jpg",
      description: "Kue lapis legit khas Palembang dengan tekstur lembut dan rasa manis legit.",
      tags: ["Kue", "Middle"],
      client: "Dapur Azka Qanita",
      year: "2025",
      rating: 4.8,
      reviews: 24,
      material: "Telur, Gula, Mentega",
      sizes: ["Besar"],
      colors: ["Coklat"],
      stock: 10,
      detailDescription:
        "Maksubah adalah kue lapis legit khas Palembang yang dibuat dari telur, gula, dan mentega berkualitas.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 2,
      title: "Maksubah Prunes",
      category: "Medium",
      price: 375000,
      image: "/portfolio/BATIK1.jpg",
      description: "Maksubah dengan tambahan prunes untuk rasa lebih kaya.",
      tags: ["Kue", "Middle"],
      client: "Dapur Azka Qanita",
      year: "2025",
      rating: 4.7,
      reviews: 18,
      material: "Telur, Gula, Mentega, Prunes",
      sizes: ["Besar"],
      colors: ["Coklat"],
      stock: 8,
      detailDescription: "Maksubah dengan topping prunes, rasa manis legit dan asam segar.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 3,
      title: "Maksubah Keju",
      category: "Medium",
      price: 355000,
      image: "/portfolio/BATIK10.jpg",
      description: "Maksubah dengan topping keju, perpaduan gurih dan manis.",
      tags: ["Kue", "Middle"],
      client: "Dapur Azka Qanita",
      year: "2025",
      rating: 4.6,
      reviews: 30,
      material: "Telur, Gula, Mentega, Keju",
      sizes: ["Besar"],
      colors: ["Coklat"],
      stock: 5,
      detailDescription: "Maksubah dengan tambahan keju di atasnya, memberikan rasa gurih yang sempurna.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 4,
      title: "Maksubah Coklat",
      category: "Medium",
      price: 355000,
      image: "/portfolio/BATIK11.jpg",
      description: "Maksubah dengan rasa coklat yang lezat.",
      tags: ["Kue", "Middle"],
      client: "Dapur Azka Qanita",
      year: "2025",
      rating: 4.5,
      reviews: 22,
      material: "Telur, Gula, Mentega, Coklat",
      sizes: ["Besar"],
      colors: ["Coklat"],
      stock: 7,
      detailDescription: "Nikmati lezatnya coklat dalam setiap lapisan maksubah ini.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 5,
      title: "Lapan Jam",
      category: "Medium",
      price: 325000,
      image: "/portfolio/BATIK12.jpg",
      description: "Kue tradisional Palembang yang dimasak selama 8 jam.",
      tags: ["Kue", "Middle"],
      client: "Dapur Azka Qanita",
      year: "2025",
      rating: 4.9,
      reviews: 15,
      material: "Beras Ketan, Santan, Gula Merah",
      sizes: ["Porsi"],
      colors: ["Coklat"],
      stock: 20,
      detailDescription: "Kue yang dimasak perlahan dengan santan dan gula merah, memberikan rasa yang kaya.",
      care: "Simpan di tempat sejuk, tahan 3-5 hari.",
      origin: "Palembang",
    },
    {
      id: 6,
      title: "Lapan Jam Duren",
      category: "Medium",
      price: 365000,
      image: "/portfolio/BATIK13.jpg",
      description: "Lapan Jam dengan tambahan durian.",
      tags: ["Kue", "Middle"],
      client: "Dapur Azka Qanita",
      year: "2025",
      rating: 4.7,
      reviews: 20,
      material: "Beras Ketan, Santan, Gula Merah, Durian",
      sizes: ["Porsi"],
      colors: ["Coklat"],
      stock: 15,
      detailDescription: "Perpaduan sempurna antara kue ketan dan durian yang harum.",
      care: "Simpan di tempat sejuk, tahan 3-5 hari.",
      origin: "Palembang",
    },
    {
      id: 7,
      title: "Lapan Jam Keju",
      category: "Medium",
      price: 355000,
      image: "/portfolio/BATIK14.jpg",
      description: "Lapan Jam dengan topping keju.",
      tags: ["Kue", "Middle"],
      client: "Dapur Azka Qanita",
      year: "2025",
      rating: 4.6,
      reviews: 12,
      material: "Beras Ketan, Santan, Gula Merah, Keju",
      sizes: ["Porsi"],
      colors: ["Coklat"],
      stock: 10,
      detailDescription: "Kombinasi rasa manis dan gurih dalam setiap gigitan.",
      care: "Simpan di tempat sejuk, tahan 3-5 hari.",
      origin: "Palembang",
    },
    {
      id: 8,
      title: "Lapis Kojo",
      category: "Medium",
      price: 325000,
      image: "/portfolio/Batik2.jpg",
      description: "Kue lapis pandan khas Palembang.",
      tags: ["Kue", "Middle"],
      client: "Dapur Azka Qanita",
      year: "2025",
      rating: 4.8,
      reviews: 25,
      material: "Tepung Beras, Santan, Gula",
      sizes: ["Besar"],
      colors: ["Hijau"],
      stock: 18,
      detailDescription: "Lapis kojo dengan cita rasa pandan yang khas dan warna hijau alami.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },

    // Premium
    {
      id: 15,
      title: "Maksubah",
      category: "Premium",
      price: 435000,
      image: "/portfolio/BATIK.jpg",
      description: "Kue lapis legit khas Palembang dengan tekstur lembut dan rasa manis legit (Premium).",
      tags: ["Kue", "Premium"],
      client: "Dapur Azka Qanita",
      year: "2025",
      rating: 4.8,
      reviews: 24,
      material: "Telur, Gula, Mentega",
      sizes: ["Besar"],
      colors: ["Coklat"],
      stock: 10,
      detailDescription:
        "Maksubah adalah kue lapis legit khas Palembang yang dibuat dari telur, gula, dan mentega berkualitas.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 16,
      title: "Maksubah Prunes",
      category: "Premium",
      price: 485000,
      image: "/portfolio/BATIK1.jpg",
      description: "Maksubah premium dengan tambahan prunes.",
      tags: ["Kue", "Premium"],
      client: "Dapur Azka Qanita",
      year: "2025",
      rating: 4.7,
      reviews: 18,
      material: "Telur, Gula, Mentega, Prunes",
      sizes: ["Besar"],
      colors: ["Coklat"],
      stock: 8,
      detailDescription: "Maksubah premium dengan topping prunes, rasa manis legit dan asam segar.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 17,
      title: "Maksubah Keju",
      category: "Premium",
      price: 465000,
      image: "/portfolio/BATIK10.jpg",
      description: "Maksubah premium dengan topping keju.",
      tags: ["Kue", "Premium"],
      client: "Dapur Azka Qanita",
      year: "2025",
      rating: 4.6,
      reviews: 30,
      material: "Telur, Gula, Mentega, Keju",
      sizes: ["Besar"],
      colors: ["Coklat"],
      stock: 5,
      detailDescription: "Maksubah premium dengan tambahan keju di atasnya, memberikan rasa gurih yang sempurna.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 18,
      title: "Maksubah Coklat",
      category: "Premium",
      price: 475000,
      image: "/portfolio/BATIK11.jpg",
      description: "Maksubah premium dengan rasa coklat.",
      tags: ["Kue", "Premium"],
      client: "Dapur Azka Qanita",
      year: "2025",
      rating: 4.5,
      reviews: 22,
      material: "Telur, Gula, Mentega, Coklat",
      sizes: ["Besar"],
      colors: ["Coklat"],
      stock: 7,
      detailDescription: "Nikmati lezatnya coklat dalam setiap lapisan maksubah premium ini.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 19,
      title: "Lapan Jam",
      category: "Premium",
      price: 435000,
      image: "/portfolio/BATIK12.jpg",
      description: "Kue tradisional Palembang premium yang dimasak selama 8 jam.",
      tags: ["Kue", "Premium"],
      client: "Dapur Azka Qanita",
      year: "2025",
      rating: 4.9,
      reviews: 15,
      material: "Beras Ketan, Santan, Gula Merah",
      sizes: ["Porsi"],
      colors: ["Coklat"],
      stock: 20,
      detailDescription: "Kue yang dimasak perlahan dengan santan dan gula merah, memberikan rasa yang kaya.",
      care: "Simpan di tempat sejuk, tahan 3-5 hari.",
      origin: "Palembang",
    },
    {
      id: 20,
      title: "Lapan Jam Duren",
      category: "Premium",
      price: 475000,
      image: "/portfolio/BATIK13.jpg",
      description: "Lapan Jam premium dengan tambahan durian.",
      tags: ["Kue", "Premium"],
      client: "Dapur Azka Qanita",
      year: "2025",
      rating: 4.7,
      reviews: 20,
      material: "Beras Ketan, Santan, Gula Merah, Durian",
      sizes: ["Porsi"],
      colors: ["Coklat"],
      stock: 15,
      detailDescription: "Perpaduan sempurna antara kue ketan dan durian yang harum.",
      care: "Simpan di tempat sejuk, tahan 3-5 hari.",
      origin: "Palembang",
    },
    {
      id: 21,
      title: "Lapan Jam Keju",
      category: "Premium",
      price: 465000,
      image: "/portfolio/BATIK14.jpg",
      description: "Lapan Jam premium dengan topping keju.",
      tags: ["Kue", "Premium"],
      client: "Dapur Azka Qanita",
      year: "2025",
      rating: 4.6,
      reviews: 12,
      material: "Beras Ketan, Santan, Gula Merah, Keju",
      sizes: ["Porsi"],
      colors: ["Coklat"],
      stock: 10,
      detailDescription: "Kombinasi rasa manis dan gurih dalam setiap gigitan.",
      care: "Simpan di tempat sejuk, tahan 3-5 hari.",
      origin: "Palembang",
    },
    {
      id: 22,
      title: "Lapis Kojo",
      category: "Premium",
      price: 435000,
      image: "/portfolio/Batik2.jpg",
      description: "Kue lapis pandan khas Palembang premium.",
      tags: ["Kue", "Premium"],
      client: "Dapur Azka Qanita",
      year: "2025",
      rating: 4.8,
      reviews: 25,
      material: "Tepung Beras, Santan, Gula",
      sizes: ["Besar"],
      colors: ["Hijau"],
      stock: 18,
      detailDescription: "Lapis kojo dengan cita rasa pandan yang khas dan warna hijau alami.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
  ].map((item, idx) => ({
    // Untuk item yang belum diupdate, tambahkan default agar tidak error
    tags: ["Kue", item.category || "Kue"],
    client: "Dapur Azka Qanita",
    year: "2025",
    rating: item.rating || 4.7,
    reviews: item.reviews || 10,
    material: item.material || "Telur, Gula, Mentega",
    sizes: item.sizes || ["Besar"],
    colors: item.colors || ["Coklat"],
    stock: item.stock || 10,
    detailDescription: item.detailDescription || item.description,
    care: item.care || "Simpan di tempat sejuk, tahan 5-7 hari.",
    origin: item.origin || "Palembang",
    ...item,
    id: idx + 1,
  }))

  const filteredItems =
    (activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category.toLowerCase() === activeFilter.toLowerCase())
    ).filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

  // Global function to handle product detail view
  const handleViewDetail = (productId) => {
    const product = portfolioItems.find((item) => item.id === productId)
    if (product) {
      setSelectedProduct(product)
      setQuantity(1)
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
    setQuantity(1)
  }

  const handleAddToCart = (product) => {
    const productWithQuantity = {
      ...product,
      quantity,
      variantId: `${product.id}`,
    }
    addToCart(productWithQuantity)
    alert(`${product.title} (${quantity} pcs) berhasil ditambahkan ke keranjang!`)
    closeModal()
  }

  const increaseQuantity = () => {
    if (quantity < selectedProduct?.stock) {
      setQuantity(quantity + 1)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  // State for accordion open section
  const [openAccordion, setOpenAccordion] = useState('detail')

  // Function to render star rating
  const renderStars = (rating, color = '#FFD700') => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} className="fill-current" style={{ color }} />)
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" size={16} className="fill-current" style={{ color }} />)
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="text-gray-300" />)
    }

    return stars
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      <div className="pt-16 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown dark:text-batik-gold mb-6">
              Menu Kue Kami
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              Jelajahi menu kami dengan pilihan medium dan premium yang menggunakan bahan berkualitan
            </p>
            {/* Search Bar ala FAQ */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </span>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Cari kue..."
                  className="pl-11 pr-4 py-3 w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-batik-gold focus:border-batik-gold transition-colors text-base bg-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-full xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-2 sm:px-4 lg:px-6">

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-batik-gold text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-batik-cream dark:hover:bg-gray-700"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="max-w-screen-xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/BATIK.jpg"}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <button
                          onClick={() => handleViewDetail(item.id)}
                          className="w-full bg-white/20 backdrop-blur-sm text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span>Lihat Detail</span>
                        </button>
                      </div>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-batik-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.price}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-batik-cream dark:bg-batik-gold/20 text-batik-brown dark:text-batik-gold px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-batik-brown dark:text-batik-gold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{item.description}</p>

                    <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User size={14} />
                        <span>{item.client}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} />
                        <span>{item.year}</span>
                      </div>
                    </div>

                    {/* Rating */}
                    {item.rating && (
                      <div className="flex items-center space-x-2 mt-3">
                        <div className="flex space-x-1">{renderStars(item.rating)}</div>
                        <span className="text-sm text-gray-500">({item.reviews})</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* Product Detail Modal with New Compact Design */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
              {/* Modal Header with Close Button */}
              <div className="sticky top-0 bg-white p-4 flex justify-end rounded-t-2xl">
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-yellow-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-yellow-700" />
                </button>
              </div>

              {/* Product Image */}
              <div className="px-6">
                <img
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.title}
                  className="w-full h-64 object-cover rounded-xl shadow-lg border"
                />
              </div>

              {/* Product Information */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h2 className="font-serif text-2xl font-bold text-batik-brown mb-1">
                  {selectedProduct.title} {selectedProduct.category}
                </h2>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-1">
                  <div className="flex space-x-1">
                    {renderStars(selectedProduct.rating, '#D4AF37')}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">
                    {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-batik-orange mb-1">
                  Rp {selectedProduct.price.toLocaleString("id-ID")}
                </div>

                {/* Short Description */}
                <p className="text-gray-700 text-sm mb-2">{selectedProduct.description}</p>

                {/* Quantity Selector */}
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah:</label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={decreaseQuantity}
                      className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-lg font-semibold w-10 text-center">{quantity}</span>
                    <button
                      onClick={increaseQuantity}
                      className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(selectedProduct)}
                  className="w-full bg-batik-gold hover:bg-batik-brown text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 text-base mb-2 mt-4"
                >
                  <ShoppingCart size={20} />
                  <span>Tambah ke Keranjang</span>
                </button>

                {/* Expandable Sections */}
                <div className="space-y-3 border-t pt-4">
                  {/* Detail Produk */}
                  <details className="group" open={openAccordion === 'detail'}>
                    <summary
                      className="flex items-center justify-between cursor-pointer py-2 text-sm font-semibold text-batik-brown hover:text-batik-gold"
                      onClick={e => {
                        e.preventDefault();
                        setOpenAccordion(openAccordion === 'detail' ? null : 'detail');
                      }}
                    >
                      <span>Detail Produk</span>
                      <svg className={`w-4 h-4 transition-transform ${openAccordion === 'detail' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    {openAccordion === 'detail' && (
                      <div className="pt-2 pb-3 text-sm text-gray-700 leading-relaxed">
                        {selectedProduct.detailDescription}
                        <div className="mt-3 space-y-1">
                          <div>
                            <strong>Asal:</strong> {selectedProduct.origin}
                          </div>
                          <div>
                            <strong>Stok:</strong> {selectedProduct.stock} pcs
                          </div>
                          <div>
                            <strong>Perawatan:</strong> {selectedProduct.care}
                          </div>
                        </div>
                      </div>
                    )}
                  </details>

                  {/* Bahan Utama */}
                  <details className="group" open={openAccordion === 'bahan'}>
                    <summary
                      className="flex items-center justify-between cursor-pointer py-2 text-sm font-semibold text-batik-brown hover:text-batik-gold"
                      onClick={e => {
                        e.preventDefault();
                        setOpenAccordion(openAccordion === 'bahan' ? null : 'bahan');
                      }}
                    >
                      <span>Bahan Utama</span>
                      <svg className={`w-4 h-4 transition-transform ${openAccordion === 'bahan' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    {openAccordion === 'bahan' && (
                      <div className="pt-2 pb-3 text-sm text-gray-700">{selectedProduct.material}</div>
                    )}
                  </details>

                  {/* Catatan Pemesanan */}
                  <details className="group" open={openAccordion === 'catatan'}>
                    <summary
                      className="flex items-center justify-between cursor-pointer py-2 text-sm font-semibold text-batik-brown hover:text-batik-gold"
                      onClick={e => {
                        e.preventDefault();
                        setOpenAccordion(openAccordion === 'catatan' ? null : 'catatan');
                      }}
                    >
                      <span>Catatan Pemesanan</span>
                      <svg className={`w-4 h-4 transition-transform ${openAccordion === 'catatan' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    {openAccordion === 'catatan' && (
                      <div className="pt-2 pb-3 text-sm text-gray-700">
                        <ul className="space-y-1 list-disc list-inside">
                          <li>Pemesanan minimal H-1 sebelum pengambilan</li>
                          <li>Untuk pesanan dalam jumlah besar (&gt;10 pcs), harap konfirmasi ketersediaan stok</li>
                          <li>Produk tahan 5-7 hari dalam suhu ruang</li>
                          <li>Disarankan simpan di tempat sejuk untuk menjaga kualitas</li>
                        </ul>
                      </div>
                    )}
                  </details>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <section className="py-20 bg-batik-cream/30 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-batik-brown dark:text-batik-gold mb-4">
                Pencapaian Kami
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Angka-angka yang menunjukkan dedikasi dan kepercayaan klien
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-batik-brown dark:text-batik-gold mb-2">150+</div>
                <div className="text-gray-600 dark:text-gray-400">Proyek Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-batik-brown mb-2">50+</div>
                <div className="text-gray-600">Klien Korporat</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-batik-brown mb-2">98%</div>
                <div className="text-gray-600">Tingkat Kepuasan</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-batik-brown mb-2">15+</div>
                <div className="text-gray-600">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default Product
