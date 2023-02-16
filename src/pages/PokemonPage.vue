<template>
    <h1 v-if="!pokemon"> Espere por favor... </h1>
    <div v-else>
        <h1>Cuál es este pokemon?</h1>
        <pokemon-picture :pokemonId="pokemon.id" :showPokemon="showPokemon"></pokemon-picture>
        <pokemon-options :pokemons="pokemonArr"></pokemon-options>
    </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonOptions from '@/helpers/getPokemonOptions'

// console.log("En el componente principal: ", getPokemonOptions());

export default {
    components: { 
        PokemonPicture,
        PokemonOptions
    },
    data(){
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false
        }
    },
    methods:{
        async mixPokemonArr(){
            this.pokemonArr = await getPokemonOptions()
            const randomIndex = Math.floor(Math.random() * 4)
            // console.log("ACCEDIENDO AL ARRAY: ", this.pokemonArr[randomIndex]);
            this.pokemon = this.pokemonArr[randomIndex]
        }
    },
    mounted(){
        this.mixPokemonArr()
    }

}
</script>

<style>

</style>