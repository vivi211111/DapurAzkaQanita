"use client";

import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Phone,
  CreditCard,
  Truck,
  Printer,
  MessageCircle,
  X,
  Loader2,
} from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  // Ambil selectedCartItems dari localStorage jika ada
  const [selectedCartItems, setSelectedCartItems] = useState([]);

  useEffect(() => {
    const selected = localStorage.getItem("selectedCartItems");
    if (selected) {
      setSelectedCartItems(JSON.parse(selected));
    } else {
      setSelectedCartItems(cartItems);
    }
  }, [cartItems]);

  const [formData, setFormData] = useState({
    // Data Pelanggan
    fullName: "",
    email: "",
    phone: "",

    // Alamat Pengiriman
    address: "",
    city: "",
    province: "",
    postalCode: "",

    // Metode Pembayaran
    paymentMethod: "",

    // Metode Pengiriman
    shippingMethod: "",
    shippingCost: 0,

    // Catatan
    notes: "",
  });

  const paymentMethods = [
    {
      id: "transfer",
      name: "Transfer Bank",
      description: "BCA, Mandiri, BNI, BRI",
      icon: "🏦",
    },
    {
      id: "ewallet",
      name: "E-Wallet",
      description: "GoPay, OVO, DANA, ShopeePay",
      icon: "📱",
    },
    {
      id: "cod",
      name: "Bayar di Tempat (COD)",
      description: "Bayar saat barang diterima",
      icon: "💵",
    },
  ];

  const shippingMethods = [
    { id: "regular", name: "Reguler (3-5 hari)", cost: 15000, icon: "📦" },
    { id: "express", name: "Express (1-2 hari)", cost: 25000, icon: "⚡" },
    { id: "same-day", name: "Same Day", cost: 35000, icon: "🚀" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleShippingChange = (method) => {
    const selectedMethod = shippingMethods.find((m) => m.id === method.id);
    setFormData((prev) => ({
      ...prev,
      shippingMethod: method.id,
      shippingCost: selectedMethod.cost,
    }));
  };

  const generateOrderNumber = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `DOM-${timestamp}-${random}`;
  };

  const validateForm = () => {
    const requiredFields = [
      "fullName",
      "phone",
      "address",
      "city",
      "province",
      "paymentMethod",
      "shippingMethod",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert(`Mohon lengkapi field berikut: ${missingFields.join(", ")}`);
      return false;
    }

    // Validate phone number
    if (!/^(\+62|62|0)[0-9]{9,13}$/.test(formData.phone)) {
      alert("Format nomor telepon tidak valid!");
      return false;
    }

    return true;
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate order number
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    setShowOrderSummary(true);
    setIsSubmitting(false);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const subtotal = selectedCartItems.reduce(
    (total, item) => total + (item.priceNumber || 0) * (item.quantity || 1),
    0
  );
  const total = subtotal + (formData.shippingCost || 0);

  const handlePrint = () => {
    const printContent = document.getElementById("order-summary-print");
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #d4af37; margin-bottom: 10px;">Dapur </h1>
          <p style="color: #666;">Ringkasan Pesanan</p>
        </div>
        ${printContent.innerHTML}
      </div>
    `;

    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
  };

  const handleSendToWhatsApp = () => {
    const orderDetails = `
*🛍️ RINGKASAN PESANAN Dapur Azka Qanita *
📋 Nomor Pesanan: *${orderNumber}*
📅 Tanggal: ${new Date().toLocaleDateString("id-ID")}

*📦 PRODUK PESANAN:*
${selectedCartItems
  .map(
    (item) =>
      `• *${item.title}*
  🎨 Warna: ${item.selectedColor}
  📏 Ukuran: ${item.selectedSize}
  🔢 Jumlah: ${item.quantity}x
  💰 Harga: ${item.price}`
  )
  .join("\n\n")}

*💳 TOTAL PEMBAYARAN:*
Subtotal: ${formatPrice(subtotal)}
🚚 Ongkir: ${formatPrice(formData.shippingCost)}
*Total: ${formatPrice(total)}*

*👤 DATA PELANGGAN:*
Nama: ${formData.fullName}
📞 Telepon: ${formData.phone}
${formData.email ? `📧 Email: ${formData.email}` : ""}

*📍 ALAMAT PENGIRIMAN:*
${formData.address}
${formData.city}, ${formData.province} ${formData.postalCode}

*💳 METODE PEMBAYARAN:* ${
      paymentMethods.find((p) => p.id === formData.paymentMethod)?.name
    }
*🚚 METODE PENGIRIMAN:* ${
      shippingMethods.find((s) => s.id === formData.shippingMethod)?.name
    }

${formData.notes ? `*📝 CATATAN:* ${formData.notes}` : ""}

✨ Terima kasih telah berbelanja di Dapur Azka Qanita Batik!
🙏 Kami akan segera memproses pesanan Anda.
    `;

    const phoneNumber = "6289524893101";
    const encodedMessage = encodeURIComponent(orderDetails);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleCloseOrderSummary = () => {
    setShowOrderSummary(false);
    clearCart();
    navigate("/");
  };

  if (selectedCartItems.length === 0 && !showOrderSummary) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Keranjang kosong</h2>
        <button
          className="bg-batik-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-batik-brown transition-colors"
          onClick={() => navigate("/product")}
        >
          Belanja Sekarang
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* MOBILE: compact, block md:hidden */}
      <div className="block md:hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-2 py-3 border-b bg-white sticky top-0 z-40">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded text-batik-brown hover:bg-batik-cream/60"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="font-serif text-base font-bold text-batik-brown">
            Checkout
          </h1>
          <div className="w-8" />
        </div>
        {/* Form & Order Summary */}
        <form
          ref={formRef}
          onSubmit={handleSubmitOrder}
          className="px-2 pt-4 pb-8 space-y-4"
        >
          {/* Data Pelanggan */}
          <div className="bg-white rounded-lg shadow p-3 space-y-2">
            <h2 className="font-bold text-batik-brown text-sm mb-1">
              Data Pemesan
            </h2>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Nama Lengkap"
              className="w-full text-xs px-3 py-2 border rounded mb-1"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="No. Telepon"
              className="w-full text-xs px-3 py-2 border rounded mb-1"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email (opsional)"
              className="w-full text-xs px-3 py-2 border rounded"
            />
          </div>
          {/* Alamat Pengiriman */}
          <div className="bg-white rounded-lg shadow p-3 space-y-2">
            <h2 className="font-bold text-batik-brown text-sm mb-1">
              Alamat Pengiriman
            </h2>
            <input
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Alamat Lengkap"
              className="w-full text-xs px-3 py-2 border rounded mb-1"
            />
            <div className="flex gap-2">
              <input
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Kota"
                className="w-1/2 text-xs px-3 py-2 border rounded mb-1"
              />
              <input
                name="province"
                value={formData.province}
                onChange={handleInputChange}
                placeholder="Provinsi"
                className="w-1/2 text-xs px-3 py-2 border rounded mb-1"
              />
            </div>
            <input
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              placeholder="Kode Pos"
              className="w-full text-xs px-3 py-2 border rounded"
            />
          </div>
          {/* Metode Pengiriman */}
          <div className="bg-white rounded-lg shadow p-3 space-y-2">
            <h2 className="font-bold text-batik-brown text-sm mb-1">
              Pengiriman
            </h2>
            <div className="flex flex-col gap-2">
              {shippingMethods.map((method) => (
                <button
                  type="button"
                  key={method.id}
                  onClick={() => handleShippingChange(method)}
                  className={`flex items-center justify-between px-3 py-2 rounded border text-xs ${
                    formData.shippingMethod === method.id
                      ? "border-batik-gold bg-batik-gold/10"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {method.icon} {method.name}
                  </span>
                  <span className="font-bold">{formatPrice(method.cost)}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Metode Pembayaran */}
          <div className="bg-white rounded-lg shadow p-3 space-y-2">
            <h2 className="font-bold text-batik-brown text-sm mb-1">
              Pembayaran
            </h2>
            <div className="flex flex-col gap-2">
              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  className={`flex items-center gap-2 px-3 py-2 rounded border text-xs cursor-pointer ${
                    formData.paymentMethod === method.id
                      ? "border-batik-gold bg-batik-gold/10"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={formData.paymentMethod === method.id}
                    onChange={handleInputChange}
                    className="accent-batik-gold"
                  />
                  <span>
                    {method.icon} {method.name}
                  </span>
                  <span className="text-gray-500">{method.description}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Catatan */}
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Catatan untuk penjual (opsional)"
            className="w-full text-xs px-3 py-2 border rounded"
            rows={2}
          />
          {/* Ringkasan Order */}
          <div className="bg-white rounded-lg shadow p-3">
            <h2 className="font-bold text-batik-brown text-sm mb-2">
              Ringkasan Pesanan
            </h2>
            <ul className="divide-y divide-gray-100 mb-2">
              {selectedCartItems.map((item, idx) => (
                <li key={idx} className="py-2 flex items-center gap-2">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-10 h-10 rounded border object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-xs text-batik-brown truncate">
                      {item.title}
                    </div>
                    <div className="text-[10px] text-gray-500">
                      {item.selectedSize} • {item.selectedColor}
                    </div>
                    <div className="text-[10px] text-gray-500">
                      {item.quantity}x
                    </div>
                  </div>
                  <div className="font-bold text-xs text-batik-gold">
                    {formatPrice(item.priceNumber)}
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-xs mb-1">
              <span>Ongkir</span>
              <span>{formatPrice(formData.shippingCost)}</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-batik-brown mb-2">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button
              type="submit"
              className="w-full bg-batik-gold text-white py-2 rounded font-bold text-sm hover:bg-batik-brown transition-colors disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin inline-block mr-2" size={16} />
              ) : null}
              Bayar Sekarang
            </button>
          </div>
        </form>
      </div>
      {/* DESKTOP: hidden md:block, layout tetap */}
      <div className="hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Header */}
              <div className="flex items-center justify-between px-2 py-3 border-b bg-white sticky top-0 z-40">
                <button
                  onClick={() => navigate(-1)}
                  className="p-2 rounded text-batik-brown hover:bg-batik-cream/60"
                >
                  <ArrowLeft size={20} />
                </button>
                <h1 className="font-serif text-2xl font-bold text-batik-brown">
                  Checkout
                </h1>
                <div className="w-8" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form Checkout */}
                <div className="lg:col-span-2">
                  <form
                    ref={formRef}
                    onSubmit={handleSubmitOrder}
                    className="space-y-6"
                  >
                    {/* Data Pelanggan */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <h2 className="text-xl font-semibold text-batik-brown mb-6 flex items-center">
                        <div className="w-8 h-8 bg-batik-gold rounded-full flex items-center justify-center mr-3">
                          <Phone size={16} className="text-white" />
                        </div>
                        Data Pelanggan
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nama Lengkap <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-batik-gold transition-colors"
                            placeholder="Masukkan nama lengkap"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-batik-gold transition-colors"
                            placeholder="email@example.com"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nomor Telepon{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-batik-gold transition-colors"
                            placeholder="08xxxxxxxxxx"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Alamat Pengiriman */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <h2 className="text-xl font-semibold text-batik-brown mb-6 flex items-center">
                        <div className="w-8 h-8 bg-batik-gold rounded-full flex items-center justify-center mr-3">
                          <MapPin size={16} className="text-white" />
                        </div>
                        Alamat Pengiriman
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Alamat Lengkap{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-batik-gold transition-colors"
                            placeholder="Jalan, nomor rumah, RT/RW, kelurahan, kecamatan"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Kota <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-batik-gold transition-colors"
                              placeholder="Nama kota"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Provinsi <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="province"
                              value={formData.province}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-batik-gold transition-colors"
                              placeholder="Nama provinsi"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Kode Pos
                            </label>
                            <input
                              type="text"
                              name="postalCode"
                              value={formData.postalCode}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-batik-gold transition-colors"
                              placeholder="12345"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Metode Pengiriman */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <h2 className="text-xl font-semibold text-batik-brown mb-6 flex items-center">
                        <div className="w-8 h-8 bg-batik-gold rounded-full flex items-center justify-center mr-3">
                          <Truck size={16} className="text-white" />
                        </div>
                        Metode Pengiriman
                      </h2>
                      <div className="space-y-3">
                        {shippingMethods.map((method) => (
                          <label
                            key={method.id}
                            className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${
                              formData.shippingMethod === method.id
                                ? "border-batik-gold bg-batik-gold/5"
                                : "border-gray-200"
                            }`}
                          >
                            <input
                              type="radio"
                              name="shippingMethod"
                              value={method.id}
                              checked={formData.shippingMethod === method.id}
                              onChange={() => handleShippingChange(method)}
                              className="sr-only"
                            />
                            <div className="text-2xl mr-4">{method.icon}</div>
                            <div className="flex-1">
                              <div className="font-medium text-gray-900">
                                {method.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {formatPrice(method.cost)}
                              </div>
                            </div>
                            {formData.shippingMethod === method.id && (
                              <div className="w-5 h-5 bg-batik-gold rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            )}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Metode Pembayaran */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <h2 className="text-xl font-semibold text-batik-brown mb-6 flex items-center">
                        <div className="w-8 h-8 bg-batik-gold rounded-full flex items-center justify-center mr-3">
                          <CreditCard size={16} className="text-white" />
                        </div>
                        Metode Pembayaran
                      </h2>
                      <div className="space-y-3">
                        {paymentMethods.map((method) => (
                          <label
                            key={method.id}
                            className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${
                              formData.paymentMethod === method.id
                                ? "border-batik-gold bg-batik-gold/5"
                                : "border-gray-200"
                            }`}
                          >
                            <input
                              type="radio"
                              name="paymentMethod"
                              value={method.id}
                              checked={formData.paymentMethod === method.id}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className="text-2xl mr-4">{method.icon}</div>
                            <div className="flex-1">
                              <div className="font-medium text-gray-900">
                                {method.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {method.description}
                              </div>
                            </div>
                            {formData.paymentMethod === method.id && (
                              <div className="w-5 h-5 bg-batik-gold rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            )}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Catatan */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <h2 className="text-xl font-semibold text-batik-brown mb-4">
                        Catatan Pesanan
                      </h2>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Catatan tambahan untuk pesanan Anda..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-batik-gold transition-colors"
                      />
                    </div>
                  </form>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-4">
                    <h2 className="text-xl font-semibold text-batik-brown mb-6">
                      Ringkasan Pesanan
                    </h2>

                    {/* Cart Items */}
                    <div className="space-y-4 mb-6">
                      {selectedCartItems.map((item) => (
                        <div
                          key={item.variantId}
                          className="flex space-x-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-sm">
                              {item.title}
                            </h3>
                            <p className="text-xs text-gray-600">
                              {item.selectedColor} • {item.selectedSize}
                            </p>
                            <p className="text-xs text-gray-600">
                              Qty: {item.quantity}
                            </p>
                            <p className="text-sm font-medium text-batik-brown">
                              {item.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Price Breakdown */}
                    <div className="border-t pt-4 space-y-3">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span>{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Ongkos Kirim</span>
                        <span>{formatPrice(formData.shippingCost)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-xl border-t pt-3">
                        <span>Total</span>
                        <span className="text-batik-brown">
                          {formatPrice(total)}
                        </span>
                      </div>
                    </div>

                    {/* Submit Button (only here, triggers form submit) */}
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() =>
                        formRef.current && formRef.current.requestSubmit()
                      }
                      className="w-full bg-batik-gold text-white py-3 px-4 rounded-md font-semibold hover:bg-batik-brown transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-1 mt-4"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          <span>Memproses Pesanan...</span>
                        </>
                      ) : (
                        <span>Buat Pesanan</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary Modal */}
            {showOrderSummary && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                  {/* Modal Header */}
                  <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
                    <h2 className="font-serif text-2xl font-bold text-batik-brown">
                      🎉 Pesanan Berhasil!
                    </h2>
                    <button
                      onClick={handleCloseOrderSummary}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X size={24} className="text-gray-500" />
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6" id="order-summary-print">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">✅</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        Pesanan Anda Telah Diterima
                      </h3>
                      <p className="text-gray-600 text-lg">
                        Nomor Pesanan:{" "}
                        <span className="font-bold text-batik-brown text-xl">
                          {orderNumber}
                        </span>
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Tanggal:{" "}
                        {new Date().toLocaleDateString("id-ID", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>

                    {/* Order Details */}
                    <div className="space-y-6">
                      {/* Customer Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-batik-brown mb-3 flex items-center">
                            <span className="mr-2">👤</span> Data Pelanggan
                          </h4>
                          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                            <p>
                              <strong>Nama:</strong> {formData.fullName}
                            </p>
                            <p>
                              <strong>Telepon:</strong> {formData.phone}
                            </p>
                            {formData.email && (
                              <p>
                                <strong>Email:</strong> {formData.email}
                              </p>
                            )}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-batik-brown mb-3 flex items-center">
                            <span className="mr-2">📍</span> Alamat Pengiriman
                          </h4>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p>{formData.address}</p>
                            <p>
                              {formData.city}, {formData.province}{" "}
                              {formData.postalCode}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Order Items */}
                      <div>
                        <h4 className="font-semibold text-batik-brown mb-3 flex items-center">
                          <span className="mr-2">📦</span> Produk Pesanan
                        </h4>
                        <div className="space-y-3">
                          {selectedCartItems.map((item) => (
                            <div
                              key={item.variantId}
                              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
                            >
                              <div className="flex items-center space-x-3">
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.title}
                                  className="w-12 h-12 object-cover rounded-lg"
                                />
                                <div>
                                  <p className="font-medium">{item.title}</p>
                                  <p className="text-sm text-gray-600">
                                    {item.selectedColor} • {item.selectedSize} •
                                    Qty: {item.quantity}
                                  </p>
                                </div>
                              </div>
                              <p className="font-medium text-batik-brown">
                                {item.price}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Payment & Shipping */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-batik-brown mb-3 flex items-center">
                            <span className="mr-2">💳</span> Metode Pembayaran
                          </h4>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p>
                              {
                                paymentMethods.find(
                                  (p) => p.id === formData.paymentMethod
                                )?.name
                              }
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-batik-brown mb-3 flex items-center">
                            <span className="mr-2">🚚</span> Metode Pengiriman
                          </h4>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p>
                              {
                                shippingMethods.find(
                                  (s) => s.id === formData.shippingMethod
                                )?.name
                              }
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="border-t pt-6">
                        <div className="bg-batik-cream/30 p-6 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">Subtotal:</span>
                            <span>{formatPrice(subtotal)}</span>
                          </div>
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600">Ongkos Kirim:</span>
                            <span>{formatPrice(formData.shippingCost)}</span>
                          </div>
                          <div className="flex justify-between items-center text-2xl font-bold text-batik-brown border-t pt-4">
                            <span>Total:</span>
                            <span>{formatPrice(total)}</span>
                          </div>
                        </div>
                      </div>

                      {formData.notes && (
                        <div>
                          <h4 className="font-semibold text-batik-brown mb-3 flex items-center">
                            <span className="mr-2">📝</span> Catatan
                          </h4>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p>{formData.notes}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-8">
                      <button
                        onClick={handlePrint}
                        className="flex-1 bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
                      >
                        <Printer size={20} />
                        <span>Cetak Ringkasan</span>
                      </button>
                      <button
                        onClick={handleSendToWhatsApp}
                        className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                      >
                        <MessageCircle size={20} />
                        <span>Kirim ke WhatsApp</span>
                      </button>
                    </div>

                    <div className="mt-6 text-center text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800 mb-2">
                        🙏 Terima kasih telah berbelanja di Dapur Azka Qanita
                        Batik!
                      </p>
                      <p>
                        Kami akan segera memproses pesanan Anda dan menghubungi
                        Anda untuk konfirmasi pembayaran.
                      </p>
                      <p className="mt-2">
                        📞 Hubungi kami di <strong>+62 895-2489-3101</strong>{" "}
                        jika ada pertanyaan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
