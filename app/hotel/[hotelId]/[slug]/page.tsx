"use client";

import { useEffect, useState } from "react";
import { Hotel } from "@/app/models/hotel";
import ImageGallery from "@/components/ImageGallary";
import TabsSection from "@/components/tabs";
import PropertyDetails from "@/components/propertyDetails";
import AmenitiesSection from "@/components/amenities";
import MapSection from "@/components/mapSection";
import BookingSection from "@/components/bookingCard";

async function fetchHotelData(hotelId: string): Promise<Hotel | null> {
  try {
    const response = await fetch(`http://localhost:3000/hotel/${hotelId}`, {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Failed to fetch hotel data");
    return await response.json();
  } catch (error) {
    console.error("Error fetching hotel data:", error);
    return null;
  }
}

export default function HotelDetailsPage({
  params: { hotelId, slug },
}: {
  params: { hotelId: string; slug: string };
}) {
  const [hotelData, setHotelData] = useState<Hotel | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getHotelData() {
      const data = await fetchHotelData(hotelId);

      if (!data) {
        setError("Failed to load hotel data.");
        return;
      }

      if (data.slug !== slug) {
        setError("The provided slug does not match the hotel data.");
        return;
      }

      setHotelData(data);
    }

    getHotelData();
  }, [hotelId, slug]);

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!hotelData) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

 


  return (
    <div>
      <div className="max-w-7xl mx-auto">
        {/* Dynamic Image Gallery */}
        <ImageGallery data={hotelData} />

        <div className="px-6">
          <TabsSection />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PropertyDetails />
              <AmenitiesSection />
              <MapSection />
            </div>

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
    </div>
  );
}
