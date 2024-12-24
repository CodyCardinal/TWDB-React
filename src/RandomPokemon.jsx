import './RandomPokemon.css';

function RandomPokemon() {
    let pokemonIndex = Math.floor(Math.random() * 151) + 1;
    let baseURL      = 'https://raw.githubusercontent.com';
    let repo         = '/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
    let pokemonImage = baseURL + repo + `/${pokemonIndex}.png`;

    return (
        <>
            <h1 className='RandomPokemon'>
                <img className='RandomPokemonImg' src={pokemonImage}></img>
            </h1>
        </>
    );
}

export default RandomPokemon;