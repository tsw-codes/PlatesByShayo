import React, {useState} from 'react'
import { ChefHatIcon, CookingPot, Utensils, PhoneIcon, CalendarIcon, InstagramIcon } from 'lucide-react';





export const Body = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const menuItems = {
        rice: [
            { name: 'Jollof Rice', price: 'Plate $20 | Half tray $75 | Full Tray $150', description: '' },
            { name: 'Fried Rice', price: 'Plate $20 | Half tray $75 | Full Tray $150', description: ''  },
            { name: 'Asun Rice', price: 'Plate $25 | Half tray $100 | Full Tray $200', description: ''},
            { name: "Native Rice", price: 'Plate $20 | Half tray $75 | Full Tray $150', description: ''}
        ],
        soups: [
            { name: 'Fried Stew (Ata Dindin)', price: 'Half tray $120 | Full tray $200', description: 'Includes shaki, eja kika, and pomo'},
            { name: 'Stew', price: 'Half tray $75 | Full tray $120', description: 'Base price (with your choice of protein)'}, 
            { name: 'Ayamase', price: 'Half tray $150 | Full tray $250', description: '' },
            { name: "Efo Riro", price: 'Half tray $60 | Full tray $110', description: ''},
            { name: "Egusi", price: 'Half tray $60 | Full tray $110', description: '' },
            { name: "Ogbono", price: 'Half tray $60 | Full tray $110', description: '' },
            { name: "Ila Asepo", price: 'With goat: Half tray $75 | Full tray $150 • Seafood: Half tray $60 | Full tray $120', description: ''},
        ],
        proteins: [
            { name: 'Chicken', price: 'Half tray $80 | Full tray $160', description: 'Half tray includes 2 medium sized chickens'},
            { name: 'Goat Meat', price: 'Half tray $130 | Full tray $250', description: 'Half tray includes 25-30 pieces' },
            { name: 'Turkey', price: 'Half tray $17 | Full tray $35-50', description: 'Half tray includes 6 pieces (cut into 4)'},
            { name: 'Fish', price: 'Full tray $170', description: 'Croaker fish' },
            { name: 'Assorted meat', price: 'Price varies', description: 'Price depends on mixture selection'},
        ],
        specialties: [
            { name: 'Porridge', price: 'Plate $20 | Half tray $75 | Full tray $120', description: ''},
            { name: 'Jollof Spaghetti', price: 'Plate $20 | Half tray $75 | Full tray $120', description: ''},
            { name: 'Moi-moi', price: 'Per piece $4 | 12 pieces $40', description: ''},
            { name: 'Ewa Agoyin', price: 'Plate $20 | Half tray $35 | Full tray $70', description: 'With sauce • Combo $23 (includes protein and plantain)'},
            { name: 'Grilled Whole Fish Platter', price: 'Small fish $40 | Large fish $80', description: ''},
            { name: 'Bole with Sauce', price: '$25', description: '2-3 plantains, includes fish in sauce'},
            { name: 'Suya Kabob', price: '3-4 sticks $15 | 6 sticks $30', description: ''},
        ],
        snacks: [
            { name: 'Puff Puff', price: '50 pieces $40', description: ''},
            { name: 'Meat Pie', price: '$3 per piece', description: ''},
            { name: 'Egg Rolls', price: '$5 per roll', description: 'Large size wrapping' },
            { name: 'Buns', price: '50 pieces $40', description: 'Medium size'},
            { name: 'Chin Chin', price: '$5 per pack', description: 'Sweet variety'},
        ]
    };

    const renderMenuItems = () => {
        return (
            <div className="mt-8 max-w-3xl mx-auto">
                {activeCategory === 'all' ? (
                    <div className="space-y-4">
                        {Object.entries(menuItems).map(([category]) => (
                            <div 
                                key={category} 
                                className="bg-amber-50 border border-amber-700 rounded-lg shadow-lg text-amber-950 overflow-hidden cursor-pointer transition-colors"
                                onClick={() => setActiveCategory(category)}
                            >
                                <h3 className="font-serif font-bold text-xl p-4 capitalize text-center">{category}</h3>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-amber-50 border border-amber-700 rounded-lg shadow-lg text-amber-950 overflow-hidden">
                        <div className="space-y-2">
                            {menuItems[activeCategory]?.map(item => (
                                <div key={item.name} className="p-4">
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-serif font-bold">{item.name}</h4>
                                        <span className="font-serif">{item.price}</span>
                                    </div>
                                    {item.description && (
                                        <p className="text-amber-950 text-sm mt-1">{item.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="flex-grow bg-amber-50 min-h-screen">
            <div className="relative">
            <div className="flex justify-center mb-4 ">
                <CookingPot className="h-28 w-16 text-amber-800 pt-8" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 text-center pt-4">
                       PlatesByShAyo
                    </h1>
                    <p className="text-xl text-amber-800 mb-6 text-center ">
                            Bringing joy to every plate... 
                            </p>
                    <p className='text-center font-serif text-base md:text-lg pt-5 text-black '>Good food brings people together, 
                        and we're here to make every bite count! Whether you're chilling with friends, celebrating,
                        or just craving a homemade meal, we've got you. Fresh, flavorful, 
                        and perfect for any occasion—let us handle the food while you enjoy the fun!</p>
                </div>
                <div className="mt-8 flex flex-col md:flex-row justify-center gap-6 text-amber-800 mb-6">
          <div className="flex items-center justify-center gap-2">
            <PhoneIcon className="h-5 w-5" />
            <span> Shola: +1 (301)-458-9434 | Ayomide: +1 (267) 678-9104</span>
          </div>
        </div>
          <div className="flex items-center justify-center gap-2 text-amber-800">
            <InstagramIcon className="h-5 w-5" />
            <a 
            href="https://www.instagram.com/plates_by_shayo?igsh=ODNzNnQ0ZWRzd3Zr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-amber-600 transition-colors"
          >
            @plates_by_shayo <br/> Check out our page for more info
          </a>
            
          </div>
            </div>

            <div className="container mx-auto px-4">
                <p className="text-center font-serif font-bold text-2xl md:text-xl pt-20 text-amber-900">Our Menu</p>
                <div className='overflow-x-auto pt-3'>
                    <div className='flex gap-8 pt-7 px-4 min-w-max justify-center '>
                        <button 
                            onClick={() => setActiveCategory('all')}
                            className={`font-extrabold font-serif text-lg md:text-xl px-6 py-2 rounded-full transition-colors duration-300 
                            ${activeCategory === 'all' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
                        >All</button>
                        <button 
                            onClick={() => setActiveCategory('rice')}
                            className={`font-extrabold font-serif text-lg md:text-xl px-6 py-2 rounded-full transition-colors duration-300 
                            ${activeCategory === 'rice' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
                        >Rice</button>
                        <button 
                            onClick={() => setActiveCategory('soups')}
                            className={`font-extrabold font-serif text-lg md:text-xl px-6 py-2 rounded-full transition-colors duration-300 
                            ${activeCategory === 'soups' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
                        >Soups</button>
                        <button 
                            onClick={() => setActiveCategory('proteins')}
                            className={`font-extrabold font-serif text-lg md:text-xl px-6 py-2 rounded-full transition-colors duration-300 
                            ${activeCategory === 'proteins' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
                        >Proteins</button>
                        <button 
                            onClick={() => setActiveCategory('specialties')}
                            className={`font-extrabold font-serif text-lg md:text-xl px-6 py-2 rounded-full transition-colors duration-300 
                            ${activeCategory === 'specialties' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
                        >Specialties</button>
                        <button 
                            onClick={() => setActiveCategory('snacks')}
                            className={`font-extrabold font-serif text-lg md:text-xl px-6 py-2 rounded-full transition-colors duration-300 
                            ${activeCategory === 'snacks' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
                        >Quick Snacks</button>
                    </div>
                </div>
                {renderMenuItems()}
            </div>

            <div className='mt-16 pt-8 '>
                <h2 className="font-serif text-2xl text-amber-900 font-semibold text-center mb-8">Small Gatherings We Cater For</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 pb-12">
                    <div className="bg-amber-50 border border-amber-700 rounded-lg p-6 text-center">
                        <Utensils className="h-12 w-12 mx-auto mb-4 text-amber-800" />
                        <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">Birthday Celebrations</h3>
                        <p className="text-amber-800">Let us make your special day memorable with our delicious dishes</p>
                    </div>

                    <div className="bg-amber-50 border border-amber-700 rounded-lg p-6 text-center">
                        <CookingPot className="h-12 w-12 mx-auto mb-4 text-amber-800" />
                        <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">Family Gatherings</h3>
                        <p className="text-amber-800">Perfect for intimate family dinners and reunions</p>
                    </div>

                    <div className="bg-amber-50 border border-amber-700 rounded-lg p-6 text-center">
                        <CalendarIcon className="h-12 w-12 mx-auto mb-4 text-amber-800" />
                        <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">Small Events</h3>
                        <p className="text-amber-800">Ideal for house parties and small social gatherings</p>
                    </div>
                </div>
            </div>

            <div className='mt-16 pt-8 '>
                <h2 className="font-serif text-2xl text-amber-900 font-semibold text-center mb-8">Meet Our Chefs</h2>
                <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto px-4">
                    <div className="bg-amber-50 border border-amber-700 rounded-lg p-6 text-center flex-1">
                        <ChefHatIcon className="h-16 w-16 mx-auto mb-4 text-amber-800" />
                        <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Ayomide</h3>
                        <div className="text-amber-800">
                            <p className="mb-2">📱 (267) 678-9104</p>
                            <p>✉️ shayoenterprises9@gmail.com</p>
                        </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-700 rounded-lg p-6 text-center flex-1">
                        <ChefHatIcon className="h-16 w-16 mx-auto mb-4 text-amber-800" />
                        <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Shola</h3>
                        <div className="text-amber-800">
                            <p className="mb-2">📱 (301) 458-9434</p>
                            <p>✉️ shayoenterprises9@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        
    );
}