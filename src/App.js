import React, { useMemo, useState } from 'react';
import './App.css';

const App = () => {
  
  const [weight,setWeight] = React.useState(50);
  const [height,setHeight] = React.useState(180);
  
  function onWeightChange(event){
    setWeight(event.target.value);
  }
  function onHeightChange(event){
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    return bmi;
  }, [weight, height]);

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight : {weight} Kg</p>
        <input type='range' min='40' max='200' step='1' className='slider-input' onChange={onWeightChange} />
        <p className='slider-output'>Height : {height} cm </p>
        <input type='range' min='130' max='220' step='1' className='slider-input' onChange={onHeightChange}/>
      </div>
      <div className='output-section'>
        <p>Your BMI </p>
        <p className='ouput'>{output}</p>
        <p className="category">{getBMICategory(output)}</p>
      </div>
    </div>
  )
}

export default App
