import { useState } from 'react';
import './App.css';
import Statistics from '../components/Statistics';
import Button from '../components/Button';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <>
      <h1>Give feedback</h1>
      <div className='buttons'>
        <Button action={setGood} value={good} text={'good'} />
        <Button action={setNeutral} value={neutral} text={'neutral'} />
        <Button action={setBad} value={bad} text={'bad'} />
      </div>
      <Statistics bad={bad} good={good} neutral={neutral} />
    </>
  );
}

export default App;
