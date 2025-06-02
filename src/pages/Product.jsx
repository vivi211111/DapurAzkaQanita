"use client";

import { useState } from "react";
import {
  ExternalLink,
  Calendar,
  User,
  X,
  ShoppingCart,
  Heart,
  Share2,
  Star,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const Product = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showNotif, setShowNotif] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "Semua" },
    { id: "middle", name: "Middle" },
    { id: "premium", name: "Premium" },
  ];

  const portfolioItems = [
    // Middle
    {
      id: 1,
      title: "Maksubah",
      category: "middle",
      description:
        "Maksubah lapis legit khas Palembang, rasa klasik legit dan lembut.",
      image: "/portfolio/Maksubah.jpg",
      tags: ["Kue", "Middle"],
      price: 325000,
      material: "Telur, gula, mentega",
      size: "Medium",
      colors: ["Coklat"],
      stock: 10,
      rating: 4.8,
      reviews: 24,
      detailDescription:
        "Maksubah adalah kue lapis legit khas Palembang yang dibuat dari telur, gula, dan mentega berkualitas.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 2,
      title: "Maksubah Prunes",
      category: "middle",
      description:
        "Maksubah dengan topping prunes premium, rasa manis legit dan segar.",
      image: "/portfolio/Maksubah.jpg", // Ganti ke foto yang ada
      tags: ["Kue", "Middle"],
      price: 375000,
      material: "Telur, gula, mentega, prunes",
      size: "Medium",
      colors: ["Coklat"],
      stock: 10,
      rating: 4.9,
      reviews: 18,
      detailDescription:
        "Maksubah dengan topping prunes premium, rasa manis legit dan segar.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 3,
      title: "Maksubah Keju",
      category: "middle",
      description: "Maksubah dengan taburan keju melimpah, gurih dan lembut.",
      image: "/portfolio/Maksubah.jpg", // Ganti ke foto yang ada
      tags: ["Kue", "Middle"],
      price: 355000,
      material: "Telur, gula, mentega, keju",
      size: "Medium",
      colors: ["Kuning"],
      stock: 10,
      rating: 4.7,
      reviews: 15,
      detailDescription:
        "Maksubah dengan taburan keju melimpah, gurih dan lembut.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 4,
      title: "Maksubah Coklat",
      category: "middle",
      description: "Maksubah dengan rasa coklat premium, manis dan legit.",
      image: "/portfolio/Maksubah.jpg", // Ganti ke foto yang ada
      tags: ["Kue", "Middle"],
      price: 355000,
      material: "Telur, gula, mentega, coklat",
      size: "Medium",
      colors: ["Coklat"],
      stock: 10,
      rating: 4.7,
      reviews: 12,
      detailDescription:
        "Maksubah dengan rasa coklat premium, manis dan legit.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 5,
      title: "Lapan Jam",
      category: "middle",
      description:
        "Kue legit khas Palembang, dimasak selama 8 jam, tekstur lembut.",
      image: "/portfolio/LapanJam.jpg",
      tags: ["Kue", "Middle"],
      price: 325000,
      material: "Telur, gula, mentega",
      size: "Medium",
      colors: ["Coklat"],
      stock: 10,
      rating: 4.6,
      reviews: 10,
      detailDescription:
        "Kue legit khas Palembang, dimasak selama 8 jam, tekstur lembut.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 6,
      title: "Lapan Jam Duren",
      category: "middle",
      description:
        "Lapan Jam dengan tambahan durian, aroma harum dan rasa khas.",
      image: "/portfolio/LapanJam.jpg",
      tags: ["Kue", "Middle"],
      price: 365000,
      material: "Telur, gula, mentega, durian",
      size: "Medium",
      colors: ["Kuning"],
      stock: 10,
      rating: 4.8,
      reviews: 11,
      detailDescription:
        "Lapan Jam dengan tambahan durian, aroma harum dan rasa khas.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 7,
      title: "Lapan Jam Keju",
      category: "middle",
      description: "Lapan Jam dengan taburan keju, gurih dan lembut.",
      image: "/portfolio/LapanJam.jpg",
      tags: ["Kue", "Middle"],
      price: 355000,
      material: "Telur, gula, mentega, keju",
      size: "Medium",
      colors: ["Kuning"],
      stock: 10,
      rating: 4.7,
      reviews: 9,
      detailDescription: "Lapan Jam dengan taburan keju, gurih dan lembut.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 8,
      title: "Lapis Kojo",
      category: "middle",
      description:
        "Kue lapis hijau khas Palembang, rasa manis legit dan aroma pandan.",
      image: "/portfolio/BATIK6.jpg",
      tags: ["Kue", "Middle"],
      price: 325000,
      material: "Telur, gula, santan, daun pandan",
      size: "Medium",
      colors: ["Hijau"],
      stock: 10,
      rating: 4.7,
      reviews: 10,
      detailDescription:
        "Kue lapis hijau khas Palembang, rasa manis legit dan aroma pandan.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 9,
      title: "Lapis Kojo Duren",
      category: "middle",
      description:
        "Lapis Kojo dengan tambahan durian, rasa legit dan aroma khas.",
      image: "/portfolio/BATIK6.jpg",
      tags: ["Kue", "Middle"],
      price: 365000,
      material: "Telur, gula, santan, daun pandan, durian",
      size: "Medium",
      colors: ["Hijau"],
      stock: 10,
      rating: 4.8,
      reviews: 8,
      detailDescription:
        "Lapis Kojo dengan tambahan durian, rasa legit dan aroma khas.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 10,
      title: "Engkak",
      category: "middle",
      description:
        "Kue lapis legit tradisional, tekstur lembut dan rasa manis.",
      image: "/portfolio/BATIK10.jpg",
      tags: ["Kue", "Middle"],
      price: 325000,
      material: "Telur, gula, mentega",
      size: "Medium",
      colors: ["Kuning"],
      stock: 10,
      rating: 4.6,
      reviews: 7,
      detailDescription:
        "Kue lapis legit tradisional, tekstur lembut dan rasa manis.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 11,
      title: "Engkak Duren",
      category: "middle",
      description: "Engkak dengan tambahan durian, rasa legit dan aroma khas.",
      image: "/portfolio/BATIK11.jpg",
      tags: ["Kue", "Middle"],
      price: 365000,
      material: "Telur, gula, mentega, durian",
      size: "Medium",
      colors: ["Kuning"],
      stock: 10,
      rating: 4.7,
      reviews: 6,
      detailDescription:
        "Engkak dengan tambahan durian, rasa legit dan aroma khas.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 12,
      title: "Maksubah Kojo (Makjo)",
      category: "middle",
      description: "Maksubah dengan campuran Kojo, rasa unik dan legit.",
      image: "/portfolio/BATIK12.jpg",
      tags: ["Kue", "Middle"],
      price: 325000,
      material: "Telur, gula, mentega, daun pandan",
      size: "Medium",
      colors: ["Hijau"],
      stock: 10,
      rating: 4.7,
      reviews: 7,
      detailDescription: "Maksubah dengan campuran Kojo, rasa unik dan legit.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 13,
      title: "Maksubah Kojo (Makjo) Prunes",
      category: "middle",
      description: "Maksubah Kojo dengan topping prunes, rasa unik dan segar.",
      image: "/portfolio/BATIK13.jpg",
      tags: ["Kue", "Middle"],
      price: 375000,
      material: "Telur, gula, mentega, daun pandan, prunes",
      size: "Medium",
      colors: ["Hijau"],
      stock: 10,
      rating: 4.8,
      reviews: 6,
      detailDescription:
        "Maksubah Kojo dengan topping prunes, rasa unik dan segar.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 14,
      title: "Maksubah Engkak Kojo (MakEngKo)",
      category: "middle",
      description:
        "Maksubah, Engkak, dan Kojo dalam satu kue, kombinasi rasa unik.",
      image: "/portfolio/BATIK14.jpg",
      tags: ["Kue", "Middle"],
      price: 325000,
      material: "Telur, gula, mentega, daun pandan",
      size: "Medium",
      colors: ["Hijau", "Kuning"],
      stock: 10,
      rating: 4.8,
      reviews: 8,
      detailDescription:
        "Maksubah, Engkak, dan Kojo dalam satu kue, kombinasi rasa unik.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    // Premium
    {
      id: 15,
      title: "Maksubah",
      category: "premium",
      description:
        "Maksubah premium, tekstur lebih lembut dan rasa lebih kaya.",
      image: "/portfolio/kue-maksubah-original.jpg",
      tags: ["Kue", "Premium"],
      price: 435000,
      material: "Telur, gula, mentega premium",
      size: "Premium",
      colors: ["Coklat"],
      stock: 10,
      rating: 4.9,
      reviews: 30,
      detailDescription:
        "Maksubah premium, tekstur lebih lembut dan rasa lebih kaya.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 16,
      title: "Maksubah Prunes",
      category: "premium",
      description:
        "Maksubah premium dengan topping prunes, rasa manis legit dan segar.",
      image: "/portfolio/kue-maksubah-prunes.jpg",
      tags: ["Kue", "Premium"],
      price: 485000,
      material: "Telur, gula, mentega premium, prunes",
      size: "Premium",
      colors: ["Coklat"],
      stock: 10,
      rating: 5.0,
      reviews: 22,
      detailDescription:
        "Maksubah premium dengan topping prunes, rasa manis legit dan segar.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 17,
      title: "Maksubah Keju",
      category: "premium",
      description:
        "Maksubah premium dengan taburan keju melimpah, gurih dan lembut.",
      image: "/portfolio/kue-maksubah-keju.jpg",
      tags: ["Kue", "Premium"],
      price: 465000,
      material: "Telur, gula, mentega premium, keju",
      size: "Premium",
      colors: ["Kuning"],
      stock: 10,
      rating: 4.9,
      reviews: 18,
      detailDescription:
        "Maksubah premium dengan taburan keju melimpah, gurih dan lembut.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 18,
      title: "Maksubah Coklat",
      category: "premium",
      description:
        "Maksubah premium dengan rasa coklat premium, manis dan legit.",
      image: "/portfolio/kue-maksubah-coklat.jpg",
      tags: ["Kue", "Premium"],
      price: 475000,
      material: "Telur, gula, mentega premium, coklat",
      size: "Premium",
      colors: ["Coklat"],
      stock: 10,
      rating: 4.8,
      reviews: 15,
      detailDescription:
        "Maksubah premium dengan rasa coklat premium, manis dan legit.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 19,
      title: "Lapan Jam",
      category: "premium",
      description:
        "Lapan Jam premium, tekstur lebih lembut dan rasa lebih kaya.",
      image: "/portfolio/LapanJam.jpg",
      tags: ["Kue", "Premium"],
      price: 435000,
      material: "Telur, gula, mentega premium",
      size: "Premium",
      colors: ["Coklat"],
      stock: 10,
      rating: 4.8,
      reviews: 12,
      detailDescription:
        "Lapan Jam premium, tekstur lebih lembut dan rasa lebih kaya.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 20,
      title: "Lapan Jam Duren",
      category: "premium",
      description:
        "Lapan Jam premium dengan tambahan durian, aroma harum dan rasa khas.",
      image: "/portfolio/LapanJam.jpg",
      tags: ["Kue", "Premium"],
      price: 475000,
      material: "Telur, gula, mentega premium, durian",
      size: "Premium",
      colors: ["Kuning"],
      stock: 10,
      rating: 4.9,
      reviews: 10,
      detailDescription:
        "Lapan Jam premium dengan tambahan durian, aroma harum dan rasa khas.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 21,
      title: "Lapan Jam Keju",
      category: "premium",
      description: "Lapan Jam premium dengan taburan keju, gurih dan lembut.",
      image: "/portfolio/LapanJam.jpg",
      tags: ["Kue", "Premium"],
      price: 465000,
      material: "Telur, gula, mentega premium, keju",
      size: "Premium",
      colors: ["Kuning"],
      stock: 10,
      rating: 4.8,
      reviews: 9,
      detailDescription:
        "Lapan Jam premium dengan taburan keju, gurih dan lembut.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 22,
      title: "Lapis Kojo",
      category: "premium",
      description:
        "Lapis Kojo premium, rasa manis legit dan aroma pandan lebih kuat.",
      image: "/portfolio/BATIK6.jpg",
      tags: ["Kue", "Premium"],
      price: 435000,
      material: "Telur, gula, santan, daun pandan premium",
      size: "Premium",
      colors: ["Hijau"],
      stock: 10,
      rating: 4.8,
      reviews: 10,
      detailDescription:
        "Lapis Kojo premium, rasa manis legit dan aroma pandan lebih kuat.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 23,
      title: "Lapis Kojo Duren",
      category: "premium",
      description:
        "Lapis Kojo premium dengan tambahan durian, rasa legit dan aroma khas.",
      image: "/portfolio/BATIK9.jpg",
      tags: ["Kue", "Premium"],
      price: 475000,
      material: "Telur, gula, santan, daun pandan premium, durian",
      size: "Premium",
      colors: ["Hijau"],
      stock: 10,
      rating: 4.9,
      reviews: 8,
      detailDescription:
        "Lapis Kojo premium dengan tambahan durian, rasa legit dan aroma khas.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 24,
      title: "Engkak",
      category: "premium",
      description: "Engkak premium, tekstur lebih lembut dan rasa lebih kaya.",
      image: "/portfolio/BATIK10.jpg",
      tags: ["Kue", "Premium"],
      price: 435000,
      material: "Telur, gula, mentega premium",
      size: "Premium",
      colors: ["Kuning"],
      stock: 10,
      rating: 4.8,
      reviews: 7,
      detailDescription:
        "Engkak premium, tekstur lebih lembut dan rasa lebih kaya.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 25,
      title: "Engkak Duren",
      category: "premium",
      description:
        "Engkak premium dengan tambahan durian, rasa legit dan aroma khas.",
      image: "/portfolio/BATIK11.jpg",
      tags: ["Kue", "Premium"],
      price: 475000,
      material: "Telur, gula, mentega premium, durian",
      size: "Premium",
      colors: ["Kuning"],
      stock: 10,
      rating: 4.9,
      reviews: 6,
      detailDescription:
        "Engkak premium dengan tambahan durian, rasa legit dan aroma khas.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 26,
      title: "Maksubah Kojo (Makjo)",
      category: "premium",
      description: "Maksubah Kojo premium, rasa unik dan legit.",
      image: "/portfolio/BATIK12.jpg",
      tags: ["Kue", "Premium"],
      price: 435000,
      material: "Telur, gula, mentega premium, daun pandan premium",
      size: "Premium",
      colors: ["Hijau"],
      stock: 10,
      rating: 4.9,
      reviews: 7,
      detailDescription: "Maksubah Kojo premium, rasa unik dan legit.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 27,
      title: "Maksubah Kojo (Makjo) Prunes",
      category: "premium",
      description:
        "Maksubah Kojo premium dengan topping prunes, rasa unik dan segar.",
      image: "/portfolio/BATIK13.jpg",
      tags: ["Kue", "Premium"],
      price: 485000,
      material: "Telur, gula, mentega premium, daun pandan premium, prunes",
      size: "Premium",
      colors: ["Hijau"],
      stock: 10,
      rating: 5.0,
      reviews: 6,
      detailDescription:
        "Maksubah Kojo premium dengan topping prunes, rasa unik dan segar.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 28,
      title: "Maksubah Engkak Kojo (MakEngKo)",
      category: "premium",
      description:
        "Maksubah, Engkak, dan Kojo premium dalam satu kue, kombinasi rasa unik.",
      image: "/portfolio/BATIK14.jpg",
      tags: ["Kue", "Premium"],
      price: 435000,
      material: "Telur, gula, mentega premium, daun pandan premium",
      size: "Premium",
      colors: ["Hijau", "Kuning"],
      stock: 10,
      rating: 5.0,
      reviews: 8,
      detailDescription:
        "Maksubah, Engkak, dan Kojo premium dalam satu kue, kombinasi rasa unik.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    // Lapis Legit Premium
    {
      id: 29,
      title: "Lapis Legit Original",
      category: "premium",
      description: "Lapis Legit premium, tekstur lembut dan aroma butter.",
      image: "/portfolio/LapisLegitNanas.jpg", // Ganti ke foto yang ada
      tags: ["Kue", "Premium"],
      price: 435000,
      material: "Telur, gula, mentega premium",
      size: "Premium",
      colors: ["Kuning"],
      stock: 10,
      rating: 4.9,
      reviews: 10,
      detailDescription:
        "Lapis Legit premium, tekstur lembut dan aroma butter.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 30,
      title: "Lapis Legit Nanas",
      category: "premium",
      description:
        "Lapis Legit premium dengan tambahan nanas, rasa segar dan legit.",
      image: "/portfolio/LapisLegitNanas.jpg", // Ganti ke foto yang ada
      tags: ["Kue", "Premium"],
      price: 475000,
      material: "Telur, gula, mentega premium, nanas",
      size: "Premium",
      colors: ["Kuning"],
      stock: 10,
      rating: 4.9,
      reviews: 8,
      detailDescription:
        "Lapis Legit premium dengan tambahan nanas, rasa segar dan legit.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 31,
      title: "Lapis Legit Keju",
      category: "premium",
      description: "Lapis Legit premium dengan taburan keju, gurih dan lembut.",
      image: "/portfolio/LapisLegitKeju.jpg", // Ganti ke foto yang ada
      tags: ["Kue", "Premium"],
      price: 475000,
      material: "Telur, gula, mentega premium, keju",
      size: "Premium",
      colors: ["Kuning"],
      stock: 10,
      rating: 4.9,
      reviews: 8,
      detailDescription:
        "Lapis Legit premium dengan taburan keju, gurih dan lembut.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 32,
      title: "Lapis Legit Coklat",
      category: "premium",
      description: "Lapis Legit premium dengan rasa coklat, manis dan legit.",
      image: "/portfolio/LapisLegitKeju.jpg", // Ganti ke foto yang ada
      tags: ["Kue", "Premium"],
      price: 475000,
      material: "Telur, gula, mentega premium, coklat",
      size: "Premium",
      colors: ["Coklat"],
      stock: 10,
      rating: 4.9,
      reviews: 8,
      detailDescription:
        "Lapis Legit premium dengan rasa coklat, manis dan legit.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
    {
      id: 33,
      title: "Lapis Legit Prunes",
      category: "premium",
      description:
        "Lapis Legit premium dengan topping prunes, rasa segar dan legit.",
      image: "/portfolio/LapisLegitPrunes.jpg", // Ganti ke foto yang ada
      tags: ["Kue", "Premium"],
      price: 485000,
      material: "Telur, gula, mentega premium, prunes",
      size: "Premium",
      colors: ["Coklat"],
      stock: 10,
      rating: 5.0,
      reviews: 8,
      detailDescription:
        "Lapis Legit premium dengan topping prunes, rasa segar dan legit.",
      care: "Simpan di tempat sejuk, tahan 5-7 hari.",
      origin: "Palembang",
    },
  ];

  const filteredItems = (
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)
  ).filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Global function to handle product detail view
  const handleViewDetail = (productId) => {
    const product = portfolioItems.find((item) => item.id === productId);
    if (product) {
      setSelectedProduct(product);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          size={16}
          className="fill-yellow-400/50 text-yellow-400"
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={16} className="text-gray-300" />
      );
    }

    return stars;
  };

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      selectedColor: selectedColor || product.colors?.[0],
      selectedSize: selectedSize || product.size || "All Size",
      quantity,
    });
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 2000);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown mb-6">
            Menu Kue Kami
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Jelajahi menu kami dengan pilihan medium dan premium yang
            menggunakan bahan berkualitas
          </p>
          <div className="flex justify-center mb-8">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari kue..."
              className="w-full max-w-md px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-batik-gold focus:border-batik-gold text-base bg-white"
            />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
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

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {item.description}
                  </p>

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
                      <div className="flex space-x-1">
                        {renderStars(item.rating)}
                      </div>
                      <span className="text-sm text-gray-500">
                        ({item.reviews})
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Notifikasi berhasil tambah ke keranjang */}
            {showNotif && (
              <div className="absolute top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold animate-fade-in flex items-center gap-4">
                Produk berhasil ditambahkan ke keranjang!
                <a
                  href="/cart"
                  className="ml-4 underline font-bold hover:text-yellow-200"
                >
                  Lihat Keranjang
                </a>
              </div>
            )}
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between rounded-t-2xl">
              <h2 className="font-serif text-2xl font-bold text-batik-brown dark:text-batik-gold">
                {selectedProduct.title}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="space-y-4">
                  <img
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.title}
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                  />

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button
                      className="flex-1 bg-batik-gold text-white py-3 px-4 rounded-lg font-semibold hover:bg-batik-brown transition-colors flex items-center justify-center space-x-2"
                      onClick={() => handleAddToCart(selectedProduct)}
                    >
                      <ShoppingCart size={20} />
                      <span>Tambah ke Keranjang</span>
                    </button>
                    <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Heart size={20} className="text-gray-600" />
                    </button>
                    <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Share2 size={20} className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  {/* Price and Rating */}
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-batik-brown dark:text-batik-gold">
                      {selectedProduct.price}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        {renderStars(selectedProduct.rating)}
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        ({selectedProduct.reviews} ulasan)
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="font-semibold text-batik-brown dark:text-batik-gold mb-2">
                      Deskripsi
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProduct.detailDescription}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-batik-brown dark:text-batik-gold mb-2">
                        Spesifikasi
                      </h4>
                      <div className="space-y-2 text-sm dark:text-gray-300">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            Material:
                          </span>
                          <span className="font-medium">
                            {selectedProduct.material}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            Ukuran:
                          </span>
                          <span className="font-medium">
                            {selectedProduct.size}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            Stok:
                          </span>
                          <span className="font-medium">
                            {selectedProduct.stock} pcs
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Care Instructions */}
                  <div>
                    <h4 className="font-semibold text-batik-brown dark:text-batik-gold mb-2">
                      Petunjuk Perawatan
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {selectedProduct.care}
                    </p>
                  </div>

                  {/* Jumlah & Tags sejajar */}
                  <div className="flex flex-row gap-8 items-end mt-6">
                    {/* Pilihan Jumlah */}
                    <div>
                      <h4 className="font-semibold text-batik-brown dark:text-batik-gold mb-2">
                        Jumlah
                      </h4>
                      <div className="flex items-center">
                        <button
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"
                          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold w-10 text-center">
                          {quantity}
                        </span>
                        <button
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"
                          onClick={() => setQuantity((q) => q + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Tags */}
                    <div>
                      <h4 className="font-semibold text-batik-brown dark:text-batik-gold mb-2 p-2">
                        Tags
                      </h4>
                      <div className="flex flex-center flex-wrap gap-2">
                        {selectedProduct.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-8 p-6 bg-batik-cream/30 dark:bg-gray-800 rounded-xl">
                <h3 className="font-serif text-lg font-semibold text-batik-brown dark:text-batik-gold mb-4">
                  Butuh Informasi Lebih Lanjut?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-batik-gold" />
                    <div>
                      <div className="font-medium text-batik-brown dark:text-batik-gold">
                        Telepon
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        +62 811 7874 458
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-batik-gold" />
                    <div>
                      <div className="font-medium text-batik-brown dark:text-batik-gold">
                        Email
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        dapurazkaqanita@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={20} className="text-batik-gold" />
                    <div>
                      <div className="font-medium text-batik-brown dark:text-batik-gold">
                        Lokasi
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Palembang, Indonesia
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-batik-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-batik-brown mb-4">
              Pencapaian Kami
            </h2>
            <p className="text-gray-600">
              Angka-angka yang menunjukkan dedikasi dan kepercayaan klien
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-batik-brown mb-2">
                150+
              </div>
              <div className="text-gray-600">Acara Telah Kami Layani</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-batik-brown mb-2">
                100%
              </div>
              <div className="text-gray-600">Tanpa Pengawet Buatan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-batik-brown mb-2">
                98%
              </div>
              <div className="text-gray-600">Tingkat Kepuasan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-batik-brown mb-2">
                100+
              </div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
