import styles from "./ButtonMap.module.css";

const cal = [
  "C",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",
];
function ButtonMap({ displayButton }) {
  return (
    <>
      {cal.map((x) => (
        <button
          key={x}
          className={styles.button}
          value={x}
          onClick={() => displayButton(x)}
        >
          {x}
        </button>
      ))}
    </>
  );
}

export default ButtonMap;
