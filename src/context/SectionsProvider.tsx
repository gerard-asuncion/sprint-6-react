import { SectionsContext } from "./SectionsContext"
import sectionsJson from "../data/sections.json" assert { type: "json" }
import type { Section, ProviderProps } from "../types/types"
import { useState } from "react"

const SectionsProvider = ({children}: ProviderProps) => {

    const [sections, setSections] = useState<Section[]>(() => JSON.parse(JSON.stringify(sectionsJson)))

    const [totalPages, setTotalPages] = useState<number>(1)
    const [totalLanguages, setTotalLanguages] = useState<number>(1)

  return (
    <SectionsContext.Provider value={{sections, setSections, totalPages, setTotalPages, totalLanguages, setTotalLanguages}}>
      {children}
    </SectionsContext.Provider>
  )
}

export default SectionsProvider
