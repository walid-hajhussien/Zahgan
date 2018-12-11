import React from 'react';
import logo from '../../image/create.jpg';
import './profile.css'
import FormDialog from './createEvent'





class Myprofile extends React.Component {

    state = {
        open: false,
        
    }
    handleclick = (e) => {
        console.log(999999999)
        this.setState({ open: !this.state.open });
        console.log(this.state)
    }

    render() {
        
        return (
            <div >
                <div className="maindiv" onClick={this.handleclick}>
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

             <FormDialog className="formdialog" open={this.state.open} handleclick={this.handleclick}/>
            </div>
        )
    }
}

export default Myprofile