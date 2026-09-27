import React, { useState } from 'react';
import { Users, Search, Shield, Zap, Flame, Award, ChevronRight } from 'lucide-react';

export default function PlayerHub({ players, onSelectPlayer }) {
  const [roleFilter, setRoleFilter] = useState('ALL');
  const [countryFilter, setCountryFilter] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const roles = [
    { id: 'ALL', label: 'All Legends' },
    { id: 'BATTER', label: 'Batters' },
    { id: 'BOWLER', label: 'Bowlers' },
    { id: 'ALLROUNDER', label: 'All-Rounders' }
  ];

  const countries = ['ALL', 'India', 'Australia', 'Pakistan', 'England', 'South Africa', 'Afghanistan'];

  const filteredPlayers = players.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = countryFilter === 'ALL' || p.country === countryFilter;
    const matchesRole = 
      roleFilter === 'ALL' ? true :
      roleFilter === 'BATTER' ? (p.role.includes('Batter') || p.role.includes('Wicket-Keeper')) :
      roleFilter === 'BOWLER' ? p.role.includes('Bowler') :
      roleFilter === 'ALLROUNDER' ? p.role.includes('All-Rounder') : true;

    return matchesSearch && matchesCountry && matchesRole;
  });

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-950/60 via-[#101F38] to-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4" />
            <span>ICC Player Intelligence & Ability Matrix</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            World Cricket Legends & Modern Superstars
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
            Detailed batting and bowling abilities, clutch indices, historical career records across Tests, ODIs, T20Is, and premier franchise leagues.
          </p>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0F172A] p-4 rounded-2xl border border-slate-800">
        
        {/* Role Filters */}
        <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => setRoleFilter(r.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                roleFilter === r.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-black shadow-md shadow-emerald-500/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Country Filter & Search */}
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="bg-[#17233B] text-slate-200 text-xs font-semibold px-3 py-2 rounded-xl border border-slate-700 focus:outline-none focus:border-emerald-500"
          >
            {countries.map((c) => (
              <option key={c} value={c}>{c === 'ALL' ? '🌍 All Countries' : c}</option>
            ))}
          </select>

          <div className="relative flex-1 md:w-56">
            <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search player..."
              className="w-full bg-[#17233B] text-xs text-white placeholder-slate-400 pl-8 pr-3 py-2 rounded-xl border border-slate-700 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredPlayers.map((player) => (
          <div
            key={player.id}
            onClick={() => onSelectPlayer(player)}
            className="bg-[#111A2E] hover:bg-[#142038] border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:shadow-emerald-950/30 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              {/* Header: Flag, Name, OVR Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 flex items-center justify-center text-xl shrink-0">
                    <img 
                      src={player.avatar} 
                      alt={player.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&auto=format&fit=crop&q=80";
                      }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-base">{player.flag}</span>
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{player.country}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {player.name}
                    </h3>
                    <span className="text-[11px] text-emerald-400/90 font-medium">{player.role}</span>
                  </div>
                </div>

                {/* Overall Rating Hex Badge */}
                <div className="text-center bg-gradient-to-b from-amber-400 to-amber-600 text-black px-2 py-1 rounded-xl shadow-md font-black text-xs">
                  <span className="block text-[9px] uppercase tracking-tighter">OVR</span>
                  <span className="text-sm leading-none">{player.overallRating}</span>
                </div>
              </div>

              {/* ICC Ranking & Clutch Index */}
              <div className="bg-[#0A1220] rounded-xl p-2.5 mb-3 border border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center space-x-1">
                  <Flame className="w-3.5 h-3.5 text-red-400" />
                  <span>Clutch Index:</span>
                </span>
                <span className="font-bold text-red-400">{player.clutchIndex} / 100</span>
              </div>

              {/* Visual Abilities Progress Bars */}
              <div className="space-y-2 mb-4">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex justify-between">
                  <span>Player Ability Rating</span>
                  <span className="text-emerald-400">Tactical Grade</span>
                </div>

                {/* Key Ability 1 */}
                <div>
                  <div className="flex justify-between text-[11px] text-slate-300 font-medium mb-1">
                    <span>Power Hitting / Strike</span>
                    <span className="text-amber-300 font-bold">{player.abilities.powerHitting}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      style={{ width: `${player.abilities.powerHitting}%` }}
                      className="h-full bg-gradient-to-r from-amber-500 to-yellow-400"
                    />
                  </div>
                </div>

                {/* Key Ability 2 */}
                <div>
                  <div className="flex justify-between text-[11px] text-slate-300 font-medium mb-1">
                    <span>{player.role.includes('Bowler') ? 'Death Over Yorkers' : 'Strike Rotation'}</span>
                    <span className="text-emerald-300 font-bold">
                      {player.role.includes('Bowler') ? player.abilities.deathBowling : player.abilities.strikeRotation}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      style={{ width: `${player.role.includes('Bowler') ? player.abilities.deathBowling : player.abilities.strikeRotation}%` }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-emerald-400 font-bold group-hover:text-emerald-300">
              <span>View Full Career Profile</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
