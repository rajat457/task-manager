# Task Manager Application

The Task Manager is a full-stack web application that allows users to manage their tasks efficiently. It includes user authentication, task creation, updating, deletion, and assignment features. The frontend is built using Next.js, and the backend is powered by NestJS, with Supabase handling authentication and database services.

## Live Demo

View the live application here: [Live Demo](https://task-manager-gray-iota.vercel.app/)

## GitHub Repository

Clone the repository:

```bash
git clone https://github.com/rajat457/task-manager.git
cd task-manager
```

---

## Folder Structure

```
task-manager/
├── task-manager-frontend/   # Next.js + Tailwind frontend
├── task-manager-backend/    # NestJS backend
└── README.md                # Unified project documentation
```

---

## Features

- **User Authentication**: Register, login, and logout with JWT-based authentication using Supabase.
- **Task Management**: Create, update, delete, and assign tasks.
- **Task Priority & Status**: Set task priorities (Low, Medium, High) and track task status (To Do, In Progress, Done).
- **Database Integration**: Uses Supabase with PostgreSQL for storing tasks and user data.

---

## Technologies Used

### Frontend

- **Next.js**: React framework for server-side rendered apps.
- **Supabase**: Open-source Firebase alternative for authentication and database.
- **Tailwind CSS**: Utility-first CSS framework for responsive UI.

### Backend

- **NestJS**: Progressive Node.js framework for scalable apps.
- **Supabase**: Authentication and PostgreSQL database backend.
- **JWT**: JSON Web Tokens for secure authentication.
- **PostgreSQL**: Relational database system.

---

## Installation

### Prerequisites

- Node.js (>= 14.0.0)
- npm (>= 6.0.0)
- Supabase project (for auth and database)

### Frontend Setup

```bash
cd task-manager-frontend
npm install
```

Create a `.env.local` file in the frontend root:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Start the frontend server:

```bash
npm run dev
```

Visit `http://localhost:3000` to view the app.

### Backend Setup

```bash
cd ../task-manager-backend
npm install
```

Create a `.env` file in the backend root:

```env
SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_KEY=your-supabase-service-key
JWT_SECRET=your-jwt-secret
```

Start the backend server:

```bash
npm run start:dev
```

Backend will run at `http://localhost:3000`.

---

## Database Schema (Supabase)

### Users Table

```sql
create table users (
  id uuid primary key,
  email text unique not null,
  created_at timestamp default now()
);
```

### Tasks Table

```sql
create table tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  due_date date,
  priority text check(priority in ('Low', 'Medium', 'High')) default 'Medium',
  status text check(status in ('To Do', 'In Progress', 'Done')) default 'To Do',
  assigned_to uuid references users(id),
  created_at timestamp default now()
);
```

---

## API Endpoints

### Authentication

- **POST /auth/login**: `{ email, password }` → `{ token }`
- **POST /auth/register**: `{ email, password }` → `{ message }`

### Tasks

- **GET /tasks**: List tasks.
- **POST /tasks**: Create task.
- **PUT /tasks/:id**: Update task.
- **DELETE /tasks/:id**: Delete task.

JWT is required in `Authorization` header:

```http
Authorization: Bearer your-jwt-token
```

---

## Task Operations

### Registering

- Visit `/register`, fill email and password, and submit.

### Logging In

- Visit `/login`, fill credentials, and submit.

### Creating a Task

1. Go to Dashboard
2. Click "Create Task"
3. Fill in: Title, Description, Due Date, Priority, Status, Assign to
4. Click "Create Task"

### Editing a Task

1. Click a task in Dashboard
2. Update fields
3. Click "Save"

### Deleting a Task

1. Click a task
2. Click "Delete"

---

## Contributing

1. Fork the repo
2. Create a branch (`git checkout -b feature/feature-name`)
3. Commit (`git commit -am 'Add feature'`)
4. Push (`git push origin feature/feature-name`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
