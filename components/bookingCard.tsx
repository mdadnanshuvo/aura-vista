"use client";
import React, { useState } from 'react';
import { Button, Card } from "@nextui-org/react";
import { Check, Users } from "lucide-react";
import { CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";
import {CircularProgress} from "@nextui-org/react";


const BookingSection = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const totalTravelers = adults + children;

  const getTravelersText = () => {
    const parts = [];
    if (adults > 0) parts.push(`${adults} ${adults === 1 ? 'adult' : 'adults'}`);
    if (children > 0) parts.push(`${children} ${children === 1 ? 'child' : 'children'}`);
    return parts.join(', ');
  };


  return (
    <div className="space-y-4 max-w-md mx-auto">
    {/* Member Banner */}
    <Card className="bg-slate-900">
      <CardBody className="p-6">
        <div className="flex items-center gap-2 mb-4 text-white">
        <CircularProgress aria-label="Loading..." />
          <span>Members get our best prices when signed in!</span>
        </div>
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
          Sign in
        </Button>
      </CardBody>
    </Card>

    {/* Booking Card */}
    <Card>
      <CardBody className="p-6">
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold">$134</span>
          <span className="text-slate-600">per night</span>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2">
            <Check className="text-green-500 h-5 w-5" />
            <span>Free cancellation before Mon, Nov 4</span>
          </div>

          <div className="flex items-center gap-2">
            <Check className="text-green-500 h-5 w-5" />
            <span>Your dates are available</span>
          </div>
        </div>

        {/* Traveler Selection */}
        <div className="mb-4">
          <Popover>
            <PopoverTrigger>
              <Button className="w-full justify-between">
                <span>{getTravelersText()}</span>
                <Users className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-4">
              <div className="space-y-4">
                {/* Adults Selection */}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Adults</div>
                    <div className="text-sm text-slate-500">Age 13+</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm"
                     
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{adults}</span>
                    <Button 
                      size="sm"
                    
                      onClick={() => setAdults(adults + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Children Selection */}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Children</div>
                    <div className="text-sm text-slate-500">Ages 2-12</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm"
                      
                      onClick={() => setChildren(Math.max(0, children - 1))}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{children}</span>
                    <Button 
                      size="sm"
                    
                      onClick={() => setChildren(children + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Price Summary */}
        <div className="border-t pt-4 mb-4">
          <div className="flex justify-between mb-2">
            <span>Total</span>
            <span className="font-bold">$268</span>
          </div>
          <div className="flex justify-between text-sm text-slate-600">
            <span>Includes taxes and fees</span>
            <button className="text-blue-600 hover:underline">Details</button>
          </div>
        </div>

        {/* Booking Button */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-2">
          Book Now
        </Button>
        <p className="text-center text-sm text-slate-600">
          You won't be charged yet
        </p>
      </CardBody>
    </Card>
  </div>
  );
};

export default BookingSection;
