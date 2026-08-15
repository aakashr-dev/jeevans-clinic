# Dr. Santhosh Jacob — Orthopedic Clinic (Clone)

Full-stack clone of drsanthoshjacob.com, built as an appointment booking
site for an orthopedic clinic.

## Structure

- `server/` — Node.js + Express + MongoDB (Mongoose) API for appointment bookings
- `client/` — React + Vite + Tailwind CSS frontend with Firebase Google login

## Backend setup

```bash
cd server
npm install
# edit .env with your MongoDB URI
npm run dev
```

Runs on `http://localhost:5000` by default. Key endpoints:

- `GET /api/health` — health check
- `POST /api/appointments` — create a booking
- `GET /api/appointments` — list bookings
- `GET /api/appointments/:id` — get one booking
- `PUT /api/appointments/:id` — update a booking
- `DELETE /api/appointments/:id` — delete a booking

## Frontend setup

```bash
cd client
npm install
# edit .env with your Firebase project keys and backend URL
npm run dev
```

Runs on `http://localhost:5173` by default.

## Notes

- Fill in real Firebase project credentials in `client/.env` to enable
  Google sign-in (Authentication > Sign-in method > Google must be
  enabled in the Firebase console).
- Fill in your MongoDB connection string in `server/.env`
  (local MongoDB or MongoDB Atlas both work).
- Content and copy are adapted from the public drsanthoshjacob.com site
  for demo/learning purposes only — replace with your own client's
  content before using commercially.
