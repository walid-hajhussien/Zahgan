import React from 'react';
import logo from '../../image/l1.gif';
import logo2 from '../../image/l3.gif';
import './profile.css'
import FormDialog from './createEvent'
import FormView from './viewEvents'
import $ from 'jquery';





class Myprofile extends React.Component {

    state = {
        open: false,
        open2:false,
        data:[]
        
    }
    handleclick = (e) => {
        
        this.setState({ open: !this.state.open });
        
        
    }

    handleclick2 = (e) => {
        console.log(999999999)
        this.setState({ open2: !this.state.open2 });
        console.log(this.state)
        
    }

    componentDidMount() {
     var user =localStorage.getItem('user')
    console.log('dddd',user)
    var obj={user:user}
    var that=this

    $.ajax({
        type: "POST",
        url: '/create2',
        data: {
            obj
        },
        success: function (data) {
            console.log("user data ", data)
            that.setState({
                data:data
            })

            console.log('state',that.state.data)
        },
        error: (err) => {
      
              console.log('err', err);
            }
        
      });
    }

    render() {
        console.log(localStorage.email)
        return (
            <div >
                <section className="sectionmyprofile">
                <div className="maindiv" onClick={this.handleclick}>
                    <div className="container-fluid " >
                        <div className="card cardprofile g1">
                            <div className="card-body">
                                <img className="card-img-top imgprofile" src={logo} alt="Card image cap"></img>
                                <span className="spanprofile">Press to create an Event.......</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="maindiv"  onClick={this.handleclick2}>
                    <div className="container-fluid ">
                        <div className="card cardprofile g1">
                            <div className="card-body " >
                                <img className="card-img-top imgprofile" src={logo2} alt="Card image cap"></img>
                                <span className="spanprofile">My Event.......</span>
                            </div>
                        </div>
                    </div>
                </div>

             <FormDialog className="formdialog" open={this.state.open} handleclick={this.handleclick}/>
             <FormView data={this.state.data}  open={this.state.open2}  handleclick2={this.handleclick2}/>
             </section>
            </div>
        )
    }
}

export default Myprofile