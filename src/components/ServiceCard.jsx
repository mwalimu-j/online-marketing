import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="mb-6">
        {/* Render the icon */}
        <div className="w-16 h-16 mx-auto text-blue-600">{icon}</div>
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
