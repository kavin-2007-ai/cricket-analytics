# Cricket Pulse AI - Deployment & Developer Guide

Welcome to **Cricket Pulse AI**, an ultra-modern, colorful, and professional cricket live score, player intelligence, and video streaming web platform.

This guide provides simple, step-by-step instructions to test locally and deploy to **Vercel**, **Supabase**, and **Netlify**.

---

## 📁 Project Architecture Overview

```
cricket.py/
├── index.html                  # 🚀 Standalone zero-dependency app (double-click to run immediately!)
├── vercel.json                 # Vercel one-click deployment configuration
├── netlify.toml                # Netlify build & redirect configuration
├── .env.example                # Environment variables template
├── DEPLOYMENT_GUIDE.md         # Complete step-by-step deployment guide
├── frontend/                   # Modern React 18 + Vite + Tailwind CSS Project
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       ├── data/cricketData.js        # Real ICC, IPL, PSL, Ashes data & player abilities
│       ├── services/
│       │   ├── supabaseClient.js      # Supabase connection & live fan chat
│       │   └── aiService.js           # AI win probability & conversational engine
│       └── components/
│           ├── Navbar.jsx             # Top sports navigation & search
│           ├── LiveTicker.jsx         # Live rolling scoreboard ticker
│           ├── MatchCard.jsx          # Vivid match cards with live ball dots
│           ├── ScorecardModal.jsx     # Innings scorecards & ball-by-ball commentary
│           ├── PlayerHub.jsx          # ICC player intelligence & ability matrix
│           ├── PlayerModal.jsx        # Detailed career stats & radar metrics
│           ├── LiveVideoPlayer.jsx    # Official 4K broadcast video feeds
│           ├── AiMatchInsights.jsx    # Live win predictor & AI cricket chatbot
│           ├── PointsTable.jsx        # IPL & ICC WTC standings table
│           └── FanZone.jsx            # Live fan cheering arena
├── backend/                    # Python FastAPI Backend
│   ├── main.py                # REST API endpoints for matches & predictions
│   ├── ai_engine.py           # DLS-based win probability & Gemini commentary
│   └── requirements.txt
└── supabase/
    └── schema.sql             # SQL schema for matches, players, commentary, & chat
```

---

## ⚡ 1. Instant Local Testing (0 Setup Required)

You can run the application immediately without installing anything:
1. Open your file explorer at `c:\Users\rpkav\OneDrive\Desktop\cricket.py`.
2. **Double-click `index.html`** or right-click and choose **Open with Google Chrome / Microsoft Edge**.
3. That's it! The full interactive Cricket Pulse AI platform will launch with live scores, video streaming, player radars, AI predictions, and points table.

---

## 🌐 2. Deploy to Vercel (Frontend & Full Web App)

### Option A: Using the Vercel Dashboard (Easiest)
1. Push this project to GitHub (or GitLab/Bitbucket):
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Cricket Pulse AI"
   git remote add origin https://github.com/your-username/cricket-pulse-ai.git
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com).
3. Click **Add New Project** and import your repository.
4. Set:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `frontend` (or leave default since `vercel.json` is pre-configured)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Under **Environment Variables**, add:
   - `VITE_SUPABASE_URL` = (Your Supabase Project URL)
   - `VITE_SUPABASE_ANON_KEY` = (Your Supabase Anon Key)
6. Click **Deploy**. Your cricket website is now live worldwide on a fast CDN!

### Option B: Using Vercel CLI
```bash
cd frontend
npm install -g vercel
vercel
```

---

## 🚀 3. Deploy to Netlify

### Option A: 10-Second Drag-and-Drop (Netlify Drop)
1. In your local terminal, build the project:
   ```bash
   cd frontend
   npm install
   npm run build
   ```
2. This creates a `dist` folder inside `frontend/`.
3. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
4. Drag and drop the `dist` folder directly onto the browser window.
5. Your site is live in 10 seconds!

### Option B: Using Git & Netlify Dashboard
1. Go to [netlify.com](https://www.netlify.com) and click **Add new site > Import an existing project**.
2. Select your GitHub repository.
3. Because `netlify.toml` is already present, Netlify will auto-detect:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Add your environment variables in Site Configuration > Environment variables.
5. Click **Deploy Site**.

---

## 🗄️ 4. Set Up Supabase Database

1. Sign up or log into [supabase.com](https://supabase.com) and create a **New Project**.
2. In the Supabase sidebar, click on **SQL Editor**.
3. Open `supabase/schema.sql` from this codebase, copy all the SQL code, paste it into the Supabase SQL Editor, and click **Run**.
   - This automatically creates the `matches`, `players`, `ball_by_ball`, and `fan_chat` tables with Row Level Security (RLS) and real-time pub/sub enabled.
4. Go to **Project Settings > API**:
   - Copy the **Project URL**
   - Copy the **anon / public key**
5. Paste these into your `.env` or in your hosting provider's environment variables:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

---

## 🐍 5. Running & Deploying the Python FastAPI Backend

### Running Locally:
```bash
cd backend
python -m venv venv
venv\Scripts\activate   # On Windows
pip install -r requirements.txt
python main.py
```
Backend runs at `http://localhost:8000`. You can test the interactive API docs at `http://localhost:8000/docs`.

### Deploying the Python Backend for Free:
- **Render.com**: Create a new Web Service, select Python, build command `pip install -r requirements.txt`, start command `uvicorn main:app --host 0.0.0.0 --port $PORT`.
- **Railway.app**: Connect repo, set directory to `backend`, start command `uvicorn main:app --host 0.0.0.0 --port $PORT`.

---

## 🌟 Key Features Built for Cricket Fans

- 🏏 **Real-Time Scoreboard**: Comprehensive coverage of ICC International matches (T20 World Cup, WTC Ashes) and Premier Leagues (IPL, BBL, PSL).
- ⚡ **Ball-by-Ball Commentary**: Speeds in km/h, emotion badges, and key event highlighting.
- 🎯 **ICC Player Ability Matrix**: 0-100 radar and progress metrics for Power Hitting, Yorker Precision, Death Bowling, Chasing Mastery, and Clutch Index.
- 📺 **Official Match Video Channels**: High-energy responsive broadcast video feeds with channel switcher (Star Sports, Sky Sports, JioCinema, Willow TV).
- 🤖 **AI Match Analyst & Neural Predictor**: Dynamic win probability meter that shifts based on DLS equations and required run rates, accompanied by an interactive "Ask Cricket AI" assistant.
- 🏆 **Official Standings**: Points table for IPL 2026 and ICC World Test Championship.
- 💬 **Live Global Fan Zone**: Real-time virtual cheers and reaction wall.
