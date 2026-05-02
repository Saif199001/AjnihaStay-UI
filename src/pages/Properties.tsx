import React, { useState } from 'react';
import { useEffect } from "react";
import api from "../services/api";
import AddPropertyModal from '../components/Modals/AddPropertyModal';
import { Building2, MapPin, Plus, MoreVertical, Edit2, Trash2 } from 'lucide-react';

const getImageUrl = (img: any) => {
  if (!img) return "/fallback.png";

  if (img.url) return img.url;

  if (img.startsWith("http")) return img;

  return `https://res.cloudinary.com/ds1hp7dqg/${img}`;
};

const Properties = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddSuccess = (newProperty) => {
    setProperties((prev) => [...prev, newProperty]);
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await api.get("/api/properties/");
        setProperties(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Properties</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Manage all your rental properties in one place</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          <Plus size={18} className="mr-2" />
          Add Property
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <div key={property.id} className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
            <div className="relative h-48 w-full">
              <img 
                src={getImageUrl(property.thumbnail)}
                alt={property.name} 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute right-2 top-2">
                <button className="rounded-lg bg-white/90 p-1.5 text-gray-700 backdrop-blur-sm hover:bg-white dark:bg-gray-800/90 dark:text-gray-300">
                  <MoreVertical size={18} />
                </button>
              </div>
              <div className="absolute bottom-2 left-2">
                <span className="rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white">
                  {property.property_type}
                </span>
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{property.name}</h3>
              <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <MapPin size={16} className="mr-1 shrink-0" />
                <span className="truncate">{property.address}, {property.city}</span>
              </div>
              
              <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
                <div className="flex items-center text-sm">
                  <Building2 size={16} className="mr-1 text-blue-600" />
                  <span className="font-medium text-gray-900 dark:text-white">{property.units} Units</span>
                </div>
                <div className="flex space-x-2">
                  <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                    <Edit2 size={16} />
                  </button>
                  <button className="rounded-lg p-2 text-red-500 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Property Placeholder */}
        <button onClick={() => setIsModalOpen(true)} className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-6 transition-colors hover:border-blue-500 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-blue-400 dark:hover:bg-blue-900/10">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400">
            <Plus size={24} />
          </div>
          <span className="mt-4 text-sm font-medium text-gray-900 dark:text-white">Add New Property</span>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Create a new property listing</p>
        </button>
      </div>
      <AddPropertyModal 
        show={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleAddSuccess}
      />
    </div>
  );
}; 


export default Properties;
