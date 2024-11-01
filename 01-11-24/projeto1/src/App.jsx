import Titulo from "./Titulo"
import Contador from "./Contador"
import Footer from "./footer"

function App(){
  return (
    <>
    <div>
      <h1>Ola mundo</h1>
    </div>

    <div>
    <Titulo nome="Bolsonaro" idade="12"/>
    <Titulo nome="Lula" idade="20"/>
    </div>

    <div>
      <Footer/>
    </div>
    </>
  )
}

export default App