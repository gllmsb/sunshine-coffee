import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ProductDetail.module.scss';
import { useCart } from '../CartProvider/CartProvider';
import backIcon from '/src/assets/images/back.png';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8081/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error fetching product: {error}</p>;

  return (
    <>
    <button className={styles.backButton} onClick={() => navigate('/products')}>
        <img src={backIcon} alt="Back" className={styles.backIcon} />
        Back to Products
      </button>
    <div className={styles.productDetailWrapper}>
      <div className={styles.productDetailContainer}>
        <div className={styles.productImageContainer}>
          <img src={product.image} alt={product.name} className={styles.productImage} />
        </div>
        <div className={styles.productInfo}>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.productDescription}>{product.description}</p>
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
      </div>
    </div>
    </>
  );
};
