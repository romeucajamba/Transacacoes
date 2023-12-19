import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import {TransationsProvider} from "./context/TransationsContext";
import { Transations } from "./pages/trasations";

export function App() {

  return (
   //ThemeProvider é o provider de contexto do styled-components
   //Ele vai prove o tema que vamos usar ao longo da nossa aplicação
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>

    {/*
     *  Meu Contexto para partilha de informações e propriedades
     *  entre os componentes
     */}
    <TransationsProvider>
        <Transations/>
    </TransationsProvider>
      
   
    
   </ThemeProvider>
  )
}
