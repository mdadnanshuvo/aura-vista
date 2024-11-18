import React from 'react';
import { Bed, Bath } from 'lucide-react';

const RoomsAndBeds = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-6">Rooms & beds</h2>
      
      <div className="mb-8">
        <h3 className="text-lg mb-4">2 bedrooms (sleeps 4)</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Bed className="w-5 h-5 text-gray-600" />
              <span className="font-medium">Bedroom 1</span>
            </div>
            <p className="text-gray-600 ml-7">1 Queen Bed</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Bed className="w-5 h-5 text-gray-600" />
              <span className="font-medium">Bedroom 2</span>
            </div>
            <p className="text-gray-600 ml-7">1 Twin Bed</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg mb-4">1 bathroom</h3>
        <div className="flex items-center gap-2">
          <Bath className="w-5 h-5 text-gray-600" />
          <span>Full Bathroom</span>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-4">Spaces</h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <span className="w-5 h-5 flex items-center justify-center">🏡</span>
            <span>Deck or patio</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-5 h-5 flex items-center justify-center">🍳</span>
            <span>Kitchen</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-5 h-5 flex items-center justify-center">🏗️</span>
            <span>Balcony</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-5 h-5 flex items-center justify-center">🌳</span>
            <span>Garden</span>
          </li>
        </ul>
      </div>

      <a href="#" className="text-blue-600 hover:underline">
        See all rooms and beds details
      </a>
    </div>
  );
};

export default RoomsAndBeds;