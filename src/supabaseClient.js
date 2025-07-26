// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fxgkteskcxwuqwcevzfy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4Z2t0ZXNrY3h3dXF3Y2V2emZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MTg0MDMsImV4cCI6MjA2NTM5NDQwM30.TbAMUB0e2euan7RrVyLStzVLnaMlQ2TNlatRrv9Zijo';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
