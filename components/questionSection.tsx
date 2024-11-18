import ImageGallery from "@/components/ImageGallary";
import TabsSection from "@/components/tabs";
import PropertyDetails from "@/components/propertyDetails";
import AmenitiesSection from "@/components/amenities";
import MapSection from "@/components/mapSection";
import BookingSection from "@/components/bookingCard";
import AboutProperty from "@/components/aboutProperty";
import RoomsAndBeds from "@/components/rooms_beds";
import HouseRules from "@/components/houseRules";
import ImportantInfo from "@/components/importantInfo";
import DamageAndCancellation from "@/components/damageCancellation";
import FAQSection from "@/components/faq";
import QuestionSection from "@/components/questionSection";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Image Gallery */}
      <ImageGallery />

      {/* Tabs Section */}
      <div className="px-6">
        <TabsSection />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 mt-8">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2">
          {/* Property Details */}
          <PropertyDetails />

          {/* Rooms and Beds */}
          <RoomsAndBeds />

          {/* About Property */}
          <AboutProperty />

          {/* Amenities */}
          <AmenitiesSection />

          {/* Questions Section */}
          <QuestionSection />

          {/* House Rules */}
          <HouseRules />

          {/* Damage and Cancellation */}
          <DamageAndCancellation />

          {/* Important Information */}
          <ImportantInfo />

          {/* Frequently Asked Questions */}
          <FAQSection />

          {/* Map Section */}
          <MapSection />
        </div>

        {/* Right Column - Booking Section */}
        <div className="lg:col-span-1 space-y-6">
          {/* Booking Section */}
          <BookingSection />

          {/* Host and Contact Details */}
          <div className="text-right text-sm text-gray-600">
            <div>Contact host</div>
            <div>Property # 9838104ha</div>
          </div>
        </div>
      </div>
    </div>
  );
}
