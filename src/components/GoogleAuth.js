import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../redux/actions/auth';

const GoogleAuth = (props) => {
  return (
    <>
      {!props.isAuth ? (
        <button onClick={props.signIn}>login</button>
      ) : (
        <button onClick={props.signOut}>logout</button>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
