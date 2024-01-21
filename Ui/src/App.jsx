import React ,{createContext,useContext,useState}from 'react'
import { DataContext } from './Context/DataContex'
import Home from './components/Home/Home'

export default function App() {
  const [data,setData] = useState([]);
  return (
    <>
      <DataContext.Provider value={{data,setData}}>
      <Home/>
      </DataContext.Provider>
    </>
  )
}
