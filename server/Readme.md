
# 📝 Task Manager API

A simple RESTful Task Manager backend built with **Node.js**, **Express**, and tested using **Jest** and **Supertest**. This project demonstrates core backend concepts including routing, controllers, and full testing coverage: **unit**, **integration**, and **end-to-end (E2E)**.

---

## 📦 Features

- Task CRUD (Create, Read, Update, Delete)
- In-memory task storage (no DB required)
- Clean MVC structure (models, routes, controllers)
- Fully tested:
  - ✅ Unit Tests
  - ✅ Integration Tests
  - ✅ End-to-End Tests

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- pnpm (or npm/yarn)

### Installation

```bash
git clone https://github.com/yourusername/task-manager-api.git
cd task-manager-api
pnpm install
```

---

## ▶️ Running the Server

```bash
pnpm start
```

Server will run on:

```
http://localhost:5000/api/tasks
```

---

## 🧪 Running Tests

### Run All Tests

```bash
pnpm test
```

### Run Specific Tests

```bash
pnpm jest tests/unit
pnpm jest tests/integration
pnpm jest tests/e2e
```

---

## 🗂 Project Structure

```
task-manager-api/
│
├── app.js                  # Express app config
├── server.js               # Entry point for server
├── models/
│   └── task.js             # Task logic (in-memory DB)
├── controllers/
│   └── taskController.js   # Handles API logic
├── routes/
│   └── taskRoutes.js       # Task route definitions
├── tests/
│   ├── unit/               # Unit tests (model logic)
│   ├── integration/        # API + controller integration tests
│   └── e2e/                # Full request lifecycle
├── jest.config.js          # Multi-project Jest config
├── package.json
└── README.md
```

---

## 📬 API Endpoints

All endpoints are prefixed with `/api/tasks`

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| GET    | `/`              | Get all tasks          |
| POST   | `/`              | Create a new task      |
| PUT    | `/:id`           | Update a task by ID    |
| DELETE | `/:id`           | Delete a task by ID    |

---

## 📖 Example Request/Response

### ✅ Create Task

**POST** `/api/tasks`

```json
{
  "title": "Buy groceries"
}
```

**Response:**
```json
{
  "id": 1,
  "title": "Buy groceries",
  "completed": false
}
```

---

## 🧪 Testing Philosophy

| Type           | Description                                      | Location               |
|----------------|--------------------------------------------------|------------------------|
| Unit Tests     | Pure logic, isolated model functions             | `tests/unit/`          |
| Integration    | Route + controller + model interaction           | `tests/integration/`   |
| End-to-End     | Simulated full user interaction via API          | `tests/e2e/`           |

---

## 📈 Future Enhancements

- [ ] Persist tasks using MongoDB
- [ ] Add authentication (JWT)
- [ ] Dockerize the app
- [ ] Add Swagger API docs

---

## 👨‍💻 Author

**Muli Clement Wambua**  
Web Developer & MERN Stack Specialist  
Kenya  
[GitHub](https://github.com/Clementwa0)

---

## 📄 License

MIT License – Free to use and modify.

