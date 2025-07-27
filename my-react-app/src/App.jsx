import Header from "./components/Header"
import { IconA, IconB } from "./components/Icon"
import Image from "./components/Image"
function App() {

  return (
    <>
      <div>
        <Header/>
        <IconA/>
        <h1>Nonthanan simpree</h1>
        <Image imageUrl={'https://img.youtube.com/vi/4tzmynf93p8/maxresdefault.jpg'}/>
      </div>
    </>
  )
}

export default App
