💹 Financial Trading Mini-App (Full-Stack)

A full-stack financial trading mini application built with React, Node.js, Express, and MongoDB.
This project demonstrates secure authentication, product listing, portfolio tracking, and simple financial transactions.

🚀 Features
🔑 Authentication & KYC

User sign-up with name, email, password, PAN number and optional ID image (dummy upload).

JWT-based secure login/logout.

New users start with a ₹100,000 virtual wallet balance.

📊 Product Listing & Details

List of dummy investment products (stocks or mutual funds) seeded in the database.

Each product displays name, category, price, and key metric (e.g., P/E ratio).

Product detail page supports chart visualization (Recharts).

💼 Transactions & Portfolio

Logged-in users can buy products by entering units and confirming purchase.

Wallet balance automatically updates after each transaction.

Portfolio dashboard shows:

Total invested amount

Current value

Returns (current − invested)

Watchlist feature to add/remove products for quick access.

🔒 Security

Passwords hashed using bcrypt.

JWT authentication for protected API routes.

Basic input validation on both client and server.

🛠️ Tech Stack
Layer	Technology
Frontend:	React, React Router, Axios, Recharts
Backend:	Node.js, Express, JWT, Multer
Database:	MongoDB with Mongoose

📂 Project Structure
financial-trading-mini-app/
├── backend/
│   ├── src/
│   │   ├── models/        # Mongoose schemas (User, Product, Transaction)
│   │   ├── routes/        # Auth, Product, Transaction, Portfolio, Watchlist
│   │   ├── controllers/   # Business logic
│   │   └── middleware/    # JWT authentication middleware
│   ├── server.js          # Express entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/         # Login, Register, Products, Portfolio, Watchlist
│   │   ├── components/    # Reusable UI (NavBar, ProductCard, etc.)
│   │   └── services/      # Axios API configuration
│   ├── public/
│   └── package.json
│
└── README.md              # <— this file
