import React from "react"
import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"
import { Trash2 } from "lucide-react"
import { motion } from "framer-motion"

const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalPrice,
  } = useCart()
  const navigate = useNavigate()

  const subtotal = cartItems.reduce((total, item) => total + item.priceNumber * item.quantity, 0)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      <div className="min-h-screen flex items-center justify-center bg-black/30 py-10">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-batik-brown">Keranjang Belanja</h2>
            {/* Tombol close bisa ditambahkan jika ini modal */}
          </div>
          <div className="space-y-4 mb-6">
            {cartItems.length === 0 ? (
              <div className="text-center text-gray-500 py-10">Keranjang kosong</div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.variantId}
                  className="flex items-center border rounded-lg px-3 py-3 bg-white shadow-sm"
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                  <div className="flex-1 ml-4">
                    <div className="font-semibold text-batik-brown text-base">{item.title}</div>
                    <div className="text-xs text-gray-500 mb-1">{item.material}</div>
                    <div className="text-xs text-gray-500 mb-1">{item.selectedColor} • {item.selectedSize}</div>
                    <div className="text-sm font-semibold text-batik-brown">Rp {item.priceNumber.toLocaleString("id-ID")}</div>
                  </div>
                  <div className="flex flex-col items-center ml-4">
                    <button
                      onClick={() => removeFromCart(item.variantId)}
                      className="text-red-500 hover:bg-red-50 rounded-full p-1 mb-2 text-xs font-semibold"
                    >
                      Hapus
                    </button>
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center text-lg text-gray-700 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="w-7 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-lg text-gray-700 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* Total & Info */}
          <div className="flex justify-between items-center text-lg font-bold mb-1">
            <span>Total:</span>
            <span className="text-batik-brown">Rp {subtotal.toLocaleString("id-ID", {minimumFractionDigits: 2})}</span>
          </div>
          <div className="text-xs text-gray-500 mb-6">Pengiriman dan pajak dihitung saat checkout.</div>
          {/* Tombol Checkout & Lanjutkan Belanja */}
          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-[#FFD600] text-batik-brown py-3 rounded-lg font-bold hover:bg-yellow-400 mb-2"
          >
            Checkout
          </button>
          <button
            onClick={() => navigate("/product")}
            className="w-full text-batik-brown py-2 rounded-lg font-semibold hover:underline"
          >
            Lanjutkan Belanja
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Cart
