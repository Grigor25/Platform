
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
    btns: {
      display: "flex",
      justifyContent: "space-between",
    },
    tittle: {
      fontFamily: "cursive",
      fontSize: 30,
    },
  };
});

function AddTrailers() {
  const classes = useStyles();
  const [trailername, setTrailerName] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [year, setYear] = useState("");

  const user = useContext(UserAuth);

  const addTrailer = (data) => {
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
      <div className={classes.btns}>
        <TextField
          id="Trailer Name          "
          label="Trailer Name
          "
          style={{ width: "30%" }}
          type="text"
          value={trailername}
          onChange={(e) => setTrailerName(e.target.value)}
        />
        <TextField
          id="Make"
          label="Make"
          style={{ width: "30%" }}
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />
        <TextField
          id="Model"
          label="Model"
          style={{ width: "30%" }}
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </div>
      <div style={{display: 'flex',justifyContent: 'space-around'}}>
      <TextField
        id="password1"
        label="Vin"
        style={{width: '30%'}}
        type="Vin"
        value={vin}
        onChange={(e) => setVin(e.target.value)}
      />
      <TextField
        id="email1"
        label="Year"
        style={{ width: "30%" }}
        type="year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      </div>
      <Button
        onClick={() => {
            addTrailer({
            id: user?.account.id,
            dot: user?.account.id,
            vin: vin,
            name: trailername,
            make: make,
            model: model,
            year: year,
            status: "Available",
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

export default AddTrailers;
