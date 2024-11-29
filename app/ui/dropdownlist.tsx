'use client';

import { useState } from "react";

function Dropdownlist() {
    const [foodList, setFoodList] = useState([
        {name: 'apple'},
        {name: 'mango'},
        {name: 'banana'},
        {name: 'cucumber'},
        {name: 'grape'}
    ]);
    const [food, setFood] = useState('apple');
    return (
        <>
            <select onChange={e => setFood(e.target.value)}>
                {foodList.map((item) => (
                    <option value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>
            <div>Your selection is {food}</div>
        </>
    );
}

export default Dropdownlist;
