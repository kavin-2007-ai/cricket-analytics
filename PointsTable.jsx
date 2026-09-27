import React, { useState } from 'react';
import { Trophy, TrendingUp, Award, Calendar } from 'lucide-react';
import { TOURNAMENT_STANDINGS } from '../data/cricketData';

export default function PointsTable() {
  const [tournament, setTournament] = useState('ipl');

  const standings = TOURNAMENT_STANDINGS[tournament] || [];

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#0F172A] p-5 rounded-2xl border border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              Official League Standings & Points Table
            </h2>
            <p className="text-xs text-slate-400">
              Real-time Net Run Rate (NRR), match results, and tournament qualification pathways.
            </p>
          </div>
        </div>

        {/* Tournament Switcher */}
        <div className="flex items-center space-x-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setTournament('ipl')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              tournament === 'ipl'
                ? 'bg-amber-400 text-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            IPL 2026
          </button>
          <button
            onClick={() => setTournament('wtc')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              tournament === 'wtc'
                ? 'bg-emerald-400 text-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ICC WTC (2025-27)
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="rounded-3xl border border-slate-800 bg-[#0E1729] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#111A2D] text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-3.5 px-4 font-bold">Pos</th>
                <th className="py-3.5 px-4 font-bold">Team</th>
                <th className="py-3.5 px-3 text-center font-bold">Pld</th>
                <th className="py-3.5 px-3 text-center font-bold">Won</th>
                <th className="py-3.5 px-3 text-center font-bold">Lost</th>
                {tournament === 'wtc' ? (
                  <>
                    <th className="py-3.5 px-3 text-center font-bold">Draw</th>
                    <th className="py-3.5 px-3 text-center font-bold">PCT %</th>
                  </>
                ) : (
                  <th className="py-3.5 px-3 text-center font-bold">NRR</th>
                )}
                <th className="py-3.5 px-5 text-right font-black text-amber-400">Pts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 font-medium">
              {standings.map((row) => {
                const isTop4 = row.rank <= 4;
                return (
                  <tr
                    key={row.rank}
                    className={`hover:bg-slate-800/40 transition-colors ${
                      isTop4 ? 'bg-emerald-950/5' : ''
                    }`}
                  >
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-lg text-xs font-black ${
                        row.rank === 1 ? 'bg-amber-400 text-black' :
                        row.rank === 2 ? 'bg-slate-300 text-black' :
                        row.rank === 3 ? 'bg-amber-700 text-white' :
                        isTop4 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {row.rank}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-bold text-white flex items-center space-x-2">
                      <span>{row.team}</span>
                      {isTop4 && (
                        <span className="text-[10px] text-emerald-400 font-bold px-1.5 py-0.2 rounded bg-emerald-500/10 border border-emerald-500/20">
                          Q Zone
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-center text-slate-300">{row.pld}</td>
                    <td className="py-3 px-3 text-center font-bold text-emerald-400">{row.won}</td>
                    <td className="py-3 px-3 text-center font-bold text-red-400">{row.lost}</td>
                    {tournament === 'wtc' ? (
                      <>
                        <td className="py-3 px-3 text-center text-slate-400">{row.draw}</td>
                        <td className="py-3 px-3 text-center font-bold text-cyan-300">{row.pct}</td>
                      </>
                    ) : (
                      <td className={`py-3 px-3 text-center font-mono ${
                        row.nrr.startsWith('+') ? 'text-emerald-400' : 'text-slate-400'
                      }`}>
                        {row.nrr}
                      </td>
                    )}
                    <td className="py-3 px-5 text-right font-black text-amber-300 text-base">
                      {row.pts}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="bg-[#0B1324] px-5 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Top 4 teams qualify for Playoffs / Finals</span>
          </span>
          <span>Updated after every match conclusion</span>
        </div>
      </div>

    </div>
  );
}
