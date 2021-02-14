import Navbar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './components/Create';
import PostDetails from './components/PostDetails';
import _404 from './components/_404'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
         <div className="content">
           <Switch>
             <Route exact path="/">
               <Home/>
             </Route>

             <Route path="/create">
               <Create/>
             </Route>

             <Route path="/blogs/:id">
               <PostDetails/>
             </Route>

             <Route path="*">
               <_404/>
             </Route>
           </Switch>
         </div>
      </div>
    </Router>
    
  );
}

export default App;
