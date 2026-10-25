# Contact List (MERN)

A simple full-stack app that reads a hardcoded list of contacts (name, email, phone) from MongoDB through a REST API and shows it in a basic, unstyled list.

## Tech Stack
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB
- **Frontend:** React (Vite)

## Project Structure
```
contact-list-app/
├── server/
│   ├── config/db.js         # MongoDB connection
│   ├── models/Contact.js    # Contact schema
│   ├── routes/contacts.js   # GET /api/contacts
│   ├── seed.js              # Inserts the hardcoded contacts
│   └── server.js            # Express app entry
└── client/
    └── src/App.jsx          # Fetches and renders the list
```

## API
| Method | Endpoint        | Description          |
|--------|-----------------|----------------------|
| GET    | /api/contacts   | Returns all contacts |
| GET    | /api/health     | Health check         |

Example response:
```json
[
  { "_id": "...", "name": "Ahmed Ali", "email": "ahmed.ali@example.com", "phone": "+20 100 123 4567" }
]
```

## Getting Started

**Requirements:** Node.js 18+ and a running MongoDB (local or Atlas).

### 1. Backend
```bash
cd server
npm install
cp .env.example .env     # edit MONGO_URI if needed
npm run seed             # insert the contacts
npm run dev              # http://localhost:5000
```

### 2. Frontend
```bash
cd client
npm install
npm run dev              # http://localhost:5173
```

Open http://localhost:5173 to see the list.

## Author
Ahmed Hassan - [GitHub](https://github.com/Ahmed-Bayam)
