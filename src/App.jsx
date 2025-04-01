import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"

function App() {


  return (
    <>
    <Navbar/>
    <ItemListContainer greeting='Bienvenidos a SuculentApp'/>
    </>
  )
}

export default App
