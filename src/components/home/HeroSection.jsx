"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Palette,
  Hand,
  Sparkles,
  Shirt,
  Brush,
} from "lucide-react";

const HeroSection = () => {
  const [motifs, setMotifs] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [waxDrops, setWaxDrops] = useState([]);
  const [cantingPosition, setCantingPosition] = useState({ x: 50, y: 50 });
  const [showInstructions, setShowInstructions] = useState(true);
  const [selectedMotif, setSelectedMotif] = useState(0);
  const [fabricColor, setFabricColor] = useState("#F5F5DC"); // Default cream
  const [motifColors, setMotifColors] = useState({}); // Object with motif id as key
  const [waxLineColor, setWaxLineColor] = useState("#DAA520"); // Default gold
  const [coloringTarget, setColoringTarget] = useState("fabric"); // fabric, motif, canting
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [waxLines, setWaxLines] = useState([]);

  // Animation states for title
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showCanting, setShowCanting] = useState(true);
  const [cantingAnimationPosition, setCantingAnimationPosition] = useState({
    x: 0,
    y: 0,
  });
  const [completedWords, setCompletedWords] = useState([]);

  const titleWords = [
    { text: "Warisan", delay: 0 },
    { text: "Budaya", delay: 1500 },
    { text: "Indonesia", delay: 3000 },
    { text: "Modern", delay: 4500 },
  ];

  const steps = [
    { name: "Sketsa", color: "bg-batik-cream", icon: "✏️" },
    { name: "Canting", color: "bg-batik-gold", icon: "🖌️" },
    { name: "Pewarnaan", color: "bg-batik-maroon", icon: "🎨" },
    { name: "Finishing", color: "bg-batik-navy", icon: "✨" },
  ];

  // Expanded color palettes
  const fabricColors = [
    { name: "Krem", color: "#F5F5DC" },
    { name: "Putih", color: "#FFFFFF" },
    { name: "Coklat Muda", color: "#DEB887" },
    { name: "Kuning Gading", color: "#FFFFF0" },
    { name: "Abu-abu Terang", color: "#F5F5F5" },
  ];

  const motifColors_palette = [
    { name: "Coklat Tua", color: "#8B4513" },
    { name: "Emas", color: "#DAA520" },
    { name: "Merah Maroon", color: "#800000" },
    { name: "Biru Navy", color: "#1e3a8a" },
    { name: "Hijau Tua", color: "#006400" },
    { name: "Ungu Tua", color: "#4B0082" },
  ];

  const cantingColors = [
    { name: "Emas", color: "#DAA520" },
    { name: "Coklat", color: "#8B4513" },
    { name: "Kuning", color: "#FFD700" },
    { name: "Orange", color: "#FF8C00" },
    { name: "Merah Bata", color: "#B22222" },
  ];

  const motifTypes = [
    { name: "Parang", description: "Motif klasik berbentuk diagonal" },
    { name: "Kawung", description: "Motif bulat empat segi" },
    { name: "Mega Mendung", description: "Motif awan bergelombang" },
    { name: "Truntum", description: "Motif bunga kecil" },
    { name: "Sekar Jagad", description: "Motif bunga dunia" },
  ];

  // Title animation effect
  useEffect(() => {
    const animateTitle = () => {
      titleWords.forEach((word, index) => {
        setTimeout(() => {
          // Animate canting to word position
          const wordPositions = [
            { x: 20, y: 30 }, // Warisan
            { x: 50, y: 30 }, // Budaya
            { x: 20, y: 70 }, // Indonesia
            { x: 50, y: 70 }, // Modern
          ];

          setCantingAnimationPosition(wordPositions[index]);
          setCurrentWordIndex(index);

          // Show word after canting reaches position
          setTimeout(() => {
            setCompletedWords((prev) => [...prev, index]);
          }, 800);

          // Hide canting after last word
          if (index === titleWords.length - 1) {
            setTimeout(() => {
              setShowCanting(false);
            }, 1200);
          }
        }, word.delay);
      });
    };

    animateTitle();
  }, []);

  // Handle mouse movement for canting tool
  const handleMouseMove = (e) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });

      if (isDrawing && currentStep === 1) {
        setCantingPosition({ x, y });
        // Add wax drop at current position
        addWaxDrop(x, y);
        // Add wax line for continuous drawing
        addWaxLine(x, y);
      }
    }
  };

  // Handle mouse down for drawing
  const handleMouseDown = (e) => {
    if (currentStep === 1) {
      setIsDrawing(true);
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setCantingPosition({ x, y });
    }
  };

  // Handle mouse up for drawing
  const handleMouseUp = () => {
    if (currentStep === 1) {
      setIsDrawing(false);
    }
  };

  // Add motif when clicking in sketch mode
  const handleCanvasClick = (e) => {
    if (canvasRef.current && currentStep === 0) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      const newMotif = {
        id: Date.now(),
        x,
        y,
        type: selectedMotif,
        size: Math.random() * 40 + 30,
        rotation: Math.random() * 360,
      };

      setMotifs((prev) => [...prev, newMotif]);
      // Set default color for new motif
      setMotifColors((prev) => ({
        ...prev,
        [newMotif.id]: "#8B4513", // Default brown
      }));
      setShowInstructions(false);
    }
  };

  // Add wax drop
  const addWaxDrop = (x, y) => {
    const newDrop = {
      id: Date.now() + Math.random(),
      x,
      y,
      size: Math.random() * 6 + 3,
    };

    setWaxDrops((prev) => [...prev, newDrop]);

    // Remove drop after animation
    setTimeout(() => {
      setWaxDrops((prev) => prev.filter((drop) => drop.id !== newDrop.id));
    }, 2000);
  };

  // Add wax line for continuous drawing
  const addWaxLine = (x, y) => {
    const newLine = {
      id: Date.now() + Math.random(),
      x,
      y,
      size: Math.random() * 3 + 2,
    };

    setWaxLines((prev) => [...prev, newLine]);

    // Keep only recent lines to avoid performance issues
    if (waxLines.length > 50) {
      setWaxLines((prev) => prev.slice(-40));
    }
  };

  // Handle color application
  const applyColor = (color) => {
    if (coloringTarget === "fabric") {
      setFabricColor(color);
    } else if (coloringTarget === "motif") {
      // Apply to all motifs
      const newMotifColors = {};
      motifs.forEach((motif) => {
        newMotifColors[motif.id] = color;
      });
      setMotifColors((prev) => ({ ...prev, ...newMotifColors }));
    } else if (coloringTarget === "canting") {
      setWaxLineColor(color);
    }
  };

  // Handle step change
  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
    setIsDrawing(false);
  };

  // Get current color palette based on target
  const getCurrentColorPalette = () => {
    switch (coloringTarget) {
      case "fabric":
        return fabricColors;
      case "motif":
        return motifColors_palette;
      case "canting":
        return cantingColors;
      default:
        return fabricColors;
    }
  };

  // Render motif based on type with custom color
  const renderMotif = (motif) => {
    const motifColor = motifColors[motif.id] || "#8B4513";
    const baseStyle = {
      left: `${motif.x}%`,
      top: `${motif.y}%`,
      transform: `translate(-50%, -50%) rotate(${motif.rotation}deg)`,
      width: `${motif.size}px`,
      height: `${motif.size}px`,
    };

    switch (motif.type) {
      case 0: // Parang
        return (
          <div
            key={motif.id}
            className="absolute animate-pulse"
            style={baseStyle}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M10,50 Q30,20 50,50 Q70,80 90,50"
                stroke={motifColor}
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M20,60 Q40,30 60,60 Q80,90 100,60"
                stroke={motifColor}
                strokeWidth="2"
                fill="none"
                opacity="0.7"
              />
            </svg>
          </div>
        );

      case 1: // Kawung
        return (
          <div
            key={motif.id}
            className="absolute animate-pulse"
            style={baseStyle}
          >
            <div className="w-full h-full relative">
              <div
                className="absolute inset-0 border-2 rounded-full"
                style={{ borderColor: motifColor }}
              ></div>
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                style={{ backgroundColor: motifColor }}
              ></div>
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full"
                style={{ backgroundColor: motifColor }}
              ></div>
              <div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
                style={{ backgroundColor: motifColor }}
              ></div>
              <div
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full"
                style={{ backgroundColor: motifColor }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                style={{ backgroundColor: motifColor, opacity: 0.8 }}
              ></div>
            </div>
          </div>
        );

      case 2: // Mega Mendung
        return (
          <div
            key={motif.id}
            className="absolute animate-pulse"
            style={baseStyle}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M10,40 Q20,20 30,40 Q40,20 50,40 Q60,20 70,40 Q80,20 90,40"
                stroke={motifColor}
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M15,60 Q25,40 35,60 Q45,40 55,60 Q65,40 75,60 Q85,40 95,60"
                stroke={motifColor}
                strokeWidth="3"
                fill="none"
                opacity="0.8"
              />
              <path
                d="M20,80 Q30,60 40,80 Q50,60 60,80 Q70,60 80,80"
                stroke={motifColor}
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>
        );

      case 3: // Truntum
        return (
          <div
            key={motif.id}
            className="absolute animate-pulse"
            style={baseStyle}
          >
            <div className="w-full h-full relative">
              <div
                className="absolute inset-0 border-2 rounded-full"
                style={{ borderColor: motifColor }}
              ></div>
              <div
                className="absolute inset-2 border rounded-full"
                style={{ borderColor: motifColor, opacity: 0.7 }}
              ></div>
              <div
                className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full"
                style={{ backgroundColor: motifColor }}
              ></div>
              <div
                className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full"
                style={{ backgroundColor: motifColor }}
              ></div>
              <div
                className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full"
                style={{ backgroundColor: motifColor }}
              ></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full"
                style={{ backgroundColor: motifColor }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                style={{ backgroundColor: motifColor, opacity: 0.9 }}
              ></div>
            </div>
          </div>
        );

      case 4: // Sekar Jagad
        return (
          <div
            key={motif.id}
            className="absolute animate-pulse"
            style={baseStyle}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke={motifColor}
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="25"
                stroke={motifColor}
                strokeWidth="2"
                fill="none"
                opacity="0.8"
              />
              <circle cx="50" cy="50" r="10" fill={motifColor} />
              <path
                d="M50,10 L55,25 L50,40 L45,25 Z"
                fill={motifColor}
                transform="rotate(0 50 50)"
                opacity="0.7"
              />
              <path
                d="M50,10 L55,25 L50,40 L45,25 Z"
                fill={motifColor}
                transform="rotate(90 50 50)"
                opacity="0.7"
              />
              <path
                d="M50,10 L55,25 L50,40 L45,25 Z"
                fill={motifColor}
                transform="rotate(180 50 50)"
                opacity="0.7"
              />
              <path
                d="M50,10 L55,25 L50,40 L45,25 Z"
                fill={motifColor}
                transform="rotate(270 50 50)"
                opacity="0.7"
              />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  const ads = [
    {
      title: "Lapis Legit Original",
      desc: "Nikmati Lapis Legit Original kami, dibuat dengan resep tradisional dan bahan-bahan pilihan terbaik.",
      img: "/portfolio/LapisLegitNanas.jpg", // Ada
      badge: "Best Seller",
      badgeColor: "bg-orange-500",
      cta: "Coba Sekarang",
      ctaColor: "bg-green-400 hover:bg-green-500",
      link: "/product",
    },
    {
      title: "Maksubah Prunes",
      desc: "Maksubah Prunes dengan topping buah prunes premium, legit dan segar untuk keluarga.",
      img: "/portfolio/Maksubah.jpg", // Ada
      badge: "Favorit Keluarga",
      badgeColor: "bg-batik-gold",
      cta: "Pesan Sekarang",
      ctaColor: "bg-batik-brown hover:bg-batik-gold",
      link: "/product",
    },
    {
      title: "Bolu Kukus Pelangi",
      desc: "Bolu kukus warna-warni, lembut dan cocok untuk acara spesial Anda.",
      img: "/portfolio/LapisLegitKeju.jpg", // Ganti ke foto yang ada
      badge: "Varian Baru",
      badgeColor: "bg-green-500",
      cta: "Lihat Varian",
      ctaColor: "bg-orange-400 hover:bg-orange-500",
      link: "/product",
    },
  ];

  const [currentAd, setCurrentAd] = useState(0);

  // Slide effect state
  const [slideDirection, setSlideDirection] = useState("right");
  const [isSliding, setIsSliding] = useState(false);
  const prevAd = useRef(0);

  // Handle auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlide("right");
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Slide handler
  const handleSlide = (direction, idx = null) => {
    setIsSliding(true);
    setSlideDirection(direction);
    setTimeout(() => {
      if (idx !== null) {
        setCurrentAd(idx);
      } else {
        setCurrentAd((prev) => {
          if (direction === "right") return (prev + 1) % ads.length;
          if (direction === "left") return (prev - 1 + ads.length) % ads.length;
          return prev;
        });
      }
      setIsSliding(false);
    }, 350);
  };

  // Update prevAd ref
  useEffect(() => {
    prevAd.current = currentAd;
  }, [currentAd]);

  return (
    <section className="relative flex items-center justify-center mt-0 md:mt-0 md:min-h-[600px] overflow-hidden">
      {/* MOBILE/TABLET */}
      <div className="w-full flex justify-center md:hidden">
        <div className="w-full max-w-3xl md:max-w-none md:w-full md:rounded-none md:shadow-none md:bg-transparent shadow-lg bg-gradient-to-br from-batik-cream via-batik-gold/20 to-batik-brown/10 dark:from-gray-900 dark:via-batik-brown/30 dark:to-gray-950 relative">
          <div className="absolute inset-0 opacity-30 pointer-events-none z-0 md:hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(218,165,32,0.3)_0%,transparent_50%)] animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,69,19,0.3)_0%,transparent_50%)] animate-pulse"></div>
          </div>
          <div className="relative z-10 w-full px-5 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between py-16 md:py-24 transition-all duration-700">
            {/* Slide Container */}
            <div className="flex gap-5 md:flex-row items-center justify-between w-full">
              {/* Left: Text */}
              <div
                className={`order-none md:order-1 flex-1 text-left md:pr-12 transition-all duration-500 transform ${
                  isSliding
                    ? slideDirection === "right"
                      ? "-translate-x-16 opacity-0"
                      : "translate-x-16 opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
                key={currentAd + "-text"}
              >
                <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-batik-brown mb-2 sm:mb-3 md:mb-4 leading-tight">
                  {ads[currentAd].title}
                </h1>
                <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                  <span
                    className={`inline-block ${ads[currentAd].badgeColor} text-white text-[10px] sm:text-xs font-semibold rounded-full px-3 sm:px-4 py-0.5 sm:py-1 mr-2 sm:mr-3`}
                  >
                    {ads[currentAd].badge}
                  </span>
                </div>
                <p className="text-xs sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-md md:max-w-xl">
                  {ads[currentAd].desc}
                </p>
                <Link
                  to={ads[currentAd].link}
                  className={`inline-block ${ads[currentAd].ctaColor} text-white font-bold py-2 sm:py-3 px-5 sm:px-8 rounded-lg shadow-lg transition-all duration-300 text-xs sm:text-base`}
                >
                  {ads[currentAd].cta}
                </Link>
              </div>
              {/* Right: Image */}
              <div
                className={`order-2 md:order-2 flex-1 flex items-center justify-center mt-6 sm:mt-10 md:mt-0 transition-all duration-500 transform ${
                  isSliding
                    ? slideDirection === "right"
                      ? "-translate-x-16 opacity-0"
                      : "translate-x-16 opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
                key={currentAd + "-img"}
              >
                <img
                  src={ads[currentAd].img}
                  alt={ads[currentAd].title}
                  className="rounded-xl shadow-2xl w-full max-w-[220px] sm:max-w-[320px] md:max-w-[600px] max-h-[160px] sm:max-h-[240px] md:max-h-[400px] aspect-square object-cover"
                />
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
              {ads.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    handleSlide(idx > currentAd ? "right" : "left", idx)
                  }
                  className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full border-2 border-batik-brown transition-all duration-300 ${
                    currentAd === idx ? "bg-batik-brown" : "bg-white"
                  }`}
                  aria-label={`Iklan ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* DESKTOP */}
      <div className="hidden md:block w-full">
        <div className="relative flex items-center justify-center min-h-[600px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-batik-cream via-batik-gold/20 to-batik-brown/10 dark:from-gray-900 dark:via-batik-brown/30 dark:to-gray-950">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(218,165,32,0.3)_0%,transparent_50%)] animate-pulse"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,69,19,0.3)_0%,transparent_50%)] animate-pulse"></div>
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between py-24 md:py-24 transition-all duration-700">
              <div className="flex-1 flex flex-row items-center justify-between w-full">
                {/* Left: Text */}
                <div
                  className={`flex-1 text-left md:pr-12 transition-all duration-500 transform ${
                    isSliding
                      ? slideDirection === "right"
                        ? "-translate-x-16 opacity-0"
                        : "translate-x-16 opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                  key={currentAd + "-text-d"}
                >
                  <h1 className="font-serif text-5xl lg:text-6xl font-bold text-batik-brown mb-4 leading-tight">
                    {ads[currentAd].title}
                  </h1>
                  <div className="flex items-center mb-4">
                    <span
                      className={`inline-block ${ads[currentAd].badgeColor} text-white text-xs font-semibold rounded-full px-4 py-1 mr-3`}
                    >
                      {ads[currentAd].badge}
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 mb-8 max-w-xl">
                    {ads[currentAd].desc}
                  </p>
                  <Link
                    to={ads[currentAd].link}
                    className={`inline-block ${ads[currentAd].ctaColor} text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-base`}
                  >
                    {ads[currentAd].cta}
                  </Link>
                </div>
                {/* Right: Image */}
                <div
                  className={`flex-1 flex items-center justify-center mt-0 transition-all duration-500 transform ${
                    isSliding
                      ? slideDirection === "right"
                        ? "-translate-x-16 opacity-0"
                        : "translate-x-16 opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                  key={currentAd + "-img-d"}
                >
                  <img
                    src={ads[currentAd].img}
                    alt={ads[currentAd].title}
                    className="rounded-xl shadow-2xl w-full max-w-[600px] max-h-[400px] aspect-square object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Carousel Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {ads.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    handleSlide(idx > currentAd ? "right" : "left", idx)
                  }
                  className={`w-3 h-3 rounded-full border-2 border-batik-brown transition-all duration-300 ${
                    currentAd === idx ? "bg-batik-brown" : "bg-white"
                  }`}
                  aria-label={`Iklan ${idx + 1}`}
                ></button>
              ))}
            </div>
            {/* Tombol Panah */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-batik-gold text-batik-brown rounded-full shadow p-2 z-20"
              onClick={() => handleSlide("left")}
              aria-label="Sebelumnya"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-batik-gold text-batik-brown rounded-full shadow p-2 z-20"
              onClick={() => handleSlide("right")}
              aria-label="Berikutnya"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
