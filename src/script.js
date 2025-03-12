const App = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div className="app">
            <h1>React App Without Node.js</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

// Render App
ReactDOM.render(<App />, document.getElementById("root"));
