import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Transations } from "./pages/trasations";
import { TransationsProvider } from "./context/TransationsContext";

export function App() {

  return (
   //ThemeProvider é o provider de contexto do styled-components
   //Ele vai prove o tema que vamos usar ao longo da nossa aplicação
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>

    <TransationsProvider>
      <Transations/>
    </TransationsProvider>
    
   </ThemeProvider>
  )
}
