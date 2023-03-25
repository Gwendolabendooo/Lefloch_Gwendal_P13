import React from 'react';
import { connect } from 'react-redux';

function TokenDisplay({ token }) {
  return token
}

const mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps)(TokenDisplay);