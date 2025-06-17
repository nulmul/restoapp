import React from 'react';
import { StarIcon } from 'lucide-react';
const testimonials = [{
  id: 1,
  name: 'Jennifer Smith',
  role: 'Food Blogger',
  rating: 5,
  comment: "The best dining experience I've had in years. The filet mignon was cooked to perfection, and the service was impeccable.",
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
}, {
  id: 2,
  name: 'David Chen',
  role: 'Regular Customer',
  rating: 5,
  comment: "Savory Delights has become our family's go-to spot for celebrations. The menu has something for everyone, and the atmosphere is always welcoming.",
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
}, {
  id: 3,
  name: 'Sarah Johnson',
  role: 'Local Food Critic',
  rating: 4,
  comment: 'Creative flavors and beautiful presentation. The chef clearly has a passion for culinary innovation while respecting classic techniques.',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80'
}];
const Testimonials = () => {
  return <section id="testimonials" className="py-16 bg-gray-800 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-100">
            What Our Guests Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers
            have to say about their dining experience at Savory Delights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={18} className={i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'} />)}
              </div>
              <p className="text-gray-400 mb-6 italic">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-100">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;