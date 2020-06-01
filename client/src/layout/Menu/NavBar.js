import React,{Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import rangeCircleMain from '../RangeCircleMain'
import SignUP from '../../components/signUp';
import Home from '../../components/Home';

class Navbar extends Component {
    render() {
      return (
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={'/'} className="navbar-brand"> Maap Range Circle </Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to={'/'} className="nav-link">LogIn</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/rangeCircle'} className="nav-link">RangeCircleMain</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link to={'/signUp'} className="nav-link">SignUp</Link>
                  </li> */}
                 
                </ul>
              </div>
            </nav> <br />
            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/rangeCircle' component={rangeCircleMain} />
              <Route exact path='/signUp' component={SignUP} />
                          
            </Switch>
          </div>
        </Router>
      );
    }
  }
  export default Navbar