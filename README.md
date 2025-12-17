# 🎓 ScholarStream – Scholarship Management Platform

## 📌 Project Overview

**ScholarStream** is a full-stack MERN (MongoDB, Express, React, Node.js) based Scholarship Management System designed to connect students with scholarship opportunities.  
It simplifies the process of discovering, applying for, reviewing, and managing scholarships through a role-based dashboard system.

This platform supports **Students**, **Moderators**, and **Admins**, each with dedicated functionalities to ensure smooth scholarship application and management workflows.

---

## 🎯 Purpose of the Project

- Simplify scholarship discovery for students
- Streamline application review for moderators
- Provide admins with full control over users, scholarships, and analytics
- Ensure secure payments and role-based access
- Deliver a professional, recruiter-friendly UI

---

## 🌐 Live Site

🔗 **Live URL :** https://scholarstream-21.netlify.app/
🔗 **Client Repository:** https://github.com/koushik-21/scholarStream-client  
🔗 **Server Repository:** https://github.com/koushik-21/scholarStream-server

---

## 🚀 Key Features

### 🔐 Authentication & Authorization

- Email & Password login
- Google social login
- JWT-based route protection
- Role-based access (Student / Moderator / Admin)
- Secure Firebase & MongoDB credentials using environment variables

---

### 🏠 Public Features

- Home page with banner, animation (Framer Motion), and top scholarships
- All Scholarships page with:
  - Server-side search
  - Filter (Category, Country, Degree)
  - Sort (Fees / Post Date)
  - Pagination
- Scholarship Details page
- Reviews display per scholarship
- Responsive UI (Mobile / Tablet / Desktop)

---

### 💳 Payment System (Stripe)

- Secure Stripe checkout
- Payment success & failure pages
- Automatic application creation on payment
- Retry payment option from dashboard

---

### 🎓 Student Dashboard

- View & manage applications
- Edit/Delete pending applications
- Pay unpaid application fees
- Add reviews after application completion
- Manage own reviews (Edit / Delete)

---

### 🛠️ Moderator Dashboard

- View all student applications
- Application details modal
- Feedback system with modal
- Update application status
- Reject applications
- Moderate student reviews (Delete)

---

### 👨‍💼 Admin Dashboard

- Add / Update / Delete scholarships
- Manage users (Role change & Delete)
- Platform analytics:
  - Total users
  - Total scholarships
  - Total revenue
  - Charts & graphs

---

## 🗄️ Database Collections - Integrated

---

## 📦 NPM Packages Used

### Client Side

- react
- react-router-dom
- axios
- firebase
- stripe-js
- framer-motion
- daisyui
- tailwindcss
- sweetalert2

### Server Side

- express
- mongodb
- cors
- dotenv
- jsonwebtoken
- stripe

---

## ⚙️ Deployment & Security

- JWT protected APIs
- Firebase domain authorization
- CORS handled properly
- Environment variables for sensitive data
- Error-free route reloading
- Fully production-ready backend

---

## 📱 UI & UX Highlights

- Clean & modern design
- Consistent color theme
- Responsive dashboard layout
- Equal-height cards & grid layout
- Custom 404 error page
- Loading spinners & skeletons

---

## 🏁 Final Notes

ScholarStream is built following best practices of modern web development, focusing on performance, security, scalability, and user experience.  
This project demonstrates real-world MERN stack proficiency and role-based system design.

---

### 👨‍💻 Developed By

**Koushik Biswas**  
MERN Stack Developer
