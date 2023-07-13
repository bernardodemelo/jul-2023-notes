// RISE AND SHINE RECAP

let pokemon = 
{   abilities: [
      {
        ability: {
          name: "limber",
          url: "https://pokeapi.co/api/v2/ability/7/"
        },
        is_hidden: false,
        slot: 1
      },
      {
        ability: {
          name: "imposter",
          url: "https://pokeapi.co/api/v2/ability/150/"
        },
        is_hidden: false,
        slot: 3
      }
    ],
    base_experience: 101,
    pokemon_info: [
      {
        name: "ditto",
        url: "https://pokeapi.co/api/v2/pokemon-form/132/"
      }
    ],
    weight: 40
}

// console.log pokemon name
console.log(pokemon.pokemon_info[0].name);
// console.log pokemon weight
console.log(pokemon.weight);
// console.log "limber"
console.log(pokemon.abilities[0].ability.name)

// BONUS: create a function that accepts one object as argument
// it should return the same object, but with different abilities
// instead of ability's name being "imposter", it should be "Nicolas Cage"
// and the url should be a Nicolas Cage photo that you picked. 

function bigManNick(pokemonWebDev){
    pokemonWebDev.abilities[1].ability.name = "Nicolas Cage";
    pokemonWebDev.abilities[1].ability.url = "https://www.giantfreakinrobot.com/wp-content/uploads/2019/10/nicolas-cage.jpg";
    
    return console.log(pokemonWebDev);
}

bigManNick(pokemon);