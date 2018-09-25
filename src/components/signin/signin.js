import React, { Component } from "react";
import { Paper, Typography, TextField } from "@material-ui/core";
import Button from  "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
})

class SignIn extends Component {
    render () {
        return (

            <Paper>
                <Typography variant="display2" gutterBottom>Sign In!</Typography>
                <form>
                    <TextField
                        name="username"
                        id="username"
                        type="text"
                        label="username"
                        margin="normal"
                    />
                    <TextField
                        name="password"
                        id="password"
                        type="text"
                        label="password"
                        margin="normal"
                    />
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                    >
                    Sign In
                    </Button>
                </form>
            </Paper>
        )
    }
}

export default  withStyles(styles)(SignIn);