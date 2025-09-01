
import { createClient } from '@supabase/supabase-js'

// WARNING: These credentials are now exposed in your code and will be visible on GitHub!
const supabaseUrl = 'YOUR_SUPABASE_URL_HERE'
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY_HERE'

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase credentials in code.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Define types for our reservation data
export interface Reservation {
  id?: number
  name: string
  email: string
  date: string
  time: string
  guests: number
  special_requests?: string
  created_at?: string
}
