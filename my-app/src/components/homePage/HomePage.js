import {createUseStyles} from 'react-jss'
import Auth from './navbtns/Auth'
import NavBtns from './navbtns/NavBtns'


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
    <Auth />
    </div>
}

export default HomePage