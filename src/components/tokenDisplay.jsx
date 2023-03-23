import React from 'react';
import { connect } from 'react-redux';

function TokenDisplay({ token }) {
  return (
    <div>
      <p>Token: {token}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps)(TokenDisplay);