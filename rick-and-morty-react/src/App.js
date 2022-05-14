import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar"
import { Personajes } from "./components/Personajes"

const url = "https://rickandmortyapi.com/api/character"


function App() {
  const [personajes, setPersonajes] = useState([]);

  const obtenerDatos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const personaje = data.results
    setPersonajes(...personajes, personaje)
    setPersonajes(personaje)
    console.log(personaje)
  }

  useEffect(() => {
    obtenerDatos();
  }, [])

  return (
    <>
      <Navbar brand="Rick and Morty App" />

      <div className="container">
        <Personajes personajes={personajes} />
      </div>
    
    </>
  );
}

export default App;
