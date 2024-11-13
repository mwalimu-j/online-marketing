import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <span className="text-yellow-400">MyWebsite</span>
          </h1>
          <p className="text-lg mb-6">
            We're here to provide you with the best services and solutions.
            Explore our website to learn more.
          </p>
          <a
            href="/services"
            className="inline-block bg-yellow-400 text-blue-600 px-6 py-3 rounded-full text-xl font-semibold transition duration-300 hover:bg-yellow-500 hover:text-white"
          >
            Discover Our Services
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">High Quality</h3>
              <p>
                We offer top-notch services that meet the highest industry
                standards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Affordable Pricing</h3>
              <p>
                Our services come at competitive prices, making them accessible
                to everyone.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Expert Team</h3>
              <p>
                Our team consists of experienced professionals dedicated to
                delivering the best results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
              <p className="text-lg mb-4">
                "MyWebsite helped us achieve our goals with exceptional
                services. Their team is highly skilled and professional."
              </p>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-gray-500">CEO, Company X</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
              <p className="text-lg mb-4">
                "Great experience! Highly recommend their services to anyone
                looking for reliable and effective solutions."
              </p>
              <p className="font-semibold">John Smith</p>
              <p className="text-gray-500">Founder, Startup Y</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Join countless others who have benefited from our services.
            Let's work together to achieve success.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-blue-600 px-8 py-4 rounded-full text-xl font-semibold transition duration-300 hover:bg-yellow-500 hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
