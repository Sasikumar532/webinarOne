import React, { useState } from "react";
import { FaTelegramPlane, FaWhatsapp, FaVk } from "react-icons/fa";
import "./ContactSection.css";

const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isChecked) {
      alert("Пожалуйста, согласитесь с политикой конфиденциальности EAFO.");
      return;
    }

    setFormSubmitted(true);
    e.target.reset();
    setIsChecked(false); // Reset checkbox after submission
  };

  const closePopup = () => {
    setFormSubmitted(false);
  };

  return (
    <div className="contact-section-page" id="contact">
      <h2 className="contact-heading">Свяжитесь с нами</h2>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Укажите Ваше имя</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Номер телефона</label>
          <input type="tel" id="phone" name="phone" required />
        </div>

        {/* Privacy Policy Checkbox */}
        <div className="form-group checkbox-group">
          <input 
            type="checkbox" 
            id="privacy-policy" 
            checked={isChecked} 
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="privacy-policy">
            Я соглашаюсь с <a href="https://www.eafo.info/privacy-policy" target="_blank" className="privacy-link">политикой конфиденциальности EAFO</a>
          </label>
        </div>

        <button type="submit" className="form-button" disabled={!isChecked}>
          Отправить
        </button>
      </form>

      {/* Popup */}
      {formSubmitted && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>Спасибо за отправку формы, наша команда свяжется с вами в ближайшее время!</p>
            <button onClick={closePopup} className="popup-button">
              Закрыть
            </button>
          </div>
        </div>
      )}

      {/* Contact Info */}
      <div className="contact-info">
        <p>Телефон: <a href="tel:+7 (931) 111-22-55" className="custom-link">+7 (931) 111-22-55</a></p>
        <p>Электронная почта: <a href="mailto:basic@eafo.info" className="custom-link">basic@eafo.info</a></p>
        <div className="contact-buttons">
     <a href="https://vk.com/basic.eafo" target="_blank" rel="noopener noreferrer" className="contact-button vk-button">
    <FaVk className="contact-icon" />
  </a>
</div>

      </div>
    </div>
  );
};

export default ContactSection;
