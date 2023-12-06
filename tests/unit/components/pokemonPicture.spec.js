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
        expect(img1.exists()).toBeTruthy()
        expect(img2).toBeFalsy()
        expect(img1.classes("hidden-pokemon")).toBeTruthy()

        // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        expect(img1.attributes('src')).toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg`)
        
    })

    test("debe mostrar el pokemon si showPokemon = true", ()=>{
        const wrapper = shallowMount(pokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true,
            }
        })
        const img = wrapper.find('img')
        expect( img.exists() ).toBeTruthy()
        expect(img.classes("hidden-pokemon")).toBeFalsy()
        expect(img.classes("fade-in")).toBeTruthy()
    })
})