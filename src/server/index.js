import express from 'express';
import webpack from 'webpack';
import { ENV } from './config/appConfig';
import expressConfig from './config/express';
import routesConfig from './config/routes';
const App = require('../../public/assets/server');
const app = express();


/*
 * Configure webpack dev middleware (development only)
 */
if (ENV === 'development') {
  const webpackDevConfig = require('../../webpack/webpack.config.dev-client');
  const compiler = webpack(webpackDevConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackDevConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

/*
 * Configure express application settings
 */
expressConfig(app);

/*
 * Configure express routes
 */
routesConfig(app);

/*
 * This is where the magic happens. We take the locals data we have already
 * fetched and seed our stores with data.
 * App is a function that requires store data and url
 * to initialize and return the React-rendered html string
 */
app.get('*', App.default);

/*
 * Start express server
 */
app.listen(app.get('port'));

/*
 * Suppress console.log output after starting server
 */
console.log = function(){};
