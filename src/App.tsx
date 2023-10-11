import './App.scss'
import { NavBar } from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import MainPart from './Components/MainPart/MainPart'

function App() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <NavBar />
        <MainPart />
      </div>
    </>
  )
}

export default App
