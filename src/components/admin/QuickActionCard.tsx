
import React from 'react';
import { Link } from 'react-router-dom';
import { type QuickAction } from '@/config/admin-quick-actions';

interface QuickActionCardProps {
  action: QuickAction;
}

export const QuickActionCard: React.FC<QuickActionCardProps> = ({ action }) => {
  return (
    <Link
      to={action.href}
      className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      <div className={`flex-shrink-0 h-10 w-10 rounded-full ${action.color} flex items-center justify-center`}>
        <action.icon className="h-6 w-6 text-white" aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-0">
        <span className="absolute inset-0" aria-hidden="true" />
        <p className="text-sm font-medium text-gray-900">{action.title}</p>
        <p className="text-sm text-gray-500 truncate">{action.description}</p>
      </div>
    </Link>
  );
};
