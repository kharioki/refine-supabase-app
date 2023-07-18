import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://hbvdplsmrbtkxkzsozze.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhidmRwbHNtcmJ0a3hrenNvenplIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk2ODgxNDMsImV4cCI6MjAwNTI2NDE0M30.oo_-gKjjUIMjf58OoJG5PSt_0pq67MoI8UrIdMYui-c";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
