import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nzjtinwdewlisnzcsgcn.supabase.co';
const supabaseAnonKey = import.meta.env.SUPABASE_ANON as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey)