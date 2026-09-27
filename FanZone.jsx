import React, { useState } from 'react';
import { MessageSquare, Heart, Send, Sparkles, Flame, ShieldAlert } from 'lucide-react';
import { postFanMessage } from '../services/supabaseClient';

export default function FanZone({ selectedMatch }) {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Aarav (IND)', team: 'India', text: 'Kohli masterclass in the finals! 22 off 14 is definitely getting chased down! 🇮🇳🔥', emoji: '🇮🇳', time: 'Just now' },
    { id: 2, user: 'Liam (AUS)', team: 'Australia', text: 'Never count Cummins and Starc out in death overs! One wicket turns this upside down.', emoji: '🇦🇺', time: '1m ago' },
    { id: 3, user: 'Zubair', team: 'Neutral', text: 'Absolute peak cricket entertainment. What an ICC tournament finale!', emoji: '🏆', time: '2m ago' }
  ]);

  const [inputName, setInputName] = useState('');
  const [inputText, setInputText] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('🔥');

  const handlePost = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = {
      id: Date.now(),
      user: inputName.trim() || 'Cricket Fan',
      team: selectedMatch?.team2?.name || 'India',
      text: inputText,
      emoji: selectedEmoji,
      time: 'Just now'
    };

    setMessages((prev) => [newMsg, ...prev]);
    setInputText('');

    // Attempt Supabase push
    await postFanMessage(selectedMatch?.id, newMsg.user, newMsg.team, newMsg.text, newMsg.emoji);
  };

  return (
    <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-5 h-5 text-emerald-400" />
          <h3 className="text-sm font-bold text-white">Live Stadium Fan Zone</h3>
        </div>
        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
          GLOBAL ARENA
        </span>
      </div>

      {/* Post Form */}
      <form onSubmit={handlePost} className="space-y-2.5">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Your name or handle..."
            className="w-1/3 bg-slate-900 text-xs text-white placeholder-slate-500 px-3 py-2 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
          />
          <div className="flex items-center space-x-1 bg-slate-900 px-2 rounded-xl border border-slate-800">
            {['🔥', '🏏', '🇮🇳', '🇦🇺', '🏆'].map((em) => (
              <button
                key={em}
                type="button"
                onClick={() => setSelectedEmoji(em)}
                className={`text-base p-1 rounded-lg transition-transform ${
                  selectedEmoji === em ? 'scale-125 bg-slate-800' : 'hover:scale-110 opacity-70'
                }`}
              >
                {em}
              </button>
            ))}
          </div>
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Share your match reaction with fans..."
            className="flex-1 bg-slate-900 text-xs text-white placeholder-slate-500 px-3 py-2 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs shadow-md transition-colors"
          >
            Post
          </button>
        </div>
      </form>

      {/* Message Feed */}
      <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
        {messages.map((m) => (
          <div key={m.id} className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 text-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-white flex items-center space-x-1.5">
                <span>{m.emoji}</span>
                <span>{m.user}</span>
              </span>
              <span className="text-[10px] text-slate-500">{m.time}</span>
            </div>
            <p className="text-slate-300 leading-relaxed">{m.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
