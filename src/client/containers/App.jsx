import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
// const App = () => {
//   return (
//     <div>
//     	<span>test123</span>
//     </div>
//   );
// };

// export default App;

export default class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        test123
      </div>
    );
  }

}
