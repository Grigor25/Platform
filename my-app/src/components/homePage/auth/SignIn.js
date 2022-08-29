import { createUseStyles } from "react-jss"
import SignInForm from "./SignInForm";

const useStyle = createUseStyles(() => {
    return {
        main: {
            height: '100vh',
            display: 'flex'
        },
        leftPart: {
            flex: 3
        },
        rightPart: {
            backgroundColor: 'blue',
            flex: 7
        }
    }
})



function SignIn(props) {
    const classes = useStyle();
    return <div className={classes.main}>
        <div className={classes.leftPart}>
            <SignInForm token={props.user}/>
        </div>
        <div className={classes.rightPart}></div>
    </div>
}
export default SignIn