import { Button, TextField } from "@mui/material";
import { createUseStyles } from "react-jss";
import { Link, useNavigate } from "react-router-dom";
import Diamond from "../navbtns/Diamond";
import { useEffect, useState } from "react";

const useStyles = createUseStyles(() => {
  return {
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
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
  const {user} = props;

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
        user(data)
      });
    return data;
  };
  useEffect(() => {
    if (!!id) {
      localStorage.setItem('useId', id)
      navigate("/user");
    } else {
      navigate("/signin");
    }
  }, [id]);


  return (
    <div className={classes.form}>
      <Diamond />
      <div>
        <span>Sign in</span>
        <span>Do not have an account?</span>
        <a>SignUp</a>
      </div>

      <TextField
        id="dot"
        label="DOT"
        type="text"
        value={dot}
        onChange={(e) => setDot(e.target.value)}
      />
      <TextField
        id="email"
        label="E-mail"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="password"
        label="Password"
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
      <span>Main Page</span>
      <span
        style={{ color: "blue", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Click Me
      </span>
    </div>
  );
}
export default SignInForm;
