import axios from "axios"

const baseUrl = `https://pokeapi.co/api/v2/`

const Api = axios.create({
  baseURL: baseUrl
})

export default Api