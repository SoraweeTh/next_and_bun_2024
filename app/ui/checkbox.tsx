'use client';

import { useState } from "react";

function Checkbox() {
    const [javaChecked, setJavaChecked] = useState(false);
    const [pythonChecked, setPythonChecked] = useState(false);
    const [phpChecked, setPhpChecked] = useState(false);

    const handleJavaChecked = (x: any) => setJavaChecked(x.target.checked);
    const handlePythonChecked = (x: any) => setPythonChecked(x.target.checked);
    const handlePhpChecked = (x: any) => setPhpChecked(x.target.checked);

    return (
        <>
            <input 
                type='checkbox'
                checked={javaChecked}
                onChange={handleJavaChecked}
                />{' '}JAVA

            <input 
                type='checkbox'
                checked={pythonChecked}
                onChange={handlePythonChecked}
                />{' '}PYTHON

            <input 
                type='checkbox'
                checked={phpChecked}
                onChange={handlePhpChecked}
                />{' '}PHP

            <div>Your selected languages</div>
            <div>Java checked: {javaChecked.toString()}</div>
            <div>Python checked: {pythonChecked.toString()}</div>
            <div>Php checked: {phpChecked.toString()}</div>

        </>
    );

}

export default Checkbox;