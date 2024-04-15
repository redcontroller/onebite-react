const MultiplicationButton = ({ onClick }) => {
    return (
        <div className="buttonBlock">
            <button onClick={(e) => onClick(e, 10)}>x10</button>
            <button onClick={(e) => onClick(e, 100)}>x100</button>
            <button onClick={(e) => onClick(e, 1000)}>x1000</button>
            <button onClick={(e) => onClick(e, 10000)}>x10000</button>
        </div>
    );
};

export default MultiplicationButton;