import { createUseStyles } from "react-jss"
import { Route, Routes } from "react-router-dom";
import paths from "../../constants/paths";
import AddDrivers from "./AddDrivers";
import AddTractors from "./AddTractors";
import AddTrailers from "./AddTrailers";
import Boards from "./Boards";
import Drivers from "./Drivers";
import List from "./List";
import MyAdress from "./MyAdress";
import Tractors from "./Tractors";
import Trailers from "./Trailers";
import UserFriendly from "./UserFriendly";
import UserProfile from "./UserProfile";
import WorkSpace from "./WorkSpace";

const useStyle =createUseStyles(() => {
    return {
        main: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'row'
        }
    }
})

function Main(){
    const classes = useStyle();
    const {ADD_DRIVERS,ADD_TRACTORS,ADD_TRAILERS,BOARDS,DRIVERS,LIST,MY_ADDRESS,TRACTORS,TRAILERS} = paths;
    return <div className={classes.main}>
        <UserFriendly />
        <Routes>
            <Route path="/" element={<WorkSpace><UserProfile /></WorkSpace>}/>
            <Route path={ADD_DRIVERS} element={<WorkSpace><AddDrivers /></WorkSpace>}/>
            <Route path={ADD_TRACTORS} element={<WorkSpace><AddTractors /></WorkSpace>}/>
            <Route path={ADD_TRAILERS} element={<WorkSpace><AddTrailers /></WorkSpace>}/>
            <Route path={TRAILERS} element={<WorkSpace><Trailers /></WorkSpace>}/>
            <Route path={BOARDS} element={<WorkSpace><Boards /></WorkSpace>}/>
            <Route path={DRIVERS} element={<WorkSpace><Drivers /></WorkSpace>}/>
            <Route path={LIST} element={<WorkSpace><List /></WorkSpace>}/>
            <Route path={MY_ADDRESS} element={<WorkSpace><MyAdress /></WorkSpace>}/>
            <Route path={TRACTORS}element={<WorkSpace><Tractors /></WorkSpace>}/>
        </Routes>
        
    </div>
}

export default Main