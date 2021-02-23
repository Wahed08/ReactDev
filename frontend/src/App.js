import Home from "./components/Home";
import Signup from "./components/SignUp";
import Login from "./components/LogIn";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
//import Test from './components/Test';


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
              
              <Route exact path="/">
                <Home/>
              </Route>

            </Switch>
        
      </div>
      <Footer/>
      {/* <Test/> */}
    </div>
    </Router>
  );
}

export default App;
