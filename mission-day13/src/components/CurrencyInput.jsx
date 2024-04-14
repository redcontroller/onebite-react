
const CurrencyInput = ({id, krwInput, setKrwInput, usdInput, setUsdInput, rate}) => {
    const onChange = (e) => {
        if (id === "krw") {
            setKrwInput(e.target.value);
            setUsdInput(e.target.value / rate);
        } else if (id === "usd") {
            setUsdInput(e.target.value);
            setKrwInput(e.target.value * rate);
        }
    }

    return (
        <div>
            <label htmlFor={id}>{id.toUpperCase()}:</label>
            <input 
                id={id}
                type="number"
                value={id === "krw" ? (
                    krwInput || (usdInput * rate)
                    ) : (
                    usdInput || (krwInput / rate)
                )}
                onChange={onChange}
            />
        </div>
    );
};

export default CurrencyInput;