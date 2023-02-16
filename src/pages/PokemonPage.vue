<template>
    <h1>Cuál es este pokemon?</h1>
    <pokemon-picture :pokemonId="4" :showPokemon="false"></pokemon-picture>
    <pokemon-options :pokemons="pokemonArr"></pokemon-options>
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
            pokemonArr: []
        }
    },
    methods:{
        async mixPokemonArr(){
            this.pokemonArr = await getPokemonOptions()
            console.log(this.pokemonArr);
        }
    },
    mounted(){
        this.mixPokemonArr()
    }

}
</script>

<style>

</style>