import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "React Redux Boilerplate";
  }

  render() {
    return(
      <div>
        <h4>
          React Redux Boilerplate
        </h4>
        <p>
          This is a boilerplate for react redux frameworks.
        </p>
      </div>
    );
  }
}

Home.propTypes = {}

const mapStateToProps = ({}) => {};

const mapDispatchToProps = () => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
