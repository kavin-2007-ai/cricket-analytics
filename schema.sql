-- ====================================================================
-- CRICKET PULSE AI: Supabase Database Schema
-- Run this in your Supabase SQL Editor to initialize all tables & policies
-- ====================================================================

-- 1. Create Matches Table
CREATE TABLE IF NOT EXISTS public.matches (
    id TEXT PRIMARY KEY,
    tournament TEXT NOT NULL,
    type TEXT NOT NULL, -- 'INTERNATIONAL' or 'PREMIER_LEAGUE'
    format TEXT NOT NULL, -- 'T20', 'T20I', 'ODI', 'TEST'
    status TEXT NOT NULL, -- 'LIVE', 'UPCOMING', 'COMPLETED'
    status_text TEXT,
    venue TEXT,
    toss_info TEXT,
    current_innings INTEGER DEFAULT 1,
    team1_name TEXT NOT NULL,
    team1_short_name TEXT NOT NULL,
    team1_flag TEXT,
    team1_score INTEGER DEFAULT 0,
    team1_wickets INTEGER DEFAULT 0,
    team1_overs NUMERIC(4, 1) DEFAULT 0.0,
    team2_name TEXT NOT NULL,
    team2_short_name TEXT NOT NULL,
    team2_flag TEXT,
    team2_score INTEGER DEFAULT 0,
    team2_wickets INTEGER DEFAULT 0,
    team2_overs NUMERIC(4, 1) DEFAULT 0.0,
    team2_target INTEGER,
    win_probability_team1 INTEGER DEFAULT 50,
    win_probability_team2 INTEGER DEFAULT 50,
    ai_analysis TEXT,
    video_stream_url TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create Players Table
CREATE TABLE IF NOT EXISTS public.players (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    country TEXT NOT NULL,
    country_code TEXT NOT NULL,
    flag TEXT,
    avatar_url TEXT,
    role TEXT NOT NULL,
    batting_style TEXT,
    bowling_style TEXT,
    overall_rating INTEGER DEFAULT 85,
    clutch_index INTEGER DEFAULT 85,
    icc_ranking TEXT,
    bio TEXT,
    -- Ability Radar metrics (0 - 100)
    power_hitting INTEGER DEFAULT 75,
    strike_rotation INTEGER DEFAULT 75,
    chasing_mastery INTEGER DEFAULT 75,
    spin_play INTEGER DEFAULT 75,
    pace_play INTEGER DEFAULT 75,
    death_bowling INTEGER DEFAULT 75,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create Live Ball-By-Ball Commentary Feed
CREATE TABLE IF NOT EXISTS public.ball_by_ball (
    id BIGSERIAL PRIMARY KEY,
    match_id TEXT REFERENCES public.matches(id) ON DELETE CASCADE,
    over_number NUMERIC(4,1) NOT NULL,
    bowler_name TEXT,
    batsman_name TEXT,
    runs INTEGER DEFAULT 0,
    is_wicket BOOLEAN DEFAULT FALSE,
    is_four BOOLEAN DEFAULT FALSE,
    is_six BOOLEAN DEFAULT FALSE,
    ball_speed TEXT,
    commentary_text TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Create Fan Zone & Live Chat Table
CREATE TABLE IF NOT EXISTS public.fan_chat (
    id BIGSERIAL PRIMARY KEY,
    match_id TEXT REFERENCES public.matches(id) ON DELETE CASCADE,
    user_name TEXT NOT NULL,
    user_team TEXT,
    message TEXT NOT NULL,
    cheer_emoji TEXT DEFAULT '🏏',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Enable Row Level Security (RLS) for public reading
ALTER TABLE public.matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.players ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ball_by_ball ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.fan_chat ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on matches" ON public.matches FOR SELECT USING (true);
CREATE POLICY "Allow public read access on players" ON public.players FOR SELECT USING (true);
CREATE POLICY "Allow public read access on ball_by_ball" ON public.ball_by_ball FOR SELECT USING (true);
CREATE POLICY "Allow public read access on fan_chat" ON public.fan_chat FOR SELECT USING (true);
CREATE POLICY "Allow public insert on fan_chat" ON public.fan_chat FOR INSERT WITH CHECK (true);

-- Enable Realtime subscriptions for matches and fan_chat
ALTER PUBLICATION supabase_realtime ADD TABLE public.matches;
ALTER PUBLICATION supabase_realtime ADD TABLE public.fan_chat;
