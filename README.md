![Smlscrn logo](http://i.imgur.com/QUaSArn.png "Smlscrn logo")

**Smlscrn** is a simple web application that helps users discover TV shows worth watching and where to watch them. It's designed to be easily used on a TV screen. Data is provided by [**TMDb**](https://www.themoviedb.org/).

![Home](http://i.imgur.com/DzUOOp6.jpg "Home")

### Live demo

You can see a live demo here: **https://smlscrn-app.appspot.com**


## Deployment

To deploy the application, you'll need an API key from TMDb. You can get one [**here**](https://www.themoviedb.org/documentation/api).

After cloning the project, create a file called `.env` in the root directory, and add your API key as the value for `TMDB_API_KEY`.


```
# Inside your .env file
TMDB_API_KEY=YOURAPIKEY
```

At runtime, the application uses [**dotenv**](https://github.com/motdotla/dotenv) to import values inside `.env` as environment variables. Since this file can have sensitive data, make sure to never commit it. The filename is included in the `.gitingore` so you should be fine. You can learn more about dotenv [**here**](https://github.com/motdotla/dotenv#faq).

#### Development 

Once your API key is ready, run these commands to get up and running on your local machine.

```
# Install dependancies
npm install

# Run in development mode
npm run dev
```

#### Production

Run these commands for production use.

```
# Clean and build application
npm run build

# Run in production mode
npm start
```

## Development Notes

Smlscrn is a [Node.js](https://nodejs.org/en/) based application. Here are the key technologies and methodologies used in the development of this project.

- [**Universal**](https://medium.com/@ghengeveld/isomorphism-vs-universal-javascript-4b47fb481beb) (isomorphic) ES6 Javascript.
- [**Functional**](https://medium.com/@chetcorcos/functional-programming-for-javascript-people-1915d8775504) for reusable, composable Javascript.
- [**Immutable**](https://medium.com/@chetcorcos/functional-programming-for-javascript-people-1915d8775504) for consistent and predictable Javascript.
- [**React**](https://facebook.github.io/react/)/[**Redux**](http://redux.js.org/) for simple, declarative UI development and predictable state management.
- [**Server-side rendering**](https://medium.com/@jeffwhelpley/use-cases-for-server-side-rendering-2fc6389b3f7d) for fast client-side loading.
- [**Webpack**](https://webpack.github.io/) for module bundling and hot-loading.
- [**Express**](https://expressjs.com/) for routing and REST API endpoints.
- [**Stylus**](http://stylus-lang.com/) CSS preprocessing for expressive, dynamic styling. 
- [**BEM**](http://getbem.com/) methodology for modular styling.
- [**Ramda**](http://ramdajs.com/) for practical, functional Javascript.
- [**Karma**](https://karma-runner.github.io/)/[**Mocha**](https://mochajs.org/)/[**Chai**](http://chaijs.com/)/[**Enzyme**](http://airbnb.io/enzyme/) for unit testing.
- [**Domain-driven**](http://marmelab.com/blog/2015/12/17/react-directory-structure.html) project structure for easier reusability, maintainability, and scalability.


## License 

[MIT License](http://opensource.org/licenses/MIT). Go ahead and fork it! :) -Noah
