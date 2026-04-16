# Company Directory — Frontend

React frontend for the Company Directory app. Built with Vite, Tailwind CSS, React Router, and Axios.

## Requirements

- Node.js v18+
- npm v9+
- Backend (`company-dir-be`) running on port 3000

## Installation

1. Navigate to the project folder:

```bash
cd company-dir-fe
```

2. Install dependencies:

```bash
npm install
```

3. Configure the environment:

The `.env` file is already included with the default backend URL:

```
VITE_API_URL=http://localhost:3000/api
```

Update this value if your backend runs on a different port or host.

## Running the app

```bash
npm run dev
```

The app runs on `http://localhost:5173` by default.

> Make sure the backend is running before starting the frontend.

## Running both projects together

Open two terminals from the root folder:

```bash
# Terminal 1 — backend
cd company-dir-be && npm run dev

# Terminal 2 — frontend
cd company-dir-fe && npm run dev
```

Then open `http://localhost:5173` in your browser.


