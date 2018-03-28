// Import frameworks
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

// Import shared components
// Example: import navbars, footers, and notifications

// Import page components
import NavBar from '../components/shared/NavBar';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';

import NotFound from '../components/NotFound';

// Import actions


class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
              {/*Base Home route*/}
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/portfolio' component={Portfolio} />

              {/* If no path matches, show 404 error*/}
              <Route exact path='/*' component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

AppContainer.propTypes = {};

const mapStateToProps = ({}) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
