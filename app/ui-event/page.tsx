'use client';

import { useState } from "react";

export default function Page() {
    const [x, setX] = useState(0);
    const handleClick = () => {
        setX(x + 1);
    }

    const reset = () => {
        setX(0);
    }

    return (
        <div>
            <button onClick={() => handleClick()}>Click me</button>
            <button onClick={() => reset()}>reset</button>
            <div>x = {x}</div>
        </div>
    )
}