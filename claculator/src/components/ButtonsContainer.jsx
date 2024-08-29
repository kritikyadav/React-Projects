import Buttons from './Buttons';
import styles from './ButtonsContainer.module.css';

const ButtonsContainer = ({ onButtonClick }) => {
    const buttonsNames = ['C', '+', '-', '*', '0', '9', '.', '/', '5', '6', '7', '8', '1', '2', '3', '4', '='];
    return (
        <div key='ButtonContainer' className={styles.buttonContainer}>
            {buttonsNames.map((item) => (
                <Buttons onButtonClick={onButtonClick} key={item} buttonText={item} />
            ))}
        </div>
    );
};

export default ButtonsContainer;
