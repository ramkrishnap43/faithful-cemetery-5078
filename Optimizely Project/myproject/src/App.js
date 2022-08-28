
import AllRoutes from './AllRoutes/AllRoutes';
import  React from 'react'
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Plans from './Components/Plans';
import FreeMark from './Components/FreeMark';


function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
