import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'

function App() {

  const [calValue , setCalValue] = useState('');

  const onButtonClick = (buttonText) => {
    // console.log(event.target.innerText);
    console.log(buttonText);
    // Example: Update state with button text (if needed)
    if(buttonText === 'C'){
      setCalValue('');
    }else if(buttonText === '='){
      let result = eval(calValue);
      setCalValue(result);
    }else{
      setCalValue((prevValue) => prevValue + buttonText);
    }
  }

  return (
    <>
      <div className={`${styles.calculator}`} >
        <Display calValue={calValue}></Display>
        <ButtonsContainer onButtonClick={onButtonClick} ></ButtonsContainer>
      </div>
    </>
  )
}

export default App
