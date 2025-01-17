import { useState, useEffect } from "react";
import './Pandafier.css';
// https://youtu.be/6s0OVdoo4Q4?t=47
// https://youtu.be/6s0OVdoo4Q4?t=218
export default function Pandafier() {
    const [state, setState] = useState([]);
    const dataSource = 'https://randomuser.me/api/?results=20';

    const getResponse = async (url) => {
        const response = await fetch(url);
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(`error with url: ${url}`)
        };
    }

    const extractLocation = (input) => {
        const arr = [];
        const results = input.results;
        results.forEach(each => {
            arr.push({
                uuid: each.login.uuid,
                number: each.location.street.number,
                name: each.location.street.name,
                city: each.location.city,
                state: each.location.state,
                country: each.location.country,
                postcode: each.location.postcode,
                latitude: each.location.coordinates.latitude,
                longitude: each.location.coordinates.longitude,
                offset: each.location.timezone.offset,
                description: each.location.timezone.description
            })
        });
        console.log(arr);
        return arr;
    }




    useEffect(() => {
        const f = async () => {
            const r = await getResponse(dataSource);
            const locations = extractLocation(r);
            setState(locations);
        };
        f();
    }, []);
    const keys = state.length > 0 ? Object.keys(state[0]).filter(key => key !== 'uuid') : [];
    return (
        <>
            <h1>Objects!</h1>
            <table>
                <thead>
                    <tr>
                        {keys.map(key => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {state.map(each => (
                        <tr key={each.uuid}>
                            {keys.map(key => (
                                <td key={key}>{each[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
