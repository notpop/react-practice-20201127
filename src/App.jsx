/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [number, setNumber] = useState(0);
  const onClickCountUp = () => {
    setNumber(number + 1);
  };

  const [faceShowFlg, setFaceShowFlg] = useState(false);
  const onClickSwitchShowFlg = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    if (number % 3 === 0) {
      faceShowFlg || setFaceShowFlg(true);
    } else {
      faceShowFlg && setFaceShowFlg(false);
    }
  }, [number]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello World!!</h1>
      <ColorfulMessage color="blue" message="TK" />
      <ColorfulMessage color="green" message="KT" />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickSwitchShowFlg}>オン/オフ</button>
      <p>{number}</p>
      {faceShowFlg && <p>( ^ω^ )</p>}
    </>
  );
};

export default App;
