# Stopwatch Application

This project is a simple **Stopwatch Application** built using **React and Vite**. It demonstrates the proper use of **useState**, **useRef**, and **setInterval** to create a functional timer with start, stop, and reset functionalities.

## Features
- Start, stop, and reset a stopwatch
- Time display updates dynamically
- Uses **useRef** to persist values across renders without causing re-renders
- Uses **useState** for managing state changes

## Technologies Used
- **React**: A JavaScript library for building user interfaces
- **Vite**: A fast build tool for modern web applications
- **Hooks Used:**
  - `useState`: Manages the timer state
  - `useRef`: Stores mutable values that persist across renders without triggering re-renders
  - `setInterval`: Updates the displayed time every 100ms

## Project Setup
To run this project locally, follow these steps:

### 1️⃣ Clone the repository
```bash
 git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

### 2️⃣ Navigate to the project folder
```bash
cd YOUR_PROJECT_FOLDER
```

### 3️⃣ Install dependencies
```bash
npm install
```

### 4️⃣ Start the Vite development server
```bash
npm run dev
```

## Key Concepts Demonstrated
### 🔹 **useState**
- Manages `startTime` and `currentTime` state to track when the timer starts and updates.

### 🔹 **useRef**
- Stores **mutable values** (`timePassed`, `intervalId`) that persist across renders without causing re-renders.

## Potential Improvements
- Enhance styling with **CSS or TailwindCSS**.
- Display **lap times** or add a **pause** feature.

## License
This project is open-source and free to use. Contributions are welcome! 🚀

