import React from 'react';
import Home from 'components/pages/Home/main';
import LayoutWrapper from 'components/organismos/LayoutWrapper/main';
import 'styles/main.scss';
import './App.css';
import mock from './mock.json';
import weather from './weather.json';

const App: React.FC<{}> = () => {
  console.log(mock, '???');
  console.log(weather, 'weather');
  return (
    <div className="App">
      <header />
      <body>
        <LayoutWrapper>
          <Home />
        </LayoutWrapper>
      </body>
    </div>
  );
};

export default App;
