import React, { useEffect, useState } from "react";
import { ArrowRight, Star, CheckCircle, Play } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b",
 
];

const Heropage = () => {
  const [index, setIndex] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center bg-slate-50 overflow-hidden pt-20">

      {/* Background Image Carousel */}
      <div className="absolute inset-0 transition-all duration-700">
        <img
          src={images[index]}
          alt="shopping"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Shop the Latest <span className="text-yellow-400">Trends</span> Online
          </h1>

          <p className="mt-4 text-gray-200 text-lg">
            Discover fashion, electronics, and lifestyle products at unbeatable prices.
          </p>

   

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full flex items-center gap-2 font-semibold hover:bg-yellow-300 transition">
              Shop Now <ArrowRight size={18} />
            </button>

            
          </div>
        </div>

        {/* Right Side - Floating Cards */}
     
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-yellow-400" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Heropage;
