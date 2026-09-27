import React, { useState } from 'react';
import { Sparkles, Send, Brain, Bot, HelpCircle, Activity, Award } from 'lucide-react';
import { queryAiCricketBot } from '../services/aiService';

export default function AiMatchInsights({ matches }) {
  const [selectedMatch, setSelectedMatch] = useState(matches[0] || null);
  const [question, setQuestion] = useState('');
  const [chatLog, setChatLog] = useState([
    {
      sender: 'ai',
      text: "Greetings Cricket Fan! I am your AI Cricket Strategist. Ask me about real-time win probabilities, player match-ups, pitch telemetry, or death-over tactics!"
    }
  ]);

  const handleAsk = (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    const userText = question;
    setQuestion('');
    setChatLog((prev) => [...prev, { sender: 'user', text: userText }]);

    setTimeout(() => {
      const reply = queryAiCricketBot(userText, selectedMatch);
      setChatLog((prev) => [...prev, { sender: 'ai', text: reply }]);
    }, 400);
  };

  const winProb = selectedMatch?.winProbability || { team1: 50, team2: 50 };

  return (
    <div className="space-y-6">
      
      {/* AI Hub Header */}
      <div className="bg-gradient-to-r from-amber-950/40 via-[#101F38] to-emerald-950/40 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Cricket Pulse Neural Predictor</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            AI Match Analyst & Win Probability Engine
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
            Harnessing predictive machine learning models to forecast live match shifts, batting wagon wheel leverage, bowler impact ratings, and tactical scenarios.
          </p>
        </div>
      </div>

      {/* Select Match Bar */}
      <div className="flex items-center space-x-3 overflow-x-auto pb-2">
        <span className="text-xs font-bold text-slate-400 whitespace-nowrap">Analyze Match:</span>
        {matches.map((m) => (
          <button
            key={m.id}
            onClick={() => setSelectedMatch(m)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center space-x-2 ${
              selectedMatch?.id === m.id
                ? 'bg-gradient-to-r from-amber-500 to-emerald-500 text-black shadow-lg shadow-amber-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <span>{m.team1.shortName} vs {m.team2.shortName}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/40 text-white font-mono">{m.format}</span>
          </button>
        ))}
      </div>

      {/* Main Grid: Win Probability Matrix & AI Chatbot */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Probability Card */}
        <div className="bg-[#10192A] border border-slate-800 rounded-3xl p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-extrabold text-white flex items-center space-x-2">
                <Brain className="w-5 h-5 text-amber-400" />
                <span>Live Win Probability Meter</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">{selectedMatch?.tournament}</p>
            </div>
            <span className="text-xs font-bold text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              UPDATED LIVE
            </span>
          </div>

          {/* Probability Bars */}
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm font-black">
              <div className="flex items-center space-x-2">
                <span className="text-xl">{selectedMatch?.team1.flag}</span>
                <span className="text-blue-400">{selectedMatch?.team1.name}</span>
              </div>
              <span className="text-xl text-blue-400">{winProb.team1}%</span>
            </div>
            <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
              <div
                style={{ width: `${winProb.team1}%` }}
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-700"
              />
            </div>

            <div className="flex justify-between items-center text-sm font-black pt-2">
              <div className="flex items-center space-x-2">
                <span className="text-xl">{selectedMatch?.team2.flag}</span>
                <span className="text-emerald-400">{selectedMatch?.team2.name}</span>
              </div>
              <span className="text-xl text-emerald-400">{winProb.team2}%</span>
            </div>
            <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
              <div
                style={{ width: `${winProb.team2}%` }}
                className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-700"
              />
            </div>
          </div>

          {/* AI Analysis Summary */}
          <div className="p-4 rounded-2xl bg-[#09101D] border border-slate-800">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tactical Breakthrough Factor</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {winProb.aiAnalysis || "Match projection based on historical 2nd innings run chases, bowler death-over economy rates, and wicket pressure."}
            </p>
          </div>

          {/* DLS Resource Info */}
          <div className="grid grid-cols-2 gap-3 text-center text-xs">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="block text-slate-400 text-[10px] uppercase font-semibold">Par Score (DLS)</span>
              <span className="text-base font-extrabold text-white">162 (ov 17.0)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="block text-slate-400 text-[10px] uppercase font-semibold">Required Boundary Freq.</span>
              <span className="text-base font-extrabold text-amber-400">1 per 4.2 balls</span>
            </div>
          </div>

        </div>

        {/* Ask Cricket AI Chatbot */}
        <div className="bg-[#10192A] border border-slate-800 rounded-3xl p-6 flex flex-col justify-between h-[520px]">
          <div>
            <div className="flex items-center space-x-3 border-b border-slate-800 pb-4 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Ask Cricket Pulse AI</h3>
                <p className="text-[11px] text-slate-400">Interactive live match question & stats answering</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="space-y-3 overflow-y-auto max-h-[330px] pr-2 scrollbar-thin">
              {chatLog.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-semibold'
                        : 'bg-slate-900 text-slate-200 border border-slate-800'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Prompts & Input */}
          <div className="mt-4 pt-3 border-t border-slate-800">
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-2">
              {['Who will win?', 'Bumrah death stats', 'Kohli chase record', 'Pitch conditions'].map((q) => (
                <button
                  key={q}
                  onClick={() => setQuestion(q)}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-semibold text-slate-300 whitespace-nowrap"
                >
                  {q}
                </button>
              ))}
            </div>

            <form onSubmit={handleAsk} className="flex items-center space-x-2">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask about live match, pitch, or player records..."
                className="flex-1 bg-slate-900 text-xs text-white placeholder-slate-400 px-3.5 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
}
