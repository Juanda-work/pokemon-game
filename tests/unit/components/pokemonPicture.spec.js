import { shallowMount } from "@vue/test-utils"
import pokemonPicture from "@/components/pokemonPicture"


describe("pokemonPicture Component", ()=>{
    test("debe hacer match con snapshot", ()=>{
        const wrapper = shallowMount(pokemonPicture, {
            props: {
                pokemonId : 1,
                showPokemon: false
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    test("debe mostrar imagen oculta y el pokemon 100", ()=>{
        const wrapper = shallowMount(pokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false,

            }
        })
        const [img1, img2] = wrapper.findAll('img')
        expect( img1.exists() ).toBeTruthy()
        expect(img2).toBeFalsy()

        // expect(img1.classes('hidden-pokemo')).toBeTruthy()
        console.log(img1.classes);
    })

    test("debe mostrar el pokemon si showPokemon = true", ()=>{

    })
})