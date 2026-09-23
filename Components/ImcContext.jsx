import { createContext, useContext, useState } from "react"

const ImcContext = createContext()

export function ImcProvider({ children }) {
  const [imc, setImc] = useState(0)

  return (
    <ImcContext.Provider value={{ imc, setImc }}>
      {children}
    </ImcContext.Provider>
  )
}

export function useImc() {
  return useContext(ImcContext)
}