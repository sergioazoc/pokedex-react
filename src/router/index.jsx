import { Navigate, Route, Routes } from 'react-router-dom'
import App from '@/App'
import FinderView from '@/views/FinderView'
import PokemonListView from '@/views/PokemonListView'

const Router = () => {

  return (
    <Routes>
      <Route element={<App />} >
        <Route path="/" element={<FinderView />} />
        <Route path="/pokemons" element={<PokemonListView />} />
      </Route>
      {/* <Route path="/auth/*" element={ <LoginPage /> } />
        <Route path="/*" element={ <Navigate to="/auth/login" /> } /> */}
    </Routes>
  )
}

export default Router