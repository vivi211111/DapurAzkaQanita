"use client";

import { useState, useEffect } from "react";
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
      image: "/portfolio/MaksubahMiddle.png",
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
      image: "/portfolio/MaksubahPrunes.png", // Ganti ke foto yang ada
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
      image: "/portfolio/MaksubahKeju.png", // Ganti ke foto yang ada
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
      title: "Maksubah Kojo Prunes",
      category: "middle",
      description: "Makjo dengan tambahan prunes, menciptakan rasa manis legit dan seimbang.",
      image: "/portfolio/MaksubahKojoPrunes.png", // Ganti ke foto yang ada
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
      title: "Maksubah Coklat",
      category: "middle",
      description: "Maksubah dengan coklat, cocok untuk pecinta rasa manis dan aroma coklat yang kaya.",
      image: "/portfolio/MaksubahCoklat.png", // Ganti ke foto yang ada
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
      id: 6,
      title: "Lapan Jam",
      category: "middle",
      description:
        "Kue legit khas Palembang, dimasak selama 8 jam, tekstur lembut.",
      image: "/portfolio/LapanJam.png",
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
      id: 7,
      title: "Lpis Pandan Wangi",
      category: "middle",
      description:
        "Lapan Jam dengan tambahan durian, aroma harum dan rasa khas.",
      image: "/portfolio/LapisPandan.png",
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
      title: "Engkak Ketan",
      category: "middle",
      description:
        "Kue tradisional berbahan telur dan tepung ketan, bertekstur kenyal dan manis legit.",
      image: "/portfolio/EngkakKetan.png",
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
      image: "/portfolio/MaksubahPremium.jpg",
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
      title: "Lapis Legit Prunes",
      category: "premium",
      description:
        "Lapis legit yang dihiasi dengan prune lembut, memberikan rasa khas dan tampilan elegan.",
      image: "/portfolio/LapisLegitPrunes.jpg",
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
      title: "Lapis Legit Keju",
      category: "premium",
      description:
        "Lapis premium dengan taburan keju melimpah, gurih dan lembut.",
      image: "/portfolio/LapisLegitKeju.jpg",
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
      image: "/portfolio/MaksubahCoklat.jpeg",
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
      image: "/portfolio/LapanJam.jpeg",
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
      title: "Engkak Ketan Premium",
      category: "premium",
      description:
        "Engkak Ketan Premium, kue tradisional khas Palembang, manis legit, berlapis cantik, dan lembut di setiap gigitan.",
      image: "/portfolio/EngkakKetanPrem.jpeg",
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
      title: "Brownies Red Velvet",
      category: "premium",
      description: "Brownies Red Velvet lembut dan moist dengan cita rasa khas red velvet, ditaburi kacang almond panggang yang renyah di setiap gigitan.",
      image: "/portfolio/BronisVelvet.jpeg",
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

    // Fungsi untuk trigger buka keranjang di Navbar
  const openCartFromNotif = () => {
    window.dispatchEvent(new CustomEvent("open-cart"));
  };

  // Helper untuk format harga dengan prefix Rp
  const formatRupiah = (value) => {
    if (typeof value !== "number") return value;
    return `Rp ${value.toLocaleString("id-ID")}`;
  };

  // Batasi 7 produk untuk kategori middle dan 7 untuk premium
  const filteredItems = (
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)
  ).filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Jika kategori all, batasi 7 middle + 7 premium
  let limitedItems = filteredItems;
  if (activeFilter === "all") {
    const middle = filteredItems
      .filter((item) => item.category === "middle")
      .slice(0, 7);
    const premium = filteredItems
      .filter((item) => item.category === "premium")
      .slice(0, 7);
    limitedItems = [...middle, ...premium];
  } else if (activeFilter === "middle") {
    limitedItems = filteredItems.slice(0, 7);
  } else if (activeFilter === "premium") {
    limitedItems = filteredItems.slice(0, 7);
  }

    // Tutup modal produk jika event open-cart dipanggil (misal dari notifikasi)
  useEffect(() => {
    const handleOpenCart = () => {
      setIsModalOpen(false);
      setSelectedProduct(null);
    };
    window.addEventListener("open-cart", handleOpenCart);
    return () => window.removeEventListener("open-cart", handleOpenCart);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20">
        {/* MOBILE HERO: hanya tampil di <md */}
        <div className="block md:hidden max-w-7xl mx-auto px-2 text-center">
          <h1 className="font-serif text-2xl font-bold text-batik-brown mb-3">
            Menu Kue Kami
          </h1>
          <p className="text-sm text-gray-600 max-w-xs mx-auto mb-5">
            Jelajahi menu kami dengan pilihan medium dan premium yang 
            menggunakan bahan berkualitas
          </p>
          <div className="flex justify-center mb-5">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari kue..."
              className="w-full max-w-[220px] px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-batik-gold focus:border-batik-gold text-sm bg-white"
            />
          </div>
        </div>
        {/* DESKTOP HERO: hanya tampil di md+ */}
        <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-full xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-3 sm:px-4 lg:px-6">
          {/* Filter Buttons */}
          {/* MOBILE FILTER: hanya tampil di <md */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 md:hidden">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-3 py-2 rounded-full font-medium text-xs transition-all duration-300 min-w-[80px] ${
                  activeFilter === category.id
                    ? "bg-batik-gold text-white shadow"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-batik-cream dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          {/* DESKTOP FILTER: hanya tampil di md+ */}
          <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
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
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
              {limitedItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden text-left"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/BATIK.jpg"}
                      alt={item.title}
                      className="w-full h-44 sm:h-52 md:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
                    />
                    <div className="absolute top-3 right-3 bg-batik-gold text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow">
                      {formatRupiah(item.price)}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <button
                        onClick={() => handleViewDetail(item.id)}
                        className="w-full bg-white/20 backdrop-blur-sm text-white py-2 px-4 rounded-b-xl flex items-center justify-center space-x-2 hover:bg-white/30 transition-colors text-sm"
                      >
                        <ExternalLink size={14} />
                        <span>Lihat Detail</span>
                      </button>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 md:p-6">
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-[10px] sm:text-xs bg-batik-cream dark:bg-batik-gold/20 text-batik-brown dark:text-batik-gold px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-serif text-base sm:text-lg md:text-xl font-semibold text-batik-brown dark:text-batik-gold mb-1 sm:mb-2 truncate">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2 sm:mb-4 text-xs sm:text-sm line-clamp-2">
                      {item.description}
                    </p>
                    {/* Rating */}
                    {item.rating && (
                      <div className="flex items-center space-x-1 sm:space-x-2 mt-1 sm:mt-3">
                        <div className="flex space-x-0.5 sm:space-x-1">
                          {renderStars(item.rating)}
                        </div>
                        <span className="text-[10px] sm:text-sm text-gray-500">
                          ({item.reviews})
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-2 md:p-4">
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-[95vw] sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-[98vh] overflow-y-auto relative shadow-xl"
          >
            {/* Notifikasi berhasil tambah ke keranjang */}
            {showNotif && (
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-green-500 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg z-50 font-semibold animate-fade-in flex items-center gap-2 sm:gap-4 text-xs sm:text-base">
                Produk berhasil ditambahkan ke keranjang!
                <button
                type="button"
                   onClick={openCartFromNotif}
                  className="ml-2 sm:ml-4 underline font-bold hover:text-yellow-200"
                >
                  Lihat Keranjang
                </button>
              </div>
            )}
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-2 sm:p-4 flex items-center justify-between rounded-t-2xl">
              <h2 className="font-serif text-base sm:text-lg md:text-2xl font-bold text-batik-brown dark:text-batik-gold">
                {selectedProduct.title}
              </h2>
              <button
                onClick={closeModal}
                className="p-1 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X size={18} sm:size={20} className="text-gray-500" />
              </button>
            </div>
            {/* Modal Content */}
            <div className="p-5 sm:p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-8 items-start">
                {/* Product Image */}
                <div className="space-y-1 sm:space-y-2 md:space-y-4 flex flex-col items-center">
                  <img
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.title}
                    className="w-[250]                                                                                               px] h-[200px] sm:w-40 sm:h-40 md:w-72 md:h-96 object-cover rounded-xl shadow-lg"
                  />
                  {/* Action Buttons */}
                  <div className="flex space-x-1 sm:space-x-2 md:space-x-3 w-full">
                    <button
                      className="flex-1 bg-batik-gold text-white py-2 sm:py-2 md:py-3 px-1 sm:px-2 md:px-4 rounded-lg font-semibold hover:bg-batik-brown transition-colors flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-base"
                      onClick={() => handleAddToCart(selectedProduct)}
                    >
                      <ShoppingCart size={14} sm:size={16} md:size={20} />
                      <span>Tambah ke Keranjang</span>
                    </button>
                    <button className="p-1 sm:p-2 md:p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Heart size={14} sm:size={16} md:size={20} className="text-gray-600" />
                    </button>
                    <button className="p-1 sm:p-2 md:p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Share2 size={14} sm:size={16} md:size={20} className="text-gray-600" />
                    </button>
                  </div>
                  {/* Jumlah: tampil di bawah tombol keranjang pada mobile, hidden di md+ */}
                  <div className="block md:hidden w-full mt-2">
                    <h4 className="font-semibold text-batik-brown dark:text-batik-gold mb-1 text-xs">
                      Jumlah
                    </h4>
                    <div className="flex items-center">
                      <button
                        className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      >
                        -
                      </button>
                      <span className="text-base font-semibold w-8 text-center">
                        {quantity}
                      </span>
                      <button
                        className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"
                        onClick={() => setQuantity((q) => q + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product Details */}
                <div className="space-y-2 sm:space-y-4 md:space-y-6 w-full">
                  {/* Price and Rating */}
                  <div className="space-y-0.5 sm:space-y-1 md:space-y-3">
                    <div className="text-lg sm:text-xl md:text-3xl font-bold text-batik-brown dark:text-batik-gold">
                      {formatRupiah(selectedProduct.price)}
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="flex space-x-0.5 sm:space-x-1">
                        {renderStars(selectedProduct.rating)}
                      </div>
                      <span className="text-[10px] sm:text-xs md:text-base text-gray-600 dark:text-gray-400">
                        ({selectedProduct.reviews} ulasan)
                      </span>
                    </div>
                  </div>
                  {/* Description */}
                  <div>
                    <h3 className="font-semibold text-batik-brown dark:text-batik-gold mb-0.5 sm:mb-1 md:mb-2 text-xs sm:text-sm md:text-base">
                      Deskripsi
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-[10px] sm:text-xs md:text-base">
                      {selectedProduct.detailDescription}
                    </p>
                  </div>
                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-1 sm:gap-2 md:gap-4">
                    <div>
                      <h4 className="font-semibold text-batik-brown dark:text-batik-gold mb-0.5 sm:mb-1 md:mb-2 text-[10px] sm:text-xs md:text-sm">
                        Spesifikasi
                      </h4>
                      <div className="space-y-0.5 sm:space-y-1 md:space-y-2 text-[10px] sm:text-xs md:text-sm dark:text-gray-300 justify-center">
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
                    <h4 className="font-semibold text-batik-brown dark:text-batik-gold mb-0.5 sm:mb-1 md:mb-2 text-[10px] sm:text-xs md:text-sm">
                      Petunjuk Perawatan
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-[10px] sm:text-xs md:text-sm">
                      {selectedProduct.care}
                    </p>
                  </div>
                  {/* Tags */}
                  <div>
                    <h4 className="font-semibold text-batik-brown dark:text-batik-gold mb-0.5 sm:mb-1 md:mb-2 p-0.5 sm:p-1 md:p-2 text-[10px] sm:text-xs md:text-sm">
                      Tags
                    </h4>
                    <div className="flex flex-center flex-wrap gap-0.5 sm:gap-1 md:gap-2">
                      {selectedProduct.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-1 py-0.5 sm:px-2 sm:py-0.5 md:px-3 md:py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[9px] sm:text-[10px] md:text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Jumlah: tampil di md+ (desktop), hidden di mobile */}
                  <div className="hidden md:block mt-4">
                    <h4 className="font-semibold text-batik-brown dark:text-batik-gold mb-1 text-sm">
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
                </div>
              </div>
              {/* Contact Information */}
              <div className="mt-2 sm:mt-4 md:mt-8 p-2 sm:p-3 md:p-6 bg-batik-cream/30 dark:bg-gray-800 rounded-xl">
                <h3 className="font-serif text-xs sm:text-base md:text-lg font-semibold text-batik-brown dark:text-batik-gold mb-1 sm:mb-2 md:mb-4">
                  Butuh Informasi Lebih Lanjut?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 sm:gap-2 md:gap-4">
                  <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                    <Phone size={13} sm:size={16} md:size={20} className="text-batik-gold" />
                    <div>
                      <div className="font-medium text-batik-brown dark:text-batik-gold text-[10px] sm:text-xs md:text-base">
                        Telepon
                      </div>
                      <div className="text-[9px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        +62 811 7874 458
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                    <Mail size={13} sm:size={16} md:size={20} className="text-batik-gold" />
                    <div>
                      <div className="font-medium text-batik-brown dark:text-batik-gold text-[10px] sm:text-xs md:text-base">
                        Email
                      </div>
                      <div className="text-[9px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        dapurazkaqanita@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                    <MapPin size={13} sm:size={16} md:size={20} className="text-batik-gold" />
                    <div>
                      <div className="font-medium text-batik-brown dark:text-batik-gold text-[10px] sm:text-xs md:text-base">
                        Lokasi
                      </div>
                      <div className="text-[9px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">
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
      <section className="py-6 md:py-12 bg-batik-cream/30">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif font-bold text-batik-brown mb-2 md:mb-4 text-xl md:text-3xl lg:text-4xl">
              Pencapaian Kami
            </h2>
            <p className="text-xs md:text-base text-gray-600">
              Angka-angka yang menunjukkan dedikasi dan kepercayaan klien
            </p>
          </div>
          {/* MOBILE: hanya tampil di <md */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            <div className="text-center">
              <div className="text-xl font-serif font-bold text-batik-brown mb-1">
                150+
              </div>
              <div className="text-xs text-gray-600">
                Acara Telah Kami Layani
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl font-serif font-bold text-batik-brown mb-1">
                100%
              </div>
              <div className="text-xs text-gray-600">
                Tanpa Pengawet Buatan
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl font-serif font-bold text-batik-brown mb-1">
                98%
              </div>
              <div className="text-xs text-gray-600">Tingkat Kepuasan</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-serif font-bold text-batik-brown mb-1">
                100+
              </div>
              <div className="text-xs text-gray-600">Tahun Pengalaman</div>
            </div>
          </div>
          {/* DESKTOP: hanya tampil di md+ */}
          <div className="hidden md:grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-batik-brown mb-2">
                150+
              </div>
              <div className="text-base text-gray-600">
                Acara Telah Kami Layani
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-batik-brown mb-2">
                100%
              </div>
              <div className="text-base text-gray-600">
                Tanpa Pengawet Buatan
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-batik-brown mb-2">
                98%
              </div>
              <div className="text-base text-gray-600">Tingkat Kepuasan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-batik-brown mb-2">
                100+
              </div>
              <div className="text-base text-gray-600">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;