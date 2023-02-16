import pokemonApi from "@/api/pokemonApi"

const getAllPokemons = () => {
    const pokemonsArr = Array.from( Array(650) )
    return pokemonsArr.map( (item, index) => index + 1 )
}

const getPokemonsOptions = async () => {
    const allMixedPokemons = getAllPokemons().sort( () => Math.random() - 0.5 )
    return await getPokemonNames( allMixedPokemons.splice(0,4) )
}

const getPokemonNames = async ( pokemonsId = [] ) =>{
    const promisesArr = pokemonsId.map((id) =>  pokemonApi.get(`/${id}`))
    const resps = await Promise.all( promisesArr )
    return resps.map( (pokemon) => ({name: pokemon.data.name, id: pokemon.data.id}) )
}


export default getPokemonsOptions