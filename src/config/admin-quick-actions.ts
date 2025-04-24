
import { 
  PlusCircleIcon, 
  PencilSquareIcon, 
  ArrowPathIcon, 
  CloudArrowUpIcon 
} from '@heroicons/react/24/outline';

export interface QuickAction {
  title: string;
  description: string;
  icon: any; // Heroicon component type
  href: string;
  color: string;
}

export const quickActions: QuickAction[] = [
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
