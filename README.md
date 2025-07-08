# 🌊 Otto – Your Personalized Surf Reporter

Otto is a full-stack surf forecasting app that uses real-time buoy data, user preferences, and GPT to recommend **where, when, and how to surf**. Whether you're chasing clean morning lines or dodging blown-out onshore chop, Otto helps you stay dialed in.

Built with React, Express, and MongoDB, Otto delivers personalized forecasts tailored to your surf style.

---

## 📦 Stack

- **Frontend:** React (with React Router)
- **Backend:** Node.js + Express
- **Database:** MongoDB + Mongoose
- **Auth:** JWT (Token-based authentication)
- **Validation:** Celebrate + Joi
- **Notifications:** Firebase Cloud Messaging *(planned)*
- **AI Engine:** OpenAI GPT-3.5 (GPT-4o upgrade planned)

---

## 🔌 APIs Used

### 🧠 [OpenAI API](https://platform.openai.com/docs)
- Powers Otto's surf forecasting assistant
- Personalized prompts generated from user data + buoy data
- Returns helpful replies + structured JSON
- Token usage tracked per user
- Free daily limit (paywall-ready)

### 🌊 [NOAA / NDBC Buoy API](https://www.ndbc.noaa.gov/)
- Fetches real-time marine weather via public RSS feeds
- Parses wave height, swell direction, period, water temperature
- Used to inform GPT + match surf conditions to user prefs

---

## ✅ Features Implemented

- 🔐 Secure user registration/login (JWT)
- 📝 Surf preference setup (wave height, gear, experience, etc.)
- 📍 Geolocation-aware surf spot and buoy mapping
- 🌊 Buoy station API with live NOAA/NDBC data
- 🤖 Ask Otto — GPT-generated surf forecasts with JSON response
- 🔁 Daily GPT usage limit (rate-limiting enabled per user)
- 🧪 Route-level validation (Celebrate / Joi)
- 🧱 Modular Express backend with clean error handling

---

## 🧠 How It Works

1. **User creates an account** and saves surf preferences
2. Otto finds the **nearest buoy** to a location (via coordinates or spot)
3. Otto fetches live **NOAA buoy data** (wave height, swell direction, etc.)
4. GPT prompt is generated with **user prefs + live data**
5. Otto replies with a helpful response + JSON forecast

---

## 🧪 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/otto.git
cd otto-backend
