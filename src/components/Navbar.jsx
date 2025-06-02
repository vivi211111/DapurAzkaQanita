"use client"

import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useCart } from "../context/CartContext"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const location = useLocation()
  const { cartItems, updateQuantity, removeFromCart, getTotalItems, getTotalPrice } = useCart()
  const [selectedItems, setSelectedItems] = useState(cartItems.map(item => item.variantId))

  useEffect(() => {
    setSelectedItems(cartItems.map(item => item.variantId))
  }, [cartItems])

  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Product", href: "/product" },
    { name: "Galeri", href: "/galeri" },
    { name: "Testimoni", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontak", href: "/contact" },
  ]

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price)
  }

  const handleSelectItem = (variantId) => {
    setSelectedItems((prev) =>
      prev.includes(variantId)
        ? prev.filter((id) => id !== variantId)
        : [...prev, variantId]
    )
  }

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(cartItems.map(item => item.variantId))
    } else {
      setSelectedItems([])
    }
  }

  const selectedCartItems = cartItems.filter(item => selectedItems.includes(item.variantId))
  const selectedTotal = selectedCartItems.reduce((total, item) => total + item.priceNumber * item.quantity, 0)

  const handleCheckout = () => {
    if (selectedCartItems.length === 0) {
      alert("Pilih minimal satu produk untuk checkout.")
      return
    }
    localStorage.setItem("selectedCartItems", JSON.stringify(selectedCartItems))
    closeCart()
    window.location.href = "/checkout"
  }

  return (
    <motion.nav initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="shadow-lg sticky top-0 z-50 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-batik-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="font-serif text-xl font-bold text-batik-brown">Dapur Azka Qanita</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? "text-batik-gold border-b-2 border-batik-gold"
                    : "text-gray-700 hover:text-batik-brown"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Shopping Cart Icon */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className="relative text-gray-700 hover:text-batik-gold transition-colors duration-200"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-batik-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button and cart icon */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className="relative text-gray-700 hover:text-batik-gold transition-colors duration-200"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-batik-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-batik-brown">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden relative z-10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? "text-batik-gold bg-batik-cream"
                    : "text-gray-700 hover:text-batik-brown hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Shopping Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between rounded-t-2xl">
              <h2 className="font-serif text-xl font-bold text-batik-brown">Keranjang Belanja</h2>
              <button onClick={closeCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-10">
                  <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500 mb-6">Keranjang belanja Anda kosong</p>
                  <button
                    className="bg-batik-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-batik-brown transition-colors"
                    onClick={() => {
                      closeCart();
                      window.location.href = "/product";
                    }}
                  >
                    Belanja Sekarang
                  </button>
                </div>
              ) : (
                <>
                  {/* Pilih Semua */}
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={selectedItems.length === cartItems.length && cartItems.length > 0}
                      onChange={handleSelectAll}
                      className="mr-2"
                      id="selectAllCart"
                    />
                    <label htmlFor="selectAllCart" className="text-sm font-medium cursor-pointer">Pilih Semua</label>
                  </div>
                  {/* Cart Items */}
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div
                        key={item.variantId}
                        className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg"
                      >
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(item.variantId)}
                          onChange={() => handleSelectItem(item.variantId)}
                          className="mr-2"
                        />
                        <div className="flex-shrink-0 w-20 h-20 border border-gray-200 rounded-md overflow-hidden">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-semibold text-batik-brown">{item.title}</h3>
                          <p className="text-sm text-gray-500">{item.material}</p>
                          <p className="text-sm text-gray-500">
                            {item.selectedColor} • {item.selectedSize}
                          </p>
                          <p className="text-sm font-medium text-batik-gold">{item.price}</p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:text-batik-gold"
                            onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:text-batik-gold"
                            onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700 text-sm font-medium"
                          onClick={() => removeFromCart(item.variantId)}
                        >
                          Hapus
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between text-lg font-semibold text-batik-brown">
                      <span>Total:</span>
                      <span>{formatPrice(selectedTotal)}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Pengiriman dan pajak dihitung saat checkout.</p>
                  </div>

                  {/* Checkout Button */}
                  <div className="mb-4">
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-batik-gold text-white py-3 px-4 rounded-lg font-semibold hover:bg-batik-brown transition-colors disabled:opacity-50"
                      disabled={selectedCartItems.length === 0}
                    >
                      Checkout
                    </button>
                  </div>

                  {/* Continue Shopping */}
                  <div className="text-center">
                    <button
                      type="button"
                      className="text-batik-gold font-medium hover:text-batik-brown"
                      onClick={() => {
                        closeCart();
                        // Tidak ada clearCart, hanya tutup modal dan redirect
                        window.location.href = "/product";
                      }}
                    >
                      Lanjutkan Belanja
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar
"use client"

import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useCart } from "../context/CartContext"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const location = useLocation()
  const { cartItems, updateQuantity, removeFromCart, getTotalItems, getTotalPrice } = useCart()
  const [selectedItems, setSelectedItems] = useState(cartItems.map(item => item.variantId))

  useEffect(() => {
    setSelectedItems(cartItems.map(item => item.variantId))
  }, [cartItems])

  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Product", href: "/product" },
    { name: "Galeri", href: "/galeri" },
    { name: "Testimoni", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontak", href: "/contact" },
  ]

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price)
  }

  const handleSelectItem = (variantId) => {
    setSelectedItems((prev) =>
      prev.includes(variantId)
        ? prev.filter((id) => id !== variantId)
        : [...prev, variantId]
    )
  }

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(cartItems.map(item => item.variantId))
    } else {
      setSelectedItems([])
    }
  }

  const selectedCartItems = cartItems.filter(item => selectedItems.includes(item.variantId))
  const selectedTotal = selectedCartItems.reduce((total, item) => total + item.priceNumber * item.quantity, 0)

  const handleCheckout = () => {
    if (selectedCartItems.length === 0) {
      alert("Pilih minimal satu produk untuk checkout.")
      return
    }
    localStorage.setItem("selectedCartItems", JSON.stringify(selectedCartItems))
    closeCart()
    window.location.href = "/checkout"
  }

  return (
    <motion.nav initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="shadow-lg sticky top-0 z-50 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-batik-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="font-serif text-xl font-bold text-batik-brown">Dapur Azka Qanita</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? "text-batik-gold border-b-2 border-batik-gold"
                    : "text-gray-700 hover:text-batik-brown"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Shopping Cart Icon */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className="relative text-gray-700 hover:text-batik-gold transition-colors duration-200"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-batik-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button and cart icon */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className="relative text-gray-700 hover:text-batik-gold transition-colors duration-200"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-batik-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-batik-brown">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden relative z-10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? "text-batik-gold bg-batik-cream"
                    : "text-gray-700 hover:text-batik-brown hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Shopping Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between rounded-t-2xl">
              <h2 className="font-serif text-xl font-bold text-batik-brown">Keranjang Belanja</h2>
              <button onClick={closeCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-10">
                  <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500 mb-6">Keranjang belanja Anda kosong</p>
                  <button
                    className="bg-batik-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-batik-brown transition-colors"
                    onClick={() => {
                      closeCart();
                      window.location.href = "/product";
                    }}
                  >
                    Belanja Sekarang
                  </button>
                </div>
              ) : (
                <>
                  {/* Pilih Semua */}
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={selectedItems.length === cartItems.length && cartItems.length > 0}
                      onChange={handleSelectAll}
                      className="mr-2"
                      id="selectAllCart"
                    />
                    <label htmlFor="selectAllCart" className="text-sm font-medium cursor-pointer">Pilih Semua</label>
                  </div>
                  {/* Cart Items */}
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div
                        key={item.variantId}
                        className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg"
                      >
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(item.variantId)}
                          onChange={() => handleSelectItem(item.variantId)}
                          className="mr-2"
                        />
                        <div className="flex-shrink-0 w-20 h-20 border border-gray-200 rounded-md overflow-hidden">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-semibold text-batik-brown">{item.title}</h3>
                          <p className="text-sm text-gray-500">{item.material}</p>
                          <p className="text-sm text-gray-500">
                            {item.selectedColor} • {item.selectedSize}
                          </p>
                          <p className="text-sm font-medium text-batik-gold">{item.price}</p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:text-batik-gold"
                            onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:text-batik-gold"
                            onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700 text-sm font-medium"
                          onClick={() => removeFromCart(item.variantId)}
                        >
                          Hapus
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between text-lg font-semibold text-batik-brown">
                      <span>Total:</span>
                      <span>{formatPrice(selectedTotal)}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Pengiriman dan pajak dihitung saat checkout.</p>
                  </div>

                  {/* Checkout Button */}
                  <div className="mb-4">
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-batik-gold text-white py-3 px-4 rounded-lg font-semibold hover:bg-batik-brown transition-colors disabled:opacity-50"
                      disabled={selectedCartItems.length === 0}
                    >
                      Checkout
                    </button>
                  </div>

                  {/* Continue Shopping */}
                  <div className="text-center">
                    <button
                      type="button"
                      className="text-batik-gold font-medium hover:text-batik-brown"
                      onClick={() => {
                        closeCart();
                        // Tidak ada clearCart, hanya tutup modal dan redirect
                        window.location.href = "/product";
                      }}
                    >
                      Lanjutkan Belanja
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar
