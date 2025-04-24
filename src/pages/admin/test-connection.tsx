import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SupabaseConnectionTest from '@/components/admin/SupabaseConnectionTest';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const TestConnectionPage = () => {
  return (
    <>
      <Head>
        <title>Test Supabase Connection | AppSwifts Admin</title>
      </Head>
      <div className="min-h-screen bg-gray-100">
        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center mr-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  <ArrowLeftIcon className="h-5 w-5 mr-1" />
                  Back to Home
                </Link>
                <h1 className="text-3xl font-bold leading-tight text-gray-900">
                  Supabase Connection Test
                </h1>
              </div>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="px-4 py-8 sm:px-0">
                <SupabaseConnectionTest />

                <div className="mt-8 bg-white shadow rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Next Steps</h3>
                  <p className="text-gray-600 mb-4">
                    Once your connection is working, you can proceed with the following steps:
                  </p>
                  <ol className="list-decimal pl-5 text-gray-700 space-y-2">
                    <li>Set up the database tables by running <code className="bg-gray-100 px-2 py-1 rounded">npm run setup-supabase</code></li>
                    <li>Create an admin user in Supabase (see SUPABASE_SETUP_GUIDE.md for details)</li>
                    <li>Navigate to the <Link href="/admin/login" className="text-primary hover:underline">login page</Link> to access the admin dashboard</li>
                    <li>Start managing your website content through the admin interface</li>
                  </ol>
                </div>

                <div className="mt-8 bg-white shadow rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Environment Variables</h3>
                  <p className="text-gray-600 mb-4">
                    Make sure you have the following environment variables set in your <code className="bg-gray-100 px-2 py-1 rounded">.env.local</code> file:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
                    <p>NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co</p>
                    <p>NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key</p>
                  </div>
                  <p className="text-gray-600 mt-4">
                    For the setup script, you'll also need these in your <code className="bg-gray-100 px-2 py-1 rounded">.env</code> file:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
                    <p>SUPABASE_URL=https://your-project-id.supabase.co</p>
                    <p>SUPABASE_SERVICE_ROLE_KEY=your-service-role-key</p>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Link
                    href="/admin/login"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Go to Admin Login
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default TestConnectionPage;
