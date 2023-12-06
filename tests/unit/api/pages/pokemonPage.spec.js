import { shallowMount, mount } from "@vue/test-utils";
import pokemonPage  from "@/pages/pokemonPage";
import { pokemons } from "../../mocks/pokemons.mock";

describe('Pokemon Page Component', () => {
    let wrapper;
    let mixPokemonArraySpy;

    beforeEach(()=>{
        mixPokemonArraySpy = jest.spyOn(pokemonPage.methods, "mixPokemonArr");
        wrapper = shallowMount(pokemonPage);
    });

    test('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
    test('debería llamar al mixPokemonArray en "mounted" ', () => {
        expect(mixPokemonArraySpy).toHaveBeenCalled();
    });
    test('hacer match con el snapshot cuando cargan datos', () => {
        const wrapper = shallowMount( pokemonPage, {
            data(){
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        });
        expect( wrapper.html() ).toMatchSnapshot();
    });


    test('debe mostrar los componentes de pokemonPictures y pokemonOptions', () => {
        const wrapper = shallowMount( pokemonPage, {
            data(){
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        });

        let pkmPicture = wrapper.find('pokemon-picture-stub');
        let pkmOptions = wrapper.find('pokemon-options-stub');
        
        expect( pkmPicture.exists() ).toBeTruthy();
        expect( pkmOptions.exists() ).toBeTruthy();

        expect(pkmPicture.attributes('pokemonid')).toEqual("5");
        expect(pkmOptions.attributes('pokemons')).toBeTruthy();
    });

    /** Se pone el async-await porque la prueba desencadena una
      * re-renderización del html y por tanto hay que espera a que lo haga. */
    test('checkAnswer pruebas', async() => {
        const wrapper = shallowMount( pokemonPage, {
            data(){
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[2],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        });
        await wrapper.vm.checkAnswer({name:'leche', id:2});
        expect(wrapper.find('h2').exists()).toBeTruthy();
        expect(wrapper.vm.showPokemon).toBeTruthy();
        expect(wrapper.vm.showAnswer).toBeTruthy();
        // expect(wrapper.find('h2').text()).toBe(`Error... es ${pokemons[2].name}`);
        expect(wrapper.vm.message).toBe(`Error... es ${pokemons[2].name}`);
    });


});