
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your secrets.')
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
