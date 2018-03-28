// Import frameworks
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

// Import shared components
// Example: import navbars, footers, and notifications

// Import page components
import Home from '../components/Home';
import NotFound from '../components/NotFound';

// Import actions


class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('/api/sync')
      .then((resp) => {
        if (!resp.data.success) {
          // In this case, the redux state and the persist state
          // are NOT synced, so you want to start again and wipe
          // redux state. This may mean activating any actions
          // that are imported
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return(
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              {/*Base Home route*/}
              <Route exact path='/' component={Home} />

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
