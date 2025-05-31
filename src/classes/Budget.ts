export class Budget {

    #name: string;
    #phone: number;
    #email: string;
    #totalBudget: number;
    #date: string;
    #id: number;

    static fromJSON(obj: any): Budget {
        return new Budget(obj.name, obj.phone, obj.email, obj.totalBudget);
    }

    static date: string = new Date().toISOString();

    static counter = 0

    constructor(name: string, phone: number, email: string, totalBudget: number){
        this.#name = name,
        this.#phone = phone,
        this.#email = email,
        this.#totalBudget = totalBudget,
        this.#date = Budget.date
        Budget.counter++
        this.#id = Budget.counter
    }

    get id() { return this.#id }
    get name() { return this.#name }
    get phone() { return this.#phone }
    get email() { return this.#email }
    get totalBudget() { return this.#totalBudget }
    get date() { return this.#date }

    toJSON() {
        return {
            name: this.name,
            phone: this.phone,
            email: this.email,
            totalBudget: this.#totalBudget,
            date: this.date,
            id: this.id
        }
    }
    
}