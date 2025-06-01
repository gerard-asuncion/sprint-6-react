import { SectionsContext } from "./SectionsContext"
import sectionsJson from "../data/sections.json" assert { type: "json" }
import type { Section, ProviderProps } from "../types/types"
import { useState } from "react"

const SectionsProvider = ({children}: ProviderProps) => {

    const [sections, setSections] = useState<Section[]>(() => JSON.parse(JSON.stringify(sectionsJson)))

  return (
    <SectionsContext.Provider value={{sections, setSections}}>
      {children}
    </SectionsContext.Provider>
  )
}

export default SectionsProvider
