import { createClient } from '@supabase/auth-helpers-sveltekit'
// import { env } from '$env/dynamic/public'
import { PUBLIC_SUPABASE_URL,PUBLIC_SUPABASE_ANON_KEY } from '$lib/Env'

// export const supabase = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY)
export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY)

console.log(PUBLIC_SUPABASE_ANON_KEY);
console.log(PUBLIC_SUPABASE_URL);