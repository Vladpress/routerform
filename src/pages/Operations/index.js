import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./choose.scss";

function Operations() {
  const [chek, setChek] = useState(true);

  const navigate = useNavigate();
  const onChangeHandle = (e) => {
    console.log("e.target.checked", e.target.checked);
    setChek(!chek);
  };

  return (
    <div className="operations">
      <div className="operations__wrap operations__wrap1">
        <input type="radio" name="checkbox" id="date" />
        <label htmlFor="date">Check date</label>
        <input type="radio" name="checkbox" id="balance" />
        <label htmlFor="balance">Check balance</label>
        <input type="radio" name="checkbox" id="transactiion" />
        <label htmlFor="transactiion">Transaction</label>
      </div>
      <div className="operations__wrap">
        <button
          className="greetting__submit greetting__hint"
          onClick={() => {
            chek && navigate("/");
          }}
          type="button"
        >
          Cancel
        </button>
        <button
          className="greetting__submit"
          onClick={() => {
            if (chek) navigate("/form");
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
}

export default Operations;
