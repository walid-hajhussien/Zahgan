import React from 'react'
import zahgan from './zahgan.jpg';
import $ from 'jquery';
import {Link,NavLink,withRouter} from 'react-router-dom'
const jwtDecode = require('jwt-decode');



class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
			userName: ''
		}
		this.signOut = this.signOut.bind(this);
	}

	// Component did mount is checking whether the randomly generated JWT token is stored in the local storage
	// if it has been saved then change the state of loggedIn to true and then save the username in the state as well
	componentDidMount() {
		console.log('componentdidmount')

		//to read the local storage 
		// console.log('Token ....',jwtDecode(localStorage.getItem('token')))
		if (localStorage.getItem('token')) {
			this.setState({
				isLoggedIn: true
			});
			this.setState({
				userName: jwtDecode(localStorage.getItem('token')).firstName
			})
		} else {
			this.setState({
				isLoggedIn: false
			});
		}
	}
	// componentWillMount() {
	// 	if(localStorage.getItem('token')){
	// 	this.setState({
	// 		userName: jwtDecode(localStorage.getItem('token')).firstName
	// 	})
	// }
	// }

	ToEvents = () => {
		$("#clickEvent").click(function () {
			$('html, body').animate({
				scrollTop: $("#events").offset().top
			}, 2000);
		});
	}


	ToAbout = () => {
		$("#clickAbout").click(function () {
			$('html, body').animate({
				scrollTop: $("#about").offset().top
			}, 2000);
		});
	}


	showLoggedInElements = () => {
		if (this.state.isLoggedIn === true) {
			return 'block';
		} else {
			return 'none';
		}
	}

	hideLoggedInElements = () => {
		if (this.state.isLoggedIn === true) {
			return 'none';
		} else {
			return 'block';
		}
	}

	// Post request to logout the user when logout is pressed
	signOut = (event) => {
		$.ajax({
			type: "POST",
			url: '/account/logout',
			headers: {
				token: localStorage.getItem('token')
			},
			success: (res) => {

				alert(res.message)
				if (res.success) {
					localStorage.removeItem('token');
					this.setState({
						isLoggedIn: false
					})
					window.location.reload();
				}
			}
		})
		event.preventDefault();
	}

	// Function to make the first letter in a string uppercase
	jsUcfirst = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}






	render() {
		return (
			<div>
				
				<nav className="navbar navbar-expand-sm " style={{opacity:'0.9',borderRadius:'0px'}}>
					<ul className="navbar-nav">
						<li className="active"><a href="/homeClass">Home</a></li>
						<li><a href="javascript:void(0);" onClick={this.ToAbout} id="clickAbout">About</a></li>
						<li><a href="./ContactUs"  id="clickContactUs" >Contact us</a></li>
						<img src={zahgan}></img>
						<li style={{ 'display': this.state.isLoggedIn === false ? 'block' : 'none' }}><a href="/SignInCreator">Manager</a></li>
						<li><a href="javascript:void(0);" onClick={this.ToEvents} id="clickEvent">Events</a></li>
						<li style={{ 'display': this.state.isLoggedIn === false ? 'block' : 'none' }}><a href="/signin">Sign in</a></li>
						<li style={{ 'display': this.state.isLoggedIn === false ? 'block' : 'none' }}><a href="/signup">Sign up</a></li>
						<li style={{ 'display': this.state.isLoggedIn === true ? 'block' : 'none' }}><a href="javascript:void(0);" onClick={this.signOut}>Log out</a></li>
						<li style={{ 'display': this.state.isLoggedIn === true ? 'block' : 'none' }}><Link to="/myprofile">MyProfile</Link></li>
						<li style={{ 'display': this.state.isLoggedIn === true ? 'block' : 'none' }}><a href="javascript:void(0);">Welcome {this.jsUcfirst(this.state.userName)}</a></li>
					</ul>
				</nav>
				
			</div>

		)
	}

}
export default Nav