import './App.css';
import { useEffect, useState } from 'react';
import entrypoints from "./global/entrypoints";
import React from 'react';
import { Route, Routes } from 'react-router';

import HomePage from './pages/home/home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
function App() {
  //========================================================
  const [routes, setRoutes] = useState(null);
  useEffect(() => {
    fetch(entrypoints.routes, {
      method: "GET",
    }).then((res) => res.json())
      .then((res) => setRoutes(res))
      .catch((err) => console.log(err));
  }, []);
  //=======================================================
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" component={HomePage} />
        {routes &&
          routes.map((route) => {
            const ContentComponent =
              React.lazy(() => import('./pages/' + route.component));
            return (
              <Route key={route.headerTitle}
                path={route.path}
                component={() => (
                  <ContentComponent header={route.headerTitle} />
                )}
              />);
          })}
      </Routes>
      <Footer>
        Copyright © 2015-{new Date().getFullYear()} Inc.
        <br />
        This software is reserved Software Copyright.
      </Footer>
    </div>
  );
}

export default App;
