import React from 'react';
import ReactDOM from 'react-dom';
import SitePerfomance from './containers/SitePerfomance';

const App = () => {
  const data = {
    test: 'test'
  }
  return (
    <div>
      <h1>Welcome to React Micro Frontend</h1>
      <SitePerfomance data={data} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));