import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ topN }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000');
        setProducts(response.data.slice(0, topN)); // Assuming backend returns an array of products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [topN]);

  return (
    <div>
      <h2>Top {topN} Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
