import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Menu/NavBar'
import 'react-rangeslider/lib/index.css';


class App extends React.Component {
 
  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12 col-xs-12">
          <Navbar/>
        </div>
        </div>
        </div>
    )
  }
}
export default App;
