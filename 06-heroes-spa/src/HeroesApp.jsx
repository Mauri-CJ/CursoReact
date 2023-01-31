import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"
//Envuelvo toda la app en el AuthProvider para compartir el authContext en toda la aplicacion
export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter/>       
    </AuthProvider>
  )
}
