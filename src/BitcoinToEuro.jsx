import React, { useState } from "react";
import axios from "axios";
import Crypto from "./img/btntoeuro3.png";

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
    //     <div className="btc-logo"></div>
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

    //   <div className="result" id="result">
    //     {" "}
    //     {eurAmount ? <p>{eurAmount} EUR</p> : null}
    //   </div>
    // </div>

    <div className="Crypto__Calculator">
      <div className="Crypto__Wrapper">
        <div className="Crypto__Input">
          <form onSubmit={handleSubmit}>
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="BTC to EURO"
                name="btc-input"
                value={btcAmount}
                onChange={handleChange}
                id="btc-input"
                required
              />
              <label
                htmlFor="name"
                className="form__label"
                data-text="BTC to EURO"
              >
                BTC to EURO
              </label>
            </div>
            <div className="convert-container">
              <button type="submit">Convert</button>
            </div>
          </form>
        </div>
        <div className="Crypto__Result">
          <div className="result" id="result">
            {" "}
            {eurAmount ? <p>{eurAmount} EUR</p> : null}
          </div>
        </div>
      </div>

      <div className="Crypto__Bg">
        <img src={Crypto} alt="" />
      </div>
    </div>
  );
}

export default BitcoinToEuro;
