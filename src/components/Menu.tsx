import React, { useState } from 'react';
const menuCategories = [{
  id: 'all',
  name: 'All'
}, {
  id: 'starters',
  name: 'Starters'
}, {
  id: 'mains',
  name: 'Main Courses'
}, {
  id: 'desserts',
  name: 'Desserts'
}, {
  id: 'drinks',
  name: 'Drinks'
}];
const menuItems = [{
  id: 1,
  name: 'Bruschetta',
  description: 'Grilled bread rubbed with garlic and topped with olive oil, salt, tomato, and fresh basil',
  price: 8.99,
  category: 'starters',
  image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
}, {
  id: 2,
  name: 'Caprese Salad',
  description: 'Fresh mozzarella, tomatoes, and sweet basil, seasoned with salt and olive oil',
  price: 10.99,
  category: 'starters',
  image: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
}, {
  id: 3,
  name: 'Filet Mignon',
  description: '8oz center-cut beef tenderloin, served with roasted vegetables and mashed potatoes',
  price: 28.99,
  category: 'mains',
  image: 'https://images.unsplash.com/photo-1565299715199-866c917206bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
}, {
  id: 4,
  name: 'Grilled Salmon',
  description: 'Fresh Atlantic salmon fillet, grilled and served with seasonal vegetables and lemon butter sauce',
  price: 22.99,
  category: 'mains',
  image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
}, {
  id: 5,
  name: 'Tiramisu',
  description: 'Classic Italian dessert made with espresso-soaked ladyfingers and mascarpone cream',
  price: 7.99,
  category: 'desserts',
  image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
}, {
  id: 6,
  name: 'Chocolate Lava Cake',
  description: 'Warm chocolate cake with a molten chocolate center, served with vanilla ice cream',
  price: 8.99,
  category: 'desserts',
  image: 'https://images.unsplash.com/photo-1542826438-c21a4267de82?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}, {
  id: 7,
  name: 'Craft Beer Selection',
  description: 'Rotating selection of local craft beers',
  price: 6.99,
  category: 'drinks',
  image: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
}, {
  id: 8,
  name: 'Signature Cocktails',
  description: 'Handcrafted cocktails made with premium spirits and fresh ingredients',
  price: 9.99,
  category: 'drinks',
  image: 'https://images.unsplash.com/photo-1578664183011-a4f4e833e5f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
}];
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredItems = activeCategory === 'all' ? menuItems : menuItems.filter(item => item.category === activeCategory);
  return <section id="menu" className="py-16 bg-gray-800 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully crafted menu featuring the finest ingredients
            and flavors from around the world
          </p>
        </div>
        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map(category => <button key={category.id} className={`px-4 py-2 rounded-full ${activeCategory === category.id ? 'bg-amber-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'} transition-colors`} onClick={() => setActiveCategory(category.id)}>
              {category.name}
            </button>)}
        </div>
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => <div key={item.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="h-56 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-100">
                    {item.name}
                  </h3>
                  <span className="text-amber-500 font-bold">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{item.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Menu;