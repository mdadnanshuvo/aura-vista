import { Bath, BedDouble, Square, Users } from "lucide-react";

// 2. Property Details Component
const PropertyDetails = () => {
    return (
      <div className="mb-8">
        <div className="text-gray-600 mb-2">Entire home</div>
        <h1 className="text-2xl font-bold mb-4">
          Juneau Vacation Home: Stunning View + Beach Access
        </h1>
        
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-emerald-600 text-white px-2 py-1 rounded-md">9.8</span>
          <span className="font-medium">Exceptional</span>
          <a href="#" className="text-blue-600 hover:underline">
            See all 24 reviews →
          </a>
        </div>
  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <BedDouble className="w-5 h-5" />
            <span>2 bedrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-5 h-5" />
            <span>1 bathroom</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>Sleeps 4</span>
          </div>
          <div className="flex items-center gap-2">
            <Square className="w-5 h-5" />
            <span>1155 sq ft</span>
          </div>
        </div>
      </div>
    );
  };

  export default PropertyDetails;