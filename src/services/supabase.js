import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jbokfmmcxsmjlcjvfsnx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impib2tmbW1jeHNtamxjanZmc254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MDU3NzksImV4cCI6MjAzMjQ4MTc3OX0.mmzmXstgkng1oJM28OVdAwYA5xGIMc8JTvTWFDEYyn4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
