
import './App.css';
import HomePage from './components/homePage/HomePage';
import {  Routes, Route, useNavigate } from "react-router-dom";
import SignIn from './components/homePage/auth/SignIn';
import SignUp from './components/homePage/auth/SignUp';
import Main from './components/worktable/Main';
import UserAuth from "./context/AuthContext";
import { useEffect, useState } from 'react';
import paths from './constants/paths';




function App() {
  const [value,setValue] = useState("");
  // const [data,setData] = useState({});
  const {HOME,SIGN_UP,SING_IN,USER} = paths;
  const navigate = useNavigate();


  useEffect(() => {
    const check = localStorage.getItem("useId");
   
     if(!!check){
      fetch(`http://10.20.8.158:5002/api/v2/accounts/user/using/id?userId=${localStorage.getItem("useId")}`)
      .then((response) => response.json())
      .then((data) => {
        setValue(data);
      });
     }else{
      // navigate("/")
     }
  },[]) 

  return (
    <div >
      <UserAuth.Provider value={value}>
      <Routes>
      <Route path={HOME} element={<HomePage />} exact/>
      <Route path={SING_IN} element={<SignIn user={setValue}/>} />
      <Route path={SIGN_UP} element={<SignUp />} />
      <Route path={USER} element={<Main />} />
      </Routes>
      </UserAuth.Provider>
    </div>
  );
}

export default App;
