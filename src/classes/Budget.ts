export class Budget {

    public _name: string;
    public _phone: number;
    public _email: string;
    public _budget: number;
    public _date: string;
    public id: number;

    static fromJSON(obj: any): Budget {
        return new Budget(obj.name, obj.phone, obj.email, obj.budget);
    }

    static date: string = new Date().toISOString();

    static counter = 0

    constructor(name: string, phone: number, email: string, totalBudget: number){
        this._name = name,
        this._phone = phone,
        this._email = email,
        this._budget = totalBudget,
        this._date = Budget.date
        Budget.counter++
        this.id = Budget.counter
    }

    toJSON() {
        return {
            name: this._name,
            phone: this._phone,
            email: this._email,
            budget: this._budget,
            date: this._date,
            id: this.id
        }
    }
    
}