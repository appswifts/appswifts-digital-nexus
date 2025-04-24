/**
 * This script helps set up the Supabase database tables and policies.
 * Run it with: node scripts/setup-supabase.js
 * 
 * Make sure to set your Supabase URL and service role key in your .env file:
 * SUPABASE_URL=your-project-url
 * SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
 */

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Get Supabase credentials from environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in your .env file');
  process.exit(1);
}

// Create Supabase client with service role key
const supabase = createClient(supabaseUrl, supabaseKey);

// SQL for creating tables and policies
const setupSQL = `
-- Create users table with role
CREATE TABLE IF NOT EXISTS public.users (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'viewer',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create portfolio table
CREATE TABLE IF NOT EXISTS public.portfolio (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  link TEXT,
  category TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'default',
  video_url TEXT,
  order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create services table
CREATE TABLE IF NOT EXISTS public.services (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  image_url TEXT NOT NULL,
  testimonial TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create site_content table for dynamic content
CREATE TABLE IF NOT EXISTS public.site_content (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  section TEXT NOT NULL UNIQUE,
  content JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create activity_log table
CREATE TABLE IF NOT EXISTS public.activity_log (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT,
  details JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_log ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Users table policies
DROP POLICY IF EXISTS "Users can view their own data" ON public.users;
CREATE POLICY "Users can view their own data" ON public.users
  FOR SELECT USING (auth.uid() = id);
  
DROP POLICY IF EXISTS "Admins can view all users" ON public.users;
CREATE POLICY "Admins can view all users" ON public.users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'
    )
  );

DROP POLICY IF EXISTS "Admins can update users" ON public.users;
CREATE POLICY "Admins can update users" ON public.users
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Portfolio table policies
DROP POLICY IF EXISTS "Portfolio items are viewable by everyone" ON public.portfolio;
CREATE POLICY "Portfolio items are viewable by everyone" ON public.portfolio
  FOR SELECT USING (true);
  
DROP POLICY IF EXISTS "Portfolio items are editable by admins" ON public.portfolio;
CREATE POLICY "Portfolio items are editable by admins" ON public.portfolio
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Services table policies
DROP POLICY IF EXISTS "Services are viewable by everyone" ON public.services;
CREATE POLICY "Services are viewable by everyone" ON public.services
  FOR SELECT USING (true);
  
DROP POLICY IF EXISTS "Services are editable by admins" ON public.services;
CREATE POLICY "Services are editable by admins" ON public.services
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Testimonials table policies
DROP POLICY IF EXISTS "Testimonials are viewable by everyone" ON public.testimonials;
CREATE POLICY "Testimonials are viewable by everyone" ON public.testimonials
  FOR SELECT USING (true);
  
DROP POLICY IF EXISTS "Testimonials are editable by admins" ON public.testimonials;
CREATE POLICY "Testimonials are editable by admins" ON public.testimonials
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Site content table policies
DROP POLICY IF EXISTS "Site content is viewable by everyone" ON public.site_content;
CREATE POLICY "Site content is viewable by everyone" ON public.site_content
  FOR SELECT USING (true);
  
DROP POLICY IF EXISTS "Site content is editable by admins" ON public.site_content;
CREATE POLICY "Site content is editable by admins" ON public.site_content
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Activity log table policies
DROP POLICY IF EXISTS "Activity logs are viewable by admins" ON public.activity_log;
CREATE POLICY "Activity logs are viewable by admins" ON public.activity_log
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'
    )
  );
  
DROP POLICY IF EXISTS "Activity logs are insertable by authenticated users" ON public.activity_log;
CREATE POLICY "Activity logs are insertable by authenticated users" ON public.activity_log
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- Create trigger to update updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to all tables with updated_at column
DROP TRIGGER IF EXISTS update_users_updated_at ON public.users;
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON public.users
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

DROP TRIGGER IF EXISTS update_portfolio_updated_at ON public.portfolio;
CREATE TRIGGER update_portfolio_updated_at
    BEFORE UPDATE ON public.portfolio
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

DROP TRIGGER IF EXISTS update_services_updated_at ON public.services;
CREATE TRIGGER update_services_updated_at
    BEFORE UPDATE ON public.services
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

DROP TRIGGER IF EXISTS update_testimonials_updated_at ON public.testimonials;
CREATE TRIGGER update_testimonials_updated_at
    BEFORE UPDATE ON public.testimonials
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

DROP TRIGGER IF EXISTS update_site_content_updated_at ON public.site_content;
CREATE TRIGGER update_site_content_updated_at
    BEFORE UPDATE ON public.site_content
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();
`;

// Function to run the setup SQL
async function setupDatabase() {
  console.log('Setting up Supabase database tables and policies...');
  
  try {
    const { error } = await supabase.rpc('pgcrypto_extensions');
    if (error) {
      console.error('Error enabling pgcrypto extensions:', error);
    }
    
    const { error: sqlError } = await supabase.sql(setupSQL);
    if (sqlError) {
      console.error('Error executing SQL:', sqlError);
      return;
    }
    
    console.log('Database setup completed successfully!');
    
    // Check if tables were created
    const { data: tables, error: tablesError } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public');
      
    if (tablesError) {
      console.error('Error checking tables:', tablesError);
      return;
    }
    
    console.log('Created tables:');
    tables.forEach(table => {
      console.log(`- ${table.table_name}`);
    });
    
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

// Run the setup
setupDatabase();
