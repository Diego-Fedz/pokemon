import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import header from './assets/header.jpeg';
import { fetchPokemons } from './services/PokemosService';
import PokemonCard from './components/PokemonCard';

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemons()
      .then(setPokemons)
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
    // El return con la foto de los pokemons lo he tenido que hacer con ChatGPT
  return (
    <div className="container shadow p-0">
      <header className="header-bg">
        <img src={header} alt="header" className="w-100"/>
      </header>
      <div className="row p-3 justify-content-center">
        {pokemons.map((pokemon) => (
          <div className="col-md-6 col-lg-4 mb-3">
            <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
          </div>
        ))};
      </div>
      <footer className=" footer-bg">
        <h1>No me gusta esto de react</h1>
      </footer>
    </div>
  );
};
export default App;




