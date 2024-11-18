import React from 'react';
import { Baby, Dog, PartyPopper, Cigarette } from 'lucide-react';
const HouseRules = () => {
    return (
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">House Rules</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <p className="font-medium">Check-in</p>
              <p className="text-gray-600">After 3:00 PM</p>
            </div>
            <div>
              <p className="font-medium">Check-out</p>
              <p className="text-gray-600">Before 11:00 AM</p>
            </div>
            <div className="flex items-center gap-2">
              <Baby className="w-5 h-5" />
              <div>
                <p className="font-medium">Children</p>
                <p className="text-gray-600">Children allowed ages 0-12</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Dog className="w-5 h-5" />
              <div>
                <p className="font-medium">Pets</p>
                <p className="text-gray-600">No pets allowed</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Maximum age to rent: 25</p>
            </div>
            <div className="flex items-center gap-2">
              <PartyPopper className="w-5 h-5" />
              <div>
                <p className="font-medium">Events</p>
                <p className="text-gray-600">No events allowed</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Cigarette className="w-5 h-5" />
              <div>
                <p className="font-medium">Smoking</p>
                <p className="text-gray-600">No smoking allowed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };