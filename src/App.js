import React from 'react';

// components & elem & shared & util
import Router from './components/Router';
import GlobalStyles from './shared/GlobalStyles';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Router />
    </React.Fragment>
  );
}

export default App;
