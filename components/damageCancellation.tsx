const DamageAndCancellation = () => {
    return (
      <div className="space-y-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Damage and incidentals</h2>
          <p className="text-gray-600">
            You will be responsible for any damage to the rental property caused by you or your party during your stay.
          </p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Cancellation</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <div className="h-3 w-3 bg-blue-600 rounded-full mx-auto mb-1"></div>
                <p className="text-sm">Today</p>
              </div>
              <div className="h-0.5 flex-1 bg-gray-300 mx-4"></div>
              <div className="text-center">
                <div className="h-3 w-3 bg-blue-600 rounded-full mx-auto mb-1"></div>
                <p className="text-sm">Nov 4</p>
              </div>
              <div className="h-0.5 flex-1 bg-gray-300 mx-4"></div>
              <div className="text-center">
                <div className="h-3 w-3 bg-blue-600 rounded-full mx-auto mb-1"></div>
                <p className="text-sm">Check in</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium">Before Nov 4</p>
                <p className="font-medium">Full refund</p>
                <p className="text-sm text-gray-600">Cancel your reservation before Nov 4 3:00 PM and you'll get a full refund. These are based on our standard policy.</p>
              </div>
              <div>
                <p className="font-medium">After Nov 4</p>
                <p className="font-medium">No refund</p>
                <p className="text-sm text-gray-600">After that, you won't get a refund.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DamageAndCancellation;