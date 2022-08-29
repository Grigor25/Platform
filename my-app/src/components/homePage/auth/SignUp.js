import { createUseStyles } from "react-jss";
import SignUpForm from "./SignUpForm";

const useStyle = createUseStyles(() => {
  return {
    main: {
      height: "100vh",
      display: "flex",
    },
    leftPart: {
      flex: 3,
    },
    rightPart: {
      backgroundColor: "blue",
      flex: 7,
    },
  };
});

function SignUp(params) {
  const classes = useStyle();
  return (
    <div className={classes.main}>
      <div className={classes.leftPart}>
        <SignUpForm />
      </div>
      <div className={classes.rightPart}></div>
    </div>
  );
}
export default SignUp;
