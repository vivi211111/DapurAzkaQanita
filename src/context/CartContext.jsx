"use client"

import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export const CartProvider = ({ children }) => {
  // Ambil cart dari localStorage saat inisialisasi
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems")
    return stored ? JSON.parse(stored) : []
  })

  // Setiap kali cartItems berubah, simpan ke localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    // Extract numeric price from string like "Rp 450.000" or handle number
    const priceNumber =
      typeof product.price === "number" ? product.price : Number.parseInt(product.price.replace(/[^\d]/g, ""))

    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.variantId === product.variantId ||
          (item.id === product.id &&
            item.selectedColor === product.selectedColor &&
            item.selectedSize === product.selectedSize),
      )

      if (existingItem) {
        return prevItems.map((item) =>
          item.variantId === product.variantId ||
          (item.id === product.id &&
            item.selectedColor === product.selectedColor &&
            item.selectedSize === product.selectedSize)
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item,
        )
      } else {
        return [
          ...prevItems,
          {
            id: product.id,
            variantId:
              product.variantId ||
              `${product.id}-${product.selectedColor || "default"}-${product.selectedSize || "default"}`,
            title: product.title,
            price: typeof product.price === "number" ? `Rp ${product.price.toLocaleString("id-ID")}` : product.price,
            priceNumber,
            image: product.image,
            quantity: product.quantity || 1,
            material: product.material,
            selectedColor: product.selectedColor || product.colors?.[0],
            selectedSize: product.selectedSize || product.sizes?.[0],
            origin: product.origin,
          },
        ]
      }
    })
  }

  const removeFromCart = (variantId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.variantId !== variantId))
  }

  const updateQuantity = (variantId, quantity) => {
    if (quantity < 1) return

    setCartItems((prevItems) => prevItems.map((item) => (item.variantId === variantId ? { ...item, quantity } : item)))
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.priceNumber * item.quantity, 0)
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
