import { Button, TextField } from "@mui/material";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import Diamond from "../navbtns/Diamond";
import { useEffect, useState } from "react";
import paths from "../../../constants/paths";

const useStyles = createUseStyles(() => {
  return {
    form: {
      height: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    },
    icon: {
      fontSize: "40px",
      marginTop: "5%",
      alignItems: 'center'
    },
  };
});

function SignInForm(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [dot, setDot] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const { user } = props;
  const { SIGN_UP, SING_IN, USER } = paths;

  const login = (data) => {
    fetch("http://10.20.8.158:5002/api/v2/accounts/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setId(data.account.id);
        user(data);
      });
    return data;
  };
  useEffect(() => {
    if (!!id) {
      localStorage.setItem("useId", id);
      navigate(`/user`);
    } else {
      navigate(`/${SING_IN}`);
    }
  }, [id,USER,navigate,SING_IN]);

  return (
    <div className={classes.form}>
      <div className={classes.icon}>
      <span style={{fontFamily: 'fantazy'}}>Sign in</span>

        <Diamond />
      </div>
      <div>
        <span>Do not have an account? </span>
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate(`/${SIGN_UP}`)}
        >
          {" "}
          SignUp
        </span>
      </div>

      <TextField
        id="dot"
        label="DOT"
        style={{ width: "60%" }}
        type="text"
        value={dot}
        onChange={(e) => setDot(e.target.value)}
      />
      <TextField
        id="email"
        label="E-mail"
        style={{ width: "60%" }}
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="password"
        label="Password"
        style={{ width: "60%" }}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={async () => {
          await login({
            dot: dot,
            email: email,
            password: password,
          });
        }}
        variant="contained"
      >
        Sign In
      </Button>
      <span
        style={{ color: "blue", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Home Page
      </span>
    </div>
  );
}
export default SignInForm;
