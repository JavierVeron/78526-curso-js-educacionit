import './App.css'
import Logo from './Logo'
import Producto from './Producto'

function App() {
  return (
    <>
      <Logo />
      <Producto imagen={"https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/33ac65179ca176fd63feb42aa3e76af1cb766d9a-2000x1334.png?w=750&q=40&fit=max&auto=format"} titulo={"Whopper"} precio={13000} descripcion={"Carne a la parrilla, pan, mayonesa, ketchup, cebolla, tomate, pepinos y lechuga."} />
      <Producto imagen={"https://cdn.sanity.io/images/czqk28jt/prod_bk_ar/1f06ccc24d716cfac2bd1a56cb442661821f8c2d-2000x1333.png?w=750&q=40&fit=max&auto=format"} titulo={"Whopper con Queso Doble"} precio={16000} descripcion={"Doble carne a la parrilla, pan, queso cheddar, mayonesa, ketchup, cebolla, tomate, pepinos y lechuga."} />
    </>
  )
}

export default App
