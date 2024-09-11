import React, { useState } from 'react';
import addbutton from '../../assets/more.png';
import '../style/Sidebar.scss';

const Saaadbar = ({ onAddCard }) => {
  const colors = ["bg-orange-600", "bg-green-800", "bg-sky-600", "bg-purple-700", "bg-rose-950"];
  const [showColors, setShowColors] = useState(false);

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  const handleColorClick = (color) => {
    onAddCard(color); // Pass the color directly to onAddCard
    toggleColors(); // Optionally hide the color palette after selecting a color
  };

  return (
    <div className="sidebar">
      <div className={`color-container ${showColors ? 'show-colors' : ''}`}>
        <ul className="color">
          {colors.map((colorClass, index) => (
            <li
              key={index}
              // Apply Tailwind CSS class dynamically
              className={`sidebar_list_item cursor-pointer w-8 h-8 rounded-full mr-2 ${colorClass}`}
              onClick={() => handleColorClick(colorClass)}
            ></li>
          ))}
        </ul>
      </div>
      <div className="add-button-container">
        <img
          src={addbutton}
          alt="add"
          className={`add-button ${showColors ? 'rotate' : ''}`}
          onClick={toggleColors}
        />
      </div>
    </div>
  );
};

export default Saaadbar;
