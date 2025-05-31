export class Budget {

    public name: string;
    public phone: number;
    public email: string;
    public budget: number;
    public date: string;
    public id: number;

    static fromJSON(obj: any): Budget {
        return new Budget(obj.name, obj.phone, obj.email, obj.budget);
    }

    static date: string = new Date().toISOString();

    static counter = 0

    constructor(name: string, phone: number, email: string, totalBudget: number){
        this.name = name,
        this.phone = phone,
        this.email = email,
        this.budget = totalBudget,
        this.date = Budget.date
        Budget.counter++
        this.id = Budget.counter
    }

    toJSON() {
        return {
            name: this.name,
            phone: this.phone,
            email: this.email,
            budget: this.budget,
            date: this.date,
            id: this.id
        }
    }
    
}