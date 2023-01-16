import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    //Podemos recibir el las propiedades del objeto que le mandamos, porque al retornarlas en el custom hook
    //Mandamos destructurado el objeto que recibimos, entonces las podemos recibir de manera individual tambien
    const {formState,onInputChange,onResetForm,username,email,password} = useForm(     {
        username:'',
        email:'',
        password:''
    }
    )
    //Sino la otra forma es destructurarlas de este lado de manera manual, cualquiera de las dos es valida
    //const {username,email,password} = formState

    return (
        <>
            <h1>Formulario Con Custom Hook</h1>
            <hr />
            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                autoComplete="off"
                value = {username}
                onChange = {onInputChange}
            />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="mauricocella@gmail.com"
                name="email"
                autoComplete="off"
                value = {email}
                onChange = {onInputChange}
            />

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                autoComplete="off"
                value = {password}
                onChange = {onInputChange}
            />

          <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
        </>
    )
}
