import os
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict, Any

from ai_engine import CricketAIEngine

app = FastAPI(
    title="Cricket Pulse AI API",
    description="Live scores, player intelligence, AI predictions and match feeds",
    version="1.0.0"
)

# Enable CORS for React frontend (Vercel, Netlify, localhost)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ai_engine = CricketAIEngine()

# Mock in-memory match database
MATCHES = [
    {
        "id": "match-01",
        "tournament": "ICC Men's T20 World Cup 2026 - Final",
        "type": "INTERNATIONAL",
        "format": "T20I",
        "status": "LIVE",
        "statusText": "India needs 22 runs in 14 balls to win",
        "venue": "Melbourne Cricket Ground, Melbourne",
        "team1": {"name": "Australia", "shortName": "AUS", "flag": "🇦🇺", "score": 188, "wickets": 6, "overs": 20.0},
        "team2": {"name": "India", "shortName": "IND", "flag": "🇮🇳", "score": 167, "wickets": 4, "overs": 17.4, "target": 189},
        "streamInfo": {
            "title": "ICC T20 World Cup Final: IND vs AUS Live Stream",
            "channel": "Star Sports / ICC TV World Feed",
            "streamUrl": "https://www.youtube.com/embed/jfKfPfyJRdk",
            "isLive": True
        }
    },
    {
        "id": "match-02",
        "tournament": "Indian Premier League (IPL) 2026 - El Clásico",
        "type": "PREMIER_LEAGUE",
        "format": "T20",
        "status": "LIVE",
        "statusText": "CSK needs 44 runs in 21 balls",
        "venue": "Wankhede Stadium, Mumbai",
        "team1": {"name": "Mumbai Indians", "shortName": "MI", "flag": "🔵", "score": 214, "wickets": 5, "overs": 20.0},
        "team2": {"name": "Chennai Super Kings", "shortName": "CSK", "flag": "🟡", "score": 171, "wickets": 3, "overs": 16.3, "target": 215},
        "streamInfo": {
            "title": "IPL Super Sunday: MI vs CSK Live Stream & Cam",
            "channel": "JioCinema / Sky Sports Cricket",
            "streamUrl": "https://www.youtube.com/embed/5qap5aO4i9A",
            "isLive": True
        }
    },
    {
        "id": "match-03",
        "tournament": "ICC World Test Championship - The Ashes 2026",
        "type": "INTERNATIONAL",
        "format": "TEST",
        "status": "LIVE",
        "statusText": "Day 3, Session 2 - England trail by 84 runs",
        "venue": "Lord's Cricket Ground, London",
        "team1": {"name": "Australia", "shortName": "AUS", "flag": "🇦🇺", "score": 384, "wickets": 10, "overs": 104.2},
        "team2": {"name": "England", "shortName": "ENG", "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "score": 300, "wickets": 6, "overs": 68.4},
        "streamInfo": {
            "title": "The Ashes: ENG vs AUS Day 3 Official Live Feed",
            "channel": "Sky Sports Cricket / Willow TV",
            "streamUrl": "https://www.youtube.com/embed/21X5lGlDOfg",
            "isLive": True
        }
    }
]

class PredictRequest(BaseModel):
    match_id: Optional[str] = None
    team1: Dict[str, Any]
    team2: Dict[str, Any]
    currentInnings: int = 2
    statusText: Optional[str] = None

class CommentaryRequest(BaseModel):
    batsman: str
    bowler: str
    event_type: str # SIX, FOUR, WICKET, DOT, SINGLE

@app.get("/")
def root():
    return {
        "status": "online",
        "app": "Cricket Pulse AI Backend",
        "version": "1.0.0",
        "endpoints": ["/api/matches", "/api/matches/{id}", "/api/ai/predict", "/api/ai/commentary"]
    }

@app.get("/api/matches")
def get_matches(type: Optional[str] = None, status: Optional[str] = None):
    results = MATCHES
    if type:
        results = [m for m in results if m["type"].upper() == type.upper()]
    if status:
        results = [m for m in results if m["status"].upper() == status.upper()]
    return {"matches": results, "total": len(results)}

@app.get("/api/matches/{match_id}")
def get_match_detail(match_id: str):
    for m in MATCHES:
        if m["id"] == match_id:
            # Add dynamic probability
            prob = ai_engine.calculate_win_probability(m)
            m_copy = dict(m)
            m_copy["winProbability"] = prob
            return m_copy
    raise HTTPException(status_code=404, detail="Match not found")

@app.post("/api/ai/predict")
def predict_match_outcome(req: PredictRequest):
    match_dict = req.model_dump()
    result = ai_engine.calculate_win_probability(match_dict)
    return result

@app.post("/api/ai/commentary")
def generate_ball_commentary(req: CommentaryRequest):
    result = ai_engine.generate_live_commentary(req.batsman, req.bowler, req.event_type.upper())
    return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
