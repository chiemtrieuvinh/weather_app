import React from 'react';
import Home from 'components/Home/main';
import LayoutWrapper from 'components/LayoutWrapper/main';
import 'styles/main.scss';
import './App.css';

const App: React.FC<{}> = () => (
  <div className="App">
    <header />
    <body>
      <LayoutWrapper>
        <Home />
      </LayoutWrapper>
    </body>
  </div>
);

export default App;
