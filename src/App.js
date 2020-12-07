import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'
import Navigation from './Navigation';
import Home from './Pages/Home';
import Amenities from './Pages/Amenities';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <Router >
      <div>
        <Navigation/>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Amenities">
          <Amenities />
        </Route>
        <Route path="/ContactUs">
          <ContactUs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
