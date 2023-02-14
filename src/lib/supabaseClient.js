import { createClient } from '@supabase/auth-helpers-sveltekit'
// import { env } from '$env/dynamic/public'
import { SUPABASE_URL ,SUPABASE_ANON_KEY } from '$lib/Env';

const supabaseUrl = SUPABASE_URL;
const supabaseAnonKey = SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl,supabaseAnonKey);
