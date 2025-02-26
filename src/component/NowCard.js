import React, { useState } from 'react';
import styles from '../styles/NowCard.module.css';
import Image from "next/image";
import { useRouter } from "next/router";

const NowCard = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreedToTerms: false,
  });

  // Submit handler
  const handleSubmit = () => {
    console.log("Form submitted with data:", formData);

    // Navigate to product page after a short delay
    setTimeout(() => {
      router.push("/product");
    }, 500); // Add a small delay (500ms)
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={styles['mleft1']}>
      <div className={styles['dfc']}>
        <div className={styles['mleftww']}>
          <h2>Get Started Now</h2>
          <div className={styles['input_name']}>
            <p className={styles['text_name']}>Name</p>
            <input
              className={styles['input_own']}
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles['input_name']}>
            <p className={styles['text_name']}>Email address</p>
            <input
              className={styles['input_own']}
              type="email"
              placeholder="Enter your e-mail"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles['input_name']}>
            <p className={styles['text_name']}>Password</p>
            <input
              className={styles['input_own']}
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles['df']}>
            <input
              className={styles['check']}
              type="checkbox"
              checked={formData.agreedToTerms}
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                agreedToTerms: e.target.checked,
              }))}
            />
            <p className={styles['agree']}>I agree to the terms & policy</p>
          </div>
          <div>
            <button onClick={handleSubmit} className={styles['btn_style']}>Signin</button>
            <hr className={styles['hr']} />
          </div>
        </div>
        <div className={styles['all']}>
          <div className={styles['google']}>
            <Image className={styles['mtop']} src="/google.png" width={19} height={19} alt="Google Logo" />
            <p className={styles['mleft']}>Sign in with Google</p>
          </div>
          <div className={styles['apple']}>
            <Image className={styles['mtop']} src="/apple.png" width={19} height={19} alt="Apple Logo" />
            <p className={styles['mleft']}>Sign in with Apple</p>
          </div>
        </div>
        <div>
          <p className={styles['center']}>Have an account? Sign In</p>
        </div>
      </div>
      <div>
        <img src='back.png' className={styles['mleft_img']} alt="Background" width={'350px'} />
      </div>
    </div>
  );
}

export default NowCard;
