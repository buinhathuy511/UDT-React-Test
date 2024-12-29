import React from 'react'
import "../styles/calculator.scss";

const CalculatorHeader = () => {
  return (
    <div className='calculator-header'>
        <button className='red'></button>
        <button className='yellow'></button>
        <button className='green'></button>
    </div>
  )
}

export default CalculatorHeader