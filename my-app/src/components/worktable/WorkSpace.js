import { useContext } from "react";
import { createUseStyles } from "react-jss";
import UserAuth from "../../context/AuthContext";
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const useStyle = createUseStyles(() => {
  return {
    main: {
      flex: 6,
      backgroundColor: "white",
      height: "100vh",
      overflowY: "scroll",
    },
    navbar: {
      height: "10%",
      borderBottom: '1px solid grey',
      display: 'flex',
      alignItems:'center',
      position: 'relative'
    },
  
  };
});

function WorkSpace({ children }) {
  const classes = useStyle();
  const user = useContext(UserAuth);
  const navigate = useNavigate();
  const logout =() => {
    localStorage.clear();
    navigate('/')
  }
 
  return (
    <div className={classes.main}>
      <div className={classes.navbar}>
        <Button onClick={logout} style={{position: "absolute",right: 0}}>Log Out</Button>
      </div>
      {children}
    </div>
  );
}

export default WorkSpace;
