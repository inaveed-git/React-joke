# Joke Generator

## Overview

This is a simple React application that generates programming jokes using the Official Joke API. It consists of two main components:

1. **Joker Component (`Joker.jsx`):**

   - This component fetches a random programming joke from the Official Joke API when the page loads.
   - It displays the setup and punchline of the joke, along with a message prompting the user to click a button to generate a new joke.
   - The `jokeApi` function fetches a new joke from the API and updates the state with the new joke.

2. **Button Component (`Button.jsx`):**
   - This component renders a button labeled "Generate Joke."
   - When clicked, it calls the `jokeApi` function in the `Joker` component to fetch and display a new joke.

## How to Run the Project

This project uses Vite for development. Follow the steps below to set up and run the project:

1. **Clone the repository to your local machine:**

   ```
   git clone <repository_url>
   ```

2. **Navigate to the project directory:**

   ```
   cd joke-generator
   ```

3. **Install dependencies using npm:**

   ```
   npm install
   ```

4. **Start the development server using Vite:**

   ```
   npm run dev
   ```

5. **Open your browser and visit `http://localhost:####` to view the application.**

## Dependencies

- React: JavaScript library for building user interfaces.
- Vite: Frontend build tool that provides fast development server and optimized builds.
- `react`: ^version_number
- `react-dom`: ^version_number

## Project Structure

```
joke-generator/
│
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── Button.jsx
│   ├── Joker.jsx
│   └── index.js
│
├── public/
│   ├── index.html
│   └── ...
│
├── package.json
└── README.md
```

## Credits

- **Official Joke API by 15Dkatz:** Provides random programming jokes used in this application. [GitHub Repository](https://github.com/15Dkatz/official_joke_api)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
