import React from 'react';
import styles from './Cart.module.scss';
import closeIcon from '../../assets/images/close.png';
import { useCart } from '../CartProvider/CartProvider';

export const Cart = ({ onClose }) => {
  const { cartItems, clearCart, increaseQuantity, decreaseQuantity } = useCart();
  const taxRate = 0.25;
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const taxAmount = cartTotal * taxRate;
  const finalTotal = cartTotal + taxAmount;
  const totalItemsInCart = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={styles.cartOverlay}>
      <div className={styles.cartDrawer}>
        <div className={styles.header}>
          <button onClick={onClose} className={styles.closeButton}>
            <img src={closeIcon} alt="Close" />
          </button>
          <h2>Shopping Cart</h2>
        </div>
        <div className={styles.cartItems}>
          {cartItems.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <span>{item.name}</span>
              <div className={styles.quantity}>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <input type="text" value={item.quantity} readOnly />
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <span>{(item.price * item.quantity).toFixed(2)} DKK</span>
            </div>
          ))}
        </div>
        <div className={styles.cartSummary}>
          <div className={styles.summaryRow}>
            <p>Tax (25%):</p>
            <p>{taxAmount.toFixed(2)} DKK</p>
          </div>
          <div className={styles.summaryRow}>
            <p>Total:</p>
            <p className={styles.total}>{finalTotal.toFixed(2)} DKK</p>
          </div>
          <p className={styles.itemCount}>Items in Cart: {totalItemsInCart}</p>
        </div>
        <div className={styles.buttonRow}>
            <button className={styles.clearCartButton} onClick={clearCart}>
            <span>Clear Cart</span>
            </button>
            <button className={styles.checkoutButton}>
            <span>Go to Checkout</span>
        </button>
        </div>
      </div>
    </div>
  );
};
