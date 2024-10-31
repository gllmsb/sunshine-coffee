import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CheckoutDetails.module.scss';
import { useCart } from '../CartProvider/CartProvider';
import backIcon from '../../assets/images/back.png';

export const CheckoutDetails = () => {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    phone: '',
    province: '',
    country: ''
  });
  const [errors, setErrors] = useState({});
  const [shipping, setShipping] = useState('FakeEx');

  const handleInputChange = ({ target: { name, value } }) => setFormData(prev => ({ ...prev, [name]: value }));

  const validateForm = () => {
    const requiredFields = ['firstName', 'lastName', 'address', 'city', 'phone', 'province', 'country'];
    const formErrors = requiredFields.reduce((acc, field) => {
      if (!formData[field]) acc[field] = `${field.replace(/^\w/, c => c.toUpperCase())} is required`;
      return acc;
    }, {});
    
    if (formData.phone && !/^\d{8,15}$/.test(formData.phone)) {
      formErrors.phone = 'Enter a valid phone number';
    }

    setErrors(formErrors);
    return !Object.keys(formErrors).length;
  };

  const handlePayNow = () => {
    if (validateForm()) {
      console.log("Form is valid, ready to proceed with payment.");
    }
  };

  const formatFieldLabel = field => {
    return field === 'firstName' ? 'First Name' :
           field === 'lastName' ? 'Last Name' :
           field.charAt(0).toUpperCase() + field.slice(1);
  };

  const taxRate = 0.25;
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const finalTotal = cartTotal + cartTotal * taxRate;

  return (
    <div className={styles.checkoutWrapper}>
      <div className={styles.resumeShoppingContainer}>
        <Link to="/products" className={styles.resumeShopping}>
          <img src={backIcon} alt="Back" className={styles.backIcon} />
          <span>Resume Shopping</span>
        </Link>
      </div>

      <div className={styles.checkoutContainer}>
        <h1 className={styles.checkoutTitle}>Checkout</h1>

        <div className={styles.checkoutContent}>
          <div className={styles.formSection}>
            <form className={styles.checkoutForm}>
              {Object.keys(formData).map(field => (
                <div key={field} className={styles.formField}>
                  <label>{formatFieldLabel(field)}</label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className={errors[field] ? styles.inputError : ''}
                  />
                  {errors[field] && <span className={styles.errorText}>{errors[field]}</span>}
                </div>
              ))}
            </form>
          </div>

          <div className={styles.summarySection}>
            {cartItems.map(item => (
              <div key={item.id} className={styles.summaryItem}>
                <span>{item.name}</span>
                <span>x {item.quantity}</span>
                <span>{(item.price * item.quantity).toFixed(2)} DKK</span>
              </div>
            ))}
            <div className={styles.summaryTotal}>
              <p>Total:</p>
              <p className={styles.totalAmount}>{finalTotal.toFixed(2)} DKK</p>
            </div>

            <div className={styles.shippingOptions}>
              <h4>Choose shipping</h4>
              {['FakeEx', 'FakeEx Express'].map(option => (
                <label key={option} className={styles.shippingOption}>
                  <input
                    type="radio"
                    name="shipping"
                    value={option}
                    checked={shipping === option}
                    onChange={() => setShipping(option)}
                  />
                  {option}
                </label>
              ))}
            </div>

            <button className={styles.payNowButton} onClick={handlePayNow}>
              <span>Pay now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
