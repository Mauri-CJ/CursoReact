import { useState } from "react"
const Formulario = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const errorMessage = validate(email,password)


  return (
    <form
      onSubmit={event => {event.preventDefault(); login(email,password)}}
    >
      <input type="text" 
             name="email"
             placeholder="Email"
             autoComplete="off"
             value= {email}
             onChange={event => setEmail(event.target.value)}
      />

      <input type="text" 
             name="password"
             placeholder="Password"
             autoComplete="off"
             //Esto nos sirve para tener en todo momento el valor del estado actualizado respecto a lo que nos ingresa el usuario en el input
             //Osea el valor que se va a poniendo en el input se va reflejando en el estado 
             value= {password} //Hace que el value del input tome en tiempo real el valor del estado password
             onChange={event => setPassword(event.target.value)} //A medida que se va modificando el valor del input, se modifica el valor del estado
      />
      <p>{errorMessage}</p>
      <button type="submit" disabled={errorMessage} >Iniciar Sesion</button>
    </form>
  )
}
const login = (email,password) =>{
  if (email==="Root@gmail.com" && password === "123"){
    alert('Login Correcto')
  }else{
    alert("login incorrecto")
  }
}

const validate = (email,password) => {
  if(!email.includes('@'))return'Email Incorrecto'
  if(password.length < 4)return'Contraseña corta'
}

export default Formulario
