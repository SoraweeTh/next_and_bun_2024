'use client';

import { useContext } from "react";
import { DataContext } from '../share/page';

export default function CounterButton() {
    let {counter, setCounter} = useContext(DataContext);

    const handleClick = () => {
        setCounter(counter + 1);
    }
    
    const handleClickMinus = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(0);
    }

    return (
        <>
            <button onClick={() => handleClick()}>Increment count: </button>
            <p/>
            <button onClick={() => handleClickMinus()}>Decrement count: </button>
            <p/>
            <button onClick={() => reset()}>Reset</button>
        </>
    );
}
