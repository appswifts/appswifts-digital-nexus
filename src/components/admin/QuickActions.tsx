import React from 'react';
import Link from 'next/link';
import { 
  PlusCircleIcon, 
  PencilSquareIcon, 
  ArrowPathIcon, 
  CloudArrowUpIcon 
} from '@heroicons/react/24/outline';

const actions = [
  {
    title: 'Add Portfolio Item',
    description: 'Create a new portfolio project to showcase your work.',
    icon: PlusCircleIcon,
    href: '/admin/portfolio/new',
    color: 'bg-blue-500',
  },
  {
    title: 'Edit Services',
    description: 'Update your service offerings and descriptions.',
    icon: PencilSquareIcon,
    href: '/admin/services',
    color: 'bg-green-500',
  },
  {
    title: 'Update Content',
    description: 'Modify website content like hero section and about us.',
    icon: ArrowPathIcon,
    href: '/admin/content',
    color: 'bg-purple-500',
  },
  {
    title: 'Publish Changes',
    description: 'Push your changes live to the website.',
    icon: CloudArrowUpIcon,
    href: '/admin/publish',
    color: 'bg-indigo-500',
  },
];

export default function QuickActions() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Quick Actions</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Common tasks you might want to perform.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
          {actions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
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
          ))}
        </div>
      </div>
    </div>
  );
}
