import React, { useState } from 'react';
import { 
  Plus, 
  Users, 
  CheckCircle2, 
  XCircle, 
  ChevronRight,
  Bed,
  Image as ImageIcon
} from 'lucide-react';
import AddUnitModal from '../components/Modals/AddUnitModal';
import AddSubunitModal from '../components/Modals/AddSubunitModal';

const Units = () => {
  const [isUnitModalOpen, setIsUnitModalOpen] = useState(false);
  const [isSubunitModalOpen, setIsSubunitModalOpen] = useState(false);
  const [selectedUnitId, setSelectedUnitId] = useState<string | number | undefined>(undefined);

  const [units] = useState([
    {
      id: 1,
      number: '101',
      type: 'Double Sharing',
      capacity: 2,
      occupied: 1,
      price: '₹8,500',
      subunits: [
        { id: '101A', status: 'Occupied', tenant: 'Rahul Sharma' },
        { id: '101B', status: 'Vacant', tenant: null }
      ],
      images: 3
    },
    {
      id: 2,
      number: '102',
      type: 'Single Room',
      capacity: 1,
      occupied: 1,
      price: '₹12,000',
      subunits: [
        { id: '102A', status: 'Occupied', tenant: 'Priya Patel' }
      ],
      images: 2
    },
    {
      id: 3,
      number: '201',
      type: 'Triple Sharing',
      capacity: 3,
      occupied: 2,
      price: '₹7,000',
      subunits: [
        { id: '201A', status: 'Occupied', tenant: 'Amit Singh' },
        { id: '201B', status: 'Occupied', tenant: 'Suresh Kumar' },
        { id: '201C', status: 'Vacant', tenant: null }
      ],
      images: 4
    }
  ]);

  const handleAddSubunit = (unitId: string | number) => {
    setSelectedUnitId(unitId);
    setIsSubunitModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Units & Subunits</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Manage rooms and bed allocations</p>
        </div>
        <div className="flex space-x-3">
          <select className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300">
            <option>All Properties</option>
            <option>Skyline Residency</option>
            <option>Green View PG</option>
          </select>
          <button onClick={() => setIsUnitModalOpen(true)} className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            <Plus size={18} className="mr-2" />
            Add Unit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {units.map((unit) => (
          <div key={unit.id} className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between border-b border-gray-100 p-4 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                  <span className="font-bold">{unit.number}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{unit.type}</h3>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <ImageIcon size={12} className="mr-1" />
                    {unit.images} Photos
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-gray-900 dark:text-white">{unit.price}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">per month</p>
              </div>
            </div>

            <div className="flex-1 p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Subunits (Beds)</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{unit.occupied}/{unit.capacity} Occupied</span>
              </div>
              
              <div className="space-y-2">
                {unit.subunits.map((sub) => (
                  <div key={sub.id} className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-900/50">
                    <div className="flex items-center space-x-3">
                      <Bed size={16} className={sub.status === 'Occupied' ? 'text-blue-600' : 'text-gray-400'} />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{sub.id}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {sub.tenant || 'Available'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {sub.status === 'Occupied' ? (
                        <span className="flex items-center text-xs font-medium text-green-600">
                          <CheckCircle2 size={14} className="mr-1" />
                          Occupied
                        </span>
                      ) : (
                        <span className="flex items-center text-xs font-medium text-gray-500">
                          <XCircle size={14} className="mr-1" />
                          Vacant
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 p-4 dark:border-gray-700">
              <button onClick={() => handleAddSubunit(unit.id)} className="flex w-full items-center justify-center rounded-lg border border-gray-200 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                <Plus size={16} className="mr-2" />
                Add Subunit
              </button>
            </div>
          </div>
        ))}
      </div>

      <AddUnitModal 
        show={isUnitModalOpen} 
        onClose={() => setIsUnitModalOpen(false)} 
      />
      
      <AddSubunitModal 
        show={isSubunitModalOpen} 
        onClose={() => setIsSubunitModalOpen(false)} 
        unitId={selectedUnitId}
      />
    </div>
  );
};

export default Units;
