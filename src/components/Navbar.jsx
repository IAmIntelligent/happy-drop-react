import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white font-semibold text-xl">
          Juice Bar
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="text-white hover:text-gray-200">
              About Us
            </a>
          </li>
          <li>
            <a href="#gallery" className="text-white hover:text-gray-200">
              Image Gallery
            </a>
          </li>
          <li>
            <a href="#testimonials" className="text-white hover:text-gray-200">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
