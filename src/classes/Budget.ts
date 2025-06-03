export class Budget {

    #name: string;
    #phone: string;
    #email: string;
    #totalBudget: number;
    #services: string[];
    #pages: number | null;
    #languages: number | null;
    #date: Date;
    #id: number;

    static fromJSON(budget: any): Budget {
        return new Budget(budget.name, budget.phone, budget.email, budget.totalBudget, budget.services, budget.pages, budget.languages);
    }

    static date: Date = new Date();

    static counter: number = 0

    constructor(name: string, phone: string, email: string, totalBudget: number, services: string[], pages: number | null, languages: number | null){
        this.#name = name,
        this.#phone = phone,
        this.#email = email,
        this.#totalBudget = totalBudget,
        this.#services = services,
        this.#pages = pages,
        this.#languages = languages,
        this.#date = Budget.date
        Budget.counter++
        this.#id = Budget.counter
    }

    get name() { return this.#name }
    get phone() { return this.#phone }
    get email() { return this.#email }
    get totalBudget() { return this.#totalBudget }
    get services() { return this.#services }
    get pages() { return this.#pages }
    get languages() { return this.#languages }
    get date() { return this.#date }
    get id() { return this.#id }

    toJSON() {
        return {
            name: this.name,
            phone: this.phone,
            email: this.email,
            totalBudget: this.#totalBudget,
            services: this.#services,
            pages: this.#pages,
            languages: this.#languages,
            date: this.date,
            id: this.id
        }
    }
    
}