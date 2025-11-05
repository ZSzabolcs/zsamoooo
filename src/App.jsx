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