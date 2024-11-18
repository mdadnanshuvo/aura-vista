const ImportantInformation = () => {
    const information = [
      "Extra person charges may apply and vary depending on property policy",
      "Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges",
      "Requests for specific room types or locations may incur additional charges; special requests cannot be guaranteed",
      "Onsite parties or group events are strictly prohibited",
      "Host has indicated there is a carbon monoxide detector on the property",
      "Host has indicated there is a smoke detector on the property",
      "Safety features at this property include a fire extinguisher and a first aid kit"
    ];
  
    return (
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Important information</h2>
        <div className="space-y-2">
          <h3 className="font-medium mb-2">You need to know</h3>
          <ul className="space-y-2">
            {information.map((info, index) => (
              <li key={index} className="text-gray-600">{info}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  