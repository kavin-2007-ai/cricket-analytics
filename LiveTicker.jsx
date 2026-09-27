import React from 'react';
import { Radio } from 'lucide-react';

export default function LiveTicker({ matches, onSelectMatch }) {
  return (
    <div className="bg-[#0B1325] border-b border-slate-800/80 overflow-x-auto py-2.5 px-4 scrollbar-none">
      <div className="max-w-7xl mx-auto flex items-center space-x-4 min-w-max">
        <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          <span>LIVE TICKER</span>
        </div>

        <div className="flex items-center space-x-4">
          {matches.map((m) => (
            <div
              key={m.id}
              onClick={() => onSelectMatch(m)}
              className="flex items-center space-x-3 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-emerald-500/40 rounded-xl px-3.5 py-1.5 cursor-pointer transition-all duration-200 group"
            >
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                {m.format}
              </span>
              
              <div className="flex items-center space-x-1.5 text-xs font-semibold text-slate-200">
                <span>{m.team1.flag} {m.team1.shortName}</span>
                <span className="text-emerald-400 font-bold">
                  {m.team1.score}/{m.team1.wickets}
                </span>
                <span className="text-slate-500 font-normal">vs</span>
                <span>{m.team2.flag} {m.team2.shortName}</span>
                <span className="text-amber-400 font-bold">
                  {m.team2.score}/{m.team2.wickets}
                </span>
              </div>

              <span className="text-[11px] text-slate-400 group-hover:text-emerald-400 transition-colors">
                {m.statusText.length > 32 ? m.statusText.slice(0, 32) + '...' : m.statusText}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
