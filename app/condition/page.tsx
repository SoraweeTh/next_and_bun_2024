'use client';

import { useState } from "react";

export default function Page() {
    const [name, setName] = useState('');

    return (
        <>
            <span>Your name: </span>
            <input value={name} onChange={e => setName(e.target.value)} />

            {name == 'admin' ? <div>Welcome {name}</div> : <></>}
        </>
    )
}
