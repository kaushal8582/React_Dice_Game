import React, { useState } from "react";
import { Score } from "./Score";
import { Number } from "./Number";
import { Dice } from "./Dice";
import { Rules } from "./Rules";

export const Dashboard = () => {
  const [hide,setHide] = useState(false)
  const [score, setScore] = useState(0);
  const [numberSelected, setNumberSelected] = useState(1);
  const [number, setNumber] = useState(1);
  const randomNumber = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  function generateRandom() {
    if (numberSelected != undefined) {
      let ranNumber = randomNumber();
      setNumber(ranNumber);
      if (numberSelected === ranNumber) {
        setScore((prev) => prev + ranNumber);
      } else {
        setScore((prev) => prev - 2);
      }
      setNumberSelected(undefined);
    }
    else{
      alert("plz select a number.")
    }
  }

  return (
    <>
      <div className="flex items-center justify-between px-16">
        <Score score={score} />
        <Number
          numberSelected={numberSelected}
          setNumberSelected={setNumberSelected}
        />
      </div>
      <Dice number={number} generateRandom={generateRandom} setScore ={setScore} setHide={setHide} />
      {hide===false?"":<Rules/>}
    </>
  );
};
