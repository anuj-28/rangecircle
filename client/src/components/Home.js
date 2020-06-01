import React,{Component} from 'react';
import homeImage from '../Images/aircraft.jpg'
import { BrowserRouter as Router, Switch, Route, Link , Redirect} from 'react-router-dom';
import  RahgeCircle  from '../layout/RangeCircleMain'
export default class Home extends Component {
  state = {
    user_name: '',
    Password: '',
    submit:"0"
}
// }
validateForm() {
  return this.state.user_name.length > 0 && this.state.Password.length > 0;
}
onChangeEvent=(e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
}
onSubmitEvent=(e) => {
    e.preventDefault()//to avoid rerender the page
    var newdata={
      user_name: this.state.user_name,
      Password: this.state.Password
      }
      //Fetch is a promise-based API which returns a response object. So, we make use of the json() method to get the response object which is stored in data and used to update the state of users in our application
    fetch('/users/login', {//Call the API of Node[user]
        method: 'POST',
        body: JSON.stringify(newdata),
        headers: {
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
       .then(submit => this.setState({ submit}))
    
        e.target.reset();
}

    render()
    { console.log(this.state.submit)
      if(this.state.submit!=="0"){
        return (
          <Router>
            <Switch>
             <Route path="/rangeCircleMain" component={RahgeCircle} />
              <Redirect to="/rangeCircleMain" />
            </Switch>
          </Router>
        )
      }
      else if(this.state.submit==="0"){
return (
<div className="row">
  <div className="col-lg-4 col-xl-4 col-md-4"  >
  <img style={{width:"105%",height:"90%"}} src={homeImage}></img>
  </div>
  <div className="col-lg-8 col-xl-8 col-md-8">
 

<div>
    
    <form onSubmit={this.onSubmitEvent}>
    <div className="form-group  col-xl-6 col-md-6 col-lg-6 col-sm-12">
    <h3 align="center">Sign in</h3> </div>
        <div className="form-group  col-xl-6 col-md-6 col-lg-6 col-sm-12">
        <label>User Name:  </label>
            <input 
            id="user_name"
              type="text" 
              className="form-control" 
             onChange={this.onChangeEvent}
              />
        </div>
        <div className="form-group  col-xl-6 col-md-6 col-lg-6 col-sm-12">
            <label>Password: </label>
            <input type="Password" 
              className="form-control"
              onChange={this.onChangeEvent}
              id="Password"
              />
        </div>
       <div className="form-group  col-xl-6 col-md-6 col-lg-6 col-sm-12">
            <input type="submit" 
              value="Sign in" 
              disabled={!this.validateForm()}
              className="btn btn-primary"/>
        </div>
    </form>
</div>
<div> 
  <Link to={'/signUp'} className="nav-link">SignUp</Link>
        
</div>

  </div>
</div>

) }
  }

}