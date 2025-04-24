import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import AdminLayout from '@/components/admin/AdminLayout';
import { supabase, Portfolio } from '@/lib/supabase';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const PortfolioItemForm = () => {
  const { user, loading, isAdmin } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  const isNewItem = id === 'new';
  
  const [formData, setFormData] = useState<Partial<Portfolio>>({
    title: '',
    description: '',
    image_url: '',
    link: '',
    category: '',
    type: 'default',
    video_url: '',
    order: 0,
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
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
      } else if (!isNewItem && id) {
        fetchPortfolioItem(id as string);
      } else {
        setIsLoading(false);
      }
    }
  }, [user, loading, isAdmin, router, id, isNewItem, isClient]);

  const fetchPortfolioItem = async (itemId: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('portfolio')
        .select('*')
        .eq('id', itemId)
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        setFormData(data);
      }
    } catch (err: any) {
      console.error('Error fetching portfolio item:', err);
      setError(err.message || 'Failed to load portfolio item');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);
    setSuccess(null);

    try {
      // Add timestamp
      const updatedData = {
        ...formData,
        updated_at: new Date().toISOString(),
      };

      let result;

      if (isNewItem) {
        // Create new item
        result = await supabase
          .from('portfolio')
          .insert([{ ...updatedData, created_at: new Date().toISOString() }]);
      } else {
        // Update existing item
        result = await supabase
          .from('portfolio')
          .update(updatedData)
          .eq('id', id);
      }

      if (result.error) {
        throw result.error;
      }

      setSuccess(isNewItem ? 'Portfolio item created successfully!' : 'Portfolio item updated successfully!');
      
      if (isNewItem) {
        // Redirect to the portfolio list after a short delay
        setTimeout(() => {
          router.push('/admin/portfolio');
        }, 1500);
      }
    } catch (err: any) {
      console.error('Error saving portfolio item:', err);
      setError(err.message || 'Failed to save portfolio item');
    } finally {
      setIsSaving(false);
    }
  };

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
        <title>
          {isNewItem ? 'Add New Portfolio Item' : 'Edit Portfolio Item'} | AppSwifts Admin
        </title>
      </Head>
      <AdminLayout>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex items-center">
              <Link
                href="/admin/portfolio"
                className="inline-flex items-center mr-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-1" />
                Back to Portfolio
              </Link>
              <h1 className="text-2xl font-semibold text-gray-900">
                {isNewItem ? 'Add New Portfolio Item' : 'Edit Portfolio Item'}
              </h1>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">
              {error && (
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              {success && (
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-green-700">{success}</p>
                    </div>
                  </div>
                </div>
              )}

              {isLoading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
                  <div className="space-y-8 divide-y divide-gray-200">
                    <div>
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Portfolio Item Information
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          This information will be displayed publicly on the website.
                        </p>
                      </div>

                      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                          <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Title
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="title"
                              id="title"
                              value={formData.title || ''}
                              onChange={handleChange}
                              required
                              className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-6">
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Description
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="description"
                              name="description"
                              rows={3}
                              value={formData.description || ''}
                              onChange={handleChange}
                              required
                              className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <p className="mt-2 text-sm text-gray-500">
                            Brief description of the portfolio item.
                          </p>
                        </div>

                        <div className="sm:col-span-4">
                          <label
                            htmlFor="image_url"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Image URL
                          </label>
                          <div className="mt-1">
                            <input
                              type="url"
                              name="image_url"
                              id="image_url"
                              value={formData.image_url || ''}
                              onChange={handleChange}
                              required
                              className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-4">
                          <label
                            htmlFor="link"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Project Link
                          </label>
                          <div className="mt-1">
                            <input
                              type="url"
                              name="link"
                              id="link"
                              value={formData.link || ''}
                              onChange={handleChange}
                              className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="category"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Category
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="category"
                              id="category"
                              value={formData.category || ''}
                              onChange={handleChange}
                              required
                              className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="type"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Display Type
                          </label>
                          <div className="mt-1">
                            <select
                              id="type"
                              name="type"
                              value={formData.type || 'default'}
                              onChange={handleChange}
                              className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                            >
                              <option value="default">Default</option>
                              <option value="mobile-app">Mobile App</option>
                              <option value="video-background">Video Background</option>
                            </select>
                          </div>
                        </div>

                        {(formData.type === 'mobile-app' || formData.type === 'video-background') && (
                          <div className="sm:col-span-4">
                            <label
                              htmlFor="video_url"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Video URL
                            </label>
                            <div className="mt-1">
                              <input
                                type="url"
                                name="video_url"
                                id="video_url"
                                value={formData.video_url || ''}
                                onChange={handleChange}
                                required
                                className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                              URL to the video file (MP4 format recommended).
                            </p>
                          </div>
                        )}

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="order"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Display Order
                          </label>
                          <div className="mt-1">
                            <input
                              type="number"
                              name="order"
                              id="order"
                              value={formData.order || 0}
                              onChange={handleChange}
                              min="0"
                              className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <p className="mt-2 text-sm text-gray-500">
                            Lower numbers appear first.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5">
                    <div className="flex justify-end">
                      <Link
                        href="/admin/portfolio"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        Cancel
                      </Link>
                      <button
                        type="submit"
                        disabled={isSaving}
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        {isSaving ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Saving...
                          </>
                        ) : (
                          'Save'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default PortfolioItemForm;
