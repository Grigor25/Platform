import { createUseStyles } from "react-jss"

const useStyle = createUseStyles(() => {
    return {
        hr: {
            width: '80%'
        }
    }
})

function Hr(params) {
    const classes = useStyle();
    return <hr className={classes.hr}></hr>
}
export default Hr