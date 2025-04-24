
import React from 'react';
import { useAuth } from '@/context/AuthContext';

interface UserProfileProps {
  className?: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ className }) => {
  const { user, signOut } = useAuth();
  
  return (
    <div className={className}>
      <div className="flex-shrink-0 w-full group block">
        <div className="flex items-center">
          <div>
            <div className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-primary">
              <span className="text-sm font-medium leading-none text-white">
                {user?.email?.charAt(0).toUpperCase() || 'A'}
              </span>
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              {user?.email || 'Admin User'}
            </p>
            <button
              onClick={signOut}
              className="text-xs font-medium text-gray-500 group-hover:text-gray-700"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
