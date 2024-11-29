'use client';

import { useState } from "react";

function Radiobox() {
    const [gender, setGender] = useState('male');
    const handleChangeGender = (e: any) => {
        setGender(e.target.value);
    }

    return (
        <>
            <input 
                type='radio' 
                onChange={handleChangeGender} 
                value='male'
                checked={gender === 'male'}
                name='gender' />{' '}
            Male
            <input 
                type='radio' 
                onChange={handleChangeGender} 
                value='female'
                checked={gender === 'female'}
                name='gender' />{' '}
            Female
            <div>Your selection is {gender}</div>
        </>
    );
}

export default Radiobox;
