import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LiveTicker from './components/LiveTicker';
import MatchCard from './components/MatchCard';
import ScorecardModal from './components/ScorecardModal';
import PlayerHub from './components/PlayerHub';
import PlayerModal from './components/PlayerModal';
import LiveVideoPlayer from './components/LiveVideoPlayer';
import AiMatchInsights from './components/AiMatchInsights';
import PointsTable from './components/PointsTable';
import FanZone from './components/FanZone';

import { MATCHES_DATA, PLAYERS_DATABASE } from './data/cricketData';
import { getLiveMatches } from './services/supabaseClient';
import { Activity, Flame, Video, Users, Sparkles, Trophy, Globe, Filter } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('matches');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Data states
  const [matches, setMatches] = useState(MATCHES_DATA);
  const [players] = useState(PLAYERS_DATABASE);

  // Filter states
  const [typeFilter, setTypeFilter] = useState('ALL'); // ALL, INTERNATIONAL, PREMIER_LEAGUE
  const [statusFilter, setStatusFilter] = useState('ALL'); // ALL, LIVE, UPCOMING, COMPLETED

  // Active modal selections
  const [activeScorecardMatch, setActiveScorecardMatch] = useState(null);
  const [activePlayer, setActivePlayer] = useState(null);
  const [selectedVideoMatch, setSelectedVideoMatch] = useState(MATCHES_DATA[0]);

  // Load from Supabase if configured
  useEffect(() => {
    async function loadData() {
      const data = await getLiveMatches(MATCHES_DATA);
      setMatches(data);
    }
    loadData();
  }, []);

  // Filtered Matches logic
  const filteredMatches = matches.filter((m) => {
    const matchesSearch = 
      m.tournament.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.team1.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.team2.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.venue.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = typeFilter === 'ALL' || m.type === typeFilter;
    const matchesStatus = statusFilter === 'ALL' || m.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  const handleWatchVideo = (match) => {
    setSelectedVideoMatch(match);
    setActiveTab('video');
  };

  return (
    <div className="min-h-screen bg-[#080E1A] text-slate-100 flex flex-col">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Live Scores Top Rolling Strip */}
      <LiveTicker
        matches={matches}
        onSelectMatch={(m) => setActiveScorecardMatch(m)}
      />

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        
        {/* TAB 1: LIVE MATCHES */}
        {activeTab === 'matches' && (
          <div className="space-y-6">
            
            {/* Colorful Hero Stadium Showcase */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0C1B33] via-[#0F2942] to-[#0A1628] border border-emerald-500/30 p-6 sm:p-10 shadow-2xl">
              <div className="absolute right-0 top-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-10 -bottom-10 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-black uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>WORLD CRICKET ARENA • 2026</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  Live Cricket Scores, AI Predictor & 4K Streams
                </h1>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Real-time ball-by-ball scorecards, ICC World Cup & Premier League coverage (IPL, BBL, PSL, The Ashes), player ability matrices, and official live video channels.
                </p>

                {/* Quick Action Badges */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveScorecardMatch(matches[0])}
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-extrabold text-xs shadow-lg shadow-emerald-500/25 hover:opacity-95 transition-all"
                  >
                    <Activity className="w-4 h-4 text-black" />
                    <span>Open Live Final Scorecard</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('video')}
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white font-bold text-xs border border-slate-700 transition-all"
                  >
                    <Video className="w-4 h-4 text-red-500" />
                    <span>Watch Match Video Cam</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('players')}
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-amber-300 font-bold text-xs border border-slate-700 transition-all"
                  >
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>ICC Player Hub</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0F172A] p-4 rounded-2xl border border-slate-800">
              
              {/* Type Filter: International vs Premier League */}
              <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                <span className="text-xs font-bold text-slate-400 mr-1 flex items-center space-x-1">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden md:inline">Tournament:</span>
                </span>
                {[
                  { id: 'ALL', label: 'All Matches' },
                  { id: 'INTERNATIONAL', label: 'ICC International' },
                  { id: 'PREMIER_LEAGUE', label: 'Premier Leagues (IPL/BBL/PSL)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTypeFilter(item.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      typeFilter === item.id
                        ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Status Filter */}
              <div className="flex items-center space-x-1.5">
                <span className="text-xs font-bold text-slate-400 mr-1">Status:</span>
                {['ALL', 'LIVE', 'UPCOMING', 'COMPLETED'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      statusFilter === st
                        ? 'bg-amber-400 text-black font-extrabold'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

            </div>

            {/* Matches Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMatches.map((match) => (
                <MatchCard
                  key={match.id}
                  match={match}
                  onOpenScorecard={(m) => setActiveScorecardMatch(m)}
                  onWatchVideo={handleWatchVideo}
                />
              ))}
            </div>

            {filteredMatches.length === 0 && (
              <div className="text-center py-16 bg-[#0E1729] rounded-3xl border border-slate-800">
                <p className="text-slate-400 text-sm font-semibold">No matches found matching your filters.</p>
                <button
                  onClick={() => { setTypeFilter('ALL'); setStatusFilter('ALL'); setSearchQuery(''); }}
                  className="mt-3 text-xs text-emerald-400 font-bold hover:underline"
                >
                  Reset all filters
                </button>
              </div>
            )}

            {/* Fan Zone Section */}
            <div className="pt-4">
              <FanZone selectedMatch={matches[0]} />
            </div>

          </div>
        )}

        {/* TAB 2: MATCH VIDEO & LIVE CHANNELS */}
        {activeTab === 'video' && (
          <LiveVideoPlayer selectedMatch={selectedVideoMatch} />
        )}

        {/* TAB 3: ICC PLAYER HUB */}
        {activeTab === 'players' && (
          <PlayerHub
            players={players}
            onSelectPlayer={(p) => setActivePlayer(p)}
          />
        )}

        {/* TAB 4: AI MATCH PREDICTOR & CHAT */}
        {activeTab === 'ai' && (
          <AiMatchInsights matches={matches} />
        )}

        {/* TAB 5: POINTS TABLE */}
        {activeTab === 'standings' && (
          <PointsTable />
        )}

      </main>

      {/* Scorecard Modal */}
      {activeScorecardMatch && (
        <ScorecardModal
          match={activeScorecardMatch}
          onClose={() => setActiveScorecardMatch(null)}
        />
      )}

      {/* Player Detail Modal */}
      {activePlayer && (
        <PlayerModal
          player={activePlayer}
          onClose={() => setActivePlayer(null)}
        />
      )}

      {/* Footer */}
      <footer className="mt-16 bg-[#060A14] border-t border-slate-800/80 py-8 px-4 text-center text-xs text-slate-500 space-y-2">
        <p className="text-slate-400 font-semibold">
          Cricket Pulse AI © 2026 • Professional Live Cricket Scoreboard, Player Analytics & Video Platform
        </p>
        <p>
          Deployable on <strong className="text-emerald-400">Vercel</strong>, <strong className="text-teal-400">Netlify</strong>, and backed by <strong className="text-emerald-500">Supabase</strong> & Python FastAPI.
        </p>
      </footer>

    </div>
  );
}
