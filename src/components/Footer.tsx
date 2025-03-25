import React from "react";
import {
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  faFacebookF,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#002147] text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand & Social */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-white text-3xl">📖</span> Study
          </h2>
          <p className="mt-4 text-gray-300 text-sm">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-bold">GET IN TOUCH</h3>
          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-gray-300" /> +84 123 456 789
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="w-5 h-5 text-gray-300" /> demo@email.com
            </li>
            <li className="flex items-center gap-2">
              <GlobeAltIcon className="w-5 h-5 text-gray-300" /> www.demo.com
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5 text-gray-300" /> Address goes here, street.
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold">USEFUL LINKS</h3>
          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Teachers & Staff</a></li>
            <li><a href="#" className="hover:text-white">Our Courses</a></li>
            <li><a href="#" className="hover:text-white">Courses Categories</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Instagram Gallery */}
        <div>
          <h3 className="text-lg font-bold">FACEBOOK</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-2 mt-4">
            <img src="https://placehold.co/20x20" alt="Instagram" className="w-20 h-20 object-cover rounded-lg" />
            <img src="https://placehold.co/20x20" alt="Instagram" className="w-20 h-20 object-cover rounded-lg" />
            <img src="https://placehold.co/20x20" alt="Instagram" className="w-20 h-20 object-cover rounded-lg" />
            <img src="https://placehold.co/20x20" alt="Instagram" className="w-20 h-20 object-cover rounded-lg" />
            <img src="https://placehold.co/20x20" alt="Instagram" className="w-20 h-20 object-cover rounded-lg" />
            <img src="https://placehold.co/20x20" alt="Instagram" className="w-20 h-20 object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center border-t border-gray-700 pt-6 text-gray-400 text-sm">
        <p>© 2025 Institute. Made with ❤️ by Ban Ban</p>
        <p className="mt-2">
          <a href="#" className="hover:text-white">Privacy Policy</a> ,
          <a href="#" className="hover:text-white"> Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
}
