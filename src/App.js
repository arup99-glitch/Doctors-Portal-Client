import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register'
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import { Dashboard } from '@mui/icons-material';
import Dashbord from './Pages/Dashbord/Dashbord/Dashbord';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
      <Switch>
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <PrivateRoute path="/dashbord">
            <Dashbord />
          </PrivateRoute>
          <Route path="/home">
            <Home />
            </Route>
          <Route  path="/login">
            <Login />
          </Route>
          <Route  path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home />
            </Route>
        </Switch>
      </Router>
     </AuthProvider>
     
    </div>
  );
}

export default App;
