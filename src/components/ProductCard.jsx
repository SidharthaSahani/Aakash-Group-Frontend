import React from 'react';
import { Link } from 'react-router-dom';
import {  Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 sm:duration-500 border border-slate-100 flex flex-col h-full">
      {/* Image Container - Responsive padding and aspect ratio */}
      <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-slate-50 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-w-full max-h-full object-contain transform group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 sm:duration-500"
          loading="lazy"
        />
        {/* Rating Badge - Responsive sizing */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center space-x-0.5 sm:space-x-1 text-blue-500 text-xs sm:text-sm font-bold shadow-sm">
          <Star size={12} className="sm:w-[14px] sm:h-[14px]" fill="currentColor" />
          <span>{product.rating.rate}</span>
        </div>
      </div>
      
      {/* Content Container - Responsive padding */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        {/* Category - Responsive text */}
        <span className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-wider sm:tracking-widest mb-1.5 sm:mb-2">
          {product.category}
        </span>
        
        {/* Title - Responsive text, dynamic height with line clamp */}
        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight sm:leading-snug min-h-[2.5rem] sm:min-h-[3.5rem]">
          {product.title}
        </h3>
        
        {/* Footer - Responsive layout */}
        <div className="mt-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Price - Responsive sizing */}
          <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 truncate">
            Rs{product.price}
          </span>
          
          {/* Button - Responsive padding and text */}
          <Link 
            to={`/product/${product.id}`}
            className="bg-slate-900 text-white px-3 py-2 sm:p-3 rounded-xl sm:rounded-2xl hover:bg-blue-600 transition-all active:scale-95 shadow-md sm:shadow-lg shadow-slate-200 whitespace-nowrap text-xs sm:text-sm font-medium flex-shrink-0"
          >
            <span className="hidden sm:inline">About Product</span>
            <span className="sm:hidden">Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;