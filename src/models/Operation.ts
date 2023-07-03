export interface Operation{
    // addDate: Date
    amount:Number
    category:String
    note:String
    type: 'Income' | 'Spending',
    addDate:Date
}


// Date
// Amount
// Category
// Note
// Type - Income, Spending