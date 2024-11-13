import React, { useState } from 'react';
import { useGetPokemonByNameQuery } from '../features/pokemonSlice';

const SearchPokemon = () => {
  const [pokemonName, setPokemonName] = useState('pikachu');

  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName, {
    skip: !pokemonName.trim(), 
  });

  return (
    <div className="container p-4 bg-light shadow rounded">
      <h2 className="text-center mb-4">Búsqueda de Pokémones con Redux RTK</h2>

      <div className="mb-3">
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value.toLowerCase())}
        className="form-control"
        placeholder="Enter Pokemon name"
      />
      </div>
      
      {!pokemonName.trim() && (
        <div>Ingrese el nombre de un Pokémon</div>
      )}
      
      {isLoading && <div>Cargando...</div>}
      {error && <div>Error: Pokémon no encontrado</div>}
      {data && (
        <div className="space-y-2">
          <h3 className="text-xl capitalize">{data.name}</h3>
          <img 
            src={data.sprites.front_default} 
            alt={data.name}
            className="w-45 h-45"
          />
          <div className="fw-bold">Altura: {data.height}</div>
          <div className="fw-bold">Peso: {data.weight}</div>
          <div className="fw-bold">Experiencia: {data.base_experience}</div>
        </div>
      )}
    </div>
  );
};

export default SearchPokemon;