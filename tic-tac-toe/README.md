# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
