import React from 'react';

const TestimonialCard = ({ name, title, testimonial, image }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="flex items-center mb-6">
        {/* Testimonial Image */}
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full mr-4 object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
      <p className="text-lg text-gray-600 italic">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
