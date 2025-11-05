import { useState } from 'react';

function BlueBox() {
    const [count, setCount] = useState(0);

    const decrement = () => setCount(prevCount => prevCount - 1);
    const increment = () => setCount(prevCount => prevCount + 1);

    const boxStyle = {
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
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    };

    const buttonStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
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

function RedBox() {
    const [count, setCount] = useState(0);

    const decrement = () => setCount(prevCount => prevCount - 1);
    const increment = () => setCount(prevCount => prevCount + 1);

    const boxStyle = {
        backgroundColor: 'red',
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
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    };

    const buttonStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
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

const App = () => {
    const appContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        padding: '20px',
    };

    return (
        <div style={appContainerStyle}>
            <BlueBox />
            <RedBox />
        </div>
    );
}

export default App;