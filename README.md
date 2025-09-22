# Vue 3 Calculator Application

This is a fully functional, responsive calculator web application built with Vue 3 and Vite. The project features a clean, modern user interface with three switchable color themes and is structured using the Composition API for clear separation of concerns. It serves as a practical example of building a modern frontend application with reusable components and composable logic.

---

## ✨ Live Demo on Vercel ✨

[Live Demo](https://vue-calculator-themes.vercel.app/)

---

## Screenshots

The application includes three professionally designed themes to suit different user preferences.

- **Theme 1:** A dark, modern blue theme.
- **Theme 2:** A clean, light theme.
- **Theme 3:** A vibrant, high-contrast purple theme.

![Desktop-Theme-1](public/desktop-design-theme-1.jpg)
![Desktop-Theme-2](public/desktop-design-theme-2.jpg)
![Desktop-Theme-3](public/desktop-design-theme-3.jpg)
![Mobile-Theme-1](public/mobile-design-theme-1.jpg)
![Mobile-Theme-2](public/mobile-design-theme-2.jpg)
![Mobile-Theme-3](public/mobile-design-theme-3.jpg)

---

## Features

- **Standard Calculator Operations:** Performs addition, subtraction, multiplication, and division.
- **Three Switchable Themes:** Users can easily switch between three color themes using a toggle switch.
- **Responsive Design:** The layout is fully responsive and optimized for a seamless experience on various devices, including desktops, tablets, and mobile phones.
- **Clean & Modern UI:** The user interface is designed to be intuitive and visually appealing, inspired by the Frontend Mentor challenge.
- **State Management with Composables:** Logic is cleanly separated from the UI using Vue's Composition API, making the code more modular and maintainable.
- **Dynamic Theming:** Theming is handled efficiently using CSS Custom Properties (Variables), allowing for instant theme changes.

---

## Built With

This project leverages modern web development technologies to create a fast and robust application.

- **Vue 3:** The core progressive JavaScript framework used for building the user interface.
- **Vite:** A next-generation frontend tooling that provides a faster and leaner development experience.
- **CSS Custom Properties:** Used for implementing the dynamic theming system.
- **ES6+ JavaScript:** Modern JavaScript syntax for clean and efficient code.

---

## Project Structure

The project is organized with a clear separation of concerns, making it easy to navigate and maintain.

```
vue-calculator/
├── public/               # Static assets
├── src/
│   ├── assets/           # Global styles and fonts
│   │   └── main.css
│   ├── components/       # Reusable Vue components
│   │   ├── CalculatorDisplay.vue
│   │   ├── CalculatorHeader.vue
│   │   └── CalculatorKeypad.vue
│   ├── composables/      # Reusable stateful logic
│   │   └── useCalculator.js
│   ├── App.vue           # Main application component
│   └── main.js           # Application entry point
├── index.html            # Main HTML file
├── package.json          # Project dependencies and scripts
└── README.md             # You are here!
```

- **src/components:** Contains individual UI pieces of the calculator (Header, Display, Keypad).
- **src/composables:** Holds the `useCalculator.js` file, which encapsulates all the business logic for the calculator's state and operations.
- **src/assets:** Contains the global CSS file with the theme definitions and base styles.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- Node.js (v18 or later recommended)

```sh
node -v
```

---

### Installation & Setup

**Clone the repository:**

```sh
git clone [https://github.com/AlbertBabaiani/vue-calculator](https://github.com/AlbertBabaiani/vue-calculator)
```

**Navigate to the project directory:**

```sh
cd vue-calculator
```

**Install NPM packages:**

```sh
npm install
```

---

## Running the Application

**Start the development server:**

```sh
npm run dev
```

**Open your browser:** Navigate to the local URL provided in the terminal (usually [http://localhost:5173](http://localhost:5173)).

---

## Building for Production

To create a production-ready build of the app:

```sh
npm run build
```

This command will create a `dist/` folder with the optimized and minified files ready for deployment.
