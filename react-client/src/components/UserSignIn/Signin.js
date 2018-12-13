import React from 'react'
import $ from 'jquery';
import {Redirect} from 'react-router-dom'
import './Signin.css';

class Signin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        user:'',
        isLoggedIn: false
      };

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Should sign in when user submits log in credentials
    handleSubmit(event) {
      var obj = {
        email: this.state.email,
        password: this.state.password,
        user:this.state.user
      }

      console.log(obj)
      // POST request to sign the user in
      // Also changing the state of loggedin on the component to true
      $.ajax({
        type: "POST",
        url: '/account/signin',
        data: {
          email: obj.email,
          password: obj.password
        },
        success: (res) => {
          console.log('res')
          alert(res.message)
          if (res.success){
              localStorage.setItem('token', res.token);
              localStorage.setItem('email', obj.email)
              localStorage.setItem('user', obj.user)

            this.setState({
                isLoggedIn: true
            })
            window.location.reload();
          }
        }
      });

      event.preventDefault();
    }
    
    // If the user has successfully logged in then redirect to home
  render() {
      if (this.state.isLoggedIn) {
        return  <Redirect to={{
            pathname: '/homeClass',
          }} />
      }
    return (

    <div className="wrapper">
    <form className="form-signin" onSubmit={this.handleSubmit}>       
      <h2 className="form-signin-heading">Please login</h2>
      <input type="text" className="form-control" name="user" placeholder="User Name" required="" autoFocus="" value={this.state.user} onChange={e=>this.setState({user:e.target.value})} />
      <input type="text" className="form-control" name="email" placeholder="Email Address" required="" autoFocus="" value={this.state.email} onChange={e=>this.setState({email:e.target.value})} />
      <input type="password" className="form-control" name="password" placeholder="Password" required="" value={this.state.password} onChange={e=>this.setState({password:e.target.value})}/>      
      <button disabled={this.state.user.length==0} className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
    </form>
  </div>

    );
  }
}

export default Signin
