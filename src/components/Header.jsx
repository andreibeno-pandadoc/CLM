import React from 'react';
import { SearchIcon, NotificationIcon, HelpIcon } from './Icons';
import Avatar from './Avatar';
import { assetUrl } from '../utils/assetUrl';

const searchPlaceholder = (activePage) => {
  if (activePage === 'Templates') return 'Search templates';
  return 'Search or ask anything';
};

const Header = ({ searchQuery, onSearchChange, activePage }) => {
  return (
    <header className="bg-white h-16 border-b border-thesis-border flex items-center px-6 md:px-10">
      <div className="flex-1 flex items-center gap-4">
        {/* Search Bar — documents-next style */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-light w-5 h-5" />
            <input
              type="text"
              placeholder={searchPlaceholder(activePage)}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full h-10 pl-10 pr-4 border border-thesis-border rounded-md text-14 font-graphik-regular text-secondary-dark placeholder:text-secondary-light bg-thesis-search focus:outline-none focus:ring-2 focus:ring-brand-primary/25 focus:border-brand-primary focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <button type="button" className="relative p-2 hover:bg-gray-50 rounded-md transition-colors">
          <NotificationIcon className="w-6 h-6 text-secondary-light" />
        </button>

        {/* Help */}
        <button type="button" className="p-2 hover:bg-gray-50 rounded-md transition-colors">
          <HelpIcon className="w-5 h-5 text-secondary-light" />
        </button>

        {/* User Profile */}
        <button type="button" className="p-1 hover:bg-gray-50 rounded-md transition-colors">
          <Avatar 
            src={assetUrl('images/user-profile.png')} 
            alt="User Profile" 
            size="sm" 
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
