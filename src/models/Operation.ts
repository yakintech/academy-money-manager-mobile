export interface Operation{
    addDate: Date
    amount:number
    category:string
    note:string
    type: 'Income' | 'Spending'
}


// Date
// Amount
// Category
// Note
// Type - Income, Spending