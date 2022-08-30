import { Button, TextField } from "@mui/material";
import { createUseStyles } from "react-jss";
import SendIcon from "@mui/icons-material/Send";
import { useContext, useState } from "react";
import UserAuth from "../../context/AuthContext";

const useStyles = createUseStyles(() => {
  return {
    main: {
      height: "50%",
      width: "60%",
      marginLeft: "2%",
      marginTop: "2%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    tittle: {
      fontFamily: "cursive",
      fontSize: 30,
    },
  };
});

function MyAdress() {
  const classes = useStyles();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const user = useContext(UserAuth);

  const addAddress = (data) => {
    fetch("http://10.20.8.158:5002/api/v2/trailers/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
  };

  return (
    <div className={classes.main}>
      <span className={classes.tittle}>Add Drivers</span>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <TextField
          id="password1"
          label="City"
          style={{ width: "30%" }}
          type="Vin"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          id="email1"
          label="State"
          style={{ width: "30%" }}
          type="year"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <Button
        onClick={() => {
          addAddress({
            id: user?.account.id,
            city: city,
            state: state,
            lat: 0,
            lng: 0,
          });
        }}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </div>
  );
}

export default MyAdress;
