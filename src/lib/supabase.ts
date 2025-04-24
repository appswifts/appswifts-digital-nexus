
import { createClient } from '@supabase/supabase-js';

// Vite uses import.meta.env instead of process.env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-supabase-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export type User = {
  id: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  created_at: string;
  updated_at: string;
};

export type SiteContent = {
  id: string;
  section: string;
  content: any; // JSON content
  created_at: string;
  updated_at: string;
};

export type Portfolio = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  link: string;
  category: string;
  type: 'default' | 'mobile-app' | 'video-background';
  video_url?: string;
  order: number;
  created_at: string;
  updated_at: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
  created_at: string;
  updated_at: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  image_url: string;
  testimonial: string;
  rating: number;
  created_at: string;
  updated_at: string;
};

// Helper functions for database operations
export const getPortfolioItems = async (): Promise<Portfolio[]> => {
  const { data, error } = await supabase
    .from('portfolio')
    .select('*')
    .order('order', { ascending: true });
  
  if (error) {
    console.error('Error fetching portfolio items:', error);
    return [];
  }
  
  return data || [];
};

export const getServices = async (): Promise<Service[]> => {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('order', { ascending: true });
  
  if (error) {
    console.error('Error fetching services:', error);
    return [];
  }
  
  return data || [];
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*');
  
  if (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
  
  return data || [];
};

export const getSiteContent = async (section: string): Promise<any> => {
  const { data, error } = await supabase
    .from('site_content')
    .select('content')
    .eq('section', section)
    .single();
  
  if (error) {
    console.error(`Error fetching ${section} content:`, error);
    return null;
  }
  
  return data?.content || null;
};

export const updateSiteContent = async (section: string, content: any): Promise<boolean> => {
  const { error } = await supabase
    .from('site_content')
    .upsert({ 
      section, 
      content,
      updated_at: new Date().toISOString()
    });
  
  if (error) {
    console.error(`Error updating ${section} content:`, error);
    return false;
  }
  
  return true;
};

export default supabase;
