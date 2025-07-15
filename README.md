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

## 🧪 Getting Started Locally

To run the Otto AI app on your machine, follow these steps:

---

### 🔗 Backend Repo

The frontend requires the backend to be running. Clone and set up the backend here:
👉 [otto-backend](https://github.com/dancarlton/otto-backend)

---

### 🧰 Prerequisites

- Node.js 18+
- npm
- MongoDB (local or Atlas)
- Valid OpenAI API Key (can send my key directly to reviewer, or to a tutor to give to reviewer)
- Potentially Unsplash API Key if project is getting errors running without

---

### 1️⃣ Clone Both Repos

```bash
git clone https://github.com/YOUR_USERNAME/otto-frontend.git
git clone https://github.com/YOUR_USERNAME/otto-backend.git
```
### 2️⃣ Setup the Backend
```
cd otto-backend
npm install
cp .env.example .env
```
### 2️⃣ Backend Setup

Navigate to the `otto-backend` directory and install dependencies.

Duplicate the `.env.example` file and rename it to `.env`. Fill in the required secrets:

- `MONGODB_URI`
- `OPENAI_API_KEY`

Then, start the backend development server:
```
npm run dev
```
 It will run on `http://localhost:3001`.

---

### 3️⃣ Frontend Setup

Navigate to the `otto-frontend` directory and install dependencies.

Start the frontend development server. It will run on `http://localhost:3000` and connect to the backend for API calls.

```
cd ../otto-frontend
npm install
npm run dev
```

---

### 👨‍🏫 For Reviewers

- You can create a user through the frontend sign-up form.
- After logging in, you'll be prompted to set surf preferences on the onboarding route and page.
- Once saved, you can ask Otto for a surf forecast powered by GPT.
- The app uses JWT for authentication; the token is stored in localStorage.
- The backend includes validation, error handling, rate limiting, and modular routes.
- Make sure the backend `.env` file includes a valid OpenAI key to test the forecast flow (if using mine please do not save it somewhere public).
