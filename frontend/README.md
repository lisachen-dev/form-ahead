# HangOut Planner — Frontend

This is the React frontend for the HangOut Planner app. It allows users to submit availability and preferences for coordinating group hangouts.

## 🛠️ Tech Stack

- [Vite](https://vitejs.dev/) – Fast frontend tooling
- [React](https://react.dev/) – UI framework
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS for styling
- (Planned) Axios or Fetch – for backend API integration

## ✨ Features

- Simple form with the following fields:
    - Name
    - Guest count (0–5)
    - Food allergies
    - Payment preference
    - Available dates (checkboxes)
    - Notes

- `useState` for form state management
- (Planned) Form validation
- (Planned) POST request to backend

## 🧪 Local Dev Setup

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

## 📁 File Structure

```
/frontend
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── components/
└── tailwind.config.js
```

## 🔮 Future Enhancements

- Replace mock API with real Spring Boot backend
- Add form validation and feedback
- Improve styling with animations or custom components
