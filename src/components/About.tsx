import React, { memo } from 'react';
const About = () => {
  return <section id="about" className="py-16 w-full bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
              Our Story
            </h2>
            <p className="text-gray-400 mb-4">
              Founded in 2010, Savory Delights began with a simple vision: to
              create a dining experience that celebrates the art of cooking and
              the joy of sharing good food.
            </p>
            <p className="text-gray-400 mb-4">
              Our chef, Michael Roberts, trained in Paris and brings over 15
              years of culinary expertise to every dish. We source our
              ingredients from local farmers and suppliers, ensuring the
              freshest, highest quality meals for our guests.
            </p>
            <p className="text-gray-400 mb-6">
              At Savory Delights, we believe that dining is not just about
              food—it's about creating memories. From intimate dinners to
              celebratory gatherings, we strive to make every visit special.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" alt="Chef Michael Roberts" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-100">Michael Roberts</h4>
                <p className="text-gray-400">Executive Chef</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden h-64">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Restaurant interior" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden h-64">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Chef preparing food" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden h-64 col-span-2">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Restaurant dining area" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;