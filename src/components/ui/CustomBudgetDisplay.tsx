import type { BudgetProps } from "../../types/types"
import { singPluralPagLang } from "../../utils/utils"

const CustomBudgetDisplay = ({budget}: BudgetProps) => {

    const displayName = budget.name
    const displayPhone = budget.phone
    const displayEmail = budget.email
    const displayTotal = budget.totalBudget

  return (
    <section className="flex flex-col items-around p-4 rounded-lg m-auto mt-5 shadow-md">
        <section className="flex justify-between items-center">
            <article className="w-60/100">
                <h2 className="text-lg font-bold">{displayName}</h2>
                <p className="text-neutral-600">{displayEmail}</p>
                <p className="text-neutral-600">{displayPhone}</p>
            </article>
            <article>
                <h3>Serveis contractats:</h3>
                <ul>
                    {budget.services.map((service: string, index: number) => 
                        <li key={index}>
                            {service === "Web" 
                            ? `${service} (${budget.pages} ${singPluralPagLang("pages", budget.pages!)}, 
                                ${budget.languages} ${singPluralPagLang("languages", budget.languages!)})`
                            : service}
                        </li>)}
                </ul>
                
            </article>
            <article className="text-xl font-bold w-20/100">
                {displayTotal}€
            </article>
        </section>
    </section>
  )
}

export default CustomBudgetDisplay
