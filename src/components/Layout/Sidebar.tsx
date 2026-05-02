import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  Home, 
  Users, 
  ReceiptIndianRupee, 
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { useAuth } from '../../context/AuthContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { logout } = useAuth();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
    { icon: Building2, label: 'Properties', href: '/properties' },
    { icon: Home, label: 'Units', href: '/units' },
    { icon: Users, label: 'Tenants', href: '/tenants' },
    { icon: ReceiptIndianRupee, label: 'Billing', href: '/billing' },
  ];

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 z-40 h-screen w-64 border-r border-gray-200 bg-white transition-transform dark:border-gray-700 dark:bg-gray-800 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-full flex-col overflow-y-auto px-3 py-4">
        <div className="mb-10 flex items-center justify-between px-2">
          <div className="flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Building2 size={20} />
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">RentFlow</span>
          </div>
          <button 
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <LogOut className="h-5 w-5 rotate-180" />
          </button>
        </div>
        
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => {
                if (window.innerWidth < 1024) onClose();
              }}
              className={({ isActive }) =>
                cn(
                  'flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                )
              }
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto border-t border-gray-200 pt-4 dark:border-gray-700">
          <button
            onClick={logout}
            className="flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
