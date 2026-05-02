import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Download, 
  Filter, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  MoreVertical,
  CreditCard
} from 'lucide-react';

const Billing = () => {
  const [invoices] = useState([
    {
      id: 'INV-2024-001',
      tenant: 'Rahul Sharma',
      property: 'Skyline Residency',
      amount: '₹8,950',
      dueDate: '2024-04-05',
      status: 'Paid',
      type: 'Rent + Electricity'
    },
    {
      id: 'INV-2024-002',
      tenant: 'Priya Patel',
      property: 'Skyline Residency',
      amount: '₹12,000',
      dueDate: '2024-04-05',
      status: 'Pending',
      type: 'Rent'
    },
    {
      id: 'INV-2024-003',
      tenant: 'Amit Singh',
      property: 'Green View PG',
      amount: '₹7,450',
      dueDate: '2024-04-05',
      status: 'Partial',
      paid: '₹4,000',
      type: 'Rent + Food'
    },
    {
      id: 'INV-2024-004',
      tenant: 'Suresh Kumar',
      property: 'Green View PG',
      amount: '₹7,000',
      dueDate: '2024-04-05',
      status: 'Overdue',
      type: 'Rent'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Billing & Invoices</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Track payments, generate invoices and manage dues</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 sm:w-auto dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
            <Download size={18} className="mr-2" />
            Export All
          </button>
          <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 sm:w-auto">
            <Plus size={18} className="mr-2" />
            Create Invoice
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Collected</p>
          <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">₹85,400</p>
          <div className="mt-2 flex items-center text-xs text-green-600">
            <CheckCircle2 size={14} className="mr-1" />
            82% of total expected
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending Dues</p>
          <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">₹18,250</p>
          <div className="mt-2 flex items-center text-xs text-yellow-600">
            <Clock size={14} className="mr-1" />
            12 invoices pending
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Overdue Amount</p>
          <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">₹7,000</p>
          <div className="mt-2 flex items-center text-xs text-red-600">
            <AlertCircle size={14} className="mr-1" />
            3 invoices overdue
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="relative w-full max-w-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-white p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            placeholder="Search invoice or tenant..."
          />
        </div>
        <div className="flex space-x-3">
          <button className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
            <Filter size={16} className="mr-2" />
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-4 font-semibold">Invoice ID</th>
                <th className="px-6 py-4 font-semibold">Tenant / Property</th>
                <th className="px-6 py-4 font-semibold">Amount</th>
                <th className="px-6 py-4 font-semibold">Due Date</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center font-medium text-gray-900 dark:text-white">
                      <CreditCard size={16} className="mr-2 text-gray-400" />
                      {invoice.id}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{invoice.type}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900 dark:text-white">{invoice.tenant}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{invoice.property}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900 dark:text-white">{invoice.amount}</p>
                    {invoice.paid && <p className="text-xs text-green-600">Paid: {invoice.paid}</p>}
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-900 dark:text-white">{invoice.dueDate}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      invoice.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                      invoice.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      invoice.status === 'Partial' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                        <Download size={18} />
                      </button>
                      <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                        <MoreVertical size={18} />
                      </button>
                    </div>
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

export default Billing;
