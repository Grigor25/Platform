import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(() => {
  return {
    main: {
      flex: 6,
      backgroundColor: "white",
      height: "100vh",
      overflowY: 'scroll'
    },
    navbar:{
        height: '10%',
        backgroundColor: 'red'
    }
  };
});

function WorkSpace({ children }) {
  const classes = useStyle();
  return <div className={classes.main}>
    <div className={classes.navbar}></div>
    {children}</div>;
}

export default WorkSpace;
