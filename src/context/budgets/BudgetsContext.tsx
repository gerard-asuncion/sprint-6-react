import { createContext } from "react"
import type { BudgetsContextType } from "../../types/types";

export const BudgetsContext = createContext<BudgetsContextType>({
    budgets: [],
    setBudgets: () => {}
});