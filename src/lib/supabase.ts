import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type MealAnalysis = {
  id: string;
  user_id: string;
  image_url: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  meal_name: string;
  created_at: string;
};

export type UserProfile = {
  id: string;
  email: string;
  full_name: string;
  daily_calorie_goal: number;
  weight_goal: number;
  current_weight: number;
  created_at: string;
  has_paid: boolean;
};
