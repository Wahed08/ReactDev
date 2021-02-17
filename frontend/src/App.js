import Home from "./components/Home";
import Signup from "./components/SignUp";
import Login from "./components/LogIn";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="container">
       
            <Switch>
              <Route path="/signup">
                <Signup/>
              </Route>

              <Route path="/login">
                <Login/>
              </Route>
              
              <Route path="/">
                <Home/>
              </Route>

            </Switch>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
