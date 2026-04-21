import { createClient } from '@supabase/supabase-js';

// Use environment variables if available, otherwise fallback to provided credentials
const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || 'https://ahslvqqzpncnumzpdodt.supabase.co';
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_wr9UAfY7cb0acQU65sOzag_97jbmyge';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
