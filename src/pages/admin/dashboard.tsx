import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import Head from 'next/head';
import AdminLayout from '@/components/admin/AdminLayout';
import DashboardStats from '@/components/admin/DashboardStats';
import RecentActivity from '@/components/admin/RecentActivity';
import QuickActions from '@/components/admin/QuickActions';

const Dashboard = () => {
  const { user, loading, isAdmin } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !loading) {
      if (!user) {
        router.push('/admin/login');
      } else if (!isAdmin) {
        router.push('/admin/unauthorized');
      }
    }
  }, [user, loading, isAdmin, router, isClient]);

  if (loading || !isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null; // Will redirect in useEffect
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard | AppSwifts</title>
      </Head>
      <AdminLayout>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <DashboardStats />
              
              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <QuickActions />
                <RecentActivity />
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default Dashboard;
