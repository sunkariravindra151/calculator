import styles from "./App.module.css";
import ButtonMap from "./ButtonMap";
import { useState } from "react";
function App() {
  let [cal, setcal] = useState("");
  let handleButtonClick = (value) => {
    if (value === "C") {
      setcal("");
    } else if (value === "=") {
      setcal(eval(cal));
    } else {
      setcal(cal + value);
    }
  };
  return (
    <>
      <center>
        <div className={styles.calculator}>
          <input type="text" className={styles.input} value={cal} readOnly />
          <div className={styles.container}>
            <ButtonMap displayButton={handleButtonClick}></ButtonMap>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
