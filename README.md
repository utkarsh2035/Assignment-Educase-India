# User Management Application

This is a React-based user management application that allows users to create accounts, log in, and view their profile information. The application is styled using Tailwind CSS.

## Features
- Create multiple user accounts.
- Log in with email and password.
- Display logged-in user's full name and email on the profile page.
- Error handling for login (e.g., incorrect email or password).

## Technologies Used
- React
- Vite
- Tailwind CSS v4

## Folder Structure
```
assignment/
├── src/
│   ├── components/
│   │   ├── CreateAccount.jsx
│   │   ├── SignIn.jsx
│   │   ├── UserProfile.jsx
│   ├── App.jsx
│   ├── main.jsx
├── index.html
├── package.json
├── README.md
```

## Setting Up Tailwind CSS v4

1. Install Tailwind CSS via npm:
   ```bash
   npm install -D tailwindcss@latest @tailwindcss/cli postcss@latest autoprefixer@latest
   npx @tailwindcss/cli init -p
   ```

2. Add Tailwind directives to your CSS file (`src/index.css`):
   ```css
   @import "tailwindcss";
   ```

3. Build the CSS file:
   ```bash
   npx @tailwindcss/cli -i ./src/index.css -o ./src/output.css --watch
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts
- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build.
- `npm run build:css`: Build the Tailwind CSS file.

## How to Use
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the CSS file:
   ```bash
   npm run build:css
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the application in your browser.


