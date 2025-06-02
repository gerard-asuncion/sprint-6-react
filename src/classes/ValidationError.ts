import type { ErrorsType } from "../types/types"

export class ValidationError extends Error {
    errors: ErrorsType[]
    constructor(message: string, errors: ErrorsType[]){
        super(message)
        this.name = "ValidationError"
        this.errors = errors
    }
}