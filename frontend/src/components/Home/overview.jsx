import React, { useState } from 'react';
import '../../styles/overview.css';

export default function Overview() {
  const [activeCard, setActiveCard] = useState(1);

  const handleClick = (index) => {
    setActiveCard(index);
  };

  const cardData = [
    {
      title: 'Product',
      description:
        'Discover a wide range of recycled materials including PET, HDPE, and LDPE—carefully processed to ensure quality and sustainability. Perfect for eco-conscious businesses and manufacturers aiming to reduce their carbon footprint.',
    },
    {
      title: 'About Us',
      description:
        'We are a passionate team on a mission to create a cleaner, greener future. Since 2023, Crimatch has been connecting recyclers with manufacturers, turning waste into value through innovation, transparency, and care.',
    },
    {
      title: 'Service',
      description:
        'From doorstep pickup to real-time order tracking, our services make recycling effortless and efficient. Whether you’re selling scrap or buying recycled raw materials, we ensure a seamless experience powered by smart logistics and trusted partners.',
    },
  ];

  return (
    <div className="overview-container">
      <h1 className="overview-title">Overview</h1>
      <div className="overview-row">
        {cardData.map((card, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`overview-box ${activeCard === index ? 'active' : ''}`}
          >
            <h3 className="overview-heading">{card.title}</h3>
            <p className="overview-text">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
