import { useEffect, useState } from 'react';

const baseUrl = 'https://swapi.dev/api/';
export default function CharacterList() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        async function fetchCharacters() {
            const response = await fetch(`${baseUrl}/people`);
            const result = await response.json();
            console.log(result.results);
        }
        fetchCharacters();
    }, []);
    return (
        <>
            <h2>Characters</h2>
            <ul>
                {characters.map((characters) => (
                    <li key={characters.name}>{characters.name}</li>
                ))}
            </ul>
        </>
    );
}
