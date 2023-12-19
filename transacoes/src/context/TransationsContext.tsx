import { ReactNode, createContext } from "react";
import { useEffect, useState } from 'react';


//tipando os dados da minha transação
interface Transations {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    category: 'string';
    createAt: string;
    price: number
}


interface TransationsContextType {
    transations: Transations[];
}

interface TransationsProviderProps {
    children : ReactNode;
}


//Exportando a minha transationsContext para usar no componente transitions
export const TransationsContext = createContext({} as  TransationsContextType)


export function TransationsProvider({children}: TransationsProviderProps){
     //armazenando as informações da api para ser mostrado em tela
     const [transations, setTransations] = useState<Transations[]>([])//Nosso estado está armazenando uma lista de transations

     //Pegando a lista de transações atraveis da API
     //Método fetch do navegador para pegar os dados da api de modo assincrono
     async function loadTransations(){
         //armazenando os dados vindo da minha api na variavel response
         const response = await fetch('http://localhost:5000/transations');
         //convertendo os dados da api que está armazenado no response em json e guaradr na variavel data
         const data = await response.json()
         
             //armazenando os dados da api no meu useState
         setTransations(data)
        }
        
     useEffect(() => {
      
         loadTransations()
     }, [])//por causa do array de dependencia vazio, ele só executará uma vez
 

    return (
        <TransationsContext.Provider value={{transations}}>
                {children}
        </TransationsContext.Provider>
    )
}