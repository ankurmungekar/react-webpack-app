import React from 'react';
import ReactDOM from 'react-dom';
import SitePerfomance from './containers/SitePerfomance';

const App = () => {
  return (
    <div>
      <h1>Welcome to React Micro Frontend</h1>
      <SitePerfomance />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));