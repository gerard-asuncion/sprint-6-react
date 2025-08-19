import type { BudgetProps } from "../../types/types"
import { singPluralPagLang } from "../../utils/utils"

const CustomBudgetDisplay = ({budget}: BudgetProps) => {

    const displayName = budget.name
    const displayPhone = budget.phone
    const displayEmail = budget.email
    const displayTotal = budget.totalBudget

  return (
    <section className="flex flex-col items-around p-4 md:p-5 rounded-lg m-auto mt-5 shadow-md bg-white">
        <section className="flex justify-between items-center">
            <article className="w-60/100">
                <h2 className="text-sm md:text-xl font-bold">{displayName}</h2>
                <p className="text-xs md:text-base text-neutral-600">{displayEmail}</p>
                <p className="text-xs md:text-base text-neutral-600">{displayPhone}</p>
            </article>
            <article>
                <h3 className="italic text-xs md:text-base">Serveis contractats:</h3>
                <ul>
                    {budget.services.map((service: string, index: number) => 
                        <li key={index} className="text-xs md:text-base">
                            {service === "Web" 
                            ? `${service} (${budget.pages} ${singPluralPagLang("pages", budget.pages!)}, 
                                ${budget.languages} ${singPluralPagLang("languages", budget.languages!)})`
                            : service}
                        </li>)}
                </ul>
                
            </article>
            <article className="text-md md:text-3xl font-bold w-20/100 md:w-10/100">
                {displayTotal}€
            </article>
        </section>
    </section>
  )
}

export default CustomBudgetDisplay
