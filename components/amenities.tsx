// 3. Amenities Component
const AmenitiesSection = () => {
    const amenities = [
      { icon: "🔥", label: "Barbecue grill" },
      { icon: "🧺", label: "Washer" },
      { icon: "🌳", label: "Outdoor Space" },
      { icon: "🅿️", label: "Parking available" },
      { icon: "🍳", label: "Kitchen" },
      { icon: "👕", label: "Dryer" }
    ];
  
    return (
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Popular amenities</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-xl">{amenity.icon}</span>
              <span>{amenity.label}</span>
            </div>
          ))}
        </div>
        <a href="#" className="text-blue-600 hover:underline">
          See all property amenities →
        </a>
      </div>
    );
  };
  
  export default AmenitiesSection;