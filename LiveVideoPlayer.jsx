import React, { useState } from 'react';
import { Video, Tv, Radio, Users, Sparkles, Volume2, Maximize2, ShieldCheck, Flame } from 'lucide-react';
import { LIVE_VIDEO_CHANNELS } from '../data/cricketData';

export default function LiveVideoPlayer({ selectedMatch }) {
  const [activeChannel, setActiveChannel] = useState(LIVE_VIDEO_CHANNELS[0]);
  const [theaterMode, setTheaterMode] = useState(false);

  return (
    <div className="space-y-6">
      
      {/* Stream Hub Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#0F172A] p-5 rounded-2xl border border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-500">
            <Tv className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-base sm:text-lg font-bold text-white">
                Live Cricket Video & Official Broadcast Feeds
              </h2>
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-red-500 text-white uppercase tracking-wider animate-pulse">
                LIVE
              </span>
            </div>
            <p className="text-xs text-slate-400">
              High definition multi-angle streaming, official tournament feeds, and match analysis.
            </p>
          </div>
        </div>

        {/* Stream Badges */}
        <div className="flex items-center space-x-2 text-xs">
          <span className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 font-bold flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official Licensed Feed</span>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400 font-bold">
            {activeChannel.quality}
          </span>
        </div>
      </div>

      {/* Main Video Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Video Player (3 cols on large screens) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black border-2 border-slate-800 shadow-2xl shadow-emerald-950/20 group">
            
            {/* Embedded Live Player */}
            <iframe
              src={activeChannel.url}
              title={activeChannel.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            {/* Live Indicator Overlay */}
            <div className="absolute top-4 left-4 z-10 pointer-events-none flex items-center space-x-2">
              <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-black tracking-wider shadow-lg backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                <span>{activeChannel.badge}</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-black/70 text-slate-200 text-xs font-semibold backdrop-blur-sm border border-white/10">
                {activeChannel.viewers}
              </span>
            </div>
          </div>

          {/* Under-player Match Status Bar */}
          <div className="p-4 rounded-2xl bg-[#111A2D] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-extrabold text-white flex items-center space-x-2">
                <span>{activeChannel.match}</span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-amber-400 font-semibold">{activeChannel.tournament}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Broadcasting via {activeChannel.name} • Dolby Digital Stadium Ambience
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xs text-emerald-400 font-bold px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                ⚡ Ultra Low Latency
              </span>
            </div>
          </div>
        </div>

        {/* Live Channel Switcher (1 col) */}
        <div className="space-y-3">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center space-x-2">
            <Radio className="w-4 h-4 text-emerald-400" />
            <span>Select Channel / Stream</span>
          </h3>

          <div className="space-y-2.5">
            {LIVE_VIDEO_CHANNELS.map((ch) => {
              const isSelected = activeChannel.id === ch.id;
              return (
                <div
                  key={ch.id}
                  onClick={() => setActiveChannel(ch)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-500/60 shadow-lg shadow-emerald-500/10'
                      : 'bg-[#10192A] hover:bg-[#142036] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-white">{ch.name}</span>
                      {ch.isLive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 truncate max-w-[170px]">{ch.match}</p>
                    <span className="text-[10px] text-emerald-400 font-medium block">
                      {ch.quality} • {ch.viewers}
                    </span>
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-1 rounded-lg uppercase ${
                    isSelected ? 'bg-emerald-500 text-black font-extrabold' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {isSelected ? 'ACTIVE' : 'WATCH'}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Quick Stadium Fan Cheer Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#121E36] to-[#0A1220] border border-slate-800 text-center space-y-2">
            <span className="text-xs font-bold text-slate-300 block">Virtual Stadium Cheer</span>
            <p className="text-[11px] text-slate-400">Cheer for your team with millions of fans worldwide</p>
            <div className="flex items-center justify-center space-x-2 pt-1 text-lg">
              <button className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transform hover:scale-125 transition-all">🏏</button>
              <button className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transform hover:scale-125 transition-all">🔥</button>
              <button className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transform hover:scale-125 transition-all">🇮🇳</button>
              <button className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transform hover:scale-125 transition-all">🇦🇺</button>
              <button className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transform hover:scale-125 transition-all">🏆</button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
