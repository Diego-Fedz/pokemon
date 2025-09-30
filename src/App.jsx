import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import header from './assets/header.jpeg';
import { fetchPokemons } from './services/PokemosService';
import PokemonCard from './components/PokemonCard';
import Search from './components/PokemonSearch';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

   useEffect(() => {
    fetchPokemons()
      .then(pokemons => {
        setPokemons(pokemons); 
        setFilteredPokemons(pokemons);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredPokemons(pokemons);
    } else {
      setFilteredPokemons(
        pokemons.filter(pokemon =>
          pokemon.name.toLowerCase().startsWith(
            query.toLowerCase())
        )
      );
    }
  };
    // El return con la foto de los pokemons lo he tenido que hacer con ChatGPT
  return (
    <div className="container shadow p-0">
      <header className="header-bg">
        <img src={header} alt="header" className="w-100"/>
      </header>
      <div className="row justify-content-center pt-3">
        <div className="col-10 col-sm-8 col-md-6 col-xl-4">
          <Search onSearch={handleSearch} />
        </div>
      </div>
      <div className="row p-3 justify-content-center">
        {filteredPokemons.map((pokemon) => (
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




