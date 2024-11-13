import React from 'react';
import MutaiImage from '../assets/mutai.jpeg';  // Import the image from the assets folder

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-6">
            Learn more about our journey, values, and the mission that drives
            us every day.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Mission</h2>
          <p className="text-lg max-w-2xl mx-auto">
            At MyWebsite, our mission is to provide exceptional services and
            innovative solutions that help businesses grow. We aim to empower
            our clients with the tools and knowledge they need to succeed in the
            digital world.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Value 1 */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Integrity</h3>
              <p>
                We believe in doing the right thing, even when no one is
                watching. Our commitment to honesty and ethical behavior is at
                the core of everything we do.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p>
                We embrace change and continuously seek new ideas to solve
                problems. Our goal is to bring innovative solutions that drive
                growth and improve lives.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Customer-Centric</h3>
              <p>
                Our customers are at the heart of everything we do. We listen
                to their needs and work tirelessly to deliver results that
                exceed their expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
              <img
                src={MutaiImage}  // Using the imported image here
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">DENIS BETT</h3>
              <p className="text-gray-500">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
              <img
                src={MutaiImage}  // Using the same image for all team members
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">PERSON 1</h3>
              <p className="text-gray-500">COO</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
              <img
                src={MutaiImage}  // Using the same image for all team members
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">PERSON 2</h3>
              <p className="text-gray-500">CTO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-8">
            Have questions? Feel free to reach out to us. We’re here to help
            you grow.
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

export default About;
