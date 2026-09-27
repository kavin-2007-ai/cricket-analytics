export const MATCHES_DATA = [
  {
    id: "match-01",
    tournament: "ICC Men's T20 World Cup 2026 - Final",
    type: "INTERNATIONAL",
    format: "T20I",
    status: "LIVE",
    statusText: "India needs 22 runs in 14 balls to win",
    venue: "Melbourne Cricket Ground, Melbourne",
    toss: "India won the toss and elected to bowl",
    currentInnings: 2,
    team1: {
      name: "Australia",
      shortName: "AUS",
      flag: "🇦🇺",
      color: "#FFD700",
      score: 188,
      wickets: 6,
      overs: 20.0,
      runRate: 9.40
    },
    team2: {
      name: "India",
      shortName: "IND",
      flag: "🇮🇳",
      color: "#0078FF",
      score: 167,
      wickets: 4,
      overs: 17.4,
      target: 189,
      requiredRunRate: 9.43,
      currentRunRate: 9.45
    },
    currentBatsmen: [
      { name: "Virat Kohli", runs: 76, balls: 46, fours: 7, sixes: 3, strikeRate: 165.2, isStriker: true },
      { name: "Hardik Pandya", runs: 28, balls: 14, fours: 2, sixes: 2, strikeRate: 200.0, isStriker: false }
    ],
    currentBowler: {
      name: "Mitchell Starc",
      overs: 3.4,
      maidens: 0,
      runs: 38,
      wickets: 2,
      economy: 10.36
    },
    recentBalls: ["1", "4", "6", "0", "2", "1", "W", "6", "4", "1", "2"],
    winProbability: {
      team1: 34,
      team2: 66,
      aiAnalysis: "India has a 66% probability of victory with set batsman Virat Kohli anchoring at 165 SR and Mitchell Starc defending 22 off 14. Key factor: Bumrah's earlier spell (2/19) restricted Australia below 200."
    },
    streamInfo: {
      available: true,
      title: "ICC T20 World Cup Final: IND vs AUS Live Stream",
      channel: "Star Sports / ICC TV World Feed",
      streamUrl: "https://www.youtube.com/embed/jfKfPfyJRdk", // High energy cricket live video showcase
      isLive: true
    },
    fullScorecard: {
      team1Batting: [
        { name: "Travis Head", dismissal: "c Kohli b Bumrah", runs: 64, balls: 35, fours: 6, sixes: 4, sr: 182.8 },
        { name: "David Warner", dismissal: "b Arshdeep", runs: 22, balls: 16, fours: 3, sixes: 0, sr: 137.5 },
        { name: "Mitchell Marsh (c)", dismissal: "c Pant b Kuldeep", runs: 34, balls: 24, fours: 2, sixes: 2, sr: 141.6 },
        { name: "Glenn Maxwell", dismissal: "c Hardik b Bumrah", runs: 18, balls: 10, fours: 1, sixes: 1, sr: 180.0 },
        { name: "Marcus Stoinis", dismissal: "run out (Jadeja)", runs: 26, balls: 17, fours: 2, sixes: 1, sr: 152.9 },
        { name: "Tim David", dismissal: "not out", runs: 16, balls: 12, fours: 1, sixes: 1, sr: 133.3 },
        { name: "Pat Cummins", dismissal: "c & b Hardik", runs: 4, balls: 6, fours: 0, sixes: 0, sr: 66.6 }
      ],
      team2Bowling: [
        { name: "Jasprit Bumrah", overs: 4, maidens: 0, runs: 19, wickets: 2, econ: 4.75 },
        { name: "Arshdeep Singh", overs: 4, maidens: 0, runs: 42, wickets: 1, econ: 10.50 },
        { name: "Hardik Pandya", overs: 4, maidens: 0, runs: 37, wickets: 1, econ: 9.25 },
        { name: "Kuldeep Yadav", overs: 4, maidens: 0, runs: 32, wickets: 1, econ: 8.00 },
        { name: "Axar Patel", overs: 4, maidens: 0, runs: 58, wickets: 0, econ: 14.50 }
      ],
      team2Batting: [
        { name: "Rohit Sharma (c)", dismissal: "c Cummins b Hazlewood", runs: 32, balls: 18, fours: 4, sixes: 2, sr: 177.7 },
        { name: "Rishabh Pant", dismissal: "c Marsh b Zampa", runs: 14, balls: 12, fours: 1, sixes: 0, sr: 116.6 },
        { name: "Virat Kohli", dismissal: "batting", runs: 76, balls: 46, fours: 7, sixes: 3, sr: 165.2 },
        { name: "Suryakumar Yadav", dismissal: "c Maxwell b Starc", runs: 15, balls: 9, fours: 2, sixes: 1, sr: 166.6 },
        { name: "Shivam Dube", dismissal: "b Starc", runs: 2, balls: 5, fours: 0, sixes: 0, sr: 40.0 },
        { name: "Hardik Pandya", dismissal: "batting", runs: 28, balls: 14, fours: 2, sixes: 2, sr: 200.0 }
      ]
    },
    commentary: [
      { over: "17.4", text: "Starc to Hardik Pandya, 2 runs, clipped off the pads toward deep square leg. Excellent sprint between the wickets by both batsmen!", tag: "🏃 2 Runs", speed: "144.2 km/h" },
      { over: "17.3", text: "Starc to Virat Kohli, 1 run, driven firmly down to long-on. Controlled rotation, keeping the strike ticking.", tag: "Single", speed: "146.0 km/h" },
      { over: "17.2", text: "Starc to Virat Kohli, FOUR! MAGNIFICENT! In the slot outside off, Kohli carves it over extra cover with sublime timing. Pure genius!", tag: "🚀 FOUR", speed: "141.8 km/h" },
      { over: "17.1", text: "Starc to Virat Kohli, SIX! HIGH, HANDSOME AND INTO THE TIER! What a strike under sheer pressure! Length ball deposited 88 meters into midwicket!", tag: "🔥 SIX", speed: "139.5 km/h" },
      { over: "16.6", text: "Hazlewood to Hardik Pandya, no run, beaten by the extra bounce outside off stump. Vital dot ball.", tag: "Dot", speed: "138.2 km/h" },
      { over: "16.5", text: "Hazlewood to Virat Kohli, 1 run, dabbed softly to third man.", tag: "Single", speed: "137.4 km/h" }
    ]
  },
  {
    id: "match-02",
    tournament: "Indian Premier League (IPL) 2026 - El Clásico",
    type: "PREMIER_LEAGUE",
    format: "T20",
    status: "LIVE",
    statusText: "CSK needs 44 runs in 21 balls",
    venue: "Wankhede Stadium, Mumbai",
    toss: "Chennai Super Kings won the toss and elected to field",
    currentInnings: 2,
    team1: {
      name: "Mumbai Indians",
      shortName: "MI",
      flag: "🔵",
      color: "#004BA0",
      score: 214,
      wickets: 5,
      overs: 20.0,
      runRate: 10.70
    },
    team2: {
      name: "Chennai Super Kings",
      shortName: "CSK",
      flag: "🟡",
      color: "#F9CD05",
      score: 171,
      wickets: 3,
      overs: 16.3,
      target: 215,
      requiredRunRate: 12.57,
      currentRunRate: 10.36
    },
    currentBatsmen: [
      { name: "Ruturaj Gaikwad (c)", runs: 82, balls: 48, fours: 8, sixes: 4, strikeRate: 170.8, isStriker: true },
      { name: "MS Dhoni", runs: 18, balls: 6, fours: 1, sixes: 2, strikeRate: 300.0, isStriker: false }
    ],
    currentBowler: {
      name: "Jasprit Bumrah",
      overs: 3.3,
      maidens: 0,
      runs: 16,
      wickets: 2,
      economy: 4.57
    },
    recentBalls: ["6", "1", "6", "4", "0", "1", "2"],
    winProbability: {
      team1: 58,
      team2: 42,
      aiAnalysis: "Tight finish at Wankhede! Bumrah has 3 deliveries left in his spell. If CSK survives Bumrah without losing Gaikwad, Dhoni's death-over strike rate (240+) gives them high chasing momentum against the final overs."
    },
    streamInfo: {
      available: true,
      title: "IPL Super Sunday: MI vs CSK Live Stream & Cam",
      channel: "JioCinema / Sky Sports Cricket",
      streamUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
      isLive: true
    },
    fullScorecard: {
      team1Batting: [
        { name: "Rohit Sharma", dismissal: "c Jadeja b Chahar", runs: 58, balls: 32, fours: 7, sixes: 3, sr: 181.2 },
        { name: "Ishan Kishan", dismissal: "b Pathirana", runs: 28, balls: 15, fours: 4, sixes: 1, sr: 186.6 },
        { name: "Suryakumar Yadav", dismissal: "c Gaikwad b Pathirana", runs: 72, balls: 36, fours: 8, sixes: 4, sr: 200.0 },
        { name: "Tilak Varma", dismissal: "c Dhoni b Deshpande", runs: 31, balls: 20, fours: 2, sixes: 2, sr: 155.0 },
        { name: "Hardik Pandya (c)", dismissal: "not out", runs: 21, balls: 11, fours: 2, sixes: 1, sr: 190.9 }
      ],
      team2Bowling: [
        { name: "Deepak Chahar", overs: 4, maidens: 0, runs: 42, wickets: 1, econ: 10.5 },
        { name: "Matheesha Pathirana", overs: 4, maidens: 0, runs: 34, wickets: 2, econ: 8.5 },
        { name: "Ravindra Jadeja", overs: 4, maidens: 0, runs: 29, wickets: 0, econ: 7.25 },
        { name: "Tushar Deshpande", overs: 4, maidens: 0, runs: 48, wickets: 1, econ: 12.0 }
      ],
      team2Batting: [
        { name: "Rachin Ravindra", dismissal: "c Kishan b Bumrah", runs: 24, balls: 14, fours: 3, sixes: 1, sr: 171.4 },
        { name: "Ruturaj Gaikwad", dismissal: "batting", runs: 82, balls: 48, fours: 8, sixes: 4, sr: 170.8 },
        { name: "Daryl Mitchell", dismissal: "c David b Coetzee", runs: 35, balls: 26, fours: 3, sixes: 1, sr: 134.6 },
        { name: "Shivam Dube", dismissal: "c & b Bumrah", runs: 12, balls: 5, fours: 1, sixes: 1, sr: 240.0 },
        { name: "MS Dhoni", dismissal: "batting", runs: 18, balls: 6, fours: 1, sixes: 2, sr: 300.0 }
      ]
    },
    commentary: [
      { over: "16.3", text: "Bumrah to Gaikwad, 1 run, toe-crusher yorker dug out with sheer wrist brilliance toward deep midwicket.", tag: "Single", speed: "148.5 km/h" },
      { over: "16.2", text: "Bumrah to Dhoni, 1 run, guided down to third man with soft hands.", tag: "Single", speed: "142.1 km/h" },
      { over: "16.1", text: "Bumrah to Dhoni, SIX! THUNDEROUS! Vintage Dhoni helicopter whipped into the top deck at Wankhede! Crowd deafening!", tag: "🔥 SIX", speed: "140.0 km/h" }
    ]
  },
  {
    id: "match-03",
    tournament: "ICC World Test Championship - The Ashes 2026",
    type: "INTERNATIONAL",
    format: "TEST",
    status: "LIVE",
    statusText: "Day 3, Session 2 - England trail by 84 runs",
    venue: "Lord's Cricket Ground, London",
    toss: "Australia won the toss and elected to bat",
    currentInnings: 3,
    team1: {
      name: "Australia",
      shortName: "AUS",
      flag: "🇦🇺",
      color: "#FFD700",
      score: 384,
      wickets: 10,
      overs: 104.2,
      runRate: 3.68
    },
    team2: {
      name: "England",
      shortName: "ENG",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      color: "#CF0820",
      score: 300,
      wickets: 6,
      overs: 68.4,
      target: null,
      requiredRunRate: null,
      currentRunRate: 4.37
    },
    currentBatsmen: [
      { name: "Joe Root", runs: 112, balls: 148, fours: 14, sixes: 1, strikeRate: 75.6, isStriker: true },
      { name: "Ben Stokes (c)", runs: 45, balls: 54, fours: 5, sixes: 2, strikeRate: 83.3, isStriker: false }
    ],
    currentBowler: {
      name: "Pat Cummins",
      overs: 18.4,
      maidens: 3,
      runs: 62,
      wickets: 3,
      economy: 3.32
    },
    recentBalls: ["0", "4", "1", "0", "0", "2", "0"],
    winProbability: {
      team1: 45,
      team2: 40,
      aiAnalysis: "Test equilibrium. Joe Root's century has stabilized Bazball. Australia's Cummins is reversing the ball from the Nursery End. A lead of 150+ in the 4th innings will be decisive."
    },
    streamInfo: {
      available: true,
      title: "The Ashes: ENG vs AUS Day 3 Official Live Feed",
      channel: "Sky Sports Cricket / Willow TV",
      streamUrl: "https://www.youtube.com/embed/21X5lGlDOfg",
      isLive: true
    },
    fullScorecard: {
      team1Batting: [
        { name: "Usman Khawaja", dismissal: "c Root b Anderson", runs: 78, balls: 160, fours: 9, sixes: 0, sr: 48.7 },
        { name: "Steve Smith", dismissal: "lbw b Wood", runs: 121, balls: 210, fours: 15, sixes: 1, sr: 57.6 },
        { name: "Marnus Labuschagne", dismissal: "c Bairstow b Woakes", runs: 47, balls: 95, fours: 6, sixes: 0, sr: 49.4 },
        { name: "Alex Carey", dismissal: "b Stokes", runs: 52, balls: 80, fours: 6, sixes: 1, sr: 65.0 }
      ],
      team2Bowling: [
        { name: "James Anderson", overs: 24, maidens: 6, runs: 68, wickets: 3, econ: 2.83 },
        { name: "Mark Wood", overs: 20, maidens: 2, runs: 85, wickets: 3, econ: 4.25 },
        { name: "Chris Woakes", overs: 22, maidens: 4, runs: 71, wickets: 2, econ: 3.22 }
      ],
      team2Batting: [
        { name: "Zak Crawley", dismissal: "c Carey b Starc", runs: 38, balls: 44, fours: 6, sixes: 0, sr: 86.3 },
        { name: "Ben Duckett", dismissal: "c Warner b Hazlewood", runs: 28, balls: 31, fours: 4, sixes: 0, sr: 90.3 },
        { name: "Ollie Pope", dismissal: "c Smith b Cummins", runs: 42, balls: 56, fours: 5, sixes: 0, sr: 75.0 },
        { name: "Joe Root", dismissal: "batting", runs: 112, balls: 148, fours: 14, sixes: 1, sr: 75.6 },
        { name: "Harry Brook", dismissal: "c Starc b Lyon", runs: 35, balls: 32, fours: 4, sixes: 1, sr: 109.3 },
        { name: "Ben Stokes", dismissal: "batting", runs: 45, balls: 54, fours: 5, sixes: 2, sr: 83.3 }
      ]
    },
    commentary: [
      { over: "68.4", text: "Pat Cummins to Joe Root, FOUR! Exquisite cover drive on the up through a packed off-side field. Century celebrated in style!", tag: "🚀 FOUR", speed: "141.2 km/h" },
      { over: "68.3", text: "Pat Cummins to Joe Root, no run, defended solidly off the front foot.", tag: "Dot", speed: "142.0 km/h" }
    ]
  },
  {
    id: "match-04",
    tournament: "Pakistan Super League (PSL) 2026 - Qualifier",
    type: "PREMIER_LEAGUE",
    format: "T20",
    status: "UPCOMING",
    statusText: "Starts today at 7:30 PM PKT",
    venue: "Gaddafi Stadium, Lahore",
    toss: "Toss at 7:00 PM PKT",
    currentInnings: 0,
    team1: {
      name: "Lahore Qalandars",
      shortName: "LQ",
      flag: "🟢",
      color: "#00A859",
      score: 0,
      wickets: 0,
      overs: 0,
      runRate: 0
    },
    team2: {
      name: "Peshawar Zalmi",
      shortName: "PZ",
      flag: "🟡",
      color: "#FFD000",
      score: 0,
      wickets: 0,
      overs: 0,
      target: null,
      requiredRunRate: null,
      currentRunRate: 0
    },
    currentBatsmen: [],
    currentBowler: null,
    recentBalls: [],
    winProbability: {
      team1: 52,
      team2: 48,
      aiAnalysis: "Lahore Qalandars hold slight home advantage with Shaheen Afridi and Haris Rauf's pace arsenal. Babar Azam's current tournament average of 54.3 poses the primary challenge."
    },
    streamInfo: {
      available: true,
      title: "PSL 2026: Lahore Qalandars vs Peshawar Zalmi Preview & Live",
      channel: "A Sports / PSL YouTube Official",
      streamUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
      isLive: false
    },
    fullScorecard: null,
    commentary: []
  },
  {
    id: "match-05",
    tournament: "Big Bash League (BBL) 2026 - Semi Final",
    type: "PREMIER_LEAGUE",
    format: "T20",
    status: "COMPLETED",
    statusText: "Sydney Sixers won by 6 wickets (with 5 balls remaining)",
    venue: "Sydney Cricket Ground, Sydney",
    toss: "Sydney Sixers won toss and elected to field",
    currentInnings: 2,
    team1: {
      name: "Perth Scorchers",
      shortName: "SCO",
      flag: "🟠",
      color: "#FF6600",
      score: 178,
      wickets: 7,
      overs: 20.0,
      runRate: 8.90
    },
    team2: {
      name: "Sydney Sixers",
      shortName: "SIX",
      flag: "🟣",
      color: "#E6007E",
      score: 182,
      wickets: 4,
      overs: 19.1,
      target: 179,
      requiredRunRate: 0,
      currentRunRate: 9.50
    },
    currentBatsmen: [],
    currentBowler: null,
    recentBalls: ["1", "4", "6", "1", "4"],
    winProbability: {
      team1: 0,
      team2: 100,
      aiAnalysis: "Match completed. Player of the Match: Josh Philippe for a blistering 78 off 44 balls chasing 179."
    },
    streamInfo: {
      available: true,
      title: "BBL Highlights: Sydney Sixers vs Perth Scorchers Thriller",
      channel: "7 Cricket / Fox Cricket",
      streamUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
      isLive: false
    },
    fullScorecard: null,
    commentary: []
  }
];

export const PLAYERS_DATABASE = [
  {
    id: "player-01",
    name: "Virat Kohli",
    country: "India",
    countryCode: "IND",
    flag: "🇮🇳",
    avatar: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&auto=format&fit=crop&q=80",
    role: "Top-Order Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    iccRankings: {
      odi: "#2 Batter",
      test: "#5 Batter",
      t20i: "Legend (Retired T20I)"
    },
    overallRating: 98,
    clutchIndex: 99,
    abilities: {
      powerHitting: 91,
      strikeRotation: 99,
      chasingMastery: 100,
      spinPlay: 94,
      pacePlay: 98,
      fitnessFielding: 96
    },
    stats: {
      tests: { matches: 115, runs: 8848, avg: 49.15, sr: 55.6, hundreds: 29, fifties: 30, highest: "254*" },
      odis: { matches: 295, runs: 13906, avg: 58.18, sr: 93.5, hundreds: 50, fifties: 72, highest: "183" },
      t20is: { matches: 125, runs: 4188, avg: 48.69, sr: 137.0, hundreds: 1, fifties: 38, highest: "122*" },
      ipl: { matches: 252, runs: 8004, avg: 38.67, sr: 131.9, hundreds: 8, fifties: 55, highest: "113" }
    },
    bio: "Widely acclaimed as the 'King' and one of the greatest chasers in cricket history. The only player to score 50 ODI centuries, renowned for his unmatched intensity and supreme fitness."
  },
  {
    id: "player-02",
    name: "Jasprit Bumrah",
    country: "India",
    countryCode: "IND",
    flag: "🇮🇳",
    avatar: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&auto=format&fit=crop&q=80",
    role: "Fast Bowler",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast (Unorthodox)",
    iccRankings: {
      test: "#1 Bowler",
      odi: "#3 Bowler",
      t20i: "#1 Bowler"
    },
    overallRating: 99,
    clutchIndex: 99,
    abilities: {
      powerHitting: 45,
      yorkerPrecision: 100,
      deathBowling: 99,
      seamMovement: 97,
      reverseSwing: 98,
      economyControl: 99
    },
    stats: {
      tests: { matches: 36, wickets: 159, avg: 20.69, econ: 2.74, bbi: "6/27", fiveWickets: 10 },
      odis: { matches: 89, wickets: 149, avg: 23.55, econ: 4.59, bbi: "6/19", fiveWickets: 2 },
      t20is: { matches: 70, wickets: 89, avg: 17.74, econ: 6.27, bbi: "3/7", fiveWickets: 0 },
      ipl: { matches: 133, wickets: 165, avg: 22.51, econ: 7.30, bbi: "5/10", fiveWickets: 2 }
    },
    bio: "Generational fast-bowling phenomenon known for his hyperextended arm action, pinpoint toe-crushing yorkers, and suffocating death bowling economy across all three formats."
  },
  {
    id: "player-03",
    name: "Travis Head",
    country: "Australia",
    countryCode: "AUS",
    flag: "🇦🇺",
    avatar: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&auto=format&fit=crop&q=80",
    role: "Opening Batter / All-Rounder",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Right-arm offbreak",
    iccRankings: {
      t20i: "#1 Batter",
      odi: "#4 Batter",
      test: "#11 Batter"
    },
    overallRating: 96,
    clutchIndex: 98,
    abilities: {
      powerHitting: 98,
      strikeRotation: 89,
      chasingMastery: 95,
      spinPlay: 92,
      pacePlay: 97,
      fitnessFielding: 90
    },
    stats: {
      tests: { matches: 49, runs: 3173, avg: 41.75, sr: 64.8, hundreds: 7, fifties: 16, highest: "175" },
      odis: { matches: 65, runs: 2424, avg: 42.52, sr: 104.9, hundreds: 5, fifties: 16, highest: "152" },
      t20is: { matches: 38, runs: 1092, avg: 34.12, sr: 159.2, hundreds: 0, fifties: 7, highest: "91" },
      ipl: { matches: 25, runs: 772, avg: 36.76, sr: 188.3, hundreds: 1, fifties: 5, highest: "102" }
    },
    bio: "Australia's ultimate big-match match-winner. Player of the Match in the WTC Final 2023 and World Cup 2023 Final with unmatched power-play aggression."
  },
  {
    id: "player-04",
    name: "Babar Azam",
    country: "Pakistan",
    countryCode: "PAK",
    flag: "🇵🇰",
    avatar: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=500&auto=format&fit=crop&q=80",
    role: "Top-Order Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm offbreak",
    iccRankings: {
      odi: "#1 Batter",
      t20i: "#3 Batter",
      test: "#6 Batter"
    },
    overallRating: 94,
    clutchIndex: 88,
    abilities: {
      powerHitting: 84,
      strikeRotation: 96,
      chasingMastery: 92,
      spinPlay: 93,
      pacePlay: 95,
      fitnessFielding: 89
    },
    stats: {
      tests: { matches: 55, runs: 3962, avg: 45.02, sr: 55.1, hundreds: 9, fifties: 26, highest: "196" },
      odis: { matches: 117, runs: 5729, avg: 56.72, sr: 88.8, hundreds: 19, fifties: 32, highest: "158" },
      t20is: { matches: 123, runs: 4145, avg: 41.03, sr: 129.1, hundreds: 3, fifties: 36, highest: "122" },
      ipl: { matches: 0, runs: 0, avg: 0, sr: 0, hundreds: 0, fifties: 0, highest: "N/A" } // PSL Star
    },
    bio: "Pakistan's premier batting maestro, renowned globally for his aesthetically pristine cover drives and consistently high ODI average."
  },
  {
    id: "player-05",
    name: "Pat Cummins",
    country: "Australia",
    countryCode: "AUS",
    flag: "🇦🇺",
    avatar: "https://images.unsplash.com/photo-1562088287-bde35a1ea917?w=500&auto=format&fit=crop&q=80",
    role: "Bowling All-Rounder (Captain)",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast",
    iccRankings: {
      test: "#2 Bowler / World Cup Champion Captain",
      odi: "#8 Bowler",
      t20i: "#14 Bowler"
    },
    overallRating: 97,
    clutchIndex: 99,
    abilities: {
      powerHitting: 82,
      yorkerPrecision: 91,
      deathBowling: 93,
      seamMovement: 96,
      reverseSwing: 94,
      economyControl: 95
    },
    stats: {
      tests: { matches: 62, wickets: 269, avg: 22.53, econ: 2.75, bbi: "6/23", fiveWickets: 12 },
      odis: { matches: 88, wickets: 141, avg: 28.66, econ: 5.17, bbi: "5/70", fiveWickets: 1 },
      t20is: { matches: 57, wickets: 66, avg: 23.36, econ: 7.43, bbi: "3/15", fiveWickets: 0 },
      ipl: { matches: 58, wickets: 63, avg: 29.80, econ: 8.65, bbi: "4/34", fiveWickets: 0 }
    },
    bio: "World Test Championship and World Cup winning captain, renowned for relentless discipline on a good length and ice-cold composure under pressure."
  },
  {
    id: "player-06",
    name: "Heinrich Klaasen",
    country: "South Africa",
    countryCode: "RSA",
    flag: "🇿🇦",
    avatar: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&auto=format&fit=crop&q=80",
    role: "Wicket-Keeper Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm offbreak",
    iccRankings: {
      t20i: "#2 Power Hitter",
      odi: "#7 Batter",
      test: "White-ball Specialist"
    },
    overallRating: 95,
    clutchIndex: 96,
    abilities: {
      powerHitting: 99,
      strikeRotation: 86,
      chasingMastery: 94,
      spinPlay: 99,
      pacePlay: 93,
      fitnessFielding: 88
    },
    stats: {
      tests: { matches: 4, runs: 104, avg: 13.00, sr: 50.0, hundreds: 0, fifties: 0, highest: "35" },
      odis: { matches: 54, runs: 1723, avg: 42.02, sr: 115.8, hundreds: 4, fifties: 6, highest: "174" },
      t20is: { matches: 52, runs: 1000, avg: 24.39, sr: 147.9, hundreds: 0, fifties: 5, highest: "81" },
      ipl: { matches: 35, runs: 993, avg: 38.19, sr: 168.3, hundreds: 1, fifties: 6, highest: "104" }
    },
    bio: "The world's most destructive hitter against spin bowling. Master of launching back-foot maximums with pure raw torque."
  },
  {
    id: "player-07",
    name: "Rashid Khan",
    country: "Afghanistan",
    countryCode: "AFG",
    flag: "🇦🇫",
    avatar: "https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=500&auto=format&fit=crop&q=80",
    role: "Leg-Spin All-Rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm legbreak / googly",
    iccRankings: {
      t20i: "#2 Bowler",
      odi: "#4 Bowler",
      test: "#15 All-Rounder"
    },
    overallRating: 97,
    clutchIndex: 97,
    abilities: {
      powerHitting: 87,
      yorkerPrecision: 88,
      deathBowling: 96,
      seamMovement: 40,
      reverseSwing: 99, // Spin variations
      economyControl: 98
    },
    stats: {
      tests: { matches: 5, wickets: 34, avg: 22.35, econ: 3.12, bbi: "7/137", fiveWickets: 4 },
      odis: { matches: 103, wickets: 182, avg: 20.48, econ: 4.22, bbi: "7/18", fiveWickets: 5 },
      t20is: { matches: 93, wickets: 152, avg: 14.15, econ: 6.07, bbi: "5/3", fiveWickets: 2 },
      ipl: { matches: 121, wickets: 149, avg: 21.83, econ: 6.82, bbi: "4/24", fiveWickets: 0 }
    },
    bio: "The undisputed king of T20 franchise cricket. His lightning quick arm action and undetectable googly have made him Afghanistan's greatest sporting legend."
  },
  {
    id: "player-08",
    name: "Joe Root",
    country: "England",
    countryCode: "ENG",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    avatar: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
    role: "Top-Order Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm offbreak",
    iccRankings: {
      test: "#1 Test Batter",
      odi: "#12 Batter",
      t20i: "Anchor Maestro"
    },
    overallRating: 98,
    clutchIndex: 96,
    abilities: {
      powerHitting: 76,
      strikeRotation: 99,
      chasingMastery: 96,
      spinPlay: 98,
      pacePlay: 99,
      fitnessFielding: 93
    },
    stats: {
      tests: { matches: 146, runs: 12402, avg: 50.62, sr: 56.4, hundreds: 34, fifties: 64, highest: "254" },
      odis: { matches: 171, runs: 6522, avg: 47.60, sr: 86.8, hundreds: 16, fifties: 39, highest: "133*" },
      t20is: { matches: 32, runs: 893, avg: 35.72, sr: 126.3, hundreds: 0, fifties: 5, highest: "90*" },
      ipl: { matches: 3, runs: 10, avg: 10.0, sr: 66.6, hundreds: 0, fifties: 0, highest: "10" }
    },
    bio: "England's greatest modern Test batsman. Nearing Sachin Tendulkar's all-time Test runs summit, famed for his impeccable reverse-ramps and batting fluency."
  }
];

export const LIVE_VIDEO_CHANNELS = [
  {
    id: "ch-01",
    name: "ICC TV World Stream",
    tournament: "ICC Men's T20 World Cup Final 2026",
    match: "India vs Australia - Grand Finale",
    url: "https://www.youtube.com/embed/jfKfPfyJRdk",
    isLive: true,
    viewers: "2.4M watching",
    quality: "4K UHD 60FPS",
    badge: "OFFICIAL FEED"
  },
  {
    id: "ch-02",
    name: "JioCinema Cricket Live",
    tournament: "IPL 2026 Live",
    match: "CSK vs MI - El Clásico Live Cam",
    url: "https://www.youtube.com/embed/5qap5aO4i9A",
    isLive: true,
    viewers: "1.8M watching",
    quality: "1080p Full HD",
    badge: "FRANCHISE"
  },
  {
    id: "ch-03",
    name: "Sky Sports Cricket HD",
    tournament: "The Ashes 2026",
    match: "ENG vs AUS - Day 3 Highlights & Live",
    url: "https://www.youtube.com/embed/21X5lGlDOfg",
    isLive: true,
    viewers: "840K watching",
    quality: "1080p HD",
    badge: "TEST CRICKET"
  },
  {
    id: "ch-04",
    name: "Willow Cricket Global",
    tournament: "PSL 2026 Live Arena",
    match: "Lahore Qalandars vs Peshawar Zalmi",
    url: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    isLive: false,
    viewers: "Pre-Match Show",
    quality: "1080p HD",
    badge: "WARMUP"
  }
];

export const TOURNAMENT_STANDINGS = {
  ipl: [
    { rank: 1, team: "Chennai Super Kings", pld: 14, won: 10, lost: 4, nrr: "+0.842", pts: 20 },
    { rank: 2, team: "Mumbai Indians", pld: 14, won: 9, lost: 5, nrr: "+0.612", pts: 18 },
    { rank: 3, team: "Kolkata Knight Riders", pld: 14, won: 9, lost: 5, nrr: "+0.450", pts: 18 },
    { rank: 4, team: "Sunrisers Hyderabad", pld: 14, won: 8, lost: 6, nrr: "+0.380", pts: 16 },
    { rank: 5, team: "Rajasthan Royals", pld: 14, won: 7, lost: 7, nrr: "+0.112", pts: 14 },
    { rank: 6, team: "Royal Challengers Bengaluru", pld: 14, won: 7, lost: 7, nrr: "-0.050", pts: 14 }
  ],
  wtc: [
    { rank: 1, team: "India", pld: 12, won: 8, lost: 3, draw: 1, pct: "68.5%", pts: 98 },
    { rank: 2, team: "Australia", pld: 13, won: 8, lost: 4, draw: 1, pct: "62.8%", pts: 102 },
    { rank: 3, team: "New Zealand", pld: 10, won: 5, lost: 4, draw: 1, pct: "50.0%", pts: 60 },
    { rank: 4, team: "England", pld: 15, won: 7, lost: 7, draw: 1, pct: "46.6%", pts: 81 },
    { rank: 5, team: "South Africa", pld: 10, won: 4, lost: 5, draw: 1, pct: "40.0%", pts: 48 }
  ]
};
