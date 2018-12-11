import React from 'react';
import logo from '../../image/create.jpg';
import './profile.css'





class Myprofile extends React.Component {

    state = {}





    render() {
 

        return (

            <div >
                    <div className="maindiv">
                <div className="container-fluid " >
                    <div className="card cardprofile">
                        <div className="card-body">
                            <img className="card-img-top imgprofile" src={logo} alt="Card image cap"></img>
                            <span className="spanprofile">Press to create an Event.......</span>
                        </div>
                    </div>
                </div>
                </div>
                <div className="maindiv">
                <div className="container-fluid ">
                    <div className="card cardprofile">
                        <div className="card-body">
                            <img className="card-img-top imgprofile" src={logo} alt="Card image cap"></img>
                            <span className="spanprofile">My Event.......</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Myprofile