import React, { useState, useEffect } from "react";
import { MdSupport, MdEmail, MdClose } from "react-icons/md"; // Material Design icons
import { FaWhatsapp,FaPhone, FaTelegram } from "react-icons/fa"; // Font Awesome for WhatsApp
import "./ContactUs.css";
import { BiSupport } from "react-icons/bi";


const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup(!showPopup);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".popup-content")) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="contact-us-div">
      {/* Button to trigger the popup */}
      <div className="contact-us-button" onClick={togglePopup}>
        <BiSupport   className="contact-icon" />
      </div>

      {/* Popup for Contact Us */}
      {showPopup && (
        <div className="contact-popup">
          <div className="contact-popup-content">
            {/* Close button */}
            <div className="close-button" onClick={togglePopup} >
              <MdClose />
            </div>
            <h3>Свяжитесь с нами</h3>

            {/* Contact Info Section */}
            <div className="contact-info">
            <div className="contact-item">
                <FaPhone className="contact-icon"  style={{ transform: "scaleX(-1)" }}/>
                <div>
                  <h4>
                    <strong>Телефон:</strong>
                  </h4>
                  <span>
                    <a target="_blank" rel="noopener noreferrer">
                    +7 (931) 111-22-55
                    </a>
                  </span>
                </div>
              </div>
              <div className="contact-item">
                <MdEmail className="contact-icon" />
                <div>
                  <h4>
                    <strong>Задать вопрос:</strong>
                  </h4>
                  <span>
                    <a href="mailto:basic@eafo.info">basic@eafo.info</a>
                  </span>
                </div>
              </div>
              <div className="contact-item">
                <MdEmail className="contact-icon" />
                <div>
                  <h4>
                    <strong>Техническая поддержка:</strong>
                  </h4>
                  <span>
                    <a href="mailto:support@eafo.info">support@eafo.info</a>
                  </span>
                </div>
              </div>
              <div style={{ fontSize: "28px", display: "flex", gap: "15px", alignItems: "center", justifyContent: "center" }}>
      {/* WhatsApp Icon */}
      <a href="https://wa.me/79311112255" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp style={{ color: "green", cursor: "pointer" }} />
      </a>

      {/* Telegram Icon */}
      <a href="https://t.me/yourTelegramUsername" target="_blank" rel="noopener noreferrer">
        <FaTelegram style={{ color: "blue", cursor: "pointer" }} />
      </a>
    </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
