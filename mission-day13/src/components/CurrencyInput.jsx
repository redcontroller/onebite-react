import { useRef } from "react";
import MultiplicationButton from "./MultiplicationButton";

// const CurrencyInput = ({id, krwInput, setKrwInput, usdInput, setUsdInput, rate}) => {
const CurrencyInput = ({id, value, onChange}) => {
    // const onChange = (e) => {
    //     if (id === "krw") {
    //         setKrwInput(e.target.value);
    //         setUsdInput(e.target.value / rate);
    //     } else if (id === "usd") {
    //         setUsdInput(e.target.value);
    //         setKrwInput(e.target.value * rate);
    //     }
    // }
    const onClick = (e, multiplication) => {
        e.preventDefault();
        onChange(id, value * multiplication);
    };

    return (
        <div className="currencyInput">
            <label htmlFor={id}>{id.toUpperCase()}:</label>
            <input 
                id={id}
                type="number"
                // value={id === "krw" ? (
                //     krwInput || (usdInput * rate)
                //     ) : (
                //     usdInput || (krwInput / rate)
                // )}
                value={value}
                onChange={(e) => onChange(id, e.target.value)}
            />
            <MultiplicationButton onClick={onClick} />
        </div>
    );
};

export default CurrencyInput;