import React from 'react';
import { 
  UsersIcon, 
  DocumentTextIcon, 
  PhotoIcon, 
  CubeIcon 
} from '@heroicons/react/24/outline';

const stats = [
  { 
    name: 'Total Portfolio Items', 
    stat: '12', 
    icon: PhotoIcon, 
    change: '+2.5%', 
    changeType: 'increase',
    href: '/admin/portfolio'
  },
  { 
    name: 'Services', 
    stat: '6', 
    icon: CubeIcon, 
    change: '0%', 
    changeType: 'neutral',
    href: '/admin/services'
  },
  { 
    name: 'Testimonials', 
    stat: '8', 
    icon: UsersIcon, 
    change: '+12.5%', 
    changeType: 'increase',
    href: '/admin/testimonials'
  },
  { 
    name: 'Content Sections', 
    stat: '5', 
    icon: DocumentTextIcon, 
    change: '+20%', 
    changeType: 'increase',
    href: '/admin/content'
  },
];

export default function DashboardStats() {
  return (
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Website Statistics
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="relative bg-white pt-5 px-4 pb-6 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <dt>
              <div className="absolute bg-primary rounded-md p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  item.changeType === 'increase'
                    ? 'text-green-600'
                    : item.changeType === 'decrease'
                    ? 'text-red-600'
                    : 'text-gray-500'
                }`}
              >
                {item.changeType === 'increase' ? (
                  <svg
                    className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : item.changeType === 'decrease' ? (
                  <svg
                    className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : null}
                <span className="sr-only">
                  {item.changeType === 'increase'
                    ? 'Increased'
                    : item.changeType === 'decrease'
                    ? 'Decreased'
                    : 'No change'}{' '}
                  by
                </span>
                {item.change}
              </p>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-2">
                <div className="text-sm">
                  <a
                    href={item.href}
                    className="font-medium text-primary hover:text-primary-dark"
                  >
                    View all
                    <span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
