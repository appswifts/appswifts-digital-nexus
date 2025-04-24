/**
 * This script tests the connection to your Supabase project.
 * Run it with: node scripts/test-connection.js
 */

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Get Supabase credentials from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('\x1b[31mError: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be set in your .env file\x1b[0m');
  process.exit(1);
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  console.log('\x1b[36m%s\x1b[0m', 'Testing connection to Supabase...');
  console.log('\x1b[36m%s\x1b[0m', `URL: ${supabaseUrl}`);
  
  try {
    // Test the connection by making a simple query
    const { data, error } = await supabase.from('users').select('count').limit(1);
    
    if (error) {
      if (error.code === 'PGRST116') {
        console.log('\x1b[33m%s\x1b[0m', 'Connection successful, but the users table does not exist yet.');
        console.log('\x1b[33m%s\x1b[0m', 'Run the setup script to create the necessary tables:');
        console.log('\x1b[33m%s\x1b[0m', '  npm run setup-supabase');
      } else {
        throw error;
      }
    } else {
      console.log('\x1b[32m%s\x1b[0m', 'Successfully connected to Supabase!');
      console.log('\x1b[32m%s\x1b[0m', 'Database tables are set up correctly.');
    }
    
    // Check authentication
    const { data: authData, error: authError } = await supabase.auth.getSession();
    
    if (authError) {
      console.log('\x1b[31m%s\x1b[0m', 'Error testing authentication:', authError.message);
    } else {
      console.log('\x1b[32m%s\x1b[0m', 'Authentication service is working correctly.');
      if (authData.session) {
        console.log('\x1b[32m%s\x1b[0m', 'You are currently logged in.');
      } else {
        console.log('\x1b[33m%s\x1b[0m', 'You are not currently logged in.');
      }
    }
    
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', 'Failed to connect to Supabase:');
    console.error('\x1b[31m%s\x1b[0m', error.message || 'Unknown error');
    
    if (error.message && error.message.includes('fetch failed')) {
      console.log('\n\x1b[33m%s\x1b[0m', 'This might be due to:');
      console.log('\x1b[33m%s\x1b[0m', '1. Incorrect Supabase URL');
      console.log('\x1b[33m%s\x1b[0m', '2. Network connectivity issues');
      console.log('\x1b[33m%s\x1b[0m', '3. Supabase service being down');
    }
    
    if (error.message && error.message.includes('JWT')) {
      console.log('\n\x1b[33m%s\x1b[0m', 'This might be due to:');
      console.log('\x1b[33m%s\x1b[0m', '1. Incorrect anon key');
      console.log('\x1b[33m%s\x1b[0m', '2. The key might be expired or revoked');
    }
  }
}

// Run the test
testConnection();
