import { useState } from 'react';

// A kék doboz stílusai
const boxStyleBlue = {
    backgroundColor: 'blue',
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
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Árnyék hozzáadása
};

const buttonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Áttetsző fehér gomb
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    margin: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
};

const countStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '10px',
};

/**
 * Független kék számláló komponens.
 * Saját állapotot kezel a számláló értékére.
 */
function BlueBox() {
    // A számláló állapotának kezelése lokálisan
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div style={boxStyleBlue}>
            <div style={countStyle}>{count}</div>
            <div>
                <button style={buttonStyle} onClick={decrement}>-</button>
                <button style={buttonStyle} onClick={increment}>+</button>
            </div>
        </div>
    );
}

// A komponens exportálása alapértelmezett exportként
export default BlueBox;