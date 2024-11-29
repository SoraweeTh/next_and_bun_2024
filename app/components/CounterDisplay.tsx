'use client';

import { useContext } from "react";
import { DataContext } from '../share/page';

export default function CounterDisplay() {
    const {counter} = useContext(DataContext);

    return (
        <h1>Current count: {counter}</h1>
    );
}
