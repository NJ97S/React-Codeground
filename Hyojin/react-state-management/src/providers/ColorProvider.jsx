import { useState } from "react"
import colorListData from '../data/colordata.json'
import { createContext } from 'react'

export const ColorContext = createContext();

export default function ColorProvider({children}) {
  const [colors, setColors] = useState(colorListData.colors)

  return (
    <ColorContext.Provider value={{colors, setColors}}>
    {children}
    </ColorContext.Provider>
  )
}
