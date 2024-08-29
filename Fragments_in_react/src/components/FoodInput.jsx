import styles from './FoodInput.module.css'

const FoodInput = ({handleOnKeyDown , handleOnClick}) => {

    return <>
        <div>
            <input onKeyDown={handleOnKeyDown} id='inputFoodItems' type="text" placeholder="Enter Food Item"  className={`${styles.InputFood}`}/>
            <button onClick={handleOnClick} className={`${styles.AddFoodButton}`}>Add</button>
        </div>
    </>
}

export default FoodInput; 
