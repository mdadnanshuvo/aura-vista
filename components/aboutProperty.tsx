import React from 'react';

const AboutProperty = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-6">About this property</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium mb-3">Juneau Vacation Home: Stunning View + Beach Access</h3>
          <p className="text-gray-600 mb-4">
            Escape to the mountains and experience the great outdoors at this lovely Juneau vacation rental. 
            Perched on the shore of Lena Cove, this 2-bedroom, 1 bath home is the perfect getaway for those 
            looking to enjoy a relaxing retreat surrounded by nature. Spend your day fishing for King Salmon, 
            exploring Lena Beach and the rocky coastline, or hiking the nearby trails. After your outdoor 
            adventure, kick back on the private deck and admire the breathtaking panoramic views!
          </p>
        </div>

        <div>
          <h4 className="text-gray-500 uppercase text-sm font-medium mb-2">-- THE PROPERTY --</h4>
          <p className="text-gray-600 mb-2">CBJ1000104 | 1,115 Sq Ft | 2 Private Decks | Lena Cove & Mountain Views | 2 Bicycles Provided</p>
          <p className="text-gray-600 mb-4">Bedroom 1: Queen Bed, Full Floor Mattress | Bedroom 2: Extra Long Twin Bed</p>
          
          <div className="space-y-4">
            <div>
              <h5 className="font-medium">HOME HIGHLIGHTS:</h5>
              <p className="text-gray-600">Flat-screen TV, dining table, washer/dryer</p>
            </div>
            <div>
              <h5 className="font-medium">KITCHEN:</h5>
              <p className="text-gray-600">Fridge, stove, coffee maker, microwave, cooking basics, toaster, dishware/flatware, trash bags/paper towels, Crockpot</p>
            </div>
            <div>
              <h5 className="font-medium">GENERAL:</h5>
              <p className="text-gray-600">Free WiFi, central heating, linens/towels, keyless entry, hair dryer, ceiling fans</p>
            </div>
            <div>
              <h5 className="font-medium">FAQ:</h5>
              <p className="text-gray-600">No A/C, stairs required to access</p>
            </div>
            <div>
              <h5 className="font-medium">PARKING:</h5>
              <p className="text-gray-600">Driveway (2 vehicles), RV parking allowed</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-gray-500 uppercase text-sm font-medium mb-2">-- THE LOCATION --</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-medium">GREAT OUTDOORS:</h5>
              <p className="text-gray-600">Lena Cove (on-site), Lena Beach Recreation Area (0.5 miles), Glacier Gardens Rainforest Adventure (10 miles), Mendenhall Glacier (10 miles), Twin Lakes (13 miles)</p>
            </div>
            <div>
              <h5 className="font-medium">THINGS TO DO:</h5>
              <p className="text-gray-600">Mendenhall Golf (8 miles), Dimond Park Aquatic Center (8 miles), Riverside Rotary Park (8 miles), Alaska State Museum (16 miles), Last Chance Mining Museum (18 miles), AJ Mine Gastineau Mill Tours (20 miles)</p>
            </div>
            <div>
              <h5 className="font-medium">LOCAL FARE:</h5>
              <p className="text-gray-600">Forbidden Peak Brewery (5 miles), The Grind Coffee Company (7 miles), Four Plates Cocina Peruana (7 miles), Sandbar & Grill (7 miles), Zerelda's Bistro (8 miles), Donna's Restaurant (13 miles), Alaskan Brewing Co. (13 miles)</p>
            </div>
            <div>
              <h5 className="font-medium">AIRPORT:</h5>
              <p className="text-gray-600">Juneau International Airport (9 miles)</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-gray-500 uppercase text-sm font-medium mb-2">-- REST EASY WITH US --</h4>
          <p className="text-gray-600">
            Evolve makes it easy to find and book properties you'll never want to leave. You can relax knowing 
            that our properties will always be ready for you and that we'll answer the phone 24/7. Even better, 
            if anything is off about your stay, we'll make it right. You can count on our homes and our people 
            to make you feel welcome--because we know what vacation means to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutProperty;