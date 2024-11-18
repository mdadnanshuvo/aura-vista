import React from 'react';
import {  Waves, Car, Trees, Search, Baby, Dog, PartyPopper, Cigarette } from 'lucide-react';

const QuestionSection = () => {
    return (
      <div className="mb-8 bg-blue-50 p-4 rounded-lg">
        <div className="space-y-2">
          <h3 className="font-semibold">Have a question?</h3>
          <p className="text-sm text-gray-600">Get instant answers with AI powered search of property information and reviews.</p>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="e.g. Is there free parking?"
              className="w-full pl-10 pr-12 py-2 rounded-lg border border-gray-300"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  