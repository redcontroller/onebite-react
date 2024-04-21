import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [params, setParams] = useSearchParams();
    // console.log(params);
    console.log(params.get("value"));
    // console.log(params.set("value", "bye"));
    // console.log(params.get("value"));

    const onClick = (e) => {
        setParams({value: "bye"});
    };

    return (
        <div>
            Home
            <button onClick={onClick}>New SearchParams</button>
        </div>
    );
};

export default Home;