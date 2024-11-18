"use client";
import { useState } from "react";

const TabsSection = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const tabs = ['Overview', 'Amenities', 'Policies'];
  
    return (
      <div className="border-b mb-6">
        <ul className="flex gap-6">
          {tabs.map((tab) => (
            <li key={tab}>
              <button
                className={`py-2 px-1 border-b-2 transition-colors ${
                  activeTab === tab ? 'border-blue-500 text-blue-500' : 'border-transparent'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default TabsSection;