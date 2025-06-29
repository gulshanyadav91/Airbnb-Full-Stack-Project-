# 🌍 WanderLust — An Airbnb-Inspired Stay Booking Platform

WanderLust is a full-stack web application inspired by Airbnb. It allows users to explore accommodations, create listings, and manage them with ease. Built with Node.js, Express, MongoDB, and EJS, this project demonstrates CRUD functionality, server-side validation, and a clean responsive UI using Bootstrap.

> ✨ Project by [Gulshan Yadav](#) — built as part of a full-stack web development learning journey.

---

## 🚀 Features

- 🏘️ **Browse All Listings**: View all available properties with image, price, and location.
- ➕ **Create a New Listing**: Submit details through a validated form.
- ✏️ **Edit Existing Listings**: Modify the content of any listing.
- ❌ **Delete Listings**: Remove listings via secure form.
- 💥 **Error Handling**: Custom error pages and centralized middleware.
- 🖼️ **Fallback Image Handling**: Auto-default when no image is provided.
- 🧾 **RESTful Routing**: Clean and scalable structure.
- 🧪 **Form Validation**: Client- and server-side validation using Bootstrap and Express.

---

## 🛠️ Tech Stack

| Area        | Tools & Libraries            |
|-------------|------------------------------|
| Backend     | Node.js, Express.js          |
| Frontend    | EJS, HTML, Bootstrap 5       |
| Database    | MongoDB, Mongoose            |
| Templating  | EJS, ejs-mate (layout engine)|
| Utilities   | method-override, custom middleware |
| Validation  | Bootstrap client-side, Express server-side |
| Error Handling | Custom `ExpressError` class |

🌐 Project Title: WanderLust — An Airbnb-Inspired Stay Booking Platform
📄 Project Description:
WanderLust is a full-stack web application inspired by Airbnb, built using Node.js, Express, MongoDB, and EJS. The platform allows users to explore a wide variety of travel accommodations,
post their own listings, and perform complete CRUD operations on each property.
The goal of the project is to replicate the core functionalities of Airbnb, focusing on user-friendly design, dynamic data handling, and modular backend architecture.
It features listing creation, dynamic pricing, form validation, and a structured UI using Bootstrap 5.

💡 Key Features:
🔍 Browse Listings: View all available properties in a clean, responsive grid layout with images, titles, and prices.

📝 Create Listings: Add a new stay with title, description, location, price, and image link.

🛠️ Edit/Delete Listings: Easily update or remove your own listings.

🖼️ Default Image Handling: Displays a default image when no URL is provided.

📄 Form Validation: Client-side (Bootstrap) and server-side validation with descriptive error messages.

❌ 404 & Error Handling: Catch-all route with custom error pages using ExpressError.

♻️ RESTful Routing: Follows best practices in route naming and method usage.

🌈 Responsive UI: Built with Bootstrap and EJS layouts for consistency and usability.


🧠 What I Learned:
How to structure and build a full-stack CRUD app from scratch.

Working with MongoDB and Mongoose models to store and query data.

Creating custom error handlers and middleware.

Using layout engines and partials with ejs-mate for DRY templates.

Handling form data securely and efficiently.

Building scalable and readable route architecture.

🏠 About the Airbnb Website (Feature Breakdown)
🔹 1. Homepage / Listings Page
Shows a grid of available stays.

Each card includes:

Image

Title

Location

Price per night

Rating (optional)


🔹 2. Individual Listing Page
Clicking on a listing shows:

Full-size image

Description

Location & price

Edit/Delete if you're the owner


 3. Add New Listing
Form for logged-in users to add new properties.

✅ Done with /listings/new.

🔹 4. Edit & Delete Listing
Edit: Accessible only to the listing owner.

Delete: Confirmation before removal.

✅ Functional, but you can improve it with:

Modal confirmation for delete

Flash messages

Login protection

🔹 5. User Authentication (Login/Register/Logout)
Users should:

Sign up

Log in

Only edit/delete their own listings

🔜 Next Big Feature to Add!

🔹 6. Image Upload via Cloudinary
Instead of pasting URLs, allow:

Upload from local computer

Store image on Cloudinary

Get a secure image URL

🔜 Very common next step.


🔹 7. Search & Filter  // currently unavailable
Allow filtering listings by:

Location

Price range

Country

Keyword in title

🔜 Improve user experience.

🔹 8. Reviews & Ratings // currently unavailable
Users can leave ratings/comments

Average rating shows on listing card

🟡 Optional – useful for realism. 

🛠️ Tools Airbnb Uses (that we use too)
Feature	Stack
Frontend	HTML, CSS, Bootstrap, EJS
Backend	Node.js, Express
Database	MongoDB
