import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-black text-white py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-500">
              Savory Delights
            </h3>
            <p className="text-gray-300 mb-4">
              Elevating dining experiences with exceptional cuisine and warm
              hospitality since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">123 Culinary Avenue</p>
            <p className="text-gray-300 mb-2">Foodville, CA 90210</p>
            <p className="text-gray-300 mb-2">(555) 123-4567</p>
            <p className="text-gray-300">info@savorydelights.com</p>
          </div>
          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
            <p className="text-gray-300 mb-2">Monday - Thursday: 11am - 10pm</p>
            <p className="text-gray-300 mb-2">Friday - Saturday: 11am - 11pm</p>
            <p className="text-gray-300">Sunday: 10am - 9pm</p>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 w-full bg-gray-900 text-gray-100 rounded-l-md focus:outline-none focus:ring-1 focus:ring-amber-500" />
              <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded-r-md hover:bg-amber-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Savory Delights. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
