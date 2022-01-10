import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import userContext from "./context";

function Main() {
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUserInfo(user);
      }
    } catch (e) {
      console.log(e); // передать объект исключения обработчику ошибок
    }
  }, []);

  return (
    <React.StrictMode>
      <userContext.Provider value={{ userInfo, setUserInfo }}>
        <App />
      </userContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
