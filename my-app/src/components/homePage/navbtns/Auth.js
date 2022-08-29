import { Button } from "@mui/material";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";



const useStyles = createUseStyles(() => {
    return {
        btns: {
            color: 'white'
        },
        tittle: {
            color: "white",
          fontSize: '32px'
        }
    }
})
function Auth() {
    const classes = useStyles();
    const navigate = useNavigate();
  return (
    <div>
      <span className={classes.tittle}>Platform: Find loads for your business</span>
      <div className={classes.btns}>
        <Button  onClick={() => navigate('signin')} style={{color: 'white'}} variant="outlined">Sign In</Button>
        <Button  onClick={() => navigate('signup')} style={{color: 'white'}} variant="outlined">Sign Up</Button>
      </div>
    </div>
  );
}

export default Auth;
