import React, { useEffect, useState } from 'react';
import styles from './Product.module.scss';
import { useCart } from '../CartProvider/CartProvider';

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8081/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.productContainer}>
      <h2>Our Picks for You</h2>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <h3 className={styles.productName}>{product.name}</h3>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <div className={styles.productRoast}>
              Roast: {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={
                    index < product.roast ? styles.roastDotFilled : styles.roastDot
                  }
                />
              ))}
            </div>
            <p className={styles.productPrice}>{product.price} DKK</p>
            <button 
              className={styles.addToCartButton} 
              onClick={() => addToCart(product)} 
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
