import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { createUseStyles } from "react-jss";
import UserAuth from "../../context/AuthContext";
import SendIcon from "@mui/icons-material/Send";

// const login = (data, setId) => {
//   fetch("http://10.20.8.158:5002/api/v2/accounts/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Success:", data);
//     });
//   return data;
// };

const useStyle = createUseStyles(() => {
  return {
    main: {
      display: "flex",
      marginLeft: "5%",
      flexDirection: "column",
      width: "30%",
      height: "60%",
      justifyContent: "space-between",
    },
  };
});
const saveData = (data, setPhone, setZoom) => {
  fetch("http://10.20.8.158:5002/api/v2/accounts/user/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      setPhone("");
      setZoom("");
    });
};

function UserProfile() {
  const user = useContext(UserAuth);
  const classes = useStyle();
  const [phone, setPhone] = useState("");
  const [zoom, setZoom] = useState("");
  return (
    <div className={classes.main}>
      <h1 style={{fontFamily: "cursive"}}>Profile</h1>
      <div>
        <span style={{ fontFamily: "cursive", fontWeight: 900, fontSize: 20 }}>
          Organization:
        </span>
        {user?.account?.organizationName}
      </div>
      <div>
        <span style={{ fontFamily: "cursive", fontWeight: 900, fontSize: 20 }}>
          Account type:
        </span>
        {user?.account?.accountType}
      </div>
      <div>
        <span style={{ fontFamily: "cursive", fontWeight: 900, fontSize: 20 }}>
          E-mail:
        </span>
        {user?.account?.email}
      </div>
      <span style={{ fontFamily: "cursive", fontWeight: 900 }}>Phone*</span>
      <input
      style={{height: "10%"}}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      ></input>
      <span style={{ fontFamily: "cursive", fontWeight: 900 }}>Phone*</span>{" "}
      <input
        value={zoom}
        style={{height: "10%"}}
        onChange={(e) => setZoom(e.target.value)}
        placeholder="Zoom"
      ></input>
      <Button
        onClick={() =>
          saveData(
            {
              id: user?.account.id,
              dot: user?.account.dot,
              name: user?.account.name,
              organizationId: user?.account.id,
              organizationName: user.organizationName,
              email: user?.account.email,
              phone: phone,
              zoom: zoom,
              timezone: user?.account.id,
              accountType: user?.account.accountType,
              lastLoginDate: "2022-08-29T12:57:07.615Z",
              status: "string",
            },
            setPhone,
            setZoom
          )
        }
        variant="contained"
        style={{width: '40%'}}
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </div>
  );
}

export default UserProfile;
