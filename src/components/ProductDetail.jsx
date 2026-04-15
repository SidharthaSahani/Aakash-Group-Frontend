import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json()).then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 sm:pt-32 flex items-center justify-center px-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) return <div className="min-h-screen pt-24 px-4 text-center">Product not found</div>;

  return (
    <div className="min-h-screen pt-20 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button - Responsive sizing */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors mb-6 sm:mb-8 lg:mb-12 group"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
          </div>
          <span className="font-bold text-sm sm:text-base">Back to Collections</span>
        </Link>

        {/* Main Grid - Responsive: stacks on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Image Section - Removed sticky on mobile, responsive padding */}
          <div className="bg-white p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] shadow-lg sm:shadow-xl shadow-slate-200/50 border border-slate-100 lg:sticky lg:top-28 xl:top-32 group order-1">
            <div className="relative aspect-[4/3] sm:aspect-square flex items-center justify-center overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title} 
                className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500 sm:duration-700"
                loading="eager"
              />
            </div>
          </div>

          {/* Details Section - Responsive spacing */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 order-2">
            <div className="space-y-3 sm:space-y-4">
              {/* Category Badge - Responsive text and padding */}
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-blue-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest">
                <span className="truncate max-w-[200px] sm:max-w-none">{product.category}</span>
              </div>
              
              {/* Title - Responsive text sizing with line clamp safety */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 leading-tight">
                {product.title}
              </h1>
              
              {/* Rating & Stock - Responsive layout: stack on very small, row on larger */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-6">
                <div className="flex items-center space-x-1 text-black-500 bg-blue-50 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl border border-blue-100">
                  <Star size={14} className="sm:w-[18px] sm:h-[18px]" fill="currentColor" />
                  <span className="font-bold text-sm sm:text-base">{product.rating.rate}</span>
                  <span className="text-black-700/60 text-xs sm:text-sm ml-1">
                    ({product.rating.count} reviews)
                  </span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2 text-green-600 bg-green-50 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl border border-green-100 font-bold text-xs sm:text-sm">
                  <ShieldCheck size={14} className="sm:w-[18px] sm:h-[18px]" />
                  <span>In Stock</span>
                </div>
              </div>
            </div>

            {/* Price - Responsive sizing with proper baseline alignment */}
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 flex items-baseline">
              <span className="text-xl sm:text-2xl mr-1 text-blue-600">Rs</span>
              <span>{product.price}</span>
            </div>

            {/* Description - Responsive text and spacing */}
            <div className="space-y-2 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">About this product</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                {product.description}
              </p>
            </div>

            {/* Action Buttons - Responsive: full width on mobile, side by side on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <button className="w-full bg-green-600 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-[2rem] font-bold text-base sm:text-lg hover:bg-green-700 transition-all shadow-lg sm:shadow-xl shadow-blue-200 flex items-center justify-center space-x-2 sm:space-x-3 active:scale-95 touch-manipulation">
                <ShoppingCart size={20} className="sm:w-6 sm:h-6" />
                <span>Add to Cart</span>
              </button>
              <button className="w-full bg-slate-900 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-[2rem] font-bold text-base sm:text-lg hover:bg-slate-800 transition-all shadow-lg sm:shadow-xl shadow-slate-200 flex items-center justify-center active:scale-95 touch-manipulation">
                <span>Buy Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;