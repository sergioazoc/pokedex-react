import { useRef, useState } from "react"
import { getPokemon } from "@/services/pokemon"

const FinderView = () => {

  const inputName = useRef()
  const [pokemon, setPokemon] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    getPokemon(inputName.current.value)
      .then(response => {
        setPokemon(pokemon => {
          return {
            ...pokemon,
            ...response
          }
        })
      })
  }

  return (
    <div className="container">
      <h1 className="text-center my-5">Find your Pokémon</h1>
      <form onSubmit={handleSubmit} className="hstack gap-3">
        <input ref={inputName} type="text" className="form-control" required />
        <button className="btn btn-primary">Find</button>
      </form>

      {
        pokemon.name &&
        <div className="text-center my-5">
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt="" />
        </div>
      }
    </div>
  )
}

export default FinderView