import React, { useEffect, useState, useRef } from 'react';
import './NumberHighlights.css';

const NumberHighlights = () => {
  const highlights = [
    { number: 15, text: "Дней высококачественного образовательного контента" },
    { number: 80, text: "Ведущих международных экспертов" },
    { number: 66, text: "Часов лекций и мастер-классов" },
    { number: 60000, text: "Стипендия в ординатуре для победителя Курсов" },
  ];

  const sectionRef = useRef();

  // State to control when to trigger the animation
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true); // Start the animation when visible
        } else {
          setStartAnimation(false); // Reset the animation when not visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="number-highlights-section">
      <div className="number-highlights-container">
        {highlights.map((item, index) => (
          <HighlightCard
            key={index}
            targetNumber={item.number}
            text={item.text}
            startAnimation={startAnimation}
          />
        ))}
      </div>
    </section>
  );
};

const HighlightCard = ({ targetNumber, text, startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (startAnimation) {
      setCount(0); // Reset count when animation starts
      const duration = 2000; // Animation duration in milliseconds
      const increment = Math.ceil(targetNumber / (duration / 16)); // Increment based on 60 FPS

      const timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount + increment >= targetNumber) {
            clearInterval(timer);
            return targetNumber;
          }
          return prevCount + increment;
        });
      }, 16); // Update every 16ms for smooth animation
    }
  }, [startAnimation, targetNumber]); // Reset the animation when `startAnimation` changes

  return (
    <div className="highlight-item">
      <div className="highlight-number">{count.toLocaleString()}</div>
      <p className="highlight-text">{text}</p>
    </div>
  );
};

export default NumberHighlights;
