import { shallowMount } from "@vue/test-utils"
import pokemonOptions from "@/components/pokemonOptions"
import { pokemons } from "./../mocks/pokemons.mock";

describe("pokemonOptions Component", () => {
    let wrapper;
    beforeEach(()=>{
        wrapper = shallowMount(pokemonOptions, {
           props: {
               pokemons,
           }
       });

    });
    test("hacer match con el snapshot", () => {
        console.log("en el snapshot: ", wrapper.html());
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('debe mostrar 4 opciones correctamente ', () => {
        // 4 li
        // cada li con nombre de pokemon    
        const liTagsPkm = wrapper.findAll('li');
        expect(liTagsPkm.length).toBe(4)
        
        let [pkm1, pkm2, pkm3, pkm4] = liTagsPkm;
        expect( pkm1.text() ).toBe("pikachu");
        expect( pkm2.text() ).toBe("charmander");
        expect( pkm3.text() ).toBe("venusaur");
        expect( pkm4.text() ).toBe("mew");
    });

    test('debe emitir "selection" con sus respectivos params ', () => {
        let [pkm1, pkm2, pkm3, pkm4] = wrapper.findAll('li');

        pkm1.trigger('click');
        pkm2.trigger('click');
        pkm3.trigger('click');
        pkm4.trigger('click');
        expect( wrapper.emitted('selected').length ).toBe(4);

        console.log(wrapper.emitted('selected'));
        expect( wrapper.emitted('selected')[0] ).toMatchObject([{name:'pikachu', id:5}]);
        expect( wrapper.emitted('selected')[1] ).toMatchObject([{name:'charmander', id:10}]);
        expect( wrapper.emitted('selected')[2] ).toMatchObject([{name:'venusaur', id:15}]);
        expect( wrapper.emitted('selected')[3] ).toMatchObject([{name:'mew', id:20}]);

    });
});