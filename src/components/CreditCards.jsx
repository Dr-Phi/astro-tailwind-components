import { useState } from "react";
import { useStore } from "@nanostores/react";
import {
  cvcStore,
  cardNumStore,
  cardHolderStore,
  cardMonthStore,
  cardYearStore,
} from "../stores/storeCard";
import "./creditcardStyles.css";

export default function CreditCards() {
  const [isHidden, setIsHidden] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    cardNumStore.set("0000 0000 0000 0000");
    cardMonthStore.set("11");
    cardYearStore.set("11");
    cardHolderStore.set("SUCCESS!");
    cvcStore.set("***");
    setIsHidden(!isHidden);
  };
  return (
    <div className="mainComponent">
      <form className={isHidden ? "hidden" : ""}>
        <label>CARDHOLDER NAME</label>
        <input
          type="text"
          maxLength="29"
          onChange={(e) => {
            const text = e.target.value.toUpperCase();
            cardHolderStore.set(text);
          }}
          placeholder="e.g. John Smith"
        />

        <label>CARD NUMBER</label>
        <input
          type="text"
          maxLength="19"
          onChange={(e) => cardNumStore.set(e.target.value)}
          placeholder="e.g. 1234 5678 9123 000"
        />
        <div className="flex flex-row">
          <div className="basis-[60%]">
            <label>EXP. DATE (MM/YY)</label>
            <div className="flex flex-row gap-1">
              <input
                type="text"
                maxLength="2"
                onChange={(e) => cardMonthStore.set(e.target.value)}
                className="basis-[40%]"
                placeholder="MM"
              />
              <input
                type="text"
                maxLength="2"
                onChange={(e) => cardYearStore.set(e.target.value)}
                className="basis-[40%]"
                placeholder="YY"
              />
            </div>
          </div>
          <div className="inline-block basis-[40%]">
            <label className="">CVC</label>
            <input
              type="text"
              maxLength="3"
              onChange={(e) => cvcStore.set(e.target.value)}
              className="basis-1/2"
              placeholder="e.g. 123"
            />
          </div>
        </div>
      </form>
      <div id="card-success" className={isHidden ? "" : "hidden"}>
        <div id="icon-complete"></div>
        <h4 className="text-[#21082f] text-3xl text-center tracking-wide">
          THANK YOU!
        </h4>
        <p className="text-slate-500 my-4 text-center text-lg">
          We've added your card details
        </p>
      </div>
      <button id="cardBtn" onClick={handleSubmit} className="custom-gradient">
        {isHidden ? "Continue" : "Confirm"}
      </button>
    </div>
  );
}
