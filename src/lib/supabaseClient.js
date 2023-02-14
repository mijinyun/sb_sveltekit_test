import { createClient } from '@supabase/auth-helpers-sveltekit'
// import { env } from '$env/dynamic/public'

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

