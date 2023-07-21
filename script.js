let currentPokemons = [];

function init() {
    loadPokemons();    
}

async function loadPokemons() {
    const pokemonIds = [4, 7, 25, 1, 10, 13, 16, 19, 23, 133]; // Sample IDs of 10 Pokemon

    try {
        for (const id of pokemonIds) {
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
            const response = await fetch(url);
            const pokemonData = await response.json();
            currentPokemons.push(pokemonData);
        }

        console.log('Loaded Pokemon:', currentPokemons);
        renderPokemonsInfo();
    } catch (error) {
        console.error('Error loading Pokemon:', error);
    }
}

function renderPokemonsInfo() {
    const container = document.getElementById('contentID');

    currentPokemons.forEach(pokemon => {
        const card = createPokemonCard(pokemon);
        container.appendChild(card);
    });
}

function createPokemonCard(pokemon) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style = 'width: 18rem; margin: 10px;';

    const image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = pokemon.sprites.front_shiny;
    cardDiv.appendChild(image);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const name = document.createElement('h5');
    name.className = 'pokemonName';
    name.innerText = pokemon.name;
    cardBody.appendChild(name);

    const text = document.createElement('p');
    text.className = 'pokemonText';
    text.innerText = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
    cardBody.appendChild(text);

    cardDiv.appendChild(cardBody);

    return cardDiv;
}

