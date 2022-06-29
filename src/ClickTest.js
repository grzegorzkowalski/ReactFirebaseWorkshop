import { useState } from "react";

const ClickTest = () => {
    const [counter, setCounter] = useState(0);
    const handleClick = (e, name) => {
        console.log(e, name)
        setCounter(counter + 1)
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={ e => handleClick(e, "Agata")}>
                Kliknij mnie
            </button>
        </div>
    )
}

export default ClickTest;
