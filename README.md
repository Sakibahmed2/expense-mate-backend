# Expense Mate Backend

The backend for the **Expense Mate** application, built with Node.js and Express.js. This backend provides APIs to manage expenses, CRUD operations.

### Features

- **Expense Management**: Create, read, update, and delete expenses.
- **Modular Architecture**: Organized codebase with controllers, routes, services, and models.
- **Environment Configuration**: Securely handle environment-specific settings using `.env`.
- **Scalable Structure**: Built with scalability and maintainability in mind.

### Technologies Used

- **Node.js**: Runtime environment.
- **Express.js**: Web framework.
- **Mongodb**: Database.
- **Mongoose**: ODM for mongodb.
- **Dotenv**: Environment variable management.

### Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sakibahmed2/expense-mate-backend.git
   cd expense-mate-backend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Setup environment variables**:

- Create a .env file in the root directory.
- Add the following variables:

  ```bash
  PORT=3000
  MONGO_URI=your_mongodb_connection_string
  ```

4. **Run the server**:

   ```bash
    npm start
   ```

5. **Development mode**:

   ```bash
    npm run dev
   ```
