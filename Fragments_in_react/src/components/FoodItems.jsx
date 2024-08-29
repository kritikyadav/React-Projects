import { act, useState } from "react";
import Item from "./Item";

const FoodItems = ({ fooditems }) => {

    let [activeItems, setActiveItems] = useState([])
    const BuyButtonClicked = (item, event) => {
        if (!activeItems.includes(item)) {
            let newItems = [...activeItems, item];
            setActiveItems(newItems);
        } else {
            let myArray = [...activeItems];
            let index = myArray.indexOf(item);
            myArray.splice(index, 1);
            let newMyArray = myArray; 
            setActiveItems(newMyArray);
        }
    }

    return <>
        <ul className="list-group">
            {
                fooditems.map((item) => (
                    <Item
                        key={item}
                        id={item}
                        fooditems={item}
                        bought={activeItems.includes(item)}
                        BuyButtonClicked={(event) => BuyButtonClicked(item, event)} >
                    </Item>
                ))
            }
        </ul>
    </>
};

export default FoodItems; 
