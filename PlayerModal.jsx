import React, { useState } from 'react';
import { X, Award, Flame, Zap, Shield, Target, Activity } from 'lucide-react';

export default function PlayerModal({ player, onClose }) {
  const [formatTab, setFormatTab] = useState('odis');

  if (!player) return null;

  const isBowler = player.role.includes('Bowler');
  const abilities = player.abilities || {};
  const stats = player.stats || {};

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#0D1629] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header Profile Section */}
        <div className="bg-gradient-to-r from-emerald-950/80 via-[#12203B] to-slate-900 p-6 border-b border-slate-800 relative">
          <button
            onClick={onClose}
            className="absolute right-5 top-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            {/* Player Avatar */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-emerald-500/50 shadow-xl shadow-emerald-500/10 bg-slate-800 shrink-0">
              <img
                src={player.avatar}
                alt={player.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&auto=format&fit=crop&q=80";
                }}
              />
            </div>

            {/* Basic Info */}
            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
                <span className="text-xl">{player.flag}</span>
                <span className="text-xs font-black tracking-widest text-emerald-400 uppercase">{player.country}</span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-300 font-semibold">{player.role}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">{player.name}</h2>
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-3 text-xs text-slate-300">
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 font-medium">
                  🏏 Bat: {player.battingStyle}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 font-medium">
                  🎯 Bowl: {player.bowlingStyle}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-400/20 text-amber-300 border border-amber-400/30 font-bold">
                  ★ {player.iccRankings?.odi || player.iccRankings?.test || player.iccRankings?.t20i}
                </span>
              </div>
            </div>

            {/* Overall Rating Box */}
            <div className="flex sm:flex-col items-center justify-center gap-3">
              <div className="text-center bg-gradient-to-b from-amber-400 to-amber-600 text-black px-4 py-2.5 rounded-2xl shadow-lg font-black">
                <span className="block text-[10px] uppercase tracking-wider">ICC OVR</span>
                <span className="text-2xl leading-none">{player.overallRating}</span>
              </div>
              <div className="text-center bg-red-500/20 border border-red-500/40 text-red-400 px-3 py-1.5 rounded-xl font-bold text-xs">
                <span className="block text-[9px] uppercase">Clutch</span>
                <span className="text-sm">{player.clutchIndex}/100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Body content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Bio statement */}
          <div className="p-4 rounded-2xl bg-[#111A2D] border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <span className="text-emerald-400 font-bold uppercase tracking-wider block text-[10px] mb-1">Scouting Intel & Legacy:</span>
            {player.bio}
          </div>

          {/* Ability Radar / Skill Breakdown */}
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 flex items-center space-x-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Attributes & Ability Matrix</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(abilities).map(([key, val]) => {
                const formattedName = key
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, (str) => str.toUpperCase());
                return (
                  <div key={key} className="p-3 rounded-xl bg-[#0F172A] border border-slate-800">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="font-semibold text-slate-300">{formattedName}</span>
                      <span className="font-extrabold text-emerald-400">{val}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        style={{ width: `${val}%` }}
                        className={`h-full ${
                          val >= 95 ? 'bg-gradient-to-r from-amber-400 to-emerald-400' :
                          val >= 90 ? 'bg-emerald-400' :
                          val >= 80 ? 'bg-cyan-400' : 'bg-blue-500'
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Career Records & Formats */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Career Statistics</span>
              </h3>
              
              <div className="flex items-center space-x-1 bg-[#0F172A] p-1 rounded-xl border border-slate-800">
                {['tests', 'odis', 't20is', 'ipl'].map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setFormatTab(fmt)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all ${
                      formatTab === fmt
                        ? 'bg-emerald-500 text-black shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            {stats[formatTab] ? (
              <div className="rounded-2xl border border-slate-800 bg-[#0E1729] p-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 text-center">
                  <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="block text-[10px] text-slate-400 uppercase font-semibold">Matches</span>
                    <span className="text-base font-extrabold text-white">{stats[formatTab].matches}</span>
                  </div>

                  {stats[formatTab].runs !== undefined ? (
                    <>
                      <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                        <span className="block text-[10px] text-slate-400 uppercase font-semibold">Runs</span>
                        <span className="text-base font-extrabold text-amber-300">{stats[formatTab].runs}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                        <span className="block text-[10px] text-slate-400 uppercase font-semibold">Average</span>
                        <span className="text-base font-extrabold text-emerald-400">{stats[formatTab].avg}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                        <span className="block text-[10px] text-slate-400 uppercase font-semibold">Strike Rate</span>
                        <span className="text-base font-extrabold text-cyan-400">{stats[formatTab].sr}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                        <span className="block text-[10px] text-slate-400 uppercase font-semibold">100s</span>
                        <span className="text-base font-extrabold text-amber-400">{stats[formatTab].hundreds}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                        <span className="block text-[10px] text-slate-400 uppercase font-semibold">50s</span>
                        <span className="text-base font-extrabold text-blue-400">{stats[formatTab].fifties}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                        <span className="block text-[10px] text-slate-400 uppercase font-semibold">High Score</span>
                        <span className="text-base font-extrabold text-white">{stats[formatTab].highest}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                        <span className="block text-[10px] text-slate-400 uppercase font-semibold">Wickets</span>
                        <span className="text-base font-extrabold text-emerald-400">{stats[formatTab].wickets}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                        <span className="block text-[10px] text-slate-400 uppercase font-semibold">Average</span>
                        <span className="text-base font-extrabold text-amber-300">{stats[formatTab].avg}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                        <span className="block text-[10px] text-slate-400 uppercase font-semibold">Economy</span>
                        <span className="text-base font-extrabold text-cyan-400">{stats[formatTab].econ}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                        <span className="block text-[10px] text-slate-400 uppercase font-semibold">Best Bowling</span>
                        <span className="text-base font-extrabold text-white">{stats[formatTab].bbi}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                        <span className="block text-[10px] text-slate-400 uppercase font-semibold">5W Hauls</span>
                        <span className="text-base font-extrabold text-amber-400">{stats[formatTab].fiveWickets}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-slate-900/60 text-center text-xs text-slate-400">
                No official match records found for this specific format.
              </div>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-900/90 px-6 py-3.5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>ICC Verified Athlete Statistics Engine</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold transition-colors shadow-md"
          >
            Close Profile
          </button>
        </div>

      </div>
    </div>
  );
}
