import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const App = () => {
  const appContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
  };

  return (
    <div style={appContainerStyle}>
      <CounterBox initialValue={0} color="blue" />
      <CounterBox initialValue={0} color="red" />
    </div>
  );
}

function CounterBox({ initialValue = 0, color }) {
  const [count, setCount] = useState(initialValue);

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const boxStyle = {
    backgroundColor: color,
    color: 'white',
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    textAlign: 'center',
    width: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buttonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Áttetsző fehér gomb
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    margin: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const countStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  return (
    <div style={boxStyle}>
      <div style={countStyle}>{count}</div>
      <div>
        <button style={buttonStyle} onClick={decrement}>-</button>
        <button style={buttonStyle} onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App