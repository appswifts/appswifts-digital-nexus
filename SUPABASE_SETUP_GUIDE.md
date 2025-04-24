# AppSwifts Supabase Setup Guide

This guide will walk you through setting up Supabase for the AppSwifts website, including authentication, database tables, and storage.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Supabase](https://supabase.com/) account

## Step 1: Create a Supabase Project

1. Go to [Supabase](https://supabase.com/) and sign up or log in
2. Click "New Project" to create a new project
3. Enter a name for your project (e.g., "appswifts")
4. Set a secure database password (save this somewhere safe)
5. Choose a region closest to your target audience
6. Click "Create new project" and wait for it to be created (this may take a few minutes)

## Step 2: Get Your API Keys

1. Once your project is created, go to the project dashboard
2. In the left sidebar, click on "Project Settings" (the gear icon)
3. Click on "API" in the settings menu
4. You'll find your "Project URL" and "anon" key (public)
5. You'll also find your "service_role" key (keep this private)

## Step 3: Configure Environment Variables

1. In your AppSwifts project, create or update the `.env` file in the root directory:

```
# Supabase configuration for setup script
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# These are used by the Next.js app
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

2. Also create or update the `.env.local` file with the same values:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Step 4: Test Your Connection

1. Run the test connection script to verify your Supabase setup:

```bash
npm run test-supabase
```

2. If the connection is successful, you'll see a message confirming the connection.
3. If there are any issues, the script will provide troubleshooting information.

## Step 5: Set Up Database Tables

1. Run the setup script to create all necessary database tables and policies:

```bash
npm run setup-supabase
```

2. This script will create the following tables:
   - `users` - For user profiles and roles
   - `portfolio` - For portfolio items
   - `services` - For service offerings
   - `testimonials` - For customer testimonials
   - `site_content` - For dynamic site content
   - `activity_log` - For tracking admin actions

3. It will also set up Row Level Security (RLS) policies to protect your data.

## Step 6: Create an Admin User

1. Go to your Supabase dashboard
2. Navigate to "Authentication" > "Users"
3. Click "Invite" to create a new user
4. Enter the email address for your admin user
5. Once the user is created, go to the SQL Editor and run:

```sql
INSERT INTO public.users (id, email, role)
VALUES ('user-id-from-auth-users', 'admin-email@example.com', 'admin');
```

Replace `user-id-from-auth-users` with the actual UUID of the user from the Authentication > Users table, and `admin-email@example.com` with the actual email address.

## Step 7: Set Up Storage (Optional)

1. Go to "Storage" in the Supabase dashboard
2. Create the following buckets:
   - `portfolio` - For portfolio images and videos
   - `testimonials` - For testimonial profile images
   - `site-content` - For general site content images

3. Set the bucket's privacy to "Public" or configure appropriate policies

## Step 8: Test the Admin Dashboard

1. Start your development server:

```bash
npm run dev
```

2. Navigate to `/admin/test-connection` to verify your Supabase connection
3. If everything is working, go to `/admin/login` and sign in with your admin credentials
4. You should now have access to the admin dashboard

## Troubleshooting

If you encounter any issues:

### Connection Problems

- Double-check your Supabase URL and API keys in the `.env` and `.env.local` files
- Ensure your Supabase project is up and running
- Check if your IP address is allowed (if you've set up IP restrictions)

### Authentication Issues

- Make sure the user exists in the Authentication system
- Verify the user has been added to the `users` table with the `admin` role
- Check for any errors in the browser console

### Database Issues

- Verify the tables were created successfully
- Check that the RLS policies are properly configured
- Look for any error messages in the SQL execution

## Going to Production

When deploying to production:

1. Set up environment variables on your hosting platform
2. Update the Site URL in Supabase Authentication settings
3. Consider enabling email confirmation for new users
4. Review and tighten your RLS policies as needed
5. Set up proper backups for your database

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Storage](https://supabase.com/docs/guides/storage)
