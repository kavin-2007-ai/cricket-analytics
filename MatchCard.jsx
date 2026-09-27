import React from 'react';
import { Eye, Video, Sparkles, MapPin, Trophy } from 'lucide-react';

export default function MatchCard({ match, onOpenScorecard, onWatchVideo }) {
  const isLive = match.status === 'LIVE';

  return (
    <div className="relative bg-gradient-to-b from-[#111C30] to-[#0D1525] border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/30 group">
      
      {/* Top Banner: Tournament & Format */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
        <div className="flex items-center space-x-2">
          <Trophy className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold text-slate-300 truncate max-w-[220px]">
            {match.tournament}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-black tracking-wider px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
            {match.format}
          </span>
          {isLive ? (
            <span className="flex items-center space-x-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/40">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
              <span>LIVE</span>
            </span>
          ) : (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-400">
              {match.status}
            </span>
          )}
        </div>
      </div>

      {/* Teams and Scores Display */}
      <div className="space-y-3 mb-4">
        {/* Team 1 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{match.team1.flag}</span>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                {match.team1.name}
              </h4>
              <span className="text-xs text-slate-400">
                {match.team1.overs > 0 ? `(${match.team1.overs} ov)` : 'Yet to bat'}
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-black text-white">
              {match.team1.score}
              <span className="text-sm font-medium text-slate-400">/{match.team1.wickets}</span>
            </div>
            {match.team1.runRate > 0 && (
              <span className="text-[11px] text-slate-400">CRR: {match.team1.runRate}</span>
            )}
          </div>
        </div>

        {/* Team 2 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{match.team2.flag}</span>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                {match.team2.name}
              </h4>
              <span className="text-xs text-slate-400">
                {match.team2.overs > 0 ? `(${match.team2.overs} ov)` : 'Yet to bat'}
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-black text-amber-300">
              {match.team2.score}
              <span className="text-sm font-medium text-slate-400">/{match.team2.wickets}</span>
            </div>
            {match.team2.target && (
              <span className="text-[11px] text-emerald-400 font-medium">
                Target: {match.team2.target}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Status Line */}
      <div className="bg-[#0A1220] rounded-xl p-2.5 mb-3.5 border border-slate-800/80">
        <p className="text-xs font-semibold text-emerald-400 flex items-center space-x-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>{match.statusText}</span>
        </p>
        <p className="text-[11px] text-slate-500 mt-1 flex items-center space-x-1 truncate">
          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
          <span>{match.venue}</span>
        </p>
      </div>

      {/* Recent Balls Strip (Over preview) */}
      {match.recentBalls && match.recentBalls.length > 0 && (
        <div className="flex items-center justify-between mb-4 px-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Recent Balls:</span>
          <div className="flex items-center space-x-1.5">
            {match.recentBalls.slice(-6).map((ball, idx) => {
              const isWicket = ball === 'W';
              const isSix = ball === '6';
              const isFour = ball === '4';
              const isDot = ball === '0';
              return (
                <span
                  key={idx}
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${
                    isWicket ? 'bg-red-500 text-white shadow-sm shadow-red-500/50 animate-pulse' :
                    isSix ? 'bg-amber-400 text-black shadow-sm shadow-amber-400/50 font-extrabold' :
                    isFour ? 'bg-blue-500 text-white shadow-sm shadow-blue-500/50' :
                    isDot ? 'bg-slate-800 text-slate-400' :
                    'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}
                >
                  {ball}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* AI Win Probability Indicator */}
      {match.winProbability && (
        <div className="mb-4 bg-slate-900/60 rounded-xl p-2.5 border border-slate-800">
          <div className="flex items-center justify-between text-[11px] font-bold mb-1.5">
            <span className="text-slate-300 flex items-center space-x-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>AI Win Forecast</span>
            </span>
            <span className="text-emerald-400">
              {match.team1.shortName} {match.winProbability.team1}% vs {match.team2.shortName} {match.winProbability.team2}%
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden flex">
            <div
              style={{ width: `${match.winProbability.team1}%` }}
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
            />
            <div
              style={{ width: `${match.winProbability.team2}%` }}
              className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-500"
            />
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800/80">
        <button
          onClick={() => onOpenScorecard(match)}
          className="flex items-center justify-center space-x-2 py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-xs font-bold text-slate-200 hover:text-white transition-all border border-slate-700/60"
        >
          <Eye className="w-3.5 h-3.5 text-emerald-400" />
          <span>Scorecard</span>
        </button>

        <button
          onClick={() => onWatchVideo(match)}
          className="flex items-center justify-center space-x-2 py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-xs font-bold text-black shadow-md shadow-emerald-500/20 transition-all"
        >
          <Video className="w-3.5 h-3.5 text-black" />
          <span>Live Stream</span>
        </button>
      </div>

    </div>
  );
}
