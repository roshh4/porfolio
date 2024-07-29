import React, { useState, useRef, useEffect } from 'react';
import './Card.css';

const Card = () => {
  const [styles, setStyles] = useState([]);
  const cardRefs = useRef([]);

  const setCardRef = (index) => (el) => {
    if (el) {
      cardRefs.current[index] = el;
      el.addEventListener('mousemove', (e) => handleMouseMove(index, e));
      el.addEventListener('mouseleave', () => handleMouseLeave(index));
    }
  };

  const handleMouseMove = (index, e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const pos = [
      e.clientX - rect.left,
      e.clientY - rect.top,
    ];
    const w = card.offsetWidth;
    const h = card.offsetHeight;
    const px = Math.abs(Math.floor(100 / w * pos[0]) - 100);
    const py = Math.abs(Math.floor(100 / h * pos[1]) - 100);
    const pa = (50 - px) + (50 - py);

    const lp = 50 + (px - 50) / 2;
    const tp = 50 + (py - 50) / 2;
    const px_spark = 50 + (px - 50) / 10;
    const py_spark = 50 + (py - 50) / 10;
    const p_opc = 20 + (Math.abs(pa) * 0.75);
    const ty = ((tp - 50) / 5) * -1;
    const tx = ((lp - 50) / 5) * 0.5;

    const newStyle = {
      transform: `rotateX(${ty}deg) rotateY(${tx}deg)`,
      '--grad-pos': `${lp}% ${tp}%`,
      '--spark-pos': `${px_spark}% ${py_spark}%`,
      '--opacity': p_opc / 100,
      transition: 'transform 0.4s ease-out, background-position 0.4s ease-out',
    };

    setStyles((prevStyles) => {
      const updatedStyles = [...prevStyles];
      updatedStyles[index] = newStyle;
      return updatedStyles;
    });
  };

  const handleMouseLeave = (index) => {
    setStyles((prevStyles) => {
      const updatedStyles = [...prevStyles];
      updatedStyles[index] = {
        ...updatedStyles[index],
        transform: 'rotateX(0deg) rotateY(0deg)',
        transition: 'transform 0.4s ease-out, background-position 0.4s ease-out',
      };
      return updatedStyles;
    });
  };

  useEffect(() => {
    return () => {
      cardRefs.current.forEach((card, index) => {
        if (card) {
          card.removeEventListener('mousemove', (e) => handleMouseMove(index, e));
          card.removeEventListener('mouseleave', () => handleMouseLeave(index));
        }
      });
    };
  }, []);

  const cards = [
    { id: 1, type: 'type1', imgSrc: 'mongodb.png' },
    { id: 2, type: 'type2', imgSrc: 'mysql.png' },
    { id: 3, type: 'type3 card-3', imgSrc: 'react.webp' }, 
    { id: 4, type: 'type4 card-4', imgSrc: 'vscode.webp' },
  ];

  return (
    <div className="card-section">
      <h2 className="header">Technologies I'm Familiar With</h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${card.type}`}
            ref={setCardRef(index)}
            style={styles[index] || {}}
          >
            <img 
              src={card.imgSrc} 
              alt={`Card ${card.id}`} 
              className="card-image" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
