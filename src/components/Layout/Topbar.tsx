import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white px-4 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center gap-3">
        <button 
          onClick={onMenuClick}
          className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <Menu className="h-6 w-6" />
        </button>
        
        <div className="hidden w-full max-w-md items-center md:flex">
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Search properties, tenants..."
            />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        
        <div className="flex items-center space-x-3 border-l border-gray-200 pl-4 dark:border-gray-700">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Property Owner</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
            <User className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
