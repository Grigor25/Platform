import {createUseStyles} from 'react-jss'
import Auth from './navbtns/Auth'
import NavBtns from './navbtns/NavBtns'
import image1 from "../../images/header-image.png"



const useStyles = createUseStyles(() => {
    return {
        head: {
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            background: `linear-gradient(to right, #030491
                ,#4782fb)`
        }
    }
})

function HomePage(params) {
    const classes = useStyles()
    return <div className={classes.head}> 
    <NavBtns />
    <div style={{ display: 'flex',height: '80%',justifyContent: 'space-around',marginTop: '4%'}}>
    <Auth />
    <div style={{backgroundImage: `url("${image1}")`,height: "90%",width: '30%',backgroundSize: '100% 100%'}}>
</div>
</div>
    </div>
}

export default HomePage