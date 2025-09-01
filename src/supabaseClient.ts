import { createClient } from "@supabase/supabase-js";

// WARNING: These credentials are now exposed in your code and will be visible on GitHub!
const supabaseUrl = "https://tgmkbuyocyqsgqkcjsux.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnbWtidXlvY3lxc2dxa2Nqc3V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1NDAwMDAsImV4cCI6MjA2NjExNjAwMH0.AG379EgdhmSqMmqKyUNtE5HDYarB0FtmCv2XqLKiaDg";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase credentials in code.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Define types for our reservation data
export interface Reservation {
  id?: number;
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  special_requests?: string;
  created_at?: string;
}
