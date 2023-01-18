import React, { useState } from "react";
import axios from "axios";

function BitcoinToEuro() {
  const [btcAmount, setBtcAmount] = useState(0);
  const [eurAmount, setEurAmount] = useState(0);

  const handleChange = (event) => {
    setBtcAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=BITCOIN&vs_currencies=EUR"
      )
      .then((response) => {
        setEurAmount(response.data.bitcoin.eur * btcAmount);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // <div>
    //   <form onSubmit={handleSubmit} className="calculator">
    //     <div class="btc-logo"></div>
    //     <label>
    //       Bitcoin Amount:
    //       <input
    //         type="number"
    //         value={btcAmount}
    //         onChange={handleChange}
    //         id="btc-input"
    //       />
    //     </label>
    //     <button type="submit">Convert</button>
    //   </form>

    //   <div class="result" id="result">
    //     {" "}
    //     {eurAmount ? <p>{eurAmount} EUR</p> : null}
    //   </div>
    // </div>

    <div class="calculator">
      <div class="btc-logo"></div>
      <div  className="input-container">
      <form onSubmit={handleSubmit}> 
          <input
            type="number"
            value={btcAmount}
            onChange={handleChange}
            id="btc-input"
          />
        <div class="convert-container">
          <button type="submit">Convert</button>
        </div>
      </form>
      </div>
      <div class="result-container">
        <div class="result" id="result">
          {" "}
          {eurAmount ? <p>{eurAmount} EUR</p> : null}
        </div>
      </div>
    </div>
  );
}

export default BitcoinToEuro;
