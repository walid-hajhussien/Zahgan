import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function CustomizedTable(props) {
    console.log('props2',props.data)
    var a = {
        approve: 1,
        attending: [],
        availableSeats: 23,
        cost: 5,
        creatorName: "ozil",
        date: "2019-02-02T01:01",
        des: "Birthday ",
        eventLocation: [],
        eventName: "Birthday",
        url: "https://images.yourstory.com/2015/07/yourstory-party-hunterz-store.jpg"
    }

    var result=props.data

    const { classes } = props;

    return (
            <div>
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow >
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}}>Event Name</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}} numeric>Event Cost</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}} numeric>Number of seats</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}} >Event Date</CustomTableCell>
                        <CustomTableCell style={{ fontSize: '15px' , textAlign:"center"}} numeric>Manager Approval</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {result.map(row => {
                        return (
                            <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell style={{  textAlign:"center"}} component="th" scope="row">
                                    {row.eventName}
                                </CustomTableCell>
                                <CustomTableCell style={{  textAlign:"center"}} >{row.cost}</CustomTableCell>
                                <CustomTableCell style={{  textAlign:"center"}} numeric>{row.availableSeats}</CustomTableCell>
                                <CustomTableCell style={{  textAlign:"center"}} numeric>{row.date}</CustomTableCell>
                                {/* <CustomTableCell numeric style={{  textAlign:"center",color: (row.approve==1) ? 'green':'red' }}>{(row.approve==1)?'approved':'Not Approve'}</CustomTableCell> */}
                                <CustomTableCell numeric style={{  textAlign:"center",color: (row.approve==1) ? 'green':(row.approve==0) ? 'blue':'red' }}>{(row.approve==1)?'approved':(row.approve==0) ? 'Pending':'rejected'}</CustomTableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>     
        </Paper>
        <p style={{textAlign:"center",fontSize:'10px',color:'red',paddingTop:'20px'}}>Press ESC to Exit</p>
        </div>
    );
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);