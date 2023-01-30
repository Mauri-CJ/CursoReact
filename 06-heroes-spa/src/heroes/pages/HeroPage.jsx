import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers'

export const HeroPage = () => {
  //Hook creado por react-router-dom para argumentos del url, no sirve para query parameters
  //argumentos = url/...
  //query parameters = url/search?q=batman
  const {heroId} = useParams()

  //En el hero vamos a tener lo que retorne el callback que pasamos, y este callback se dispara
  //Cada que las dependencias cambien, en este caso el id
  //Cuando el id cambie se va a volver a disparar la funcion que me trae el nuevo heroe
  const hero = useMemo(() => getHeroById(heroId), [heroId]) 
  const navigate =  useNavigate()

  const onNavigateBack = () =>{
    navigate(-1) //Nos navega al historial anterior
  }

  
  //Si no tenemos heroe, retornamos un componente Navigate, que nos redirecciona a /marvel, si tenemos mostramos el heroe 
  if(!hero){
    return <Navigate to='/marvel'/>
  }

  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img 
          src={`/assets/heroes/${heroId}.jpg`}
          alt={hero.superhero} 
          className="img-thumbnail animate__animated animate__fadeInLeft"
        /> 
      </div>
      <div className='col-8 animate__animated animate__fadeInRight'>
          <h3>{hero.superhero}</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'><b>Alter ego:</b> {hero.alter_ego}</li>
            <li className='list-group-item'><b>Publisher:</b> {hero.publisher}</li>
            <li className='list-group-item'><b>First appearance :</b> {hero.first_appearance}</li>
          </ul>
          <h5 className='mt-3'>Characters</h5>
          <p>{hero.characters}</p>

          <button className='btn btn-outline-primary' onClick={onNavigateBack}>
            Regresar
          </button>
      </div>
    </div>
  )
}
