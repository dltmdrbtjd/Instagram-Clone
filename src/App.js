import React, { useEffect } from 'react';

// loginCheck
import { userCreators } from './modules/redux/user';
import { useDispatch } from 'react-redux';

// components & elem & shared & util
import Router from './components/Router';
import GlobalStyles from './shared/GlobalStyles';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCreators.loginCheck());
  },[])

  return (
    <React.Fragment>
      <GlobalStyles />
      <Router />
    </React.Fragment>
  );
}

export default App;
