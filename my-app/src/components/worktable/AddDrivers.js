import { Button, Input, TextField } from "@mui/material";
import { createUseStyles } from "react-jss";
import SendIcon from "@mui/icons-material/Send";
import { useContext, useState } from "react";
import UserAuth from "../../context/AuthContext";

const useStyles = createUseStyles(() => {
  return {
    main: {
      height: "50%",
      width: "60%",
      border: "1px solid black",
      marginLeft: "2%",
      marginTop: "2%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    btns: {
      display: "flex",
      justifyContent: "space-between",
    },
    tittle: {
      fontFamily: "fantasy",
      fontSize: 30,
    },
  };
});

function AddDrivers() {
  const classes = useStyles();
  const [driver, setDriver] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(UserAuth);


  const addDriver = (data) => {
    fetch("http://10.20.8.158:5002/api/v2/accounts/add/driver", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setDriver('');
        setPhone('');
        setPhone('');
        setPassword('');
      });
  };

  return (
    <div className={classes.main}>
      <span className={classes.tittle}>Add Drivers</span>
      <div className={classes.btns}>
        <TextField
          id="driver"
          label="Driver Name"
          type="text"
          value={driver}
          onChange={(e) => setDriver(e.target.value)}
        />
        <TextField
          id="email1"
          label="E-mail"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="phone"
          label="Phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <TextField
        style={{ width: "28%" }}
        id="password1"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={() => {
          addDriver({
            email: email,
            password: password,
            name: driver,
            dot: user?.account.dot,
            phone: phone,
            organizationId: user?.account.organizationId,
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

export default AddDrivers;
