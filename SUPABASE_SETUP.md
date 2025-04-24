# Supabase Setup Guide for AppSwifts

This guide will help you set up Supabase for authentication and content management for the AppSwifts website.

## 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com/) and sign up or log in
2. Create a new project
3. Choose a name for your project (e.g., "irugoo")
4. Set a secure database password
5. Choose a region closest to your target audience
6. Wait for your project to be created (this may take a few minutes)

## 2. Get Your API Keys

1. Once your project is created, go to the project dashboard
2. In the left sidebar, click on "Settings" and then "API"
3. You'll find your "Project URL" and "anon public" key
4. Copy these values and update your `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 3. Set Up Database Tables

Run the following SQL in the Supabase SQL Editor to create the necessary tables:

```sql
-- Create users table with role
CREATE TABLE public.users (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'viewer',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create portfolio table
CREATE TABLE public.portfolio (
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
CREATE TABLE public.services (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create testimonials table
CREATE TABLE public.testimonials (
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
CREATE TABLE public.site_content (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  section TEXT NOT NULL UNIQUE,
  content JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create activity_log table
CREATE TABLE public.activity_log (
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
CREATE POLICY "Users can view their own data" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Admins can view all users" ON public.users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can update users" ON public.users
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Portfolio table policies
CREATE POLICY "Portfolio items are viewable by everyone" ON public.portfolio
  FOR SELECT USING (true);

CREATE POLICY "Portfolio items are editable by admins" ON public.portfolio
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Services table policies
CREATE POLICY "Services are viewable by everyone" ON public.services
  FOR SELECT USING (true);

CREATE POLICY "Services are editable by admins" ON public.services
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Testimonials table policies
CREATE POLICY "Testimonials are viewable by everyone" ON public.testimonials
  FOR SELECT USING (true);

CREATE POLICY "Testimonials are editable by admins" ON public.testimonials
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Site content table policies
CREATE POLICY "Site content is viewable by everyone" ON public.site_content
  FOR SELECT USING (true);

CREATE POLICY "Site content is editable by admins" ON public.site_content
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Activity log table policies
CREATE POLICY "Activity logs are viewable by admins" ON public.activity_log
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Activity logs are insertable by authenticated users" ON public.activity_log
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
```

## 4. Set Up Authentication

1. In the Supabase dashboard, go to "Authentication" > "Settings"
2. Under "Site URL", enter your website URL (e.g., http://localhost:3000 for development)
3. Under "Email Auth", make sure it's enabled
4. Optionally, you can customize the email templates

## 5. Create an Admin User

1. Go to "Authentication" > "Users"
2. Click "Invite" to create a new user
3. Enter the email address for your admin user
4. Once the user is created, go to the SQL Editor and run:

```sql
UPDATE public.users
SET role = 'admin'
WHERE email = 'your-admin-email@example.com';
```

## 6. Set Up Storage for Images (Optional)

1. Go to "Storage" in the Supabase dashboard
2. Create a new bucket called "portfolio"
3. Set the bucket's privacy to "Public"
4. Create another bucket called "testimonials" with public access
5. Create a bucket called "site-content" with public access

## 7. Update Your Application

1. Make sure your `.env.local` file has the correct Supabase URL and anon key
2. Restart your development server
3. Navigate to `/admin/login` and sign in with your admin credentials

## 8. Troubleshooting

If you encounter any issues:

1. Check the browser console for errors
2. Verify your Supabase configuration in `.env.local`
3. Make sure your database tables are set up correctly
4. Ensure your user has the 'admin' role in the users table

## 9. Going to Production

When deploying to production:

1. Update your environment variables on your hosting platform
2. Update the Site URL in Supabase Authentication settings
3. Consider setting up email confirmation for new users
4. Review and tighten your Row Level Security policies as needed
