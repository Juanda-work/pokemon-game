<template>
    <h1 v-if="!pokemon"> Espere por favor... </h1>
    <div v-else>
        <h1>Cuál es este pokemon?</h1>
        <pokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon"/>
        <pokemonOptions :pokemons="pokemonArr" @selected="checkAnswer($event)" v-if="!showAnswer" />
        <template v-if="showAnswer" class="fade-in">
            <h2>{{message}}</h2>
            <button @click="newGame"> Jugar de nuevo </button>
        </template>
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
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods:{
        async mixPokemonArr(){
            this.pokemonArr = await getPokemonOptions()
            const randomIndex = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr[randomIndex]
        },
        checkAnswer(pkSelected){
            if (pkSelected.id == this.pokemon.id) {
                this.message = `Bien! es ${pkSelected.name}`
            }else{
                this.message = `Error... es ${this.pokemon.name}`
            }
            this.showPokemon = true
            this.showAnswer = true
        },
        newGame(){
            this.pokemonArr  = [],
            this.pokemon     = null,
            this.showPokemon = false,
            this.showAnswer  = false,
            this.mixPokemonArr()
            
        },
    },
    mounted(){
        this.mixPokemonArr()
    }

}
</script>

<style>

</style>