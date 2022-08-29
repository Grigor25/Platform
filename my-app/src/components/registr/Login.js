

const login =  (data,setId) => {
    fetch("http://10.20.8.158:5002/api/v2/accounts/login", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        
      })
      return data
  };
  
  export default login
  