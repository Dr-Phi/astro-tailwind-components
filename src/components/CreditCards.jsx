import { useState } from "react";
import { useStore } from "@nanostores/react";
import { cvcStore } from "../stores/storeCard";
import "./creditcardStyles.css";

export default function CreditCards() {
  const cvc = useStore(cvcStore);
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  return (
    <div className="mainComponent">
      {/* <p>yes</p>
      <div id="front-card">
        <p>{cardNumber}</p>
        <div className="flex justify-between">
          <p>{cardHolder}</p>
          <p>
            {month}/{year}
          </p>
        </div>
      </div> */}
      <form>
        <label>CARDHOLDER NAME</label>
        <input
          type="text"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          placeholder="e.g. John Smith"
        />

        <label>CARD NUMBER</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="e.g. 1234 5678 9123 000"
        />
        <div className="flex ">
          <label>EXP. DATE (MM/YY)</label>
          <label>CVC</label>
        </div>
        <div className="flex flex-row gap-1">
          <input
            type="text"
            maxLength="2"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="basis-1/4"
            placeholder="MM"
          />
          <input
            type="text"
            maxLength="2"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="basis-1/4"
            placeholder="YY"
          />

          <input
            type="text"
            maxLength="3"
            onChange={(e) => cvcStore.set(e.target.value)}
            className="basis-1/2"
            placeholder="e.g. 123"
          />
        </div>

        <button id="cardBtn">Confirm</button>
      </form>
    </div>
  );
}
