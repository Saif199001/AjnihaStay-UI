import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone, 
  Calendar,
  UserCheck,
  UserMinus
} from 'lucide-react';

const Tenants = () => {
  const [tenants] = useState([
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul.s@example.com',
      phone: '+91 98765 43210',
      property: 'Skyline Residency',
      unit: '101A',
      moveIn: '2023-10-15',
      status: 'Active',
      avatar: 'https://i.pravatar.cc/150?u=rahul'
    },
    {
      id: 2,
      name: 'Priya Patel',
      email: 'priya.p@example.com',
      phone: '+91 98765 43211',
      property: 'Skyline Residency',
      unit: '102A',
      moveIn: '2023-11-01',
      status: 'Active',
      avatar: 'https://i.pravatar.cc/150?u=priya'
    },
    {
      id: 3,
      name: 'Amit Singh',
      email: 'amit.s@example.com',
      phone: '+91 98765 43212',
      property: 'Green View PG',
      unit: '201A',
      moveIn: '2023-09-20',
      status: 'Active',
      avatar: 'https://i.pravatar.cc/150?u=amit'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      email: 'sneha.r@example.com',
      phone: '+91 98765 43213',
      property: 'Urban Living',
      unit: '305B',
      moveIn: '2023-12-05',
      status: 'Pending',
      avatar: 'https://i.pravatar.cc/150?u=sneha'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tenants</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Manage your tenant records and occupancy</p>
        </div>
        <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 sm:w-auto">
          <Plus size={18} className="mr-2" />
          Add Tenant
        </button>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="relative w-full max-w-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-white p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            placeholder="Search by name, email..."
          />
        </div>
        <div className="flex space-x-3">
          <button className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
            <Filter size={16} className="mr-2" />
            Filters
          </button>
          <select className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300">
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-4 font-semibold">Tenant</th>
                <th className="px-6 py-4 font-semibold">Contact</th>
                <th className="px-6 py-4 font-semibold">Property / Unit</th>
                <th className="px-6 py-4 font-semibold">Move-in Date</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {tenants.map((tenant) => (
                <tr key={tenant.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={tenant.avatar} 
                        alt={tenant.name} 
                        className="h-10 w-10 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{tenant.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">ID: #T{tenant.id}00{tenant.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-xs">
                        <Mail size={12} className="mr-1" />
                        {tenant.email}
                      </div>
                      <div className="flex items-center text-xs">
                        <Phone size={12} className="mr-1" />
                        {tenant.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900 dark:text-white">{tenant.property}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Unit: {tenant.unit}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-xs">
                      <Calendar size={14} className="mr-1" />
                      {tenant.moveIn}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      tenant.status === 'Active' ? 'bg-green-100 text-green-800' : 
                      tenant.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {tenant.status === 'Active' ? <UserCheck size={12} className="mr-1" /> : <UserMinus size={12} className="mr-1" />}
                      {tenant.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tenants;
