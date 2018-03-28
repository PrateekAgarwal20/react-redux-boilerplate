import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        Here's all the projects I've made so far
      </div>
    );
  }
}

Portfolio.propTypes = {
}

const mapStateToProps = ({ }) => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
