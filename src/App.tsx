import React from 'react';
import Home from 'components/pages/Home/main';
import LayoutWrapper from 'components/organismos/LayoutWrapper/main';
import Image from 'components/atoms/Image/main';
import 'styles/main.scss';
import './App.css';

const App: React.FC<{}> = () => (
  <div className="App">
    <header />
    <body>
      <LayoutWrapper>
        <Image src="https://wallpapercave.com/wp/wp6175133.jpg" alt="background-image" styleProps={{ position: 'absolute' }} />
        <div className="BlackLayer" />
        <Home />
      </LayoutWrapper>
    </body>
  </div>
);

export default App;
