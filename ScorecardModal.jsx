import React, { useState } from 'react';
import { X, Sparkles, Trophy, MapPin, Radio, Activity, MessageSquare } from 'lucide-react';

export default function ScorecardModal({ match, onClose }) {
  const [activeTab, setActiveTab] = useState('innings2'); // Default to current innings
  const [commentaryTab, setCommentaryTab] = useState('all');

  if (!match) return null;

  const team1 = match.team1;
  const team2 = match.team2;
  const scorecard = match.fullScorecard;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#0C1424] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header Strip */}
        <div className="bg-gradient-to-r from-slate-900 via-[#131F35] to-slate-900 p-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-amber-400 mb-1">
              <Trophy className="w-4 h-4" />
              <span>{match.tournament}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">{match.venue}</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{team1.flag}</span>
                <span className="text-base sm:text-lg font-black text-white">{team1.name}</span>
                <span className="text-base sm:text-lg font-extrabold text-slate-300">
                  {team1.score}/{team1.wickets}
                  <span className="text-xs font-normal text-slate-400 ml-1">({team1.overs} ov)</span>
                </span>
              </div>
              <span className="text-slate-500 font-bold">vs</span>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{team2.flag}</span>
                <span className="text-base sm:text-lg font-black text-white">{team2.name}</span>
                <span className="text-base sm:text-lg font-extrabold text-amber-400">
                  {team2.score}/{team2.wickets}
                  <span className="text-xs font-normal text-slate-400 ml-1">({team2.overs} ov)</span>
                </span>
              </div>
            </div>
            <p className="text-xs font-semibold text-emerald-400 mt-1.5 flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{match.statusText}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Active Pitch Strip (Current Batsmen & Bowler) */}
        {match.currentBatsmen && match.currentBatsmen.length > 0 && (
          <div className="bg-[#101A2D] px-5 py-3 border-b border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider block mb-1">
                Batting Now
              </span>
              <div className="space-y-1">
                {match.currentBatsmen.map((b, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center space-x-1">
                      <span>{b.name}</span>
                      {b.isStriker && <span className="text-emerald-400 text-sm">*</span>}
                    </span>
                    <span className="text-slate-300">
                      <strong className="text-amber-300 font-extrabold">{b.runs}</strong> ({b.balls}) • 4s: {b.fours} • 6s: {b.sixes} • SR: {b.strikeRate}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {match.currentBowler && (
              <div>
                <span className="text-[10px] font-black text-cyan-400 uppercase tracking-wider block mb-1">
                  Bowling Now
                </span>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{match.currentBowler.name}</span>
                  <span className="text-slate-300">
                    {match.currentBowler.overs}-{match.currentBowler.maidens}-<strong className="text-white">{match.currentBowler.runs}</strong>-<strong className="text-emerald-400">{match.currentBowler.wickets}</strong> (Econ: {match.currentBowler.economy})
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tabs: Innings 1, Innings 2, Live Commentary, AI Summary */}
        <div className="flex border-b border-slate-800 px-5 pt-3 bg-slate-900/60 overflow-x-auto">
          <button
            onClick={() => setActiveTab('innings2')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'innings2'
                ? 'border-emerald-400 text-emerald-400 bg-emerald-500/10 rounded-t-lg'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {team2.shortName} Innings ({team2.score}/{team2.wickets})
          </button>
          <button
            onClick={() => setActiveTab('innings1')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'innings1'
                ? 'border-emerald-400 text-emerald-400 bg-emerald-500/10 rounded-t-lg'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {team1.shortName} Innings ({team1.score}/{team1.wickets})
          </button>
          <button
            onClick={() => setActiveTab('commentary')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'commentary'
                ? 'border-emerald-400 text-emerald-400 bg-emerald-500/10 rounded-t-lg'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>Ball-by-Ball Feed</span>
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'ai'
                ? 'border-amber-400 text-amber-300 bg-amber-500/10 rounded-t-lg'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI Match Intelligence</span>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="p-5 overflow-y-auto flex-1 space-y-6">
          
          {/* Innings 2 View */}
          {activeTab === 'innings2' && scorecard && (
            <div className="space-y-6">
              {/* Batting Card */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Batting Scorecard</h4>
                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#0E1729]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900/90 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                      <tr>
                        <th className="py-2.5 px-4">Batter</th>
                        <th className="py-2.5 px-3">Dismissal</th>
                        <th className="py-2.5 px-3 text-right">R</th>
                        <th className="py-2.5 px-3 text-right">B</th>
                        <th className="py-2.5 px-3 text-right">4s</th>
                        <th className="py-2.5 px-3 text-right">6s</th>
                        <th className="py-2.5 px-4 text-right">SR</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 font-medium">
                      {scorecard.team2Batting.map((b, i) => (
                        <tr key={i} className="hover:bg-slate-800/40">
                          <td className="py-2.5 px-4 font-bold text-white">{b.name}</td>
                          <td className="py-2.5 px-3 text-slate-400 text-[11px]">{b.dismissal}</td>
                          <td className="py-2.5 px-3 text-right font-extrabold text-amber-300">{b.runs}</td>
                          <td className="py-2.5 px-3 text-right text-slate-300">{b.balls}</td>
                          <td className="py-2.5 px-3 text-right text-blue-400">{b.fours}</td>
                          <td className="py-2.5 px-3 text-right text-amber-400">{b.sixes}</td>
                          <td className="py-2.5 px-4 text-right text-emerald-400 font-bold">{b.sr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bowling Card */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{team1.name} Bowling</h4>
                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#0E1729]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900/90 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                      <tr>
                        <th className="py-2.5 px-4">Bowler</th>
                        <th className="py-2.5 px-3 text-right">O</th>
                        <th className="py-2.5 px-3 text-right">M</th>
                        <th className="py-2.5 px-3 text-right">R</th>
                        <th className="py-2.5 px-3 text-right">W</th>
                        <th className="py-2.5 px-4 text-right">Econ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 font-medium">
                      {scorecard.team2Bowling.map((bw, i) => (
                        <tr key={i} className="hover:bg-slate-800/40">
                          <td className="py-2.5 px-4 font-bold text-white">{bw.name}</td>
                          <td className="py-2.5 px-3 text-right text-slate-300">{bw.overs}</td>
                          <td className="py-2.5 px-3 text-right text-slate-400">{bw.maidens}</td>
                          <td className="py-2.5 px-3 text-right text-slate-300">{bw.runs}</td>
                          <td className="py-2.5 px-3 text-right font-extrabold text-emerald-400">{bw.wickets}</td>
                          <td className="py-2.5 px-4 text-right text-cyan-300 font-bold">{bw.econ}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Innings 1 View */}
          {activeTab === 'innings1' && scorecard && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{team1.name} Batting Scorecard</h4>
                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#0E1729]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900/90 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                      <tr>
                        <th className="py-2.5 px-4">Batter</th>
                        <th className="py-2.5 px-3">Dismissal</th>
                        <th className="py-2.5 px-3 text-right">R</th>
                        <th className="py-2.5 px-3 text-right">B</th>
                        <th className="py-2.5 px-3 text-right">4s</th>
                        <th className="py-2.5 px-3 text-right">6s</th>
                        <th className="py-2.5 px-4 text-right">SR</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 font-medium">
                      {scorecard.team1Batting.map((b, i) => (
                        <tr key={i} className="hover:bg-slate-800/40">
                          <td className="py-2.5 px-4 font-bold text-white">{b.name}</td>
                          <td className="py-2.5 px-3 text-slate-400 text-[11px]">{b.dismissal}</td>
                          <td className="py-2.5 px-3 text-right font-extrabold text-amber-300">{b.runs}</td>
                          <td className="py-2.5 px-3 text-right text-slate-300">{b.balls}</td>
                          <td className="py-2.5 px-3 text-right text-blue-400">{b.fours}</td>
                          <td className="py-2.5 px-3 text-right text-amber-400">{b.sixes}</td>
                          <td className="py-2.5 px-4 text-right text-emerald-400 font-bold">{b.sr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Commentary Feed */}
          {activeTab === 'commentary' && (
            <div className="space-y-3">
              {match.commentary && match.commentary.length > 0 ? (
                match.commentary.map((c, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-[#0E172A] border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-black text-amber-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                        Over {c.over}
                      </span>
                      <div className="flex items-center space-x-2">
                        {c.speed && (
                          <span className="text-[10px] text-cyan-400 font-mono">
                            ⚡ {c.speed}
                          </span>
                        )}
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {c.tag}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">{c.text}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-slate-500 text-xs">
                  Ball-by-ball commentary begins as soon as match goes live.
                </div>
              )}
            </div>
          )}

          {/* AI Match Intelligence */}
          {activeTab === 'ai' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-slate-900 border border-emerald-500/30">
                <div className="flex items-center space-x-2 mb-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <h4 className="text-sm font-bold text-white">AI Win Probability Analysis</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {match.winProbability?.aiAnalysis || "Our neural model continuously calculates live win probability using DLS resource tables, current momentum, wickets in hand, and player match-up history."}
                </p>

                {match.winProbability && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-extrabold">
                      <span className="text-blue-400">{team1.name}: {match.winProbability.team1}%</span>
                      <span className="text-emerald-400">{team2.name}: {match.winProbability.team2}%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden flex">
                      <div
                        style={{ width: `${match.winProbability.team1}%` }}
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                      />
                      <div
                        style={{ width: `${match.winProbability.team2}%` }}
                        className="h-full bg-gradient-to-r from-amber-400 to-emerald-400"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Pitch Conditions & Key Battle */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <h5 className="font-bold text-slate-200 mb-1 flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Venue & Conditions</span>
                  </h5>
                  <p className="text-slate-400 leading-relaxed">
                    Pace-friendly deck with true carry. 64-meter boundaries towards fine-leg and square. Outfield lightning fast.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <h5 className="font-bold text-slate-200 mb-1 flex items-center space-x-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Key Tactical Battle</span>
                  </h5>
                  <p className="text-slate-400 leading-relaxed">
                    Mitchell Starc's inswinging yorkers against Virat Kohli's front-pad flick. Kohli averages 48.2 against left-arm pace.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-900/90 px-5 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Official ICC & League Live Scorecard Feed</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
