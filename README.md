# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Add Task Modal Component

This project is a React functional component that provides a modal for adding tasks.
It uses Bootstrap for styling and `react-toastify` for notifications to handle task creation.

## Features

- React Functional Component
- Bootstrap Modal Integration
- Form Handling with `useState`
- Form Validation using `toastify`
- Prop Validation using PropTypes
- Modal interaction with Bootstrap for task addition

## Dependencies

- React
- react-toastify
- PropTypes
- Bootstrap

## Setup Instructions

1. Clone the repository:
   `git clone <repository-url>`

2. Navigate to the project directory:
   `cd <project-name>`

3. Install dependencies using npm:
   `npm install`

4. Run the development server:
   `npm start`

5. Open your browser and go to: http://localhost:3000

## Usage

To add a new task, click on the "Add Task" button. Fill in the task name and select the status from the dropdown menu.
Click "Save Task" to add the new task. Any form validation errors will be shown using toast notifications.

## Author

Developed by [Your Name]

## License

This project is licensed under the [License Name]. You may not use this project except in compliance with the License.

## Contribution

To contribute to this project:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.
