import getPokemonOptions, {getAllPokemons, getPokemonNames} from "@/helpers/getPokemonOptions";


describe('getPokemonOptions helpers', ()=>{
    test('debe regresar un array de numeros', () =>{
        const pokemons = getAllPokemons()
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)
    })

    test('debe retornar array de 4 elementos con nombres de pokemons', async ()=>{
        const pokemons = await getPokemonNames([1,2,3,4])
        const pokemonsExpected = [
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ]
        expect(pokemons).toMatchObject(pokemonsExpected)
    })

    test('getPokemonOptions debe devolver un array mezclado', async ()=>{
        const pks = await getPokemonOptions()
        expect(pks.length).toBe(4)
        expect(pks).toEqual([
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) }
        ])
    })
})