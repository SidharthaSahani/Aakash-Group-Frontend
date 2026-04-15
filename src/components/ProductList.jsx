import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [ setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-8 md:space-y-0">
          <div className="space-y-4 max-w-2xl">
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
               Products for <br />
              <span className="text-yellow-400">Your Modern Lifestyle</span>
            </h2>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

     
      </div>
    </section>
  );
};

export default ProductList;