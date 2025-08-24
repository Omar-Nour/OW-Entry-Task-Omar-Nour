# Task Manager API

A simple **Node.js + Express** REST API for managing tasks (in-memory storage, no database).
Supports CRUD operations and seeding sample tasks.

---

## 📥 Clone & Run

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm start
```

Server will start at:

```
http://localhost:3000
```

---

## 📌 API Endpoints

Base URL:

```
http://localhost:3000/tasks
```

### 1. Add a Task

**POST** `/tasks`

**Request body (JSON):**

```json
{
  "title": "My first task",
  "description": "This is an example task"
}
```

**Example curl:**

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "My first task", "description": "This is an example task"}'
```

---

### 2. List All Tasks

**GET** `/tasks`

**Example curl:**

```bash
curl http://localhost:3000/tasks
```

---

### 3. Get a Task by ID

**GET** `/tasks/:id`

**Example curl:**

```bash
curl http://localhost:3000/tasks/1
```

---

### 4. Update a Task

**PUT** `/tasks/:id`

**Request body (JSON):**

```json
{
  "title": "Updated Task",
  "description": "Updated description",
  "status": "in-progress"
}
```

**Example curl:**

```bash
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Task", "description": "Updated description", "status": "in-progress"}'
```

---

### 5. Delete a Task

**DELETE** `/tasks/:id`

**Example curl:**

```bash
curl -X DELETE http://localhost:3000/tasks/1
```

---

### 6. Seed Sample Tasks

**POST** `/tasks/seed`

**Example curl:**

```bash
curl -X POST http://localhost:3000/tasks/seed
```

---

## 🧪 Example Usage in Postman

* Set **Base URL** = `http://localhost:3000`
* Import endpoints:

  * `POST /tasks` → Add new task
  * `GET /tasks` → List tasks
  * `GET /tasks/:id` → Retrieve task by ID
  * `PUT /tasks/:id` → Update task
  * `DELETE /tasks/:id` → Delete task
  * `POST /tasks/seed` → Insert sample tasks

---

## ⚠️ Notes

* This project uses **in-memory storage** → tasks are lost when the server restarts.
* Allowed `status` values are:

  * `"pending"`
  * `"in-progress"`
  * `"completed"`
* New tasks always start as **pending**.


