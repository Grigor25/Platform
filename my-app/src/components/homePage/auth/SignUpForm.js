import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import Diamond from "../navbtns/Diamond";
import register from "../../registr/Register";
import paths from "../../../constants/paths";

const useStyles = createUseStyles(() => {
  return {
    form: {
      height: "90vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    },
    icon: {
      marginTop: "5%",
      display: 'flex',
      alignItems: 'center'
    },
  };
});

function SignUpForm(params) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [dot, setDot] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const { SING_IN } = paths;

  return (
    <div className={classes.form}>
      <div className={classes.icon}>
      <span style={{fontFamily: 'fantazy',fontSize: 30}}>Create Your Free Account</span>
        <Diamond />
      </div>
      <div>
        
        <span>Already have an account?   </span>
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate(`/${SING_IN}`)}
        >
          Login
        </span>
      </div>

      <TextField
        id="dot"
        label="DOT"
        type="text"
        style={{ width: "60%" }}
        value={dot}
        onChange={(e) => setDot(e.target.value)}
      />
      <TextField
        id="name"
        label="Your Name"
        type="text"
        style={{ width: "60%" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="oragnization"
        label="Organization Name"
        type="text"
        style={{ width: "60%" }}
        value={organization}
        onChange={(e) => setOrganization(e.target.value)}
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
        type="password"
        style={{ width: "60%" }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        id="confirm"
        label="Confirm"
        type="password"
        style={{ width: "60%" }}
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <Button
        onClick={() => {
          register({
            organizationName: organization,
            email: email,
            password: password,
            name: name,
            dot: dot,
          });
          navigate("/signin");
        }}
        variant="contained"
      >
        Sign Up
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
export default SignUpForm;
