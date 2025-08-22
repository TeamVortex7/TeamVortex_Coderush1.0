# 🚀 Team Vortex - Immersive STEM Education Platform

Welcome to the official repository for the Team Vortex project! This is a modern, full-stack web application designed to make STEM education engaging and interactive through a beautiful, animated user interface and a feature-rich user dashboard.

![Team Vortex Dashboard](https://placehold.co/1200x600/1e293b/ffffff?text=Team%20Vortex%20Dashboard%20UI)

## ✨ Features

-   **Animated Landing Page**: A stunning, professional landing page built with **GSAP** and **Spline/Animated Gradients** to capture user interest.
-   **Secure User Authentication**: A complete login and registration system using **Firebase Authentication**, including Google OAuth for easy sign-in.
-   **Interactive User Dashboard**: A dynamic dashboard where users can track their progress, view achievements, and access various science labs.
-   **Glassmorphism UI**: A sleek, modern user interface built with **DaisyUI** and **TailwindCSS**, featuring floating, blurred elements for a premium feel.
-   **Subject-Specific Lab Pages**: Dedicated pages for each subject (Biology, Chemistry, etc.) that link to static HTML lab simulations.
-   **Responsive Design**: The entire application is fully responsive and works seamlessly on desktops, tablets, and mobile devices.

---

## 🛠️ Tech Stack

This project is built with a modern, high-performance tech stack.

-   **Frontend**:
    -   **React**: A powerful JavaScript library for building user interfaces.
    -   **Vite**: A next-generation frontend build tool for lightning-fast development.
    -   **TailwindCSS**: A utility-first CSS framework for rapid UI development.
    -   **DaisyUI**: A component library for TailwindCSS to create beautiful, consistent elements.
    -   **GSAP (GreenSock)**: A professional-grade animation library for creating smooth, high-performance animations.
    -   **React Router**: For handling client-side routing and navigation.

-   **Authentication & Database**:
    -   **Firebase**: Used for secure user authentication (including Google OAuth) and data management.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/TeamVortex_Coderush1.0.git](https://github.com/your-username/TeamVortex_Coderush1.0.git)
    cd TeamVortex_Coderush1.0
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up Firebase:**
    -   Create a project on the [Firebase Console](https://console.firebase.google.com/).
    -   Create a new Web App and copy the Firebase configuration object.
    -   Create a new file in the `src/` directory named `firebaseConfig.js`.
    -   Paste your Firebase config into this file. It should look like this:

        ```javascript
        // src/firebaseConfig.js
        import { initializeApp } from "firebase/app";
        import { getAuth } from "firebase/auth";

        const firebaseConfig = {
          apiKey: "YOUR_API_KEY",
          authDomain: "YOUR_AUTH_DOMAIN",
          projectId: "YOUR_PROJECT_ID",
          storageBucket: "YOUR_STORAGE_BUCKET",
          messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
          appId: "YOUR_APP_ID"
        };

        const app = initializeApp(firebaseConfig);
        export const auth = getAuth(app);
        ```

4.  **Add `firebaseConfig.js` to `.gitignore`:**
    -   Open your `.gitignore` file and add this line to the end to protect your secret keys:
        ```
        src/firebaseConfig.js
        ```

### Running the Application

-   To start the development server, run:
    ```sh
    npm run dev
    ```
-   Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view the application in your browser.

---

## 📂 Project Structure

The project is organized to be clean and scalable.


/
├── public/              # Static assets (HTML labs, images)
├── src/
│   ├── assets/          # Images and other project assets
│   ├── components/      # Reusable React components (Navbar, Footer, etc.)
│   ├── pages/           # Main page components (LandingPage, DashboardPage, etc.)
│   ├── App.jsx          # Main application router
│   ├── firebaseConfig.js  # Firebase configuration (ignored by Git)
│   └── main.jsx         # React application entry point
├── .gitignore           # Files to be ignored by Git
├── package.json         # Project dependencies and scripts
└── tailwind.config.js   # TailwindCSS configuration


---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

