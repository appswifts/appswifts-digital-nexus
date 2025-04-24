
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const SupabaseConnectionTest = () => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Testing connection to Supabase...');
  const [supabaseUrl, setSupabaseUrl] = useState('');

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Get the Supabase URL from environment variable
        const url = import.meta.env.VITE_SUPABASE_URL || 'Not configured';
        setSupabaseUrl(url);

        // Test the connection by making a simple query
        const { data, error } = await supabase.from('users').select('count').limit(1);

        if (error) {
          throw error;
        }

        setStatus('success');
        setMessage('Successfully connected to Supabase!');
      } catch (error: any) {
        console.error('Supabase connection error:', error);
        setStatus('error');
        setMessage(`Failed to connect to Supabase: ${error.message || 'Unknown error'}`);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Supabase Connection Test</h3>
      
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-500">Supabase URL:</p>
        <p className="text-sm font-mono bg-gray-100 p-2 rounded mt-1 break-all">
          {supabaseUrl}
        </p>
      </div>
      
      <div className={`mt-4 p-4 rounded-md ${
        status === 'loading' ? 'bg-blue-50' : 
        status === 'success' ? 'bg-green-50' : 
        'bg-red-50'
      }`}>
        <div className="flex">
          <div className="flex-shrink-0">
            {status === 'loading' && (
              <svg className="h-5 w-5 text-blue-400 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            {status === 'success' && (
              <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
            {status === 'error' && (
              <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <div className="ml-3">
            <p className={`text-sm font-medium ${
              status === 'loading' ? 'text-blue-800' : 
              status === 'success' ? 'text-green-800' : 
              'text-red-800'
            }`}>
              {message}
            </p>
          </div>
        </div>
      </div>

      {status === 'error' && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Troubleshooting Steps:</h4>
          <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-1">
            <li>Check that your Supabase URL and anon key are correctly set in your .env.local file</li>
            <li>Verify that your Supabase project is up and running</li>
            <li>Ensure that the database tables have been created</li>
            <li>Check that the Row Level Security (RLS) policies are properly configured</li>
            <li>Look at the browser console for more detailed error messages</li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default SupabaseConnectionTest;
