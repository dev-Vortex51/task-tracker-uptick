# Tasky

Tasky is a lightweight and intuitive task management application built using React, TypeScript, and Redux. This project allows users to add and delete tasks. It demonstrates a clean implementation of state management using Redux with TypeScript support for better type safety and maintainability.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Task Creation**: Seamless task creation with good layout.
- **Task Deletion**: Fast task deletion.
- **Responsive UI**: Modern, mobile-friendly design using Tailwind CSS

---

## Tech Stack

- **Frontend**: [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: Redux

---

## Live Deployment

Check out the live site here: [https://tasky-uptick.netlify.app/](https://tasky-uptick.netlify.app/)

---

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd hrdeck
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173)

4. **Build for production**
   ```bash
   npm run build
   ```
5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## Folder Structure

```
Tasky/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # Reusable UI components
│   ├── store/             # Redux store and Slices
│   ├── types/             # TypeScript type definitions
│   ├── index.css          # Global styles (Tailwind)
│   └── main.tsx           # App entry point
├── package.json           # Project metadata and scripts
├── tsconfig*.json         # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## License

This project is licensed under the MIT License.
