import { createUseStyles } from "react-jss";
import Hr from "./Hr";
import Person2Icon from "@mui/icons-material/Person2";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useNavigate } from "react-router-dom";
import paths from "../../constants/paths";

const useStyle = createUseStyles(() => {
  return {
    main: {
      flex: 1,
      backgroundColor: "#455A64",
      color: "rgba(255, 255, 255, 0.8)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    tittle: {
      fontSize: "1.5rem",
      color: "#ffffff;",
    },
    profile: {
      display: "flex",
      flex: 1,
      alignItems: "start",
    },
    profile1: {
      display: "flex",
      alignItems: "center",
      width: "70%",
      "&:hover": {
        opacity: 0.8,
        transform: "scale(1.125)",
        cursor: "pointer",
      },
    },
    drivers: {
      flex: 1,
      alignItems: "start",
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
    treilers: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
    tractors: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
    adress: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
    board: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
    span: {
      fontWeight: "700",
      color: "white",
      paddingRight: "2%",
    },
  };
});

function UserFriendly() {
  const classes = useStyle();
  const navigate = useNavigate();
  const {USER,BOARDS,ADD_DRIVERS,ADD_TRACTORS,ADD_TRAILERS,MY_ADDRESS,LIST,TRAILERS,TRACTORS,DRIVERS} = paths;
  return (
    <div className={classes.main}>
      <span className={classes.tittle}>Axele Plan</span>
      <Hr></Hr>
      <span className={classes.span}>Profile</span>
      <div onClick={() => {
            navigate("/user")
        }} 
      className={classes.profile}>
        <Person2Icon /> <span> Profile</span>
      </div>
      <span className={classes.span}>Load Board</span>
      <div onClick={() => {
            navigate(BOARDS)
        }} className={classes.board}>
        <div>
          <FormatListBulletedIcon />
          <span>Find Load</span>
        </div>
      </div>
      <span className={classes.span}>My Drivers</span>
      <div className={classes.drivers}>
        <div onClick={() => {
            navigate(ADD_DRIVERS)
        }}>
          <FormatListBulletedIcon />
          <span>Add Drivers</span>
        </div>
        <div onClick={() => {
            navigate(DRIVERS)
        }}>
          <FormatListBulletedIcon />
          <span>Drivers</span>
        </div>
      </div>
      <span className={classes.span}>MY TRACTORS</span>
      <div  className={classes.tractors}>
        <div onClick={() => {
            navigate(ADD_TRACTORS)
        }}>
          <FormatListBulletedIcon />
          <span>Add Tractors</span>
        </div>
        <div onClick={() => {
            navigate(TRACTORS)
        }}>
          <FormatListBulletedIcon />
          <span>Tractors</span>
        </div>
      </div>
      <span className={classes.span}> MY TRAILERS</span>
      <div  className={classes.treilers}>
        <div onClick={() => {
            navigate(ADD_TRAILERS)
        }}>
          <FormatListBulletedIcon />
          <span>Add Trailers</span>
        </div>
        <div onClick={() => {
            navigate(TRAILERS)
        }}>
          <FormatListBulletedIcon />
          <span>Trailers</span>
        </div>
      </div>
      <span className={classes.span}> MY ADDRESS</span>
      <div  className={classes.adress}>
        <div onClick={() => {
            navigate(MY_ADDRESS)
        }}>
          <FormatListBulletedIcon />
          <span>Add Address</span>
        </div>
        <div onClick={() => {
            navigate(LIST)
        }}>
          <FormatListBulletedIcon />
          <span>List</span>
        </div>
      </div>
    </div>
  );
}

export default UserFriendly;
