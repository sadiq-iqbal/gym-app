import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#808487] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h5 className="font-bold mb-2">Quick Links</h5>
            <ul>
              <li className="mb-2">
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#exercises" className="hover:underline">
                  Exercises
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h5 className="font-bold mb-2">Technologies Used</h5>
            <ul>
              <li className="mb-2">React</li>
              <li className="mb-2">ExerciseDB API</li>
              <li className="mb-2">Tailwind CSS</li>
              <li className="mb-2">Node.js</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h5 className="font-bold mb-2">Follow Us</h5>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>&copy; 2024 Exercise Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
