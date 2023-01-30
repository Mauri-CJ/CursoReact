import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components/HeroCard'
import queryString from 'query-string' //Nos sirve para separar los query parameters
import { getHeroByName } from '../helpers/getHeroByName'

export const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation() //Hook creado por react router dom que nos devuelve location de donde estamos en el html, nos trae info
  
  //Esto por si vienen mas de uno
  //De este query nos traemos la q, si no viene es un string vacio (Los query parameters siempre son opcionales y el valor es string)
  const {q = ''} = queryString.parse(location.search) //Separamos los query parameters que extraemos de location.search (ahi vienen los query parameters)
  const heroes = getHeroByName(q)

  const showSearch = (q.length === 0)
  const showError = (q.length > 0) && heroes.length === 0
  

  const {searchText,onInputChange} = useForm({
    searchText : q //Hace referencia al campo input del form, haciendole referencia con su atributo name, es el mismo que le pasamos al custom hook
  })

  const onSearchSubmit = (event) =>{
    event.preventDefault()
    if(searchText.trim().length <= 1)return

    //Comillas vacias apunta a la ruta del momento
    //? le pasamos un query parameter
    navigate(`?q=${searchText.toLowerCase().trim()}`) //A la ruta actual le tiramos un query parameter
  } 

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
          <div className='col-5'>
                <h4>Searching</h4>
                <hr />
                <form onSubmit={onSearchSubmit}>
                      <input 
                        type="text" 
                        placeholder='Search a Hero'  
                        className='form-control' 
                        name='searchText'
                        autoComplete='off'
                        value = {searchText}
                        onChange= {onInputChange}
                      />
                      <button className='btn btn-outline-primary mt-1'>
                        Search
                      </button>
                </form>
          </div>


          <div className='col-7'>
                <h4>Results</h4>
                <hr />

                {/*Forma de cambiar los mensajes */}
                {/* {
                  (q==='')
                   ?<div className='alert alert-primary'>Search a hero</div>
                   : (heroes.length===0) && <div className='alert alert-danger'>No hero with <b>{q}</b></div>
                } */}

                {/* Forma de ocultar los mensajes */}
                <div className='alert alert-primary animate__animated animate__fadeIn' style={{display: showSearch ? '' : 'none' }}>
                  Search a hero
                </div>  

                <div className='alert alert-danger animate__animated animate__fadeIn' style={{display: showError ? '' : 'none' }}>
                  No hero with <b>{q}</b>
                </div>

                { 
                  heroes.map(hero=>(
                    <HeroCard key={hero.id} {...hero}/>
                  ))
                }
          </div>
      </div>
    </>
  )
}
