# 🛠 Hangout Planner – Project Steps

A React + Java full-stack project to collect and store friend hangout preferences.

## ✅ Phase 1: Planning & Setup
- [ ] Define form questions and data types
- [x] Create `hangout-planner/` project folder
- [x] Set up Git repo and `.gitignore`
- [x] (Optional) Choose license (MIT recommended)

## 🚀 Phase 2: Frontend (React)
- [ ] Scaffold frontend with Vite or Create React App
- [ ] Build basic form layout with:
    - [ ] Name (text input)
    - [ ] Guest count (0–5)
    - [ ] Food allergies (text)
    - [ ] Payment preference (radio or select)
    - [ ] Available dates (checkboxes)
    - [ ] Additional notes (textarea)
- [ ] Handle form state with `useState`
- [ ] Add form validation (optional)
- [ ] Create a POST request to backend (test with mock API first)

## ⚙️ Phase 3: Backend (Java Spring Boot)
- [ ] Generate Spring Boot project with:
    - Spring Web
    - Spring Data JPA
    - H2 Database (for now)
- [ ] Create `Submission` model with matching fields
- [ ] Set up REST controller with `/api/submit` endpoint
- [ ] Save incoming form data to database

## 🔄 Phase 4: Integration
- [ ] Connect React frontend to Spring Boot backend
- [ ] Handle CORS issues (Spring Boot config)
- [ ] Test end-to-end form submission

## 🗃 Phase 5: Persistence & Flexibility
- [ ] Replace H2 with PostgreSQL (optional)
- [ ] Add a GET endpoint to list or export submissions
- [ ] Plan schema or structure that supports flexible question updates

## 🎨 Phase 6: Polish & Deployment
- [ ] Style the form (Tailwind, CSS modules, etc.)
- [ ] Add success/failure feedback to users
- [ ] Deploy frontend (e.g. Vercel, Netlify)
- [ ] Deploy backend (e.g. Railway, Render)
- [ ] (Optional) Protect backend route with basic token or access code

## 🧹 Phase 7: Extras (Optional)
- [ ] Add shareable link with friend instructions
- [ ] Build a basic admin dashboard to review submissions
- [ ] Add timestamp or ID to each submission
- [ ] Add dynamic question loading (stretch goal)
