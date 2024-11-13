import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., send an email, save data, etc.)
    // For this example, we'll just display a success message.
    setFormStatus('Your message has been sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      {/* Contact Header Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg mb-6">
            We would love to hear from you. Feel free to reach out to us!
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
          <p className="text-lg mb-4">
            You can reach us through the following channels:
          </p>
          <div className="flex justify-center gap-16">
            {/* Phone */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Phone</h3>
              <p className="text-lg">
                <a
                  href="tel:+254700598317"
                  className="text-blue-600 hover:text-blue-800"
                >
                  0710393746
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Email</h3>
              <p className="text-lg">
                <a
                  href="mailto:mwalimujoshuakimanzi46@gmail.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  deniskipkemoibett@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-left text-xl font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-left text-xl font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-left text-xl font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-blue-600 py-3 rounded-full text-xl font-semibold transition duration-300 hover:bg-yellow-500 hover:text-white"
            >
              Send Message
            </button>
          </form>

          {/* Form Status Message */}
          {formStatus && (
            <div className="mt-6 text-xl font-semibold text-green-600">
              {formStatus}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
