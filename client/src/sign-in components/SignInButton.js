import React from 'react'; 
import { makeStyles} from '@material-ui/core/styles'; 
import Button from '@material-ui/core/Button'; 

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1)
    }
    }) 
)

  

export default function SignInButton() {
    const classes = useStyles(); 
    return (
        <div>
            <Button 
                className={classes.root} 
                variant = 'contained'
                color = 'primary'
                fullWidth
                type = 'submit'>
    
                Create Account
            </Button>
        </div>

    ); 
}

