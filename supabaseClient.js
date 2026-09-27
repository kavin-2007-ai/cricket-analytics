import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://your-project-id.supabase.co'
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Fetch matches from Supabase or fallback to mock data
 */
export async function getLiveMatches(fallbackData) {
  if (!isSupabaseConfigured || !supabase) {
    return fallbackData;
  }
  try {
    const { data, error } = await supabase
      .from('matches')
      .select('*')
      .order('updated_at', { ascending: false });

    if (error) {
      console.warn('Supabase fetch error, using local data:', error.message);
      return fallbackData;
    }
    return data && data.length > 0 ? data : fallbackData;
  } catch (err) {
    console.warn('Supabase connection error:', err);
    return fallbackData;
  }
}

/**
 * Post a fan cheer message to Supabase
 */
export async function postFanMessage(matchId, userName, userTeam, message, emoji = '🏏') {
  if (!isSupabaseConfigured || !supabase) {
    return { success: true, localOnly: true };
  }
  try {
    const { data, error } = await supabase
      .from('fan_chat')
      .insert([
        {
          match_id: matchId,
          user_name: userName,
          user_team: userTeam,
          message: message,
          cheer_emoji: emoji
        }
      ]);
    if (error) throw error;
    return { success: true, data };
  } catch (err) {
    console.error('Failed to post fan message:', err);
    return { success: false, error: err.message };
  }
}
