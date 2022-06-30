import Api from "@/api"

export const getPokemon = async (name) => {
  try {
    const response = await Api.get(`pokemon/${name}`)
    return response.data
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
}

export const getPokemonList = async () => {
  try {
    const response = await Api.get(`pokemon`)
    return response.data
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
}