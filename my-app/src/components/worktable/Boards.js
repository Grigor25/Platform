import { Button } from "@mui/material";
import { createUseStyles } from "react-jss";
import SendIcon from '@mui/icons-material/Send';
import StickyHeadTable from "./BorderTable";
import { useEffect, useState } from "react";


const useStyles = createUseStyles(() => {
    return {
        main: {
           
        },
        card: {
            marginLeft: '3%',
            marginTop: '3%',
            height: '800px',
            width: "90%",
            border: '1px solid white'
        }
    }
})

function Boards(){
    const classes = useStyles();
    const [rows,setRows] = useState([]);
    const loadBoards = () => {
     fetch("http://10.20.8.158:5002/api/v2/loads/search/random")
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setRows(data.loads)
      });
    }
    useEffect(() => {
        loadBoards()
    },[])

    return <div className={classes.main}>
    <div className={classes.card}>
        <h1 style={{fontFamily: 'cursive'}}>Find Loads</h1>
        <Button variant="contained" endIcon={<SendIcon />}>
        Reflesh
      </Button>
      <StickyHeadTable rows={rows}/>
        </div></div>
}

export default Boards
