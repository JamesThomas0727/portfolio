import logo from './logo.svg';
import './App.css';

//======================================================================
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import routes from './routes/routes';

//======================================================================
function App() {
  return (
    //==================================================================
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }, index) => {
          return (
            <Route
              key={index}
              path={path}
              element={element} />
          )
        })}
      </Routes>
    </BrowserRouter>
    //==================================================================
  );
}
export default App;
