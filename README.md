# 🌊 Otto – Your Personalized Surf Reporter

Otto is a custom-built React application that helps surfers stay dialed in to the best wave conditions based on their personal preferences. Whether you're chasing clean morning lines or dodging blown-out onshore chop, Otto alerts you when the surf is just right near your favorite breaks.

---

## 📦 Stack

- **Frontend:** React (with React Router)
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **Auth:** JWT
- **Notifications:** Firebase Cloud Messaging

---

## 🔌 APIs Used

- **[OpenAI API](https://platform.openai.com/docs)**
  Used to generate personalized surf reports based on each user's saved preferences using GPT-4o.
  - Token usage is tracked per user
  - A free limit is enforced unless the user upgrades to Pro

- **[National Data Buoy Center](https://www.ndbc.noaa.gov/)** *(Planned for future release)*
  Will be used to ingest raw buoy data including swell, wind, and tide, matched to user-selected surf spots.

---

## 🚀 Features

- 🌐 User registration and login (JWT)
- 🌊 Surf preference setup (ideal wave height, wind, swell, tide, etc.)
- 📍 Favorite surf spots by location
- 📡 Real-time buoy + forecast data analysis *(planned)*
- 🔔 Push notifications when conditions match preferences
- 🧠 Optional GPT integration for surf spot suggestions (coming soon)

---

## 🧪 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/otto.git
cd otto-frontend
```
