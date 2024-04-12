import { useState } from "react";

const Bulb = () => {
    const [light, setLight] = useState("OFF");
    console.log(light);
    return (
        <>
            <div>
                {light === "ON" ? (
                    <h1 style={{backgroundColor : "orange" }}>ON</h1>
                ) : (
                    <h1 style={{backgroundColor : "gray" }}>OFF</h1>
                )}
            </div>
            
            <div>
            <button onClick={() => {
                    setLight(light === "ON" ? "OFF" : "ON");
                }}>
                    {light === "OFF" ? "ON" : "OFF"}
            </button>
            </div>
        </>
    );
};

export default Bulb;