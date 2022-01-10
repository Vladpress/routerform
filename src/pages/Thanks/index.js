import React, { useContext } from "react";
//Context
import userContext from "../../context";
import "./thanks.scss";

const Thanks = () => {
  //Context
  const { userInfo, setUserInfo } = useContext(userContext);
  const random = Math.floor(Math.random() * 100);

  return (
    <div className="thanks">
      <div
        className={`thanks__box ${
          random < 50 ? "thanks__box-compleeted" : "thanks__box-declined"
        }`}
      >
        <h1 onClick={() => setUserInfo(1 + userInfo)} className="thanks__h1">
          {random < 50 ? "Transaction compleeted!" : "Transaction declined!"}
         
        </h1>
        <p className="thanks__main-text">
          {`            
            You will receive an invoice for the name of the ${userInfo.lastName + " " + userInfo.name + " " + userInfo.patronymic} by ${userInfo.email} in the amount of ${userInfo.sum}
          `}
        </p>
      </div>
    </div>
  );
};

export default Thanks;
