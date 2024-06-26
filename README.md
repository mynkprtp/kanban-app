# Kanban App

A simple and effective Kanban board application to help you organize tasks and improve your workflow. This project is built using a client-server architecture.

## Features

- Create, update, and delete tasks
- Organize tasks into columns (e.g., To Do, In Progress, Done)
- Drag and drop tasks between columns
- Persistent storage of tasks

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express, Javascript
- **Database:** MongoDB
- **Styling:** CSS, Tailwind

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/mynkprtp/kanban-app.git
    cd kanban-app
    ```

2. Install dependencies for both client and server:
    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the `server` directory with the following and Update the data accordingly:
        ```
        PORT=5000
        MONGODB_USER=xxxxxxxxx
        MONGODB_PASSWORD=xxxxxxxxx
        PASSWORD_SECRET_KEY=xxxxxxxxx
        TOKEN_SECRET_KEY=xxxxxxxxx
        ```
 
4. Start the development server:
    - In the `server` directory:
        ```bash
        npm start
        ```
    - In the `client` directory:
        ```bash
        npm start
        ```

## Usage

- Access the application at `http://localhost:3000`
- Use the web interface to manage your tasks by adding, editing, and moving them across different columns.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Contact

If you have any questions, feel free to open an issue or contact the repository owner at itsmayankhere24@gmail.com.
