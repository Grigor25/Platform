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
      height: "100vh",
      backgroundColor: "#455A64",
      color: "rgba(255, 255, 255, 0.8)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    tittle: {
      fontSize: "1.8rem",
      flex: '2',
      color: "#ffffff;",
      fontFamily: 'fantazy',
      alignItems: 'center',
      display: 'flex',
      margin: 'auto'
    },
    profile: {
      display: "flex",
      alignItems: "start",
    },
    drivers: {
      // flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
    treilers: {
      // flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      textAlign: "center",
      justifyContent: "space-between",
    },
    tractors: {
      // flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
    adress: {
      // flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
    board: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
    span: {
      fontWeight: "700",
      color: "white",
      paddingRight: "2%",
    },
    conteiner: {
      "&:hover": {
        opacity: 0.4,
        cursor: "pointer",
      },
      textAlign: "center",
      display: "flex",
    },
  };
});

function UserFriendly() {
  const classes = useStyle();
  const navigate = useNavigate();
  const {
    BOARDS,
    ADD_DRIVERS,
    ADD_TRACTORS,
    ADD_TRAILERS,
    MY_ADDRESS,
    LIST,
    TRAILERS,
    TRACTORS,
    DRIVERS,
  } = paths;
  return (
    <div className={classes.main}>
      <div className={classes.tittle}>
        Axele Plan
      </div>
      <Hr></Hr>
      <div
        style={{
          flex: 15,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginLeft: "5%",
        }}
      >
        <span className={classes.span}>Profile</span>
        <div
          onClick={() => {
            navigate("/user");
          }}
          className={classes.conteiner}
        >
          <Person2Icon /> <span> Profile</span>
        </div>
        <span className={classes.span}>Load Board</span>
        <div
          onClick={() => {
            navigate(BOARDS);
          }}
          className={classes.board}
        >
          <div className={classes.conteiner}>
            <FormatListBulletedIcon />
            <span> Find Load</span>
          </div>
        </div>
        <span className={classes.span}>My Drivers</span>
        <div className={classes.drivers}>
          <div
            className={classes.conteiner}
            onClick={() => {
              navigate(ADD_DRIVERS);
            }}
          >
            <FormatListBulletedIcon />
            <span>Add Drivers</span>
          </div>
          <div
            className={classes.conteiner}
            onClick={() => {
              navigate(DRIVERS);
            }}
          >
            <FormatListBulletedIcon />
            <span>Drivers</span>
          </div>
        </div>
        <span className={classes.span}>MY TRACTORS</span>
        <div className={classes.tractors}>
          <div
            className={classes.conteiner}
            onClick={() => {
              navigate(ADD_TRACTORS);
            }}
          >
            <FormatListBulletedIcon />
            <span>Add Tractors</span>
          </div>
          <div
            className={classes.conteiner}
            onClick={() => {
              navigate(TRACTORS);
            }}
          >
            <FormatListBulletedIcon />
            <span>Tractors</span>
          </div>
        </div>
        <span className={classes.span}> MY TRAILERS</span>
        <div className={classes.treilers}>
          <div
            className={classes.conteiner}
            onClick={() => {
              navigate(ADD_TRAILERS);
            }}
          >
            <FormatListBulletedIcon />
            <span>Add Trailers</span>
          </div>
          <div
            className={classes.conteiner}
            onClick={() => {
              navigate(TRAILERS);
            }}
          >
            <FormatListBulletedIcon />
            <span>Trailers</span>
          </div>
        </div>
        <span className={classes.span}> MY ADDRESS</span>
        <div className={classes.adress}>
          <div
            className={classes.conteiner}
            onClick={() => {
              navigate(MY_ADDRESS);
            }}
          >
            <FormatListBulletedIcon />
            <span>Add Address</span>
          </div>
          <div
            className={classes.conteiner}
            onClick={() => {
              navigate(LIST);
            }}
          >
            <FormatListBulletedIcon />
            <span>List</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserFriendly;
