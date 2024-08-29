import styles from "./Item.module.css"

const Item = (props) => {
    return <>
        <li className={`${styles.itemsCss} list-group-item ${props.bought && 'active'}`}>
            <span className={`${styles.itemsTextCss}`}>{props.fooditems}</span>
            <button onClick={props.BuyButtonClicked} className={`${styles.BuyButton} btn btn-info`}>Buy</button>
        </li>
    </>
}

export default Item; 
