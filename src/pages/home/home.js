import React, { Component } from "react";
import { Paper, Typography, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
})
class Home extends Component {

    render () {
        return (
            <Paper>
                <Typography variant="display2" gutterBottom>Welcome to Plant Pal!</Typography>
                <Button variant="contained" color="primary">Sign In</Button>
                <Button variant="contained" color="primary">Sign Up</Button>
            </Paper>
        )
    }

};


export default  withStyles(styles)(Home);