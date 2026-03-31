# 🎓 Insti Forum (Reddit Clone)

A full-stack, Reddit-style discussion platform built specifically for college/institute communities. This platform allows users to create posts, engage in discussions, and interact with communities in a familiar, thread-based format.

## 🚀 Tech Stack

**Frontend:**
* React.js
* Vite (Build Tool)
* Tailwind CSS (Styling)

**Backend:**
* Python / Flask
* Flask-SQLAlchemy (Database ORM)
* Flask-Bcrypt (Password Hashing)
* Flask-JWT-Extended (Authentication)
* email-validator
* Dependencies - You need to install these via pip:
a. flask
b. flask-sqlalchemy
c. flask-bcrypt
d. flask-jwt-extended
(email-validator
password-validator)

Database setup
Requirements: Install SQLite DB Browser for viewing the database.
When backend/run.py is executed, the insti_forum.db file is created in backend/instance.
The database and tables are created automatically once the backend server is run for the first time.
To reset the database, stop the backend server, delete the insti_forum.db file and restart the backend again, to delete all old data.

For JWT_SECRET_KEY,

Add the user environment variable JWT_SECRET_KEY = dev-secret-key.

## 📂 Project Structure

The repository is split into two main directories:

```text
Reddit-Clone/
│
├── backend/       # Flask API, database models, and authentication routes
├── FrontEnd/      # React client, Vite configuration, and Tailwind styling
└── README.md

