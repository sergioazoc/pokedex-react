import '@/assets/styles/app.scss'
import TheNavbar from '@/components/TheNavbar'
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div>
      <TheNavbar />
      <Outlet />
    </div>
  )
}

export default App
