import { useRef, useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AiOutlineClose } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./PreRegisterForm.css";

const baseUrl = "http://localhost:4000";

export default function PreRegisterForm({ courseId, onClose }) {
  const modalRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [agreements, setAgreements] = useState({
    terms: false,
    data: false,
    promotions: false,
  });

  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAgreements((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!agreements.terms || !agreements.data) {
      toast.error("Пожалуйста, согласитесь с условиями.");
      return;
    }
  
    try {
      const res = await axios.post(`${baseUrl}/api/precourse/register`, {
        ...formData,
        courseId,
      });
  
      toast.success(res.data.message || "Успешная регистрация!");
      setSubmitted(true); // <-- Set submission state to true
  
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phone: "",
      });
  
      setAgreements({ terms: false, data: false, promotions: false });
    } catch (err) {
      toast.error(err.response?.data?.message || "Ошибка при отправке формы.");
    }
  };
  

  const renderLabelWithHTML = (htmlContent) => {
    return <span dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  return (
    <div
      onClick={(e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          onClose();
        }
      }}
      className="modal-overlay text-black text-left"
    >
      <div className="precourse-modal" ref={modalRef}>
        <button className="close-btn" onClick={onClose}>
          <AiOutlineClose size={24} />
        </button>
        <h2>Предварительная регистрация</h2>

        {!submitted ? (
    <form onSubmit={handleSubmit}>
    <div className="name-fields">
      <label className="field-label">ФИО</label>
      <div className="name-inputs">
        {["lastName", "firstName", "middleName"].map((field) => (
          <div key={field} className="input-group">
            <input
              id={field}
              name={field}
              type="text"
              value={formData[field]}
              onChange={handleChange}
              required={field !== "middleName"}
            />
            <label
              className="name-label text-sm text-gray-600"
              htmlFor={field}
            >
              {{
                lastName: "Фамилия",
                firstName: "Имя",
                middleName: "Отчество",
              }[field]}
              {field !== "middleName" && (
                <span className="required"> *</span>
              )}
            </label>
          </div>
        ))}
      </div>
    </div>

    <div className="contact-fields">
      <div className="input-group">
        <label htmlFor="email">
          Электронная почта<span className="required"> *</span>
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-group phone-input-wrapper">
        <label htmlFor="phone">
          Телефон<span className="required"> *</span>
        </label>
        <PhoneInput
          country={"ru"}
          value={formData.phone}
          onChange={handlePhoneChange}
          inputProps={{ name: "phone", required: true }}
          inputStyle={{
            width: "100%",
            height: "50px",
            paddingLeft: "48px",
            fontSize: "16px",
          }}
          buttonStyle={{
            border: "none",
            background: "transparent",
          }}
        />
      </div>
    </div>

    <div className="checkboxes">
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={agreements.terms}
          onChange={handleCheckboxChange}
        />
        Я согласен с <a href="#">условиями участия</a>.
      </label>
      <label>
        <input
          type="checkbox"
          name="data"
          checked={agreements.data}
          onChange={handleCheckboxChange}
        />
        Я согласен на обработку персональных данных.
      </label>
      <label>
        <input
          type="checkbox"
          name="promotions"
          checked={agreements.promotions}
          onChange={handleCheckboxChange}
        />
        Я хочу получать информацию о будущих мероприятиях и акциях.
      </label>
    </div>

    <button
      className="cursor-pointer"
      type="submit"
      disabled={
        !(agreements.terms && agreements.data && agreements.promotions)
      }
    >
      Отправить
    </button>
  </form>
) : (
  <div className="success-message">
    <h3 style={{ marginTop: "1rem" }}>Вы успешно зарегистрировались на предварительный курс!</h3>
    <p style={{ marginTop: "0.5rem", fontSize: "15px" }}>
      Мы отправили вам письмо с инструкциями по дальнейшей регистрации.<br />
      Письмо отправлено с адреса: <strong>eafo@e-register.org</strong>.<br />
      Пожалуйста, проверьте вашу почту и не забудьте заглянуть в папку "Спам".
    </p>
  </div>
)}



      
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </div>
    </div>
  );
}
