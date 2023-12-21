import { ReactNode, createContext } from "react";
import { useEffect, useState } from 'react';
import { api } from "../lib/axios";


//tipando os dados da minha transação
interface Transations {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    category: 'string';
    createAt: string;
    price: number;
}

interface CreateTransationsInput {
    description: string,
    type: 'income' | 'outcome',
    category: string,
    price: number,
}


interface TransationsContextType {
    transations: Transations[];
    fetchTransations: (query?: string) => Promise<void>;
    createTransation: (data: CreateTransationsInput) => Promise<void>;
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
     async function fetchTransations(query?: string){ 

         const response = await api.get('/transations', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            }
         })  
         
             
         setTransations(response.data)
        }
        
        async function createTransation(data: CreateTransationsInput){
            const response =   await api.post('transations', {

                description: data.description
                ,
                type: data.type ,
                category: data.category,
                price: data.price,
                createAt: new Date()
            })

            setTransations(state => [response.data, ...state])
        }

     useEffect(() => {
      
         fetchTransations()
     }, [])//por causa do array de dependencia vazio, ele só executará uma vez
 

    return (
        <TransationsContext.Provider value={{transations, fetchTransations, createTransation}}>
                {children}
        </TransationsContext.Provider>
    )
}