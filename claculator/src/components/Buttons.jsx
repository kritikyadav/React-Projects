import styles from "./Buttons.module.css";

const Buttons = ({ buttonText, onButtonClick }) => {
  return (
    <button onClick={() => onButtonClick(buttonText)} className={styles.button}>
      {buttonText}
    </button>
  );
};

export default Buttons;
