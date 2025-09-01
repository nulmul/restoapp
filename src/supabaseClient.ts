
import { createClient } from '@supabase/supabase-js'

// WARNING: These credentials are now exposed in your code and will be visible on GitHub!
const supabaseUrl = 'https://your-project-ref.supabase.co'
const supabaseAnonKey = 'your-anon-public-key-here'

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
