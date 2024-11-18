
import ImageGallery from "@/components/ImageGallary";
import TabsSection from "@/components/tabs";
import PropertyDetails from "@/components/propertyDetails";
import AmenitiesSection from "@/components/amenities";
import MapSection from "@/components/mapSection";
import BookingSection from "@/components/bookingCard";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
    {/* Image Gallery */}
    <ImageGallery />

    {/* Main Content */}
    <div className="px-6">
      {/* Tabs Section */}
      <TabsSection />

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2">
          <PropertyDetails />
          <AmenitiesSection />
          <MapSection />
        </div>

        {/* Right Column - Booking Section */}
        <div className="lg:col-span-1">
          <BookingSection />
          <div className="mt-4 text-right text-sm text-gray-600">
            <div>Contact host</div>
            <div>Property # 9838104ha</div>
          </div>
        </div>
      </div>
    </div>
  </div>
     

     
    
  );
}
