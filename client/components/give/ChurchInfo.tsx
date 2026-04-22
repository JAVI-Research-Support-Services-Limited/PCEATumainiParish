
import React from 'react';
import { Church } from '@/types/give';

interface ChurchInfoProps {
  church: Church;
}

const ChurchInfo: React.FC<ChurchInfoProps> = ({ church }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 transition-all duration-300">
      <div className="relative h-48 group">
        <img
          alt={church.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={church.imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
          <h2 className="text-white text-2xl font-display">{church.name}</h2>
          <p className="text-gray-300 text-sm font-sans">{church.congregation}</p>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-3 text-gray-600">
          <span className="material-icons text-gray-400 text-xl">location_on</span>
          <span className="text-sm font-sans font-medium">{church.address}</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-600">
          <span className="material-icons text-gray-400 text-xl">schedule</span>
          <span className="text-sm font-sans font-medium">Service Times: {church.times}</span>
        </div>
      </div>
    </div>
  );
};

export default ChurchInfo;
