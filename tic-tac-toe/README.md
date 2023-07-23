## Tic-Tac-Toe React Example App 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

This is a simple Tic-Tac-Toe example app built using React, demonstrating the basic concepts of React components, state management, and handling user interactions. Players can take turns placing their X or O on the 3x3 grid, and the game will determine the winner or if it's a draw.

## Table of Contents
- [Demo](#demo)
- [Installation](#installation)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How to Play](#how-to-play)
- [Explanation](#explanation)
- [Contributing](#contributing)
- [License](#license)

## Demo
You can try out the live demo of the Tic-Tac-Toe app [here](https://example.com/tic-tac-toe-demo).

## Installation
To run the app locally, follow these steps:

1. Clone the repository: 
   ```
   git clone git@github.com:EricvanLessen/react.git
   ```
   
2. Navigate to the project directory:
   ```
   cd tic-tac-toe
   ```

3. Install the dependencies using npm or yarn:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your web browser and go to http://localhost:3000 to play the game.

## Features
- Play Tic-Tac-Toe against another player.
- Real-time feedback on game status (winner or draw).
- Option to restart the game after it's over.
- Simple and intuitive user interface.

## Technologies Used
The Tic-Tac-Toe app was built using the following technologies:

- React: A JavaScript library for building user interfaces.
- JavaScript: The primary programming language used for the application logic.
- HTML/CSS: Used for structuring the app and styling the components.
- Create React App: A development environment for React applications, providing a convenient setup.

## How to Play
1. When you open the app, you will see a 3x3 grid representing the Tic-Tac-Toe board.
2. Player 1 starts the game and places an X on any empty cell by clicking on it.
3. Then, Player 2 places an O on a different empty cell.
4. Players take turns until one of them wins by forming a line of three of their symbols either horizontally, vertically, or diagonally.
5. If all cells are filled and there is no winner, the game ends in a draw.
6. To start a new game, click the "Restart" button.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



## Explanation

### Render the first react component

The Game function in index.js returns neither html, nor a string, it returns jsx. 
During create react build process, jsx compiles to pure JS.
JSX is not required but recommended. <br>

React must be in scope when using JSX, so we import react on top of the file. The app compiles but still with a blank screen. <br>

We need to render to Game component to the DOM. In order to do so, we import 'react-dom', we then define what we render and where in the React.com render function. The targer node is a div with the id root, that we get with JS. 

### CSS Styling: Add some styling to the body of the page

We add some styling in index.css. Then we import the css and update the browser to see the changes. Then we add more changes in the index.css. 

### Component hierarchy: Board and squared component

We add two components: the game component contains the board component and the board component adds the squared component.<br> 

We can change the styles of each component. We want to change the background color and add margin and padding to our component. We add the styles in an object gameStyles. We then use a JSX container with the styles attribute in the Game div. 
The JSX container stores the object with the styles definitions.<br> 

We repeat this for the board component and the squares component. We compose the board component in the game component, and the squared component in the board componend.<br>

When we render the page, we see the three components and the hierarchical relationship among them. 

### CSS layout: CSS instead of inline styles

We will use CSS instead of inline styles. First remove the inline styles from the game component. We add a prop named className, we can then write a JSX object to it or just a class as a string. We add CSS in the index.css to arange the squares in a column. We duplicate the squares to render nine tic-tac-toe squared. We add more css to index.css to give the board the look of a tic-tac-toe game. 

### Passing Props 

We refactor the board component, we use a function renderSquare that returns a square component. We substitue all square tags with function calls instead. Then we varify that there is no visual difference after the refactoring. The mechanism to pass data is called props, short for properties. To pass a string, we add a single string prop, here the square should display data. We can also use a JSX container to pass variables. If we add a prop, e.g. value, to the return square tag, react gives us access an object called props in the in the Square function as a function argument and the props.value argument. We can also pass an index e.g. in a JSX container, we can then call the index function with different values and display that value. 

### Click events

Handling events with react elements is close to handling events with dom elements. For react, first we convert the div in a button, then we add a onClick event handler. The handler alerts the user which element was clicked. We also add css in index.css to set the clicked square's color. 

### Lifting state up

We need to create a way for the square component to update the parent board component state, which is private. We pass down a function for this purpose, and indirectly update the board state. We define the function handle click event, it gets i as an argument, then we pass this function down to the squared component as a prop. The button in the square component can then call the function, e.g. for the onClickEvent. 

### Setting state

In the handle click event function, the squares array values can not be set directly. We can not directly mutate the state. We must create an updated copy of the state and use a setter function to state variable. React then registers the change and updates the UI. Step 1: make a copy of the squares state array. Step 2: Mutate the copy. Step 3: Call the setSquares function with the mutated copy. 

### Taking turns and determine the winner

We implement the function that indicates who is next as a boolean flag. We create a helper function that is called after each click to determine who is the winner. We also create checks to handle clicks for a won game and for a click on a field that was already assigned to a player. 

## Contributing
Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request. Make sure to follow the project's code of conduct.

1. Fork the repository.
2. Create a new branch for your changes:
   ```
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes and push them to your forked repository.
4. Submit a pull request describing your changes.

## License
The Tic-Tac-Toe React Example App is open-source and licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code as per the terms of the MIT License.

---

Thank you for checking out the Tic-Tac-Toe React Example App! If you have any questions or need further assistance, please feel free to contact us or open an issue in the repository. Enjoy playing!