import React from 'react';
import '../../styles/overview.css';

export default function OverviewCard({ title, content, highlight, onClick }) {
  return (
    <div
      className={`overview-box ${highlight ? 'highlighted' : ''}`}
      onClick={onClick}
      data-aos="fade-up"
    >
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
