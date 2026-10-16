# Digital Library Search Application

## About the Project
The Digital Library Search Application is a simple web application that allows users to search for books by title, author, and category. Book details are stored in a JSON file and fetched using JSON Server.

## Features
- Displays a collection of 10 books.
- Search books by title.
- Search books by author.
- Search books by category.
- Filter books using a category dropdown.
- Displays a message when no books are found.
- Responsive webpage design.

## Technologies Used
- HTML
- CSS
- JavaScript
- JSON
- JSON Server

## Project Structure
```text
digital-library/
├── index.html
├── style.css
├── script.js
├── db.json
├── package.json
├── package-lock.json
└── README.md
```

## How to Run the Project

### 1. Install dependencies
```bash
npm install
```

### 2. Start JSON Server
```bash
npx json-server db.json --port 3000
```

### 3. Open the webpage
Open `index.html` using the Live Server extension in VS Code.

## API Endpoint
```text
http://localhost:3000/books
```

## Author
Created as a web development project.