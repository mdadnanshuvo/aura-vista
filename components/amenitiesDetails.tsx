import { Utensils, Waves, Car, Trees, Search, Baby, Dog, PartyPopper, Cigarette } from 'lucide-react';

const AmenitiesDetails = () => {
  const amenities = [
    { icon: <Utensils className="w-5 h-5" />, label: 'Kitchen' },
    { icon: <Waves className="w-5 h-5" />, label: 'Ocean view' },
    { icon: <Car className="w-5 h-5" />, label: 'Parking available' },
    { icon: <Trees className="w-5 h-5" />, label: 'Outdoor Space' },
    { icon: <Dog className="w-5 h-5" />, label: 'Pet friendly' },
    { icon: <Baby className="w-5 h-5" />, label: 'Family friendly' },
    { icon: <PartyPopper className="w-5 h-5" />, label: 'Events allowed' },
    { icon: <Cigarette className="w-5 h-5" />, label: 'Smoking allowed' }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
            {amenity.icon}
            <span className="text-gray-600">{amenity.label}</span>
          </div>
        ))}
      </div>
      <button 
        className="text-blue-600 hover:text-blue-800 hover:underline mt-4 inline-flex items-center gap-2"
      >
        <Search className="w-4 h-4" />
        <span>See all 34 amenities</span>
      </button>
    </div>
  );
};

export default AmenitiesDetails;