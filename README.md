# Frontend Intern Task – Two-Page Dynamic Website

## 📌 Project Overview
This project is a modern, responsive two-page website built as part of a Frontend Intern assessment. It demonstrates UI creativity, smooth animations, API integration, and responsive design principles. The website features a landing page with a hero section and a dynamic data page that fetches and displays products from a public API.

## 🚀 Live Demo & Design
- **Live URL:** [Insert Live URL Here]
- **Figma Design:** [Insert Figma Link Here]

## 🛠️ Tech Stack
- **Frontend Framework:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **API Integration:** Fetch API (FakeStoreAPI)
- **Deployment:** Vercel

## ✨ Key Features
- **Modern Landing Page:** A clean hero section with engaging typography and smooth transitions.
- **Dynamic Product Listing:** Fetches real-time data from `https://fakestoreapi.com/products`.
- **Search Functionality:** Real-time filtering of products based on user input.
- **Detailed View:** Dedicated page for each product showing comprehensive information.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens.
- **Loading & Error Handling:** Graceful UI states during data fetching.

## 📡 API Details
The project integrates the **FakeStoreAPI** to simulate a real-world e-commerce data flow.
- **Endpoint Used:** `GET https://fakestoreapi.com/products`
- **Data Displayed:** Product Title, Price, Description, Category, and Images.

## 🎨 Design Decisions
- **Typography:** Used a combination of bold headings and clean body text for readability.
- **Color Palette:** A professional color scheme with yellow highlights for Call-to-Actions (CTA) to drive user engagement.
- **Component-Based Architecture:** Reusable components like `Navbar`, `ProductCard`, and `Button` to maintain code DRYness and scalability.
- **Animations:** Subtle fade-in and hover effects to enhance the user experience without being distracting.

## 🧠 Challenges & Solutions
- **Responsive Grid Layout:** Implementing a grid that adapts from 1 column on mobile to 4 columns on large screens. Solved using Tailwind's responsive utility classes.
- **API State Management:** Handling asynchronous data fetching while ensuring the UI remains stable. Solved using `useState` and `useEffect` hooks with proper loading states.
- **Navigation:** Managing complex routing for dynamic product IDs. Solved using `react-router-dom`'s `useParams` hook.

## 💻 Local Setup
1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd Aakash-Group
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

**Author:** Sidhatha
**Date:** April 2026
**Report Type:** Frontend Intern Task Submission
