'use client';

import axios from "axios";

export default function Page() {
    // GET, POST, PUT, DELETE

    const doPost = async () => {
        const payload = {
            id: 1,
            name: 'veecop'
        }
        await axios.post('http://localhost:3000', payload);
    }

    const doGet = async () => {
        await axios.get('http://localhost:3000');
    }

    const doPut = async () => {
        const payload = {
            id: 1,
            name: 'veecop'
        }
        await axios.put('http://localhost:3000/1', payload);
    }

    const doDelete = async () => {
        await axios.delete('http://localhost:3000/1');
    }

    return (
        <div>
            <h1>Call API : CRUD</h1>
            <button onClick={() => doGet()}>GET</button>
            <button onClick={() => doPost()}>POST</button>
            <button onClick={() => doPut()}>PUT</button>
            <button onClick={() => doDelete()}>DELETE</button>
        </div>
    );
}
