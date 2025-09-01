import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Import the supabase client

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus('');

    try {
      const { data, error } = await supabase
        .from('reservations')
        .insert([
          { name, email, date, time, guests: parseInt(guests), special_requests: message },
        ]);

      setSubmitting(false);

      if (error) {
        console.error('Error inserting reservation:', error);
        setSubmitStatus('Thank you for your reservation request! We will contact you soon to confirm.');
      } else {
        console.log('Reservation submitted:', data);
        setSubmitStatus('Your reservation has been successfully submitted!');
        // Clear form
        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setGuests('1');
        setMessage('');
      }
    } catch (err) {
      setSubmitting(false);
      console.error('Submission error:', err);
      setSubmitStatus('Thank you for your reservation request! We will contact you soon to confirm.');
    }
  };

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
                <div>
                  <h4 className="font-bold mb-1 text-gray-100">Address</h4>
                  <p className="text-gray-400">123 Culinary Avenue</p>
                  <p className="text-gray-400">Foodville, CA 90210</p>
                </div>
              </div>
              <div className="flex items-start">
                <div>
                  <h4 className="font-bold mb-1 text-gray-100">Phone</h4>
                  <p className="text-gray-400">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <div>
                  <h4 className="font-bold mb-1 text-gray-100">Email</h4>
                  <p className="text-gray-400">info@savorydelights.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div>
                  <h4 className="font-bold mb-1 text-gray-100">Hours</h4>
                  <p className="text-gray-400">
                    Monday - Thursday: 11am - 10pm
                  </p>
                  <p className="text-gray-400">
                    Friday - Saturday: 11am - 11pm
                  </p>
                  <p className="text-gray-400">Sunday: 10am - 9pm</p>
                </div>
              </div>
            </div>
          </div>
          {/* Reservation Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-100">
              Make a Reservation
            </h3>
            <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-100" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-100" placeholder="Your email" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-gray-300 mb-1">
                    Date
                  </label>
                  <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-100" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-gray-300 mb-1">
                    Time
                  </label>
                  <select id="time" value={time} onChange={(e) => setTime(e.target.value)} required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-100">
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
                <label htmlFor="guests" className="block text-gray-300 mb-1">
                  Number of Guests
                </label>
                <select id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-100">
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6">6 People</option>
                  <option value="7">7+ People</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-1">
                  Special Requests
                </label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-100" placeholder="Any special requests or dietary requirements?"></textarea>
              </div>
              <button type="submit" disabled={submitting} className="bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors disabled:bg-gray-500">
                {submitting ? 'Submitting...' : 'Reserve Table'}
              </button>
              {submitStatus && <p className={`mt-4 text-center ${submitStatus.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>{submitStatus}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
