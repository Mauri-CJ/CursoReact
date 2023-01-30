import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard'

export const HeroList = ({publisher}) => {
  //Usamos el use memo, para que el componente este solo se redibuje si cambia el publisher
  //Esto para que cuando haya un cambio en un componente padre a este, no se llame a la funcion getHeroes al pedo
  const heroes = useMemo(() => getHeroesByPublisher(publisher),[publisher]) 
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            heroes.map((hero) => ( 
                    <HeroCard key={hero.id} {...hero}/> /*Mando Props Destructuradas */
            ))
        }
    </div>
  )
}
