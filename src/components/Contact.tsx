import React from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon, MailIcon } from 'lucide-react';
const Contact = () => {
  return <section id="contact" className="py-16 bg-gray-900 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-100">
            Visit Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We'd love to welcome you to Savory Delights. Make a reservation or
            simply stop by during our opening hours.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-gray-100">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPinIcon className="text-amber-500 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1 text-gray-100">Address</h4>
                  <p className="text-gray-400">123 Culinary Avenue</p>
                  <p className="text-gray-400">Foodville, CA 90210</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="text-amber-600 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon className="text-amber-600 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-600">info@savorydelights.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="text-amber-600 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Hours</h4>
                  <p className="text-gray-600">
                    Monday - Thursday: 11am - 10pm
                  </p>
                  <p className="text-gray-600">
                    Friday - Saturday: 11am - 11pm
                  </p>
                  <p className="text-gray-600">Sunday: 10am - 9pm</p>
                </div>
              </div>
            </div>
          </div>
          {/* Reservation Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-100">
              Make a Reservation
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-100" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Your email" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-gray-700 mb-1">
                    Date
                  </label>
                  <input type="date" id="date" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-gray-700 mb-1">
                    Time
                  </label>
                  <select id="time" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option value="">Select a time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="guests" className="block text-gray-700 mb-1">
                  Number of Guests
                </label>
                <select id="guests" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6">6 People</option>
                  <option value="7+">7+ People</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Special Requests
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Any special requests or dietary requirements?"></textarea>
              </div>
              <button type="submit" className="bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors">
                Reserve Table
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;