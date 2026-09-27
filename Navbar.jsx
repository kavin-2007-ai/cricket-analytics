import React from 'react';
import { Activity, Flame, Video, Users, Trophy, Sparkles, Search } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, searchQuery, setSearchQuery }) {
  const navItems = [
    { id: 'matches', label: 'Live Matches', icon: Activity, badge: 'LIVE' },
    { id: 'video', label: 'Match Video & TV', icon: Video, badge: '4K' },
    { id: 'players', label: 'ICC Player Hub', icon: Users, badge: 'STATS' },
    { id: 'ai', label: 'AI Predictor', icon: Sparkles, badge: 'PRO' },
    { id: 'standings', label: 'Points Table', icon: Trophy, badge: null }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A101D]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          
          {/* Logo & Branding */}
          <div 
            onClick={() => setActiveTab('matches')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-amber-400 p-[2px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#080E1A] rounded-[14px] flex items-center justify-center">
                <Flame className="w-6 h-6 text-amber-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
                  CRICKET PULSE
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-md">
                  AI v2.6
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                Live Scores • ICC Player Intel • Official Video Feeds
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative w-72">
            <Search className="absolute left-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search team, match or player..."
              className="w-full bg-[#131D31] text-sm text-slate-200 placeholder-slate-400 pl-9 pr-4 py-2 rounded-xl border border-slate-700/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-inner"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-1 sm:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400 animate-pulse' : 'text-slate-400'}`} />
                  <span className="hidden lg:inline">{item.label}</span>
                  {item.badge && (
                    <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase ${
                      item.badge === 'LIVE' ? 'bg-red-500 text-white animate-pulse' :
                      item.badge === 'PRO' ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' :
                      'bg-emerald-500/20 text-emerald-300'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
