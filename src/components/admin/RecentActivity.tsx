import React from 'react';
import { CheckCircleIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

const activities = [
  {
    id: 1,
    type: 'create',
    person: { name: 'Admin User' },
    date: '2 hours ago',
    target: 'Kigali Tourism Portal',
    targetType: 'portfolio',
    icon: PlusIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 2,
    type: 'update',
    person: { name: 'Admin User' },
    date: '1 day ago',
    target: 'Services Section',
    targetType: 'content',
    icon: PencilIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    type: 'delete',
    person: { name: 'Admin User' },
    date: '2 days ago',
    target: 'Old Testimonial',
    targetType: 'testimonial',
    icon: TrashIcon,
    iconBackground: 'bg-red-500',
  },
  {
    id: 4,
    type: 'publish',
    person: { name: 'Admin User' },
    date: '3 days ago',
    target: 'Website Updates',
    targetType: 'site',
    icon: CheckCircleIcon,
    iconBackground: 'bg-purple-500',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function RecentActivity() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Latest actions performed on the website.
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="flow-root">
          <ul className="-mb-8">
            {activities.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {activityIdx !== activities.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span
                        className={classNames(
                          activity.iconBackground,
                          'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                        )}
                      >
                        <activity.icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          {activity.type === 'create' && (
                            <>
                              <span className="font-medium text-gray-900">{activity.person.name}</span>{' '}
                              created a new {activity.targetType}{' '}
                              <span className="font-medium text-gray-900">{activity.target}</span>
                            </>
                          )}
                          {activity.type === 'update' && (
                            <>
                              <span className="font-medium text-gray-900">{activity.person.name}</span>{' '}
                              updated the {activity.targetType}{' '}
                              <span className="font-medium text-gray-900">{activity.target}</span>
                            </>
                          )}
                          {activity.type === 'delete' && (
                            <>
                              <span className="font-medium text-gray-900">{activity.person.name}</span>{' '}
                              deleted {activity.targetType}{' '}
                              <span className="font-medium text-gray-900">{activity.target}</span>
                            </>
                          )}
                          {activity.type === 'publish' && (
                            <>
                              <span className="font-medium text-gray-900">{activity.person.name}</span>{' '}
                              published {activity.targetType}{' '}
                              <span className="font-medium text-gray-900">{activity.target}</span>
                            </>
                          )}
                        </p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        <time dateTime={activity.date}>{activity.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <a
            href="#"
            className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            View all activity
          </a>
        </div>
      </div>
    </div>
  );
}
