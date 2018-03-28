import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        Look at this cool page I made! The company name is {this.props.name}
      </div>
    );
  }
}

About.propTypes = {
  name: PropTypes.String
}

const mapStateToProps = ({ }) => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
