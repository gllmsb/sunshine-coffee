import React, { useState } from 'react';
import styles from './Login.module.scss';
import backIcon from '../../assets/images/back.png';

export const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    repeatPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.userName) formErrors.userName = 'User name is required';
    if (!formData.password) formErrors.password = 'Password is required';

    if (isSignUp) {
      if (!formData.email) {
        formErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        formErrors.email = 'Email address is invalid';
      }

      if (!formData.repeatPassword) formErrors.repeatPassword = 'Please confirm your password';
      if (formData.password !== formData.repeatPassword) {
        formErrors.repeatPassword = 'Passwords do not match';
      }
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleBackToLogin = () => {
    setIsSignUp(false);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSignUp(false);
      setFormData({ userName: '', email: '', password: '', repeatPassword: '' });
      setErrors({});
    }
  };

  return (
    <div className={styles.loginContainer}>
      {isSignUp ? (
        <button onClick={handleBackToLogin} className={styles.backButton}>
          <img src={backIcon} alt="Back icon" className={styles.backIcon} />
          Back to login
        </button>
      ) : (
        <div className={styles.backButtonPlaceholder} />
      )}
      
      <h2 className={styles.title}>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form className={styles.form} onSubmit={handleSubmitClick}>
        <label>
          User Name
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            required
          />
          {errors.userName && <span className={styles.error}>{errors.userName}</span>}
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {errors.password && <span className={styles.error}>{errors.password}</span>}
        </label>

        {isSignUp && (
          <>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </label>
            <label>
              Repeat Password
              <input
                type="password"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleInputChange}
                required
              />
              {errors.repeatPassword && <span className={styles.error}>{errors.repeatPassword}</span>}
            </label>
          </>
        )}

        <div className={styles.buttonGroup}>
          {!isSignUp && (
            <button
              type="button"
              className={styles.signupButton}
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          )}
          <button
            type="submit"
            className={styles.submitButton}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
