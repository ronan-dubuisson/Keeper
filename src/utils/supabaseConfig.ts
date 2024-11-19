import { Database } from "@databaseTypes";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database

console.log("supabase url: " + import.meta.env.VITE_SUPABASE_URL);
const supabase = createClient<Database>(

  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export default supabase;
