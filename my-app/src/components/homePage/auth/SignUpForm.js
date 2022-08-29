import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import Diamond from "../navbtns/Diamond";
import register from "../../registr/Register";

const useStyles = createUseStyles(() => {
  return {
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: 'space-around'
    },
  };
});

function SignUpForm(params) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [dot,setDot] = useState('');
  const [name,setName] = useState('');
  const [organization,setOrganization] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirm,setConfirm] = useState('');

  return (
    <div className={classes.form}>
      <Diamond></Diamond>
      <div>
        <span>Create Your Free Account</span>
        <span>Already have an account?</span>
        <a>Login</a>
      </div>

      <TextField
        id="dot"
        label="DOT"
        type="text"
        value={dot}
        onChange={(e) => setDot(e.target.value)}
      />
      <TextField
        id="name"
        label="Your Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}

      />
      <TextField
        id="oragnization"
        label="Organization Name"
        type="text"
       value={organization}
       onChange={(e) => setOrganization(e.target.value)}

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
      <TextField
        id="confirm"
        label="Confirm"
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <Button onClick={() => {
        register({
            organizationName: organization,
            email: email,
            password: password,
            name: name,
            dot: dot
          })
        navigate("/signin")
      }} variant="contained">Sign Up</Button>
            <span>Main Page</span><span style={{color: 'blue',cursor: 'pointer'}} onClick={() => navigate('/')}>Click Me</span>

    </div>
  );
}
export default SignUpForm;
