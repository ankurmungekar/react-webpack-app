import React from 'react';
import ReactDOM from 'react-dom';
import SitePerformance from './containers/SitePerformance';

const App = () => {
  const data = {
    test: 'test'
  }
  return (
    <div>
      <h1>Welcome to React Micro Frontend</h1>
      <SitePerformance data={data} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));