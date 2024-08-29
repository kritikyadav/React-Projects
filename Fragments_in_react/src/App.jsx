import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';

function App() {

  // let [fooditems, setFoodItems] = useState([]);
  let [fooditems, setFoodItems] = useState(
    [
      'AVOCADO', 'BLUEBERRIES', 'ALMONDS'
    ]
  )

  /**
   * This code snippet would typically be used within a functional React component to manage the state of a text input field. 
   * The state is initially set to a default string and can be updated based on user input, with the updated value displayed or used elsewhere in the component.
   * 
   * useState is a React hook that initializes state in a functional component.
   * It returns an array with two elements:
   * The first element (arrtextState[0]) is the current state value.
   * The second element (arrtextState[1]) is a function to update the state.
   * In this case, arrtextState is initialized with the string 'Food item entered by user.
   */
  // let arrtextState = useState('Food item entered by user.');
  // let textStateValue = arrtextState[0];
  // let setTextStateValue = arrtextState[1];
  // let texttoshow = textStateValue;

  /**
   * textStateValue is assigned the current state value. 
   * setTextStateValue is the function used to update the state.
   * texttoshow is assigned the current state value. This variable could be used in the component's render to display the state.
  */
  const handleOnKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (event.target.value) {
        let newFoodItem = event.target.value;
        let newItems = [...fooditems, newFoodItem];
        setFoodItems(newItems);
      }
    }
  }

  const handleOnClick = () => {
    if ( event.srcElement.previousSibling.value != '') {
      let newFoodItem = event.srcElement.previousSibling.value;
      let newItems = [...fooditems, newFoodItem];
      setFoodItems(newItems);
    }
  }


  return (
    <>
      <Container>
        <h1 className='foodHeading'>Healthy Food</h1>
        <FoodInput
          handleOnKeyDown={handleOnKeyDown}
          handleOnClick={handleOnClick}>
        </FoodInput>
        <ErrorMessage fooditems={fooditems}></ErrorMessage>
        {/* <p>{texttoshow}</p> */}
        <FoodItems fooditems={fooditems}></FoodItems>
      </Container>

      {/* <Container>
        <p>Above is the list of healthy food which will make you healthy and strong. </p>
      </Container> */}
    </>
  )
}

export default App
