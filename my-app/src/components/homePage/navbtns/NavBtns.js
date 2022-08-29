import { createUseStyles } from "react-jss";
import { Diamond } from "./Diamond";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const useStyles = createUseStyles(() => {
  return {
    main: {
      height: "20%",
      alignItems: "center",
      display: "flex",
      justifyContent: 'space-around'
    },
    icon: {
      alignItems: "center",
      display: "flex",
      color: "white",
      fontFamily: 'fantazy',
      fontSize: 30
    },
    btns: {
      color: "white",
      justifyContent: 'space-between',
      display: 'flex'

    },
    contact: {
        color: 'white',
        display: 'flex',
        alignItems: 'center'
    },
  };
});

function NavBtns(params) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.icon}>
        <Diamond />
        <span>Platform</span>
      </div>
      <div className={classes.btns}>
        <span>HOME</span>
        <span>FEATURES</span>
        <span>LEADERSHIP</span>
        <span>REGISTER</span>
        <span>FIND DOCTORS</span>
      </div>
      <div className={classes.contact}>
        <span>CONTACT</span>
        <GitHubIcon />
        <TwitterIcon />
      </div>
      <div>
      </div>
    </div>
  );
}
export default NavBtns;
