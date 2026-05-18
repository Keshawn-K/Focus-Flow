// Import the createClient function from Supabase
import { createClient } from '@supabase/supabase-js'

// Get environment variables from .env
const supabaseUrl = "https://oyphynqwntvgmzsslskv.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95cGh5bnF3bnR2Z216c3Nsc2t2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5Mjg1NjIsImV4cCI6MjA5NDUwNDU2Mn0.3Xmuq4APAEI-11qGbOiz3K3UDgFLcYJsO19HuHiJH44"

// Create and export Supabase client
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)