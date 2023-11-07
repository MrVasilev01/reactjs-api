// import Home from './components/Home/Home';
import Login from './components/Login_Register/Login';
import Register from './components/Login_Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Car from './components/CarManager/Car';

// import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />

          <Route path='/dashboard/:id' Component={Dashboard} />

          <Route path='/car' Component={Car} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
