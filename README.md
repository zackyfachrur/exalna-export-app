
# Exalna Apps - Solusi IT Keliling - GSC Team 4 Projects

<img src="https://raw.githubusercontent.com/zackyfachrur/exalna-export-app/main/fe-exalna-export/public/Welcome-Images.jpeg" style="width:100%;">

Global trade and cross-border e-commerce are surging, yet many firms remain sidelined. The root issues: affordable, trustworthy suppliers are hard to reach, and international transactions are complex. Buyers waste hours sifting through platforms, comparing prices, and checking quality, still unsure. Sellers struggle to enter foreign markets because of language, regulations, and visibility hurdles. The market needs an AI-driven solution that streamlines import-export and delivers strategic insights for smarter global trade decisions.


‎ 

## Features

- **Real-time Dashboard** for orders and containers  
- **AI-Powered Trade Finder** – suggests potential import/export partners and products available in a selected country
- **Many features** *are currently in progress or under development*

‎ 
## Tech Stack

| Layer           | Description                          | Tools & Libraries                                            |
|-----------------|----------------------------------|--------------------------------------------------------------|
| **Front-end**      | User interface & client logic       | React 18, Vite, TypeScript, Tailwind CSS, Redux, Framer Motion, Google OAuth Provider |
| **Back-end**       | API server & business logic          | Go Fiber, Gin (REST API)                                     |
| **Database**       | Data storage & ORM                   | MySQL 8, GORM                                               |
| **Authentication** | User authentication & authorization | JWT, Bcrypt                                                 |
| **AI / ML**        | Artificial intelligence & machine learning integration | Gemini API, LangChain-Go (or LangChain-TS on front-end) |
| **State Management** | Client state synchronization        | React Query                                                |
| **Tooling**        | Development tools & automation        | ESLint, Prettier, Husky, Vite PWA                          |

‎ 
## Installation

### Requirements

- **Node.js** (v18 or higher) — for front-end  
- **Bun** (optional alternative for Node.js package manager)  
- **Go** (v1.22 or higher) — for back-end  
- **MySQL** (v8 or higher) — running and accessible  
- **Git** — to clone the repository  

---

### Clone the Repository

```bash
git clone https://github.com/zackyfachrur/exalna-export-app.git
cd exalna-export-app
```

---

### Front-end Setup (fe-exalna-export)

- Create a `.env` file inside the `fe-exalna-export` folder with the following content (replace with your own values):

```env
VITE_CHATBOT_API_URL=http://localhost:3000/chat
VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id_here
```

#### Using npm
```bash
cd fe-exalna-export
npm install
```

#### Using bun
```bash
cd fe-exalna-export
bun install
```

#### Start the development server:
#### Using npm
```bash
npm run dev
```

#### Using bun
``` bash
bun run dev
```

### Back-end Setup (be-exalna-export)
- Make sure MySQL is installed and running, and accessible.

- Create a `.env` file inside the `be-exalna-export` folder with the following content (replace with your own credentials):

```env
GEMINI_API_KEY_EKSPOR=your_gemini_api_key_here
DB_HOST_MYSQL="username:password@tcp(hostname:3306)/database_name?parseTime=true"
PORT=3000
JWT_SECRET=your_jwt_secret_key
```

#### Install dependencies
```bash
go mod tidy
```

#### Run the Chat Services
```bash
cd chat-Services
go run .
```

#### Run the Auth Services
```bash
cd auth-Services
go run .
```
## Database Setup

Before running the application, make sure to create the necessary tables in your MySQL database. Below are the SQL scripts to create the required tables:

### Users Table

```sql
CREATE TABLE users (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  company_name VARCHAR(255) NOT NULL,
  company_categories VARCHAR(200) NOT NULL,
  years_of_experience INT NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL,
  INDEX (email),
  INDEX (username)
) ENGINE=InnoDB;
```

### Chat Logs Table
```sql
CREATE TABLE chat_logs (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id INT UNSIGNED NOT NULL,
  keyword TEXT NOT NULL,
  prompt TEXT NOT NULL,
  response TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL,
  INDEX (user_id),
  INDEX (keyword),
  INDEX (prompt),
  INDEX (response)
) ENGINE=InnoDB;

```
----

#### Feel free to open issues or submit pull requests for improvements.
#### Happy coding! 🚀



