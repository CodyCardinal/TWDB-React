import { useState, useEffect } from "react";
// https://youtu.be/6s0OVdoo4Q4?t=47
// https://youtu.be/6s0OVdoo4Q4?t=218
export default function Objectifier() {
    const [state, setState] = useState({ results: []});
    const dataSource = 'https://randomuser.me/api/?results=20';

    const getResponse = async (url) => {
        const response = await fetch(url);
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(`error with url: ${url}`)
        };
    }

    useEffect(() => {
        const f = async () => {
            const r = await getResponse(dataSource);
            setState(r);
        };
        f();
    }, []);

    return (
        <>
            <h1>Objects!</h1>
            <ul>
                {state.results.map((item) => <li key={item.login.uuid}><h3>{item.name.first}</h3></li>)}
            </ul>
        </>
    )
}
