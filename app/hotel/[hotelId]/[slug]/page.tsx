import { Hotel } from "@/app/models/hotel";

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

export default async function HotelDetailsPage({
  params: { hotelId, slug },
}: {
  params: { hotelId: string; slug: string };
}) {
  const hotelData = await fetchHotelData(hotelId);

  if (!hotelData) {
    return (
      <div>
        <h1>Error</h1>
        <p>Failed to load hotel data.</p>
      </div>
    );
  }

  if (hotelData.slug !== slug) {
    return (
      <div>
        <h1>Hotel not found</h1>
        <p>The provided slug does not match the hotel data.</p>
      </div>
    );
  }

  console.log(hotelData);

  return (
    <></>
  );
}
