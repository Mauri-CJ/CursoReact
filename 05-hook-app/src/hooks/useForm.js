import { useState } from "react"

export const useForm = (initialForm={}) => {
    const [formState, setFormState] = useState(initialForm)

    const onResetForm = () => setFormState(initialForm)

    const onInputChange = ({target}) => {
        const {name,value} = target
        setFormState(
        {...formState, 
            [name] : value, 
           
        })}
 //Destructuramos el formstate para mandar de manera individual, las propiedades que nos llegan en el initialForm
 //Y asi poder recibirlas de manera indivual en el lado del componente
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}


