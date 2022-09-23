## [Memory Game](https://memory-game-697be.web.app/)

Memory card game build with React. Two game modes available and images are dynamically loaded via Pexel's API.

### Getting Started

In order to setup and work on this project on your own, you will need to:

1. Clone this project:  
   `git clone https://github.com/GDimitroff/memory-game.git`

2. Once you have cloned this project, you can install the required dependencies by using:  
   `npm install`

3. Create Pexels account and get your API key: `https://www.pexels.com/api/`.

4. Create file `.env.local` in the root directory and add your key:

   `REACT_APP_PEXELS_AUTH_KEY=<YOUR_KEY_HERE>`

5. A live demo of the project can be started by using:  
   `npm start`

6. Distribution files can be produced using:  
   `npm run build`

### Features

- **Two** game modes.
- **Images** dynamically loaded via Pexels's API.
- **Fully responsive**.

### Outcome

- Used **useState** hook for basic **state management**.
- Used **useEffect** hook to work with components throughout their lifespan.
- Used **custom hooks** for the different game modes and another hook for fetching the images.

### Screenshots

![Screenshot1](https://i.imgur.com/f4Gs62F.png)
![Screenshot2](https://i.imgur.com/TZoAluw.png)
