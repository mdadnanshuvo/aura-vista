import React from 'react';

const MapSection = () => {
  const locations = [
    { name: "Auke Bay", distance: "6 min drive" },
    { name: "University of Alaska-Southeast", distance: "10 min drive" },
    { name: "Mendenhall Golf Course", distance: "14 min drive" },
    { name: "Juneau, AK (JNU-Juneau Intl.)", distance: "14 min drive" }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Explore the area</h2>
      <div className="md:flex md:gap-6">
        <div className="bg-gray-100 rounded-lg p-4 mb-4 md:mb-0 md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37275094.95183137!2d-164.4254112913818!3d64.20084140973512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5143175c7eb7bb5f%3A0x34bb3a2c7892ecff!2sAlaska%2C%20USA!5e0!3m2!1sen!2sus!4v1602180993930!5m2!1sen!2sus"
            className="w-full h-48 md:h-full rounded-lg"
            frameBorder="0"
          
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2">
          <div className="space-y-4">
            {locations.map((location, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{location.name}</span>
                <span className="text-gray-600">{location.distance}</span>
              </div>
            ))}
          </div>
          <a href="#" className="text-blue-600 hover:underline mt-4 block">
            See more about this area →
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapSection;