import React from 'react'
import {Link} from 'react-router-dom'
import { primerMayuscula } from '../helpers/helpers'

export const CardPokemon = ({pokemon}) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>
      <div className="card-img">
        <img src={pokemon.sprites.other.home.front_shiny} alt={`pokemon ${pokemon.name}`} />
      </div>
      <div className="card-info">
        <span className="pokemon-id">Nº {pokemon.id}</span>
        <h3>{primerMayuscula(pokemon.name)}</h3>
        <div className="card-types">
          {pokemon.types.map(type => (
            <span key={type.type.name} className={type.type.name}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
