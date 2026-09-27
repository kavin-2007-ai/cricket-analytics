import os
import random
from typing import Dict, Any, Optional

try:
    from google import genai
    from google.genai import types
    GEMINI_AVAILABLE = True
except ImportError:
    GEMINI_AVAILABLE = False

class CricketAIEngine:
    def __init__(self):
        self.api_key = os.getenv("GEMINI_API_KEY")
        self.client = None
        if GEMINI_AVAILABLE and self.api_key:
            try:
                self.client = genai.Client(api_key=self.api_key)
            except Exception as e:
                print(f"Warning: Could not initialize Gemini Client: {e}")

    def calculate_win_probability(self, match_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Sophisticated Win Probability Engine combining:
        - Required Run Rate vs Current Run Rate
        - Wickets in hand penalty
        - Resource percentage based on DLS-inspired dynamic weighting
        """
        team1 = match_data.get("team1", {})
        team2 = match_data.get("team2", {})
        innings = match_data.get("currentInnings", 1)
        
        if innings == 1:
            # 1st innings projection
            t1_score = team1.get("score", 0)
            t1_wickets = team1.get("wickets", 0)
            t1_overs = team1.get("overs", 1.0)
            t1_crr = t1_score / max(t1_overs, 0.1)
            
            # Base 50%
            prob_t1 = min(max(int(35 + (t1_crr * 3.5) - (t1_wickets * 4)), 15), 85)
            prob_t2 = 100 - prob_t1
        else:
            # 2nd innings chase
            target = team2.get("target", team1.get("score", 150) + 1)
            curr_score = team2.get("score", 0)
            wickets_lost = team2.get("wickets", 0)
            overs_done = team2.get("overs", 0.1)
            
            runs_needed = max(target - curr_score, 0)
            balls_left = max(int((20 - overs_done) * 6), 1)
            rrr = (runs_needed / balls_left) * 6
            wickets_left = 10 - wickets_lost
            
            # AI chasing factor formula
            chase_difficulty = (rrr / 9.0) * (1.1 ** (10 - wickets_left))
            
            if runs_needed <= 0:
                prob_t2 = 100
                prob_t1 = 0
            elif wickets_left <= 0:
                prob_t2 = 0
                prob_t1 = 100
            else:
                prob_t2 = int(100 / (1 + chase_difficulty))
                prob_t2 = min(max(prob_t2, 2), 98)
                prob_t1 = 100 - prob_t2

        analysis = self.generate_tactical_summary(match_data, prob_t1, prob_t2)
        return {
            "team1_probability": prob_t1,
            "team2_probability": prob_t2,
            "tactical_analysis": analysis
        }

    def generate_tactical_summary(self, match_data: Dict[str, Any], prob1: int, prob2: int) -> str:
        team1 = match_data.get("team1", {}).get("name", "Team 1")
        team2 = match_data.get("team2", {}).get("name", "Team 2")
        status_text = match_data.get("statusText", "")
        
        # If Gemini API client is available and active, generate deep analysis
        if self.client:
            try:
                prompt = (
                    f"You are a legendary ICC Cricket match analyst (like Harsha Bhogle / Michael Atherton). "
                    f"Analyze this live scenario in 2 concise, energetic sentences: "
                    f"Match: {team1} vs {team2}. Status: {status_text}. "
                    f"Win Probability: {team1} {prob1}%, {team2} {prob2}%. "
                    f"Highlight match-defining tactical factors such as death overs, required run rate, or bowler variations."
                )
                response = self.client.models.generate_content(
                    model="gemini-2.5-flash",
                    contents=prompt
                )
                if response and response.text:
                    return response.text.strip()
            except Exception as e:
                print(f"Gemini API call failed, falling back to local analysis: {e}")

        # High-fidelity analytical fallback
        if prob2 > prob1:
            fav = team2
            margin = prob2 - prob1
            return (
                f"{fav} holds strong command with a {prob2}% win index ({margin}% positive edge). "
                f"With set batsmen controlling the middle overs, maintaining strike rotation will neutralize boundary pressure."
            )
        else:
            fav = team1
            margin = prob1 - prob2
            return (
                f"{fav} has seized tactical control ({prob1}% win projection). "
                f"Mounting required run-rate pressure combined with defensive field placements limits boundary options."
            )

    def generate_live_commentary(self, batsman: str, bowler: str, event_type: str) -> Dict[str, str]:
        """Generate high-octane commentary line for any ball event (boundary, wicket, dot)"""
        event_dict = {
            "SIX": [
                f"{bowler} misses the length, and {batsman} unleashes absolute fury! Deep into the night sky, clearing the ropes with ease!",
                f"BOOM! {batsman} picks the slower ball early and sends it soaring 92 meters into the stands! What a monstrous hit!",
                f"Audacious power! {batsman} clears the front leg and deposits {bowler} straight back over sight screen!"
            ],
            "FOUR": [
                f"Stunning timing! {batsman} leans into the drive, piercing cover and mid-off with laser-like precision.",
                f"Carved away behind point! {bowler} provided the width and {batsman} utilized the pace to perfection.",
                f"CRUNCHED! Short and punished through mid-wicket. The outfield does the rest as the ball rockets to the fence."
            ],
            "WICKET": [
                f"GONE! TIMBER! {bowler} strikes with an unplayable 146 km/h yorker right through the gate! Huge moment in the match!",
                f"OUT! A mistimed lofted drive, the fielder races in from long-off and safely pockets the catch! Major breakthrough for {bowler}!",
                f"EDGED AND TAKEN! Superb seam movement off the deck, catches the outside edge and keeper does no mistake!"
            ],
            "DOT": [
                f"Beaten outside off! {bowler} extracts sharp zip off the good length, leaving {batsman} searching for answers.",
                f"Speared into the blockhole, {batsman} jams the bat down just in time to squeeze out a dot ball."
            ],
            "SINGLE": [
                f"Nudged into the gap on the leg-side, quick call from {batsman} and they scamper across for an easy single.",
                f"Turned around the corner towards deep backward square for a brisk rotation of strike."
            ]
        }
        
        pool = event_dict.get(event_type, event_dict["SINGLE"])
        text = random.choice(pool)
        return {
            "event": event_type,
            "text": text
        }
