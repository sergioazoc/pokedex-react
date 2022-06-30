import { useState, useEffect } from "react"
import { getPokemonList } from "@/services/pokemon"

const PokemonListView = () => {

  const [isLoaded, setIsLoaded] = useState(false)
  const [pokemonList, setPokemonList] = useState({})

  useEffect(() => {
    getPokemonList()
      .then(response => {
        setPokemonList(pokemonList => {
          setIsLoaded(true)
          return {
            ...pokemonList,
            ...response
          }
        })
      })
  }, [])


  return (
    <div className="container">
      <h1 className="text-center my-5">Pokémon List</h1>

      {
        !isLoaded ? <p>loading...</p> :
          pokemonList.results.map((pokemon, index) => {
            return (
              <div key={index} className="text-center my-5">
                <h2>{pokemon.name}</h2>
              </div>
            )
          })
      }
    </div>
  )
}

export default PokemonListView