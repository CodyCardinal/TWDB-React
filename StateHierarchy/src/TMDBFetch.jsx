import { useState } from 'react';
import './TMDBFetch.css';

export default function TMDBFetch() {
    const [input, setInput] = useState('');

    const token = import.meta.env.VITE_TMDB_TOKEN;
    const baseURL = "https://api.themoviedb.org/3";
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        find(input);
    }

    async function find(id) {
        const url = `${baseURL}/find/nm${id}?external_source=imdb_id`;
        console.log(url);
        fetch(url, options)
            .then(res  => res.json())
            .then(json => console.log(json))
            .catch(err => console.error(err));
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Fetch by IMDB ID</button>
            </form>
        </>
    );
}