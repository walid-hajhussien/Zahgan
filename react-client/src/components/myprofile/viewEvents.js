import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import WithStyles from './table'

export default class FormView extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.props.handleclick2() 
    this.setState({ open: true });
     
  };

  handleClose = () => {
    this.props.handleclick2()  
    this.setState({ open: false });
  };


  componentDidUpdate(prevProps) {
    if (prevProps.open != this.props.open) {
        this.setState({
            open: this.props.open
        })


    }

}

  render() {
    console.log('props1',this.props.data)
    return (
      <div >
     
    
        <Dialog 
        fullScreen
        className="animated fadeIn delay-0.7s"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          
          
          
        >
          <DialogTitle   id="form-dialog-title"></DialogTitle>
          <DialogContent >
            <DialogContentText
            
            >
            
            </DialogContentText>
    
            <WithStyles data={this.props.data}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}