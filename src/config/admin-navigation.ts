
import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  InboxIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export const navigation = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon },
  { name: 'Portfolio', href: '/admin/portfolio', icon: FolderIcon },
  { name: 'Services', href: '/admin/services', icon: InboxIcon },
  { name: 'Testimonials', href: '/admin/testimonials', icon: UsersIcon },
  { name: 'Site Content', href: '/admin/content', icon: CalendarIcon },
  { name: 'Analytics', href: '/admin/analytics', icon: ChartBarIcon },
];
