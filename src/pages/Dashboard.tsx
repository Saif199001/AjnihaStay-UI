import React from 'react';
import { 
  Users, 
  Building2, 
  TrendingUp, 
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  Clock
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Tenants', value: '42', icon: Users, change: '+12%', positive: true },
    { label: 'Total Revenue', value: '₹1,24,500', icon: TrendingUp, change: '+8.2%', positive: true },
    { label: 'Pending Dues', value: '₹12,400', icon: AlertCircle, change: '-2.4%', positive: false },
    { label: 'Occupancy Rate', value: '92%', icon: Building2, change: '+4%', positive: true },
  ];

  const recentActivities = [
    { id: 1, type: 'payment', user: 'Rahul Sharma', amount: '₹8,500', status: 'Completed', time: '2 hours ago' },
    { id: 2, type: 'occupancy', user: 'Priya Patel', unit: 'Room 204B', status: 'New Move-in', time: '5 hours ago' },
    { id: 3, type: 'charge', user: 'Amit Singh', amount: '₹450', reason: 'Electricity', time: '1 day ago' },
    { id: 4, type: 'payment', user: 'Sneha Reddy', amount: '₹7,000', status: 'Pending', time: '1 day ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
            Export Report
          </button>
          <button className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
            Add New Property
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div className="rounded-lg bg-blue-50 p-2 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                <stat.icon size={24} />
              </div>
              <div className={`flex items-center text-xs font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.positive ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <div className="flex items-center space-x-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      activity.type === 'payment' ? 'bg-green-100 text-green-600' : 
                      activity.type === 'occupancy' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                    }`}>
                      {activity.type === 'payment' ? <CheckCircle2 size={20} /> : 
                       activity.type === 'occupancy' ? <Users size={20} /> : <AlertCircle size={20} />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {activity.user} {activity.type === 'payment' ? 'paid rent' : 
                                       activity.type === 'occupancy' ? `moved into ${activity.unit}` : 
                                       `was charged for ${activity.reason}`}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {activity.amount && <p className="text-sm font-semibold text-gray-900 dark:text-white">{activity.amount}</p>}
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      activity.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                      activity.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {activity.status || 'Processed'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-700">
              <button className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                View all activity
              </button>
            </div>
          </div>
        </div>

        {/* Occupancy Status */}
        <div className="space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Occupancy Status</h2>
            <div className="space-y-4">
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Occupied (38)</span>
                  <span className="font-medium text-gray-900 dark:text-white">90%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700">
                  <div className="h-2 rounded-full bg-blue-600" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Vacant (4)</span>
                  <span className="font-medium text-gray-900 dark:text-white">10%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700">
                  <div className="h-2 rounded-full bg-gray-300 dark:bg-gray-500" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-100 pt-6 dark:border-gray-700">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <Clock size={16} className="mr-2 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">Upcoming Move-outs</span>
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">3</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-blue-600 p-6 text-white shadow-lg shadow-blue-500/30">
            <h3 className="text-lg font-bold">Need Help?</h3>
            <p className="mt-2 text-sm text-blue-100">
              Check out our documentation or contact support for any assistance.
            </p>
            <button className="mt-4 w-full rounded-lg bg-white px-4 py-2 text-sm font-bold text-blue-600 transition-colors hover:bg-blue-50">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
