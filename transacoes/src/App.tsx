import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";


export function App() {

  return (
   //ThemeProvider é o provider de contexto do styled-components
   //Ele vai prove o tema que vamos usar ao longo da nossa aplicação
   <ThemeProvider theme={defaultTheme}>
     <p>Olá mundo React</p>
   </ThemeProvider>

  
  )
}
