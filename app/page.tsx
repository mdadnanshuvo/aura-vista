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
import AmenitiesDetails from "@/components/amenitiesDetails";

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
            {/* Property Details Section */}
            <PropertyDetails />

            {/* Rooms and Beds Section */}
            <RoomsAndBeds />

            {/* About Property Section */}
            <AboutProperty />

            {/* Amenities Section */}
            <AmenitiesSection />

            {/* House Rules */}
            <HouseRules />

            {/* Important Information */}
            <ImportantInfo />

            {/* Map Section */}
            <MapSection />

            {/* FAQ Section */}
            <FAQSection />

            {/* Question Section */}
            <QuestionSection />
          </div>

          {/* Right Column - Booking Section */}
          <div className="lg:col-span-1">
            <BookingSection />
            <div className="mt-4 text-right text-sm text-gray-600">
              <div>Contact host</div>
              <div>Property # 9838104ha</div>
            </div>

            {/* Damage and Cancellation */}
            <DamageAndCancellation />
          </div>
        </div>
      </div>
    </div>
  );
}
