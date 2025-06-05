import { BudgetsContext } from "./BudgetsContext"
import type { ProviderProps } from "../../types/types"
import { useEffect, useState } from "react"
import { Budget } from "../../classes/Budget"

const BudgetsProvider = ({children}: ProviderProps) => {

    const [budgets, setBudgets] = useState<Budget[]>(() => {
      const saved = localStorage.getItem('arrBudgets');
      if(saved){
        const parsed = JSON.parse(saved);
        return parsed.map((budget: any) => Budget.fromJSON(budget));
      }   
      if (!saved) return [];
    })

    useEffect(() => {
      localStorage.setItem('arrBudgets', JSON.stringify(budgets.map(budget => budget.toJSON())));
    }, [budgets])

  return (
    <BudgetsContext.Provider value={{budgets, setBudgets}}>
        {children}
    </BudgetsContext.Provider>
  )
}

export default BudgetsProvider
